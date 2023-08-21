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
} from "@smithy/types";

import { ModifyGlobalClusterMessage, ModifyGlobalClusterResult } from "../models/models_1";
import { de_ModifyGlobalClusterCommand, se_ModifyGlobalClusterCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyGlobalClusterCommand}.
 */
export interface ModifyGlobalClusterCommandInput extends ModifyGlobalClusterMessage {}
/**
 * @public
 *
 * The output of {@link ModifyGlobalClusterCommand}.
 */
export interface ModifyGlobalClusterCommandOutput extends ModifyGlobalClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies a setting for an Amazon Aurora global database cluster. You can change one or more database configuration
 *         parameters by specifying these parameters and the new values in the request. For more information on
 *         Amazon Aurora, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"> What is Amazon Aurora?</a> in the
 *         <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This operation only applies to Aurora global database clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyGlobalClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyGlobalClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyGlobalClusterMessage
 *   GlobalClusterIdentifier: "STRING_VALUE",
 *   NewGlobalClusterIdentifier: "STRING_VALUE",
 *   DeletionProtection: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AllowMajorVersionUpgrade: true || false,
 * };
 * const command = new ModifyGlobalClusterCommand(input);
 * const response = await client.send(command);
 * // { // ModifyGlobalClusterResult
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
 * @param ModifyGlobalClusterCommandInput - {@link ModifyGlobalClusterCommandInput}
 * @returns {@link ModifyGlobalClusterCommandOutput}
 * @see {@link ModifyGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link GlobalClusterNotFoundFault} (client fault)
 *  <p>The <code>GlobalClusterIdentifier</code> doesn't refer to an existing global database cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link InvalidGlobalClusterStateFault} (client fault)
 *  <p>The global cluster is in an invalid state and can't perform the requested operation.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To modify a global database cluster
 * ```javascript
 * // The following example enables deletion protection for an Aurora MySQL-based global database cluster.
 * const input = {
 *   "DeletionProtection": true,
 *   "GlobalClusterIdentifier": "myglobalcluster"
 * };
 * const command = new ModifyGlobalClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GlobalCluster": {
 *     "DeletionProtection": true,
 *     "Engine": "aurora-mysql",
 *     "EngineVersion": "5.7.mysql_aurora.2.07.2",
 *     "GlobalClusterArn": "arn:aws:rds::123456789012:global-cluster:myglobalcluster",
 *     "GlobalClusterIdentifier": "myglobalcluster",
 *     "GlobalClusterMembers": [],
 *     "GlobalClusterResourceId": "cluster-f0e523bfe07aabb",
 *     "Status": "available",
 *     "StorageEncrypted": false
 *   }
 * }
 * *\/
 * // example id: to-modify-a-global-database-cluster-1680385137511
 * ```
 *
 */
export class ModifyGlobalClusterCommand extends $Command<
  ModifyGlobalClusterCommandInput,
  ModifyGlobalClusterCommandOutput,
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
  constructor(readonly input: ModifyGlobalClusterCommandInput) {
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
  ): Handler<ModifyGlobalClusterCommandInput, ModifyGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyGlobalClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ModifyGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyGlobalClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyGlobalClusterCommandOutput> {
    return de_ModifyGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
