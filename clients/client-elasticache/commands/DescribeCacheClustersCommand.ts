import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheClusterMessage, DescribeCacheClustersMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeCacheClustersCommand,
  serializeAws_queryDescribeCacheClustersCommand,
} from "../protocols/Aws_query";
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

export type DescribeCacheClustersCommandInput = DescribeCacheClustersMessage;
export type DescribeCacheClustersCommandOutput = CacheClusterMessage & __MetadataBearer;

/**
 * <p>Returns information about all provisioned
 *             clusters if no cluster identifier is specified, or about a specific cache
 *             cluster if a cluster identifier is supplied.</p>
 *         <p>By default, abbreviated information about the clusters is returned. You can
 *             use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the
 *             cache nodes associated with the clusters. These details include the DNS address
 *             and port for the cache node endpoint.</p>
 *         <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed
 *             until all of the nodes are successfully provisioned.</p>
 *         <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p>
 *         <p>If cache nodes are currently being added to the cluster, node endpoint information
 *             and creation time for the additional nodes are not displayed until they are
 *             completely provisioned. When the cluster state is <i>available</i>, the cluster is
 *             ready for use.</p>
 *         <p>If cache nodes are currently being removed from the cluster, no endpoint information
 *             for the removed nodes is displayed.</p>
 */
export class DescribeCacheClustersCommand extends $Command<
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCacheClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCacheClustersCommandInput, DescribeCacheClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeCacheClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCacheClustersMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CacheClusterMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCacheClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeCacheClustersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCacheClustersCommandOutput> {
    return deserializeAws_queryDescribeCacheClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
