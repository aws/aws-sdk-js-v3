import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListGatewayGroupsRequest, ListGatewayGroupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListGatewayGroupsCommand,
  serializeAws_json1_1ListGatewayGroupsCommand,
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

export type ListGatewayGroupsCommandInput = ListGatewayGroupsRequest;
export type ListGatewayGroupsCommandOutput = ListGatewayGroupsResponse & __MetadataBearer;

/**
 * <p>Retrieves a list of gateway group summaries. Use GetGatewayGroup to retrieve details of
 *          a specific gateway group.</p>
 */
export class ListGatewayGroupsCommand extends $Command<
  ListGatewayGroupsCommandInput,
  ListGatewayGroupsCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGatewayGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListGatewayGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGatewayGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListGatewayGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGatewayGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGatewayGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGatewayGroupsCommandOutput> {
    return deserializeAws_json1_1ListGatewayGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
