import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { StartDataCollectionByAgentIdsRequest, StartDataCollectionByAgentIdsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartDataCollectionByAgentIdsCommand,
  serializeAws_json1_1StartDataCollectionByAgentIdsCommand,
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

export type StartDataCollectionByAgentIdsCommandInput = StartDataCollectionByAgentIdsRequest;
export type StartDataCollectionByAgentIdsCommandOutput = StartDataCollectionByAgentIdsResponse & __MetadataBearer;

/**
 * <p>Instructs the specified agents or connectors to start collecting data.</p>
 */
export class StartDataCollectionByAgentIdsCommand extends $Command<
  StartDataCollectionByAgentIdsCommandInput,
  StartDataCollectionByAgentIdsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDataCollectionByAgentIdsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDataCollectionByAgentIdsCommandInput, StartDataCollectionByAgentIdsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StartDataCollectionByAgentIdsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDataCollectionByAgentIdsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDataCollectionByAgentIdsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDataCollectionByAgentIdsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDataCollectionByAgentIdsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDataCollectionByAgentIdsCommandOutput> {
    return deserializeAws_json1_1StartDataCollectionByAgentIdsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
