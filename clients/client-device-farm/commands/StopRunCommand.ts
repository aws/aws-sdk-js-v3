import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { StopRunRequest, StopRunResult } from "../models/models_0";
import { deserializeAws_json1_1StopRunCommand, serializeAws_json1_1StopRunCommand } from "../protocols/Aws_json1_1";
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

export type StopRunCommandInput = StopRunRequest;
export type StopRunCommandOutput = StopRunResult & __MetadataBearer;

/**
 * <p>Initiates a stop request for the current test run. AWS Device Farm immediately stops the run on devices
 *             where tests have not started. You are not billed for these devices. On devices where tests have started
 *             executing, setup suite and teardown suite tests run to completion on those devices. You are billed for
 *             setup, teardown, and any tests that were in progress or already completed.</p>
 */
export class StopRunCommand extends $Command<
  StopRunCommandInput,
  StopRunCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopRunCommandInput, StopRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "StopRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopRunResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopRunCommandOutput> {
    return deserializeAws_json1_1StopRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
