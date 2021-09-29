import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";
import { CancelTaskInput, CancelTaskOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CancelTaskCommand,
  serializeAws_restJson1CancelTaskCommand,
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

export interface CancelTaskCommandInput extends CancelTaskInput {}
export interface CancelTaskCommandOutput extends CancelTaskOutput, __MetadataBearer {}

/**
 * <p>Sends a cancel request for a specified task. You can cancel a task only if it's still in a
 *         <code>QUEUED</code> state. Tasks that are already running can't be cancelled.</p>
 *          <note>
 *             <p>A task might still run if it's processed from the queue before the
 *           <code>CancelTask</code> operation changes the task's state.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, CancelTaskCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, CancelTaskCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const command = new CancelTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelTaskCommandInput} for command's `input` shape.
 * @see {@link CancelTaskCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CancelTaskCommand extends $Command<
  CancelTaskCommandInput,
  CancelTaskCommandOutput,
  SnowDeviceManagementClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowDeviceManagementClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelTaskCommandInput, CancelTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowDeviceManagementClient";
    const commandName = "CancelTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelTaskInput.filterSensitiveLog,
      outputFilterSensitiveLog: CancelTaskOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelTaskCommandOutput> {
    return deserializeAws_restJson1CancelTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
