import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { FailoverGlobalClusterMessage, FailoverGlobalClusterResult } from "../models/models_1";
import {
  deserializeAws_queryFailoverGlobalClusterCommand,
  serializeAws_queryFailoverGlobalClusterCommand,
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

export interface FailoverGlobalClusterCommandInput extends FailoverGlobalClusterMessage {}
export interface FailoverGlobalClusterCommandOutput extends FailoverGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Initiates the failover process for an Aurora global database (<a>GlobalCluster</a>).</p>
 *          <p>A failover for an Aurora global database promotes one of secondary read-only DB clusters to be
 *        the primary DB cluster and demotes the primary DB cluster to being a secondary (read-only) DB cluster. In other words,
 *      the role of the current primary DB cluster and the selected (target) DB cluster are switched. The selected
 *      secondary DB cluster assumes full read/write capabilities for the Aurora global database.</p>
 *          <p>For more information about failing over an Amazon Aurora global database, see
 *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Managed planned failover for Amazon Aurora global
 *         databases</a> in the <i>Amazon Aurora User Guide.</i>
 *          </p>
 *          <note>
 *             <p>This action applies to <a>GlobalCluster</a> (Aurora global databases) only. Use this action only on
 *        healthy Aurora global databases with running Aurora DB clusters and no Region-wide outages, to test disaster recovery scenarios or to
 *         reconfigure your Aurora global database topology.
 *        </p>
 *          </note>
 */
export class FailoverGlobalClusterCommand extends $Command<
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FailoverGlobalClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FailoverGlobalClusterCommandInput, FailoverGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "FailoverGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FailoverGlobalClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: FailoverGlobalClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FailoverGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryFailoverGlobalClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverGlobalClusterCommandOutput> {
    return deserializeAws_queryFailoverGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
