import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { StopDataSourceSyncJobRequest } from "../models/models_0";
import {
  deserializeAws_json1_1StopDataSourceSyncJobCommand,
  serializeAws_json1_1StopDataSourceSyncJobCommand,
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

export type StopDataSourceSyncJobCommandInput = StopDataSourceSyncJobRequest;
export type StopDataSourceSyncJobCommandOutput = __MetadataBearer;

/**
 * <p>Stops a running synchronization job. You can't stop a scheduled synchronization
 *       job.</p>
 */
export class StopDataSourceSyncJobCommand extends $Command<
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
  KendraClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopDataSourceSyncJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopDataSourceSyncJobCommandInput, StopDataSourceSyncJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "StopDataSourceSyncJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDataSourceSyncJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopDataSourceSyncJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopDataSourceSyncJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopDataSourceSyncJobCommandOutput> {
    return deserializeAws_json1_1StopDataSourceSyncJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
