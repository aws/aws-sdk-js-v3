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
import { DeleteVerifiedAccessGroupRequest, DeleteVerifiedAccessGroupResult } from "../models/models_3";
import {
  deserializeAws_ec2DeleteVerifiedAccessGroupCommand,
  serializeAws_ec2DeleteVerifiedAccessGroupCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DeleteVerifiedAccessGroupCommand}.
 */
export interface DeleteVerifiedAccessGroupCommandInput extends DeleteVerifiedAccessGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedAccessGroupCommand}.
 */
export interface DeleteVerifiedAccessGroupCommandOutput extends DeleteVerifiedAccessGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Delete an Amazon Web Services Verified Access group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVerifiedAccessGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVerifiedAccessGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVerifiedAccessGroupRequest
 *   VerifiedAccessGroupId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DeleteVerifiedAccessGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteVerifiedAccessGroupCommandInput - {@link DeleteVerifiedAccessGroupCommandInput}
 * @returns {@link DeleteVerifiedAccessGroupCommandOutput}
 * @see {@link DeleteVerifiedAccessGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedAccessGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 */
export class DeleteVerifiedAccessGroupCommand extends $Command<
  DeleteVerifiedAccessGroupCommandInput,
  DeleteVerifiedAccessGroupCommandOutput,
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
  constructor(readonly input: DeleteVerifiedAccessGroupCommandInput) {
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
  ): Handler<DeleteVerifiedAccessGroupCommandInput, DeleteVerifiedAccessGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVerifiedAccessGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVerifiedAccessGroupCommand";
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
  private serialize(input: DeleteVerifiedAccessGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVerifiedAccessGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVerifiedAccessGroupCommandOutput> {
    return deserializeAws_ec2DeleteVerifiedAccessGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
