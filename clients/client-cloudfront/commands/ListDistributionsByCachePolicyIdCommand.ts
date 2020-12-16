import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListDistributionsByCachePolicyIdRequest, ListDistributionsByCachePolicyIdResult } from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByCachePolicyIdCommand,
  serializeAws_restXmlListDistributionsByCachePolicyIdCommand,
} from "../protocols/Aws_restXml";
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

export type ListDistributionsByCachePolicyIdCommandInput = ListDistributionsByCachePolicyIdRequest;
export type ListDistributionsByCachePolicyIdCommandOutput = ListDistributionsByCachePolicyIdResult & __MetadataBearer;

/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that’s
 * 			associated with the specified cache policy.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 */
export class ListDistributionsByCachePolicyIdCommand extends $Command<
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDistributionsByCachePolicyIdCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDistributionsByCachePolicyIdCommandInput, ListDistributionsByCachePolicyIdCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListDistributionsByCachePolicyIdCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDistributionsByCachePolicyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByCachePolicyIdResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListDistributionsByCachePolicyIdCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlListDistributionsByCachePolicyIdCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDistributionsByCachePolicyIdCommandOutput> {
    return deserializeAws_restXmlListDistributionsByCachePolicyIdCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
