import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RebootClusterMessage, RebootClusterResult } from "../models/models_1";
import {
  deserializeAws_queryRebootClusterCommand,
  serializeAws_queryRebootClusterCommand,
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

export type RebootClusterCommandInput = RebootClusterMessage;
export type RebootClusterCommandOutput = RebootClusterResult & __MetadataBearer;

/**
 * <p>Reboots a cluster. This action is taken as soon as possible. It results in a
 *             momentary outage to the cluster, during which the cluster status is set to
 *                 <code>rebooting</code>. A cluster event is created when the reboot is completed. Any
 *             pending cluster modifications (see <a>ModifyCluster</a>) are applied at this
 *             reboot.
 * For more information about managing clusters, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html">Amazon Redshift Clusters</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export class RebootClusterCommand extends $Command<
  RebootClusterCommandInput,
  RebootClusterCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebootClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RebootClusterCommandInput, RebootClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RebootClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RebootClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRebootClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootClusterCommandOutput> {
    return deserializeAws_queryRebootClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
