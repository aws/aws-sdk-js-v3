// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  CacheClusterMessage,
  CacheClusterMessageFilterSensitiveLog,
  DescribeCacheClustersMessage,
  DescribeCacheClustersMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeCacheClustersCommand,
  serializeAws_queryDescribeCacheClustersCommand,
} from "../protocols/Aws_query";

export interface DescribeCacheClustersCommandInput extends DescribeCacheClustersMessage {}
export interface DescribeCacheClustersCommandOutput extends CacheClusterMessage, __MetadataBearer {}

/**
 * <p>Returns information about all provisioned
 *             clusters if no cluster identifier is specified, or about a specific cache
 *             cluster if a cluster identifier is supplied.</p>
 *          <p>By default, abbreviated information about the clusters is returned. You can
 *             use the optional <i>ShowCacheNodeInfo</i> flag to retrieve detailed information about the
 *             cache nodes associated with the clusters. These details include the DNS address
 *             and port for the cache node endpoint.</p>
 *          <p>If the cluster is in the <i>creating</i> state, only cluster-level information is displayed
 *             until all of the nodes are successfully provisioned.</p>
 *          <p>If the cluster is in the <i>deleting</i> state, only cluster-level information is displayed.</p>
 *          <p>If cache nodes are currently being added to the cluster, node endpoint information
 *             and creation time for the additional nodes are not displayed until they are
 *             completely provisioned. When the cluster state is <i>available</i>, the cluster is
 *             ready for use.</p>
 *          <p>If cache nodes are currently being removed from the cluster, no endpoint information
 *             for the removed nodes is displayed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeCacheClustersCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeCacheClustersCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeCacheClustersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCacheClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheClustersCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class DescribeCacheClustersCommand extends $Command<
  DescribeCacheClustersCommandInput,
  DescribeCacheClustersCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCacheClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeCacheClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCacheClustersMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CacheClusterMessageFilterSensitiveLog,
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
