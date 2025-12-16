// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { MarkAsArchivedRequest, SourceServer } from "../models/models_0";
import { MarkAsArchived$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MarkAsArchivedCommand}.
 */
export interface MarkAsArchivedCommandInput extends MarkAsArchivedRequest {}
/**
 * @public
 *
 * The output of {@link MarkAsArchivedCommand}.
 */
export interface MarkAsArchivedCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Archives specific Source Servers by setting the SourceServer.isArchived property to true for specified SourceServers by ID. This command only works for SourceServers with a lifecycle. state which equals DISCONNECTED or CUTOVER.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, MarkAsArchivedCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, MarkAsArchivedCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // MarkAsArchivedRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   accountID: "STRING_VALUE",
 * };
 * const command = new MarkAsArchivedCommand(input);
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
 * //     replicatorId: "STRING_VALUE",
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
 * @param MarkAsArchivedCommandInput - {@link MarkAsArchivedCommandInput}
 * @returns {@link MarkAsArchivedCommandOutput}
 * @see {@link MarkAsArchivedCommandInput} for command's `input` shape.
 * @see {@link MarkAsArchivedCommandOutput} for command's `response` shape.
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
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class MarkAsArchivedCommand extends $Command
  .classBuilder<
    MarkAsArchivedCommandInput,
    MarkAsArchivedCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "MarkAsArchived", {})
  .n("MgnClient", "MarkAsArchivedCommand")
  .sc(MarkAsArchived$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MarkAsArchivedRequest;
      output: SourceServer;
    };
    sdk: {
      input: MarkAsArchivedCommandInput;
      output: MarkAsArchivedCommandOutput;
    };
  };
}
