import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNetworkInsightsPathRequest, DeleteNetworkInsightsPathResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteNetworkInsightsPathCommand,
  serializeAws_ec2DeleteNetworkInsightsPathCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteNetworkInsightsPathCommandInput extends DeleteNetworkInsightsPathRequest {}
export interface DeleteNetworkInsightsPathCommandOutput extends DeleteNetworkInsightsPathResult, __MetadataBearer {}

/**
 * <p>Deletes the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsPathCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsPathCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteNetworkInsightsPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNetworkInsightsPathCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsPathCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteNetworkInsightsPathCommand extends $Command<
  DeleteNetworkInsightsPathCommandInput,
  DeleteNetworkInsightsPathCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNetworkInsightsPathCommandInput) {
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
  ): Handler<DeleteNetworkInsightsPathCommandInput, DeleteNetworkInsightsPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNetworkInsightsPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNetworkInsightsPathRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNetworkInsightsPathResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNetworkInsightsPathCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteNetworkInsightsPathCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNetworkInsightsPathCommandOutput> {
    return deserializeAws_ec2DeleteNetworkInsightsPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
