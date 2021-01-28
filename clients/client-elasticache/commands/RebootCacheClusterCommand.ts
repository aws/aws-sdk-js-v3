import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { RebootCacheClusterMessage, RebootCacheClusterResult } from "../models/models_0";
import {
  deserializeAws_queryRebootCacheClusterCommand,
  serializeAws_queryRebootCacheClusterCommand,
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

export type RebootCacheClusterCommandInput = RebootCacheClusterMessage;
export type RebootCacheClusterCommandOutput = RebootCacheClusterResult & __MetadataBearer;

/**
 * <p>Reboots some, or all, of the cache nodes
 *             within a provisioned cluster. This operation applies any modified cache parameter
 *             groups to the cluster. The reboot operation takes place as soon as possible, and
 *             results in a momentary outage to the cluster. During the reboot, the cluster
 *             status is set to REBOOTING.</p>
 *         <p>The reboot causes the contents of the cache (for each cache node being rebooted) to be lost.</p>
 *         <p>When the reboot is complete, a cluster event is created.</p>
 *
 *         <p>Rebooting a cluster is currently supported on Memcached and Redis (cluster mode disabled) clusters.
 *             Rebooting is not supported on Redis (cluster mode enabled) clusters.</p>
 *
 *         <p>If you make changes to parameters that require a Redis (cluster mode enabled) cluster reboot for the changes to be applied,
 *             see <a href="http://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/Clusters.Rebooting.html">Rebooting a Cluster</a> for an alternate process.</p>
 */
export class RebootCacheClusterCommand extends $Command<
  RebootCacheClusterCommandInput,
  RebootCacheClusterCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebootCacheClusterCommandInput) {
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
  ): Handler<RebootCacheClusterCommandInput, RebootCacheClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "RebootCacheClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootCacheClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RebootCacheClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRebootCacheClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootCacheClusterCommandOutput> {
    return deserializeAws_queryRebootCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
