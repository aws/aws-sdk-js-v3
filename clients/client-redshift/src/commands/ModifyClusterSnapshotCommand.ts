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

import { ModifyClusterSnapshotMessage, ModifyClusterSnapshotResult } from "../models/models_1";
import { de_ModifyClusterSnapshotCommand, se_ModifyClusterSnapshotCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyClusterSnapshotCommand}.
 */
export interface ModifyClusterSnapshotCommandInput extends ModifyClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link ModifyClusterSnapshotCommand}.
 */
export interface ModifyClusterSnapshotCommandOutput extends ModifyClusterSnapshotResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the settings for a snapshot.</p>
 *          <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ModifyClusterSnapshotMessage
 *   SnapshotIdentifier: "STRING_VALUE", // required
 *   ManualSnapshotRetentionPeriod: Number("int"),
 *   Force: true || false,
 * };
 * const command = new ModifyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClusterSnapshotResult
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
 * @param ModifyClusterSnapshotCommandInput - {@link ModifyClusterSnapshotCommandInput}
 * @returns {@link ModifyClusterSnapshotCommandOutput}
 * @see {@link ModifyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link InvalidClusterSnapshotStateFault} (client fault)
 *  <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 *
 * @throws {@link InvalidRetentionPeriodFault} (client fault)
 *  <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class ModifyClusterSnapshotCommand extends $Command<
  ModifyClusterSnapshotCommandInput,
  ModifyClusterSnapshotCommandOutput,
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
  constructor(readonly input: ModifyClusterSnapshotCommandInput) {
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
  ): Handler<ModifyClusterSnapshotCommandInput, ModifyClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterSnapshotCommand";
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
  private serialize(input: ModifyClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterSnapshotCommandOutput> {
    return de_ModifyClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
