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

import {
  RestoreFromClusterSnapshotMessage,
  RestoreFromClusterSnapshotMessageFilterSensitiveLog,
  RestoreFromClusterSnapshotResult,
  RestoreFromClusterSnapshotResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRestoreFromClusterSnapshotCommand,
  serializeAws_queryRestoreFromClusterSnapshotCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 *
 * The input for {@link RestoreFromClusterSnapshotCommand}.
 */
export interface RestoreFromClusterSnapshotCommandInput extends RestoreFromClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link RestoreFromClusterSnapshotCommand}.
 */
export interface RestoreFromClusterSnapshotCommandOutput extends RestoreFromClusterSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new cluster from a snapshot. By default, Amazon Redshift creates the resulting
 *             cluster with the same configuration as the original cluster from which the snapshot was
 *             created, except that the new cluster is created with the default cluster security and
 *             parameter groups. After Amazon Redshift creates the cluster, you can use the <a>ModifyCluster</a> API to associate a different security group and different
 *             parameter group with the restored cluster. If you are using a DS node type, you can also
 *             choose to change to another DS node type of the same size during restore.</p>
 *          <p>If you restore a cluster into a VPC, you must provide a cluster subnet group where
 *             you want the cluster restored.</p>
 *          <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RestoreFromClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RestoreFromClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RestoreFromClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RestoreFromClusterSnapshotCommandInput - {@link RestoreFromClusterSnapshotCommandInput}
 * @returns {@link RestoreFromClusterSnapshotCommandOutput}
 * @see {@link RestoreFromClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AccessToSnapshotDeniedFault} (client fault)
 *  <p>The owner of the specified snapshot has not authorized your account to access the
 *             snapshot.</p>
 *
 * @throws {@link ClusterAlreadyExistsFault} (client fault)
 *  <p>The account already has a cluster with the given identifier.</p>
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *  <p>The parameter group name does not refer to an existing parameter group.</p>
 *
 * @throws {@link ClusterQuotaExceededFault} (client fault)
 *  <p>The request would exceed the allowed number of cluster instances for this account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link ClusterSecurityGroupNotFoundFault} (client fault)
 *  <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *  <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *  <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link HsmClientCertificateNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 *
 * @throws {@link HsmConfigurationNotFoundFault} (client fault)
 *  <p>There is no Amazon Redshift HSM configuration with the specified identifier.</p>
 *
 * @throws {@link InsufficientClusterCapacityFault} (client fault)
 *  <p>The number of nodes specified exceeds the allotted capacity of the
 *             cluster.</p>
 *
 * @throws {@link InvalidClusterSnapshotStateFault} (client fault)
 *  <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 *
 * @throws {@link InvalidClusterSubnetGroupStateFault} (client fault)
 *  <p>The cluster subnet group cannot be deleted because it is in use.</p>
 *
 * @throws {@link InvalidClusterTrackFault} (client fault)
 *  <p>The provided cluster track name is not valid.</p>
 *
 * @throws {@link InvalidElasticIpFault} (client fault)
 *  <p>The Elastic IP (EIP) is invalid or cannot be found.</p>
 *
 * @throws {@link InvalidReservedNodeStateFault} (client fault)
 *  <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 *
 * @throws {@link InvalidRestoreFault} (client fault)
 *  <p>The restore is invalid.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is not valid, or not all of the subnets are in the same
 *             VPC.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link InvalidVPCNetworkStateFault} (client fault)
 *  <p>The cluster subnet group does not cover all Availability Zones.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>The encryption key has exceeded its grant limit in Amazon Web Services KMS.</p>
 *
 * @throws {@link NumberOfNodesPerClusterLimitExceededFault} (client fault)
 *  <p>The operation would exceed the number of nodes allowed for a cluster.</p>
 *
 * @throws {@link NumberOfNodesQuotaExceededFault} (client fault)
 *  <p>The operation would exceed the number of nodes allotted to the account.
 *
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link ReservedNodeAlreadyExistsFault} (client fault)
 *  <p>User already has a reservation with the given identifier.</p>
 *
 * @throws {@link ReservedNodeAlreadyMigratedFault} (client fault)
 *  <p>Indicates that the reserved node has already been exchanged.</p>
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *  <p>The specified reserved compute node not found.</p>
 *
 * @throws {@link ReservedNodeOfferingNotFoundFault} (client fault)
 *  <p>Specified offering does not exist.</p>
 *
 * @throws {@link SnapshotScheduleNotFoundFault} (client fault)
 *  <p>We could not find the specified snapshot schedule. </p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 *
 */
export class RestoreFromClusterSnapshotCommand extends $Command<
  RestoreFromClusterSnapshotCommandInput,
  RestoreFromClusterSnapshotCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: RestoreFromClusterSnapshotCommandInput) {
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
  ): Handler<RestoreFromClusterSnapshotCommandInput, RestoreFromClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreFromClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RestoreFromClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreFromClusterSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreFromClusterSnapshotResultFilterSensitiveLog,
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
  private serialize(input: RestoreFromClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreFromClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreFromClusterSnapshotCommandOutput> {
    return deserializeAws_queryRestoreFromClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
