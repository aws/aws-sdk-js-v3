// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ChangeServerLifeCycleStateRequest, SourceServer, SourceServerFilterSensitiveLog } from "../models/models_0";
import { de_ChangeServerLifeCycleStateCommand, se_ChangeServerLifeCycleStateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ChangeServerLifeCycleStateCommand}.
 */
export interface ChangeServerLifeCycleStateCommandInput extends ChangeServerLifeCycleStateRequest {}
/**
 * @public
 *
 * The output of {@link ChangeServerLifeCycleStateCommand}.
 */
export interface ChangeServerLifeCycleStateCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Allows the user to set the SourceServer.LifeCycle.state property for specific Source Server IDs to one of the following: READY_FOR_TEST or READY_FOR_CUTOVER. This command only works if the Source Server is already launchable (dataReplicationInfo.lagDuration is not null.)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ChangeServerLifeCycleStateCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ChangeServerLifeCycleStateCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ChangeServerLifeCycleStateRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   lifeCycle: { // ChangeServerLifeCycleStateSourceServerLifecycle
 *     state: "STRING_VALUE", // required
 *   },
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ChangeServerLifeCycleStateCommand(input);
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
 * @param ChangeServerLifeCycleStateCommandInput - {@link ChangeServerLifeCycleStateCommandInput}
 * @returns {@link ChangeServerLifeCycleStateCommandOutput}
 * @see {@link ChangeServerLifeCycleStateCommandInput} for command's `input` shape.
 * @see {@link ChangeServerLifeCycleStateCommandOutput} for command's `response` shape.
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
export class ChangeServerLifeCycleStateCommand extends $Command
  .classBuilder<
    ChangeServerLifeCycleStateCommandInput,
    ChangeServerLifeCycleStateCommandOutput,
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
  .s("ApplicationMigrationService", "ChangeServerLifeCycleState", {})
  .n("MgnClient", "ChangeServerLifeCycleStateCommand")
  .f(void 0, SourceServerFilterSensitiveLog)
  .ser(se_ChangeServerLifeCycleStateCommand)
  .de(de_ChangeServerLifeCycleStateCommand)
  .build() {}
