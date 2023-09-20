// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { FailoverGlobalClusterMessage, FailoverGlobalClusterResult } from "../models/models_1";
import { de_FailoverGlobalClusterCommand, se_FailoverGlobalClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link FailoverGlobalClusterCommand}.
 */
export interface FailoverGlobalClusterCommandInput extends FailoverGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link FailoverGlobalClusterCommand}.
 */
export interface FailoverGlobalClusterCommandOutput extends FailoverGlobalClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Promotes the specified secondary DB cluster to be the primary DB cluster in the global database cluster to fail over or switch over a global database. Switchover operations were previously called "managed planned failovers."</p>
 *          <note>
 *             <p>Although this operation can be used either to fail over or to switch over a global database cluster, its intended use is for global database failover.
 *         To switch over a global database cluster, we recommend that you use the <a>SwitchoverGlobalCluster</a> operation instead.</p>
 *          </note>
 *          <p>How you use this operation depends on whether you are failing over or switching over your global database cluster:</p>
 *          <ul>
 *             <li>
 *                <p>Failing over - Specify the <code>AllowDataLoss</code> parameter and don't specify the <code>Switchover</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>Switching over - Specify the <code>Switchover</code> parameter or omit it, but don't specify the <code>AllowDataLoss</code> parameter.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>About failing over and switching over</b>
 *          </p>
 *          <p>While failing over and switching over a global database cluster both change the primary DB cluster, you use these operations for different reasons:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Failing over</i> - Use this operation to respond to an unplanned event, such as a Regional disaster in the primary Region.
 *             Failing over can result in a loss of write transaction data that wasn't replicated to the chosen secondary before the failover event occurred.
 *             However, the recovery process that promotes a DB instance on the chosen seconday DB cluster to be the primary writer DB instance guarantees
 *             that the data is in a transactionally consistent state.</p>
 *                <p>For more information about failing over an Amazon Aurora global database, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-failover.managed-unplanned">Performing managed failovers for Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Switching over</i> - Use this operation on a healthy global database cluster for planned events, such as Regional rotation or to
 *             fail back to the original primary DB cluster after a failover operation. With this operation, there is no data loss.</p>
 *                <p>For more information about switching over an Amazon Aurora global database, see
 *            <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html#aurora-global-database-disaster-recovery.managed-failover">Performing switchovers for Aurora global databases</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, FailoverGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, FailoverGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // FailoverGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE", // required
 *   TargetDbClusterIdentifier: "STRING_VALUE", // required
 *   AllowDataLoss: true || false,
 *   Switchover: true || false,
 * };
 * const command = new FailoverGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // FailoverGlobalClusterResult
 * //   GlobalCluster: { // GlobalCluster
 * //     GlobalClusterIdentifier: "STRING_VALUE",
 * //     GlobalClusterResourceId: "STRING_VALUE",
 * //     GlobalClusterArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     DeletionProtection: true || false,
 * //     GlobalClusterMembers: [ // GlobalClusterMemberList
 * //       { // GlobalClusterMember
 * //         DBClusterArn: "STRING_VALUE",
 * //         Readers: [ // ReadersArnList
 * //           "STRING_VALUE",
 * //         ],
 * //         IsWriter: true || false,
 * //         GlobalWriteForwardingStatus: "enabled" || "disabled" || "enabling" || "disabling" || "unknown",
 * //         SynchronizationStatus: "connected" || "pending-resync",
 * //       },
 * //     ],
 * //     FailoverState: { // FailoverState
 * //       Status: "pending" || "failing-over" || "cancelling",
 * //       FromDbClusterArn: "STRING_VALUE",
 * //       ToDbClusterArn: "STRING_VALUE",
 * //       IsDataLossAllowed: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param FailoverGlobalClusterCommandInput - {@link FailoverGlobalClusterCommandInput}
 * @returns {@link FailoverGlobalClusterCommandOutput}
 * @see {@link FailoverGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class FailoverGlobalClusterCommand extends $Command<
  FailoverGlobalClusterCommandInput,
  FailoverGlobalClusterCommandOutput,
  RDSClientResolvedConfig
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, FailoverGlobalClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "FailoverGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "FailoverGlobalCluster",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: FailoverGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_FailoverGlobalClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverGlobalClusterCommandOutput> {
    return de_FailoverGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
