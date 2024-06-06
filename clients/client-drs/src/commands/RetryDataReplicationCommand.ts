// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RetryDataReplicationRequest, SourceServer, SourceServerFilterSensitiveLog } from "../models/models_0";
import { de_RetryDataReplicationCommand, se_RetryDataReplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RetryDataReplicationCommand}.
 */
export interface RetryDataReplicationCommandInput extends RetryDataReplicationRequest {}
/**
 * @public
 *
 * The output of {@link RetryDataReplicationCommand}.
 */
export interface RetryDataReplicationCommandOutput extends SourceServer, __MetadataBearer {}

/**
 * <p>WARNING: RetryDataReplication is deprecated.
 *               Causes the data replication initiation sequence to begin immediately upon next Handshake for the specified Source Server ID, regardless of when the previous initiation started. This command will work only if the Source Server is stalled or is in a DISCONNECTED or STOPPED state.
 *         </p>
 *
 * @deprecated WARNING: RetryDataReplication is deprecated
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, RetryDataReplicationCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, RetryDataReplicationCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // RetryDataReplicationRequest
 *   sourceServerID: "STRING_VALUE", // required
 * };
 * const command = new RetryDataReplicationCommand(input);
 * const response = await client.send(command);
 * // { // SourceServer
 * //   sourceServerID: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   recoveryInstanceId: "STRING_VALUE",
 * //   lastLaunchResult: "STRING_VALUE",
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
 * //         volumeStatus: "STRING_VALUE",
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
 * //     stagingAvailabilityZone: "STRING_VALUE",
 * //     stagingOutpostArn: "STRING_VALUE",
 * //   },
 * //   lifeCycle: { // LifeCycle
 * //     addedToServiceDateTime: "STRING_VALUE",
 * //     firstByteDateTime: "STRING_VALUE",
 * //     elapsedReplicationDuration: "STRING_VALUE",
 * //     lastSeenByServiceDateTime: "STRING_VALUE",
 * //     lastLaunch: { // LifeCycleLastLaunch
 * //       initiated: { // LifeCycleLastLaunchInitiated
 * //         apiCallDateTime: "STRING_VALUE",
 * //         jobID: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //       },
 * //       status: "STRING_VALUE",
 * //     },
 * //   },
 * //   sourceProperties: { // SourceProperties
 * //     lastUpdatedDateTime: "STRING_VALUE",
 * //     recommendedInstanceType: "STRING_VALUE",
 * //     identificationHints: { // IdentificationHints
 * //       fqdn: "STRING_VALUE",
 * //       hostname: "STRING_VALUE",
 * //       vmWareUuid: "STRING_VALUE",
 * //       awsInstanceID: "STRING_VALUE",
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
 * //     supportsNitroInstances: true || false,
 * //   },
 * //   stagingArea: { // StagingArea
 * //     status: "STRING_VALUE",
 * //     stagingAccountID: "STRING_VALUE",
 * //     stagingSourceServerArn: "STRING_VALUE",
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   sourceCloudProperties: { // SourceCloudProperties
 * //     originAccountID: "STRING_VALUE",
 * //     originRegion: "STRING_VALUE",
 * //     originAvailabilityZone: "STRING_VALUE",
 * //     sourceOutpostArn: "STRING_VALUE",
 * //   },
 * //   replicationDirection: "STRING_VALUE",
 * //   reversedDirectionSourceServerArn: "STRING_VALUE",
 * //   sourceNetworkID: "STRING_VALUE",
 * //   agentVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetryDataReplicationCommandInput - {@link RetryDataReplicationCommandInput}
 * @returns {@link RetryDataReplicationCommandOutput}
 * @see {@link RetryDataReplicationCommandInput} for command's `input` shape.
 * @see {@link RetryDataReplicationCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 * @public
 */
export class RetryDataReplicationCommand extends $Command
  .classBuilder<
    RetryDataReplicationCommandInput,
    RetryDataReplicationCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "RetryDataReplication", {})
  .n("DrsClient", "RetryDataReplicationCommand")
  .f(void 0, SourceServerFilterSensitiveLog)
  .ser(se_RetryDataReplicationCommand)
  .de(de_RetryDataReplicationCommand)
  .build() {}
