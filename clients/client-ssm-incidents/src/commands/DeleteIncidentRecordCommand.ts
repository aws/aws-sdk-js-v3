import { SSMIncidentsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMIncidentsClient";
import { DeleteIncidentRecordInput, DeleteIncidentRecordOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteIncidentRecordCommand,
  serializeAws_restJson1DeleteIncidentRecordCommand,
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

export interface DeleteIncidentRecordCommandInput extends DeleteIncidentRecordInput {}
export interface DeleteIncidentRecordCommandOutput extends DeleteIncidentRecordOutput, __MetadataBearer {}

/**
 * <p>Delete an incident record from Incident Manager. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * const client = new SSMIncidentsClient(config);
 * const command = new DeleteIncidentRecordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteIncidentRecordCommand extends $Command<
  DeleteIncidentRecordCommandInput,
  DeleteIncidentRecordCommandOutput,
  SSMIncidentsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteIncidentRecordCommandInput) {
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
  ): Handler<DeleteIncidentRecordCommandInput, DeleteIncidentRecordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMIncidentsClient";
    const commandName = "DeleteIncidentRecordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIncidentRecordInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteIncidentRecordOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIncidentRecordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteIncidentRecordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIncidentRecordCommandOutput> {
    return deserializeAws_restJson1DeleteIncidentRecordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
