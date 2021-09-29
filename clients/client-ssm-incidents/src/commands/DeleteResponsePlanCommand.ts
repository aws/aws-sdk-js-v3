import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { DeleteResponsePlanInput, DeleteResponsePlanOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteResponsePlanCommand,
  serializeAws_restJson1DeleteResponsePlanCommand,
} from "../protocols/Aws_restJson1";
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

export interface DeleteResponsePlanCommandInput extends DeleteResponsePlanInput {}
export interface DeleteResponsePlanCommandOutput extends DeleteResponsePlanOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified response plan. Deleting a response plan stops all linked
 *             CloudWatch alarms and EventBridge events from creating an incident with this response
 *             plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteResponsePlanCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteResponsePlanCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteResponsePlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResponsePlanCommandInput} for command's `input` shape.
 * @see {@link DeleteResponsePlanCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteResponsePlanCommand extends $Command<
  DeleteResponsePlanCommandInput,
  DeleteResponsePlanCommandOutput,
  SSMIncidentsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteResponsePlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMIncidentsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResponsePlanCommandInput, DeleteResponsePlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "DeleteResponsePlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResponsePlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteResponsePlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResponsePlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteResponsePlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResponsePlanCommandOutput> {
    return deserializeAws_restJson1DeleteResponsePlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
