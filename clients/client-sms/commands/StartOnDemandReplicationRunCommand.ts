import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StartOnDemandReplicationRunRequest, StartOnDemandReplicationRunResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartOnDemandReplicationRunCommand,
  serializeAws_json1_1StartOnDemandReplicationRunCommand,
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

export type StartOnDemandReplicationRunCommandInput = StartOnDemandReplicationRunRequest;
export type StartOnDemandReplicationRunCommandOutput = StartOnDemandReplicationRunResponse & __MetadataBearer;

/**
 * <p>Starts an on-demand replication run for the specified replication job. This
 *             replication run starts immediately. This replication run is in addition to the ones
 *             already scheduled.</p>
 *         <p>There is a limit on the number of on-demand replications runs that you can request
 *             in a 24-hour period.</p>
 */
export class StartOnDemandReplicationRunCommand extends $Command<
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartOnDemandReplicationRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartOnDemandReplicationRunCommandInput, StartOnDemandReplicationRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "StartOnDemandReplicationRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartOnDemandReplicationRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartOnDemandReplicationRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartOnDemandReplicationRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartOnDemandReplicationRunCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOnDemandReplicationRunCommandOutput> {
    return deserializeAws_json1_1StartOnDemandReplicationRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
