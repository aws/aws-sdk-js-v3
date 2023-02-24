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
import {
  DeleteVerifiedAccessEndpointRequest,
  DeleteVerifiedAccessEndpointRequestFilterSensitiveLog,
  DeleteVerifiedAccessEndpointResult,
  DeleteVerifiedAccessEndpointResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DeleteVerifiedAccessEndpointCommand,
  serializeAws_ec2DeleteVerifiedAccessEndpointCommand,
} from "../protocols/Aws_ec2";

export interface DeleteVerifiedAccessEndpointCommandInput extends DeleteVerifiedAccessEndpointRequest {}
export interface DeleteVerifiedAccessEndpointCommandOutput
  extends DeleteVerifiedAccessEndpointResult,
    __MetadataBearer {}

/**
 * <p>Delete an Amazon Web Services Verified Access endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVerifiedAccessEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVerifiedAccessEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVerifiedAccessEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVerifiedAccessEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedAccessEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteVerifiedAccessEndpointCommand extends $Command<
  DeleteVerifiedAccessEndpointCommandInput,
  DeleteVerifiedAccessEndpointCommandOutput,
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

  constructor(readonly input: DeleteVerifiedAccessEndpointCommandInput) {
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
  ): Handler<DeleteVerifiedAccessEndpointCommandInput, DeleteVerifiedAccessEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVerifiedAccessEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVerifiedAccessEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVerifiedAccessEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVerifiedAccessEndpointResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVerifiedAccessEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVerifiedAccessEndpointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVerifiedAccessEndpointCommandOutput> {
    return deserializeAws_ec2DeleteVerifiedAccessEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
