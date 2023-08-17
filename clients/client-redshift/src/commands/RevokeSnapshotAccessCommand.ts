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

import { RevokeSnapshotAccessMessage, RevokeSnapshotAccessResult } from "../models/models_1";
import { de_RevokeSnapshotAccessCommand, se_RevokeSnapshotAccessCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeSnapshotAccessCommand}.
 */
export interface RevokeSnapshotAccessCommandInput extends RevokeSnapshotAccessMessage {}
/**
 * @public
 *
 * The output of {@link RevokeSnapshotAccessCommand}.
 */
export interface RevokeSnapshotAccessCommandOutput extends RevokeSnapshotAccessResult, __MetadataBearer {}

/**
 * @public
 * <p>Removes the ability of the specified  Amazon Web Services account to restore the specified
 *             snapshot. If the account is currently restoring the snapshot, the restore will run to
 *             completion.</p>
 *          <p>
 * For more information about working with snapshots, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html">Amazon Redshift Snapshots</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeSnapshotAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeSnapshotAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // RevokeSnapshotAccessMessage
 *   SnapshotIdentifier: "STRING_VALUE",
 *   SnapshotArn: "STRING_VALUE",
 *   SnapshotClusterIdentifier: "STRING_VALUE",
 *   AccountWithRestoreAccess: "STRING_VALUE", // required
 * };
 * const command = new RevokeSnapshotAccessCommand(input);
 * const response = await client.send(command);
 * // { // RevokeSnapshotAccessResult
 * //   Snapshot: { // Snapshot
 * //     SnapshotIdentifier: "STRING_VALUE",
 * //     ClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     ClusterVersion: "STRING_VALUE",
 * //     EngineFullVersion: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     NumberOfNodes: Number("int"),
 * //     DBName: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     Encrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     EncryptedWithHSM: true || false,
 * //     AccountsWithRestoreAccess: [ // AccountsWithRestoreAccessList
 * //       { // AccountWithRestoreAccess
 * //         AccountId: "STRING_VALUE",
 * //         AccountAlias: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OwnerAccount: "STRING_VALUE",
 * //     TotalBackupSizeInMegaBytes: Number("double"),
 * //     ActualIncrementalBackupSizeInMegaBytes: Number("double"),
 * //     BackupProgressInMegaBytes: Number("double"),
 * //     CurrentBackupRateInMegaBytesPerSecond: Number("double"),
 * //     EstimatedSecondsToCompletion: Number("long"),
 * //     ElapsedTimeInSeconds: Number("long"),
 * //     SourceRegion: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RestorableNodeTypes: [ // RestorableNodeTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     EnhancedVpcRouting: true || false,
 * //     MaintenanceTrackName: "STRING_VALUE",
 * //     ManualSnapshotRetentionPeriod: Number("int"),
 * //     ManualSnapshotRemainingDays: Number("int"),
 * //     SnapshotRetentionStartTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param RevokeSnapshotAccessCommandInput - {@link RevokeSnapshotAccessCommandInput}
 * @returns {@link RevokeSnapshotAccessCommandOutput}
 * @see {@link RevokeSnapshotAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeSnapshotAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AccessToSnapshotDeniedFault} (client fault)
 *  <p>The owner of the specified snapshot has not authorized your account to access the
 *             snapshot.</p>
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *  <p>The specified CIDR IP range or EC2 security group is not authorized for the
 *             specified cluster security group.</p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class RevokeSnapshotAccessCommand extends $Command<
  RevokeSnapshotAccessCommandInput,
  RevokeSnapshotAccessCommandOutput,
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
  constructor(readonly input: RevokeSnapshotAccessCommandInput) {
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
  ): Handler<RevokeSnapshotAccessCommandInput, RevokeSnapshotAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeSnapshotAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RevokeSnapshotAccessCommand";
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
  private serialize(input: RevokeSnapshotAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RevokeSnapshotAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeSnapshotAccessCommandOutput> {
    return de_RevokeSnapshotAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
