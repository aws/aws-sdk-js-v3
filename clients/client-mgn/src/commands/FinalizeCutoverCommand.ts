// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { FinalizeCutoverRequest, SourceServer, SourceServerFilterSensitiveLog } from "../models/models_0";
import { de_FinalizeCutoverCommand, se_FinalizeCutoverCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FinalizeCutoverCommand}.
 */
export interface FinalizeCutoverCommandInput extends FinalizeCutoverRequest {}
/**
 * @public
 *
 * The output of {@link FinalizeCutoverCommand}.
 */
export interface FinalizeCutoverCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Finalizes the cutover immediately for specific Source Servers. All AWS resources created by Application Migration Service for enabling the replication of these source servers will be terminated / deleted within 90 minutes. Launched Test or Cutover instances will NOT be terminated. The AWS Replication Agent will receive a command to uninstall itself (within 10 minutes). The following properties of the SourceServer will be changed immediately: dataReplicationInfo.dataReplicationState will be changed to DISCONNECTED; The SourceServer.lifeCycle.state will be changed to CUTOVER; The totalStorageBytes property fo each of dataReplicationInfo.replicatedDisks will be set to zero; dataReplicationInfo.lagDuration and dataReplicationInfo.lagDuration will be nullified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, FinalizeCutoverCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, FinalizeCutoverCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // FinalizeCutoverRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new FinalizeCutoverCommand(input);
 * const response = await client.send(command);
 * // { // SourceServer
 * //   sourceServerID: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   isArchived: true || false,
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   launchedInstance: { // LaunchedInstance
 * //     ec2InstanceID: "STRING_VALUE",
 * //     jobID: "STRING_VALUE",
 * //     firstBoot: "STRING_VALUE",
 * //   },
 * //   dataReplicationInfo: { // DataReplicationInfo
 * //     lagDuration: "STRING_VALUE",
 * //     etaDateTime: "STRING_VALUE",
 * //     replicatedDisks: [ // DataReplicationInfoReplicatedDisks
 * //       { // DataReplicationInfoReplicatedDisk
 * //         deviceName: "STRING_VALUE",
 * //         totalStorageBytes: Number("long"),
 * //         replicatedStorageBytes: Number("long"),
 * //         rescannedStorageBytes: Number("long"),
 * //         backloggedStorageBytes: Number("long"),
 * //       },
 * //     ],
 * //     dataReplicationState: "STRING_VALUE",
 * //     dataReplicationInitiation: { // DataReplicationInitiation
 * //       startDateTime: "STRING_VALUE",
 * //       nextAttemptDateTime: "STRING_VALUE",
 * //       steps: [ // DataReplicationInitiationSteps
 * //         { // DataReplicationInitiationStep
 * //           name: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     dataReplicationError: { // DataReplicationError
 * //       error: "STRING_VALUE",
 * //       rawError: "STRING_VALUE",
 * //     },
 * //     lastSnapshotDateTime: "STRING_VALUE",
 * //   },
 * //   lifeCycle: { // LifeCycle
 * //     addedToServiceDateTime: "STRING_VALUE",
 * //     firstByteDateTime: "STRING_VALUE",
 * //     elapsedReplicationDuration: "STRING_VALUE",
 * //     lastSeenByServiceDateTime: "STRING_VALUE",
 * //     lastTest: { // LifeCycleLastTest
 * //       initiated: { // LifeCycleLastTestInitiated
 * //         apiCallDateTime: "STRING_VALUE",
 * //         jobID: "STRING_VALUE",
 * //       },
 * //       reverted: { // LifeCycleLastTestReverted
 * //         apiCallDateTime: "STRING_VALUE",
 * //       },
 * //       finalized: { // LifeCycleLastTestFinalized
 * //         apiCallDateTime: "STRING_VALUE",
 * //       },
 * //     },
 * //     lastCutover: { // LifeCycleLastCutover
 * //       initiated: { // LifeCycleLastCutoverInitiated
 * //         apiCallDateTime: "STRING_VALUE",
 * //         jobID: "STRING_VALUE",
 * //       },
 * //       reverted: { // LifeCycleLastCutoverReverted
 * //         apiCallDateTime: "STRING_VALUE",
 * //       },
 * //       finalized: { // LifeCycleLastCutoverFinalized
 * //         apiCallDateTime: "STRING_VALUE",
 * //       },
 * //     },
 * //     state: "STRING_VALUE",
 * //   },
 * //   sourceProperties: { // SourceProperties
 * //     lastUpdatedDateTime: "STRING_VALUE",
 * //     recommendedInstanceType: "STRING_VALUE",
 * //     identificationHints: { // IdentificationHints
 * //       fqdn: "STRING_VALUE",
 * //       hostname: "STRING_VALUE",
 * //       vmWareUuid: "STRING_VALUE",
 * //       awsInstanceID: "STRING_VALUE",
 * //       vmPath: "STRING_VALUE",
 * //     },
 * //     networkInterfaces: [ // NetworkInterfaces
 * //       { // NetworkInterface
 * //         macAddress: "STRING_VALUE",
 * //         ips: [ // IPsList
 * //           "STRING_VALUE",
 * //         ],
 * //         isPrimary: true || false,
 * //       },
 * //     ],
 * //     disks: [ // Disks
 * //       { // Disk
 * //         deviceName: "STRING_VALUE",
 * //         bytes: Number("long"),
 * //       },
 * //     ],
 * //     cpus: [ // Cpus
 * //       { // CPU
 * //         cores: Number("long"),
 * //         modelName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ramBytes: Number("long"),
 * //     os: { // OS
 * //       fullString: "STRING_VALUE",
 * //     },
 * //   },
 * //   replicationType: "STRING_VALUE",
 * //   vcenterClientID: "STRING_VALUE",
 * //   applicationID: "STRING_VALUE",
 * //   userProvidedID: "STRING_VALUE",
 * //   fqdnForActionFramework: "STRING_VALUE",
 * //   connectorAction: { // SourceServerConnectorAction
 * //     credentialsSecretArn: "STRING_VALUE",
 * //     connectorArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param FinalizeCutoverCommandInput - {@link FinalizeCutoverCommandInput}
 * @returns {@link FinalizeCutoverCommandOutput}
 * @see {@link FinalizeCutoverCommandInput} for command's `input` shape.
 * @see {@link FinalizeCutoverCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class FinalizeCutoverCommand extends $Command
  .classBuilder<
    FinalizeCutoverCommandInput,
    FinalizeCutoverCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "FinalizeCutover", {})
  .n("MgnClient", "FinalizeCutoverCommand")
  .f(void 0, SourceServerFilterSensitiveLog)
  .ser(se_FinalizeCutoverCommand)
  .de(de_FinalizeCutoverCommand)
  .build() {}
