// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { SourceServer, UpdateSourceServerRequest } from "../models/models_0";
import { UpdateSourceServer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSourceServerCommand}.
 */
export interface UpdateSourceServerCommandInput extends UpdateSourceServerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSourceServerCommand}.
 */
export interface UpdateSourceServerCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>Update Source Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, UpdateSourceServerCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, UpdateSourceServerCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // UpdateSourceServerRequest
 *   accountID: "STRING_VALUE",
 *   sourceServerID: "STRING_VALUE", // required
 *   connectorAction: { // SourceServerConnectorAction
 *     credentialsSecretArn: "STRING_VALUE",
 *     connectorArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateSourceServerCommand(input);
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
 * @param UpdateSourceServerCommandInput - {@link UpdateSourceServerCommandInput}
 * @returns {@link UpdateSourceServerCommandOutput}
 * @see {@link UpdateSourceServerCommandInput} for command's `input` shape.
 * @see {@link UpdateSourceServerCommandOutput} for command's `response` shape.
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
export class UpdateSourceServerCommand extends $Command
  .classBuilder<
    UpdateSourceServerCommandInput,
    UpdateSourceServerCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "UpdateSourceServer", {})
  .n("MgnClient", "UpdateSourceServerCommand")
  .sc(UpdateSourceServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSourceServerRequest;
      output: SourceServer;
    };
    sdk: {
      input: UpdateSourceServerCommandInput;
      output: UpdateSourceServerCommandOutput;
    };
  };
}
