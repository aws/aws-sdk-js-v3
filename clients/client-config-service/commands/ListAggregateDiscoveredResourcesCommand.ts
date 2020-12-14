import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { ListAggregateDiscoveredResourcesRequest, ListAggregateDiscoveredResourcesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand,
  serializeAws_json1_1ListAggregateDiscoveredResourcesCommand,
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

export type ListAggregateDiscoveredResourcesCommandInput = ListAggregateDiscoveredResourcesRequest;
export type ListAggregateDiscoveredResourcesCommandOutput = ListAggregateDiscoveredResourcesResponse & __MetadataBearer;

/**
 * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions.
 * 			A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region.
 * 			You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p>
 * 			      <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
 */
export class ListAggregateDiscoveredResourcesCommand extends $Command<
  ListAggregateDiscoveredResourcesCommandInput,
  ListAggregateDiscoveredResourcesCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAggregateDiscoveredResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAggregateDiscoveredResourcesCommandInput, ListAggregateDiscoveredResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "ListAggregateDiscoveredResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAggregateDiscoveredResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAggregateDiscoveredResourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAggregateDiscoveredResourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAggregateDiscoveredResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAggregateDiscoveredResourcesCommandOutput> {
    return deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
