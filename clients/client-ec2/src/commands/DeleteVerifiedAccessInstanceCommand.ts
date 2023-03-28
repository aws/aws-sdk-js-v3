// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteVerifiedAccessInstanceRequest, DeleteVerifiedAccessInstanceResult } from "../models/models_3";
import {
  deserializeAws_ec2DeleteVerifiedAccessInstanceCommand,
  serializeAws_ec2DeleteVerifiedAccessInstanceCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteVerifiedAccessInstanceCommand}.
 */
export interface DeleteVerifiedAccessInstanceCommandInput extends DeleteVerifiedAccessInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedAccessInstanceCommand}.
 */
export interface DeleteVerifiedAccessInstanceCommandOutput
  extends DeleteVerifiedAccessInstanceResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Delete an Amazon Web Services Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVerifiedAccessInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVerifiedAccessInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVerifiedAccessInstanceRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteVerifiedAccessInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteVerifiedAccessInstanceCommandInput - {@link DeleteVerifiedAccessInstanceCommandInput}
 * @returns {@link DeleteVerifiedAccessInstanceCommandOutput}
 * @see {@link DeleteVerifiedAccessInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedAccessInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DeleteVerifiedAccessInstanceCommand extends $Command<
  DeleteVerifiedAccessInstanceCommandInput,
  DeleteVerifiedAccessInstanceCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DeleteVerifiedAccessInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVerifiedAccessInstanceCommandInput, DeleteVerifiedAccessInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVerifiedAccessInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVerifiedAccessInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteVerifiedAccessInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVerifiedAccessInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVerifiedAccessInstanceCommandOutput> {
    return deserializeAws_ec2DeleteVerifiedAccessInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
