// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StopReplicationRequest,
  StopReplicationResponse,
  StopReplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StopReplicationCommand, se_StopReplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopReplicationCommand}.
 */
export interface StopReplicationCommandInput extends StopReplicationRequest {}
/**
 * @public
 *
 * The output of {@link StopReplicationCommand}.
 */
export interface StopReplicationCommandOutput extends StopReplicationResponse, __MetadataBearer {}

/**
 * <p>Stops replication for a Source Server. This action would make the Source Server unprotected, delete its existing snapshots and stop billing for it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StopReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StopReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DrsClient(config);
 * const input = { // StopReplicationRequest
 *   sourceServerID: "STRING_VALUE", // required
 * };
 * const command = new StopReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopReplicationResponse
 * //   sourceServer: { // SourceServer
 * //     sourceServerID: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     recoveryInstanceId: "STRING_VALUE",
 * //     lastLaunchResult: "STRING_VALUE",
 * //     dataReplicationInfo: { // DataReplicationInfo
 * //       lagDuration: "STRING_VALUE",
 * //       etaDateTime: "STRING_VALUE",
 * //       replicatedDisks: [ // DataReplicationInfoReplicatedDisks
 * //         { // DataReplicationInfoReplicatedDisk
 * //           deviceName: "STRING_VALUE",
 * //           totalStorageBytes: Number("long"),
 * //           replicatedStorageBytes: Number("long"),
 * //           rescannedStorageBytes: Number("long"),
 * //           backloggedStorageBytes: Number("long"),
 * //           volumeStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       dataReplicationState: "STRING_VALUE",
 * //       dataReplicationInitiation: { // DataReplicationInitiation
 * //         startDateTime: "STRING_VALUE",
 * //         nextAttemptDateTime: "STRING_VALUE",
 * //         steps: [ // DataReplicationInitiationSteps
 * //           { // DataReplicationInitiationStep
 * //             name: "STRING_VALUE",
 * //             status: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       dataReplicationError: { // DataReplicationError
 * //         error: "STRING_VALUE",
 * //         rawError: "STRING_VALUE",
 * //       },
 * //       stagingAvailabilityZone: "STRING_VALUE",
 * //       stagingOutpostArn: "STRING_VALUE",
 * //     },
 * //     lifeCycle: { // LifeCycle
 * //       addedToServiceDateTime: "STRING_VALUE",
 * //       firstByteDateTime: "STRING_VALUE",
 * //       elapsedReplicationDuration: "STRING_VALUE",
 * //       lastSeenByServiceDateTime: "STRING_VALUE",
 * //       lastLaunch: { // LifeCycleLastLaunch
 * //         initiated: { // LifeCycleLastLaunchInitiated
 * //           apiCallDateTime: "STRING_VALUE",
 * //           jobID: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //         },
 * //         status: "STRING_VALUE",
 * //       },
 * //     },
 * //     sourceProperties: { // SourceProperties
 * //       lastUpdatedDateTime: "STRING_VALUE",
 * //       recommendedInstanceType: "STRING_VALUE",
 * //       identificationHints: { // IdentificationHints
 * //         fqdn: "STRING_VALUE",
 * //         hostname: "STRING_VALUE",
 * //         vmWareUuid: "STRING_VALUE",
 * //         awsInstanceID: "STRING_VALUE",
 * //       },
 * //       networkInterfaces: [ // NetworkInterfaces
 * //         { // NetworkInterface
 * //           macAddress: "STRING_VALUE",
 * //           ips: [ // IPsList
 * //             "STRING_VALUE",
 * //           ],
 * //           isPrimary: true || false,
 * //         },
 * //       ],
 * //       disks: [ // Disks
 * //         { // Disk
 * //           deviceName: "STRING_VALUE",
 * //           bytes: Number("long"),
 * //         },
 * //       ],
 * //       cpus: [ // Cpus
 * //         { // CPU
 * //           cores: Number("long"),
 * //           modelName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ramBytes: Number("long"),
 * //       os: { // OS
 * //         fullString: "STRING_VALUE",
 * //       },
 * //       supportsNitroInstances: true || false,
 * //     },
 * //     stagingArea: { // StagingArea
 * //       status: "STRING_VALUE",
 * //       stagingAccountID: "STRING_VALUE",
 * //       stagingSourceServerArn: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //     sourceCloudProperties: { // SourceCloudProperties
 * //       originAccountID: "STRING_VALUE",
 * //       originRegion: "STRING_VALUE",
 * //       originAvailabilityZone: "STRING_VALUE",
 * //       sourceOutpostArn: "STRING_VALUE",
 * //     },
 * //     replicationDirection: "STRING_VALUE",
 * //     reversedDirectionSourceServerArn: "STRING_VALUE",
 * //     sourceNetworkID: "STRING_VALUE",
 * //     agentVersion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopReplicationCommandInput - {@link StopReplicationCommandInput}
 * @returns {@link StopReplicationCommandOutput}
 * @see {@link StopReplicationCommandInput} for command's `input` shape.
 * @see {@link StopReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 * @public
 */
export class StopReplicationCommand extends $Command
  .classBuilder<
    StopReplicationCommandInput,
    StopReplicationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "StopReplication", {})
  .n("DrsClient", "StopReplicationCommand")
  .f(void 0, StopReplicationResponseFilterSensitiveLog)
  .ser(se_StopReplicationCommand)
  .de(de_StopReplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopReplicationRequest;
      output: StopReplicationResponse;
    };
    sdk: {
      input: StopReplicationCommandInput;
      output: StopReplicationCommandOutput;
    };
  };
}
