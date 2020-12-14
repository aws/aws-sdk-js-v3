import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { StartOnDemandAppReplicationRequest, StartOnDemandAppReplicationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartOnDemandAppReplicationCommand,
  serializeAws_json1_1StartOnDemandAppReplicationCommand,
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

export type StartOnDemandAppReplicationCommandInput = StartOnDemandAppReplicationRequest;
export type StartOnDemandAppReplicationCommandOutput = StartOnDemandAppReplicationResponse & __MetadataBearer;

/**
 * <p>Starts an on-demand replication run for the specified application.</p>
 */
export class StartOnDemandAppReplicationCommand extends $Command<
  StartOnDemandAppReplicationCommandInput,
  StartOnDemandAppReplicationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartOnDemandAppReplicationCommandInput) {
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
  ): Handler<StartOnDemandAppReplicationCommandInput, StartOnDemandAppReplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "StartOnDemandAppReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartOnDemandAppReplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartOnDemandAppReplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartOnDemandAppReplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartOnDemandAppReplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOnDemandAppReplicationCommandOutput> {
    return deserializeAws_json1_1StartOnDemandAppReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
