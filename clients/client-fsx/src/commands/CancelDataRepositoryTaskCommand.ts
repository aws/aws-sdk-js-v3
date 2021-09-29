import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CancelDataRepositoryTaskRequest, CancelDataRepositoryTaskResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CancelDataRepositoryTaskCommand,
  serializeAws_json1_1CancelDataRepositoryTaskCommand,
} from "../protocols/Aws_json1_1";
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

export interface CancelDataRepositoryTaskCommandInput extends CancelDataRepositoryTaskRequest {}
export interface CancelDataRepositoryTaskCommandOutput extends CancelDataRepositoryTaskResponse, __MetadataBearer {}

/**
 * <p>Cancels an existing Amazon FSx for Lustre data repository task if that task is in either the
 *             <code>PENDING</code> or <code>EXECUTING</code> state. When you cancel a task, Amazon FSx does the following.</p>
 *             <ul>
 *             <li>
 *                <p>Any files that FSx has already exported are not reverted.</p>
 *             </li>
 *             <li>
 *                <p>FSx continues to export any files that are "in-flight" when the cancel operation is received.</p>
 *             </li>
 *             <li>
 *                <p>FSx does not export any files that have not yet been exported.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CancelDataRepositoryTaskCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CancelDataRepositoryTaskCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CancelDataRepositoryTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelDataRepositoryTaskCommandInput} for command's `input` shape.
 * @see {@link CancelDataRepositoryTaskCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelDataRepositoryTaskCommand extends $Command<
  CancelDataRepositoryTaskCommandInput,
  CancelDataRepositoryTaskCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelDataRepositoryTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelDataRepositoryTaskCommandInput, CancelDataRepositoryTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CancelDataRepositoryTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelDataRepositoryTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelDataRepositoryTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelDataRepositoryTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelDataRepositoryTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelDataRepositoryTaskCommandOutput> {
    return deserializeAws_json1_1CancelDataRepositoryTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
