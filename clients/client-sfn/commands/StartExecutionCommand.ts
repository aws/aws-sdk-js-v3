import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { StartExecutionInput, StartExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_0StartExecutionCommand,
  serializeAws_json1_0StartExecutionCommand,
} from "../protocols/Aws_json1_0";
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

export type StartExecutionCommandInput = StartExecutionInput;
export type StartExecutionCommandOutput = StartExecutionOutput & __MetadataBearer;

/**
 * <p>Starts a state machine execution.</p>
 *          <note>
 *             <p>
 *                <code>StartExecution</code> is idempotent. If <code>StartExecution</code> is called with
 *         the same name and input as a running execution, the call will succeed and return the same
 *         response as the original request. If the execution is closed or if the input is different,
 *         it will return a 400 <code>ExecutionAlreadyExists</code> error. Names can be reused after 90
 *         days. </p>
 *          </note>
 */
export class StartExecutionCommand extends $Command<
  StartExecutionCommandInput,
  StartExecutionCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartExecutionCommandInput, StartExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "StartExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExecutionCommandOutput> {
    return deserializeAws_json1_0StartExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
