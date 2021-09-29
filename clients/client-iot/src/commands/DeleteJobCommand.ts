import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteJobRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteJobCommand,
  serializeAws_restJson1DeleteJobCommand,
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

export interface DeleteJobCommandInput extends DeleteJobRequest {}
export interface DeleteJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a job and its related job executions.</p>
 *          <p>Deleting a job may take time, depending on the number of job
 *         executions created for the job and various other factors. While the job
 *         is being deleted, the status of the job will be shown as
 *         "DELETION_IN_PROGRESS". Attempting to delete or cancel a job whose status
 *         is already "DELETION_IN_PROGRESS" will result in an error.</p>
 *          <p>Only 10 jobs may have status "DELETION_IN_PROGRESS" at the same time, or
 *         a LimitExceededException will occur.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteJob</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobCommandInput} for command's `input` shape.
 * @see {@link DeleteJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteJobCommand extends $Command<DeleteJobCommandInput, DeleteJobCommandOutput, IoTClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteJobCommandInput, DeleteJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteJobCommandOutput> {
    return deserializeAws_restJson1DeleteJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
