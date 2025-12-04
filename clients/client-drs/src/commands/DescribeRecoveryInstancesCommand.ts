// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRecoveryInstancesRequest, DescribeRecoveryInstancesResponse } from "../models/models_0";
import { DescribeRecoveryInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecoveryInstancesCommand}.
 */
export interface DescribeRecoveryInstancesCommandInput extends DescribeRecoveryInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecoveryInstancesCommand}.
 */
export interface DescribeRecoveryInstancesCommandOutput extends DescribeRecoveryInstancesResponse, __MetadataBearer {}

/**
 * <p>Lists all Recovery Instances or multiple Recovery Instances by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeRecoveryInstancesCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeRecoveryInstancesCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DescribeRecoveryInstancesRequest
 *   filters: { // DescribeRecoveryInstancesRequestFilters
 *     recoveryInstanceIDs: [ // RecoveryInstanceIDs
 *       "STRING_VALUE",
 *     ],
 *     sourceServerIDs: [ // SourceServerIDs
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRecoveryInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecoveryInstancesResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // DescribeRecoveryInstancesItems
 * //     { // RecoveryInstance
 * //       ec2InstanceID: "STRING_VALUE",
 * //       ec2InstanceState: "STRING_VALUE",
 * //       jobID: "STRING_VALUE",
 * //       recoveryInstanceID: "STRING_VALUE",
 * //       sourceServerID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       failback: { // RecoveryInstanceFailback
 * //         failbackClientID: "STRING_VALUE",
 * //         failbackJobID: "STRING_VALUE",
 * //         failbackInitiationTime: "STRING_VALUE",
 * //         state: "STRING_VALUE",
 * //         agentLastSeenByServiceDateTime: "STRING_VALUE",
 * //         failbackClientLastSeenByServiceDateTime: "STRING_VALUE",
 * //         failbackToOriginalServer: true || false,
 * //         firstByteDateTime: "STRING_VALUE",
 * //         elapsedReplicationDuration: "STRING_VALUE",
 * //         failbackLaunchType: "STRING_VALUE",
 * //       },
 * //       dataReplicationInfo: { // RecoveryInstanceDataReplicationInfo
 * //         lagDuration: "STRING_VALUE",
 * //         etaDateTime: "STRING_VALUE",
 * //         replicatedDisks: [ // RecoveryInstanceDataReplicationInfoReplicatedDisks
 * //           { // RecoveryInstanceDataReplicationInfoReplicatedDisk
 * //             deviceName: "STRING_VALUE",
 * //             totalStorageBytes: Number("long"),
 * //             replicatedStorageBytes: Number("long"),
 * //             rescannedStorageBytes: Number("long"),
 * //             backloggedStorageBytes: Number("long"),
 * //           },
 * //         ],
 * //         dataReplicationState: "STRING_VALUE",
 * //         dataReplicationInitiation: { // RecoveryInstanceDataReplicationInitiation
 * //           startDateTime: "STRING_VALUE",
 * //           steps: [ // RecoveryInstanceDataReplicationInitiationSteps
 * //             { // RecoveryInstanceDataReplicationInitiationStep
 * //               name: "STRING_VALUE",
 * //               status: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         dataReplicationError: { // RecoveryInstanceDataReplicationError
 * //           error: "STRING_VALUE",
 * //           rawError: "STRING_VALUE",
 * //         },
 * //         stagingAvailabilityZone: "STRING_VALUE",
 * //         stagingOutpostArn: "STRING_VALUE",
 * //       },
 * //       recoveryInstanceProperties: { // RecoveryInstanceProperties
 * //         lastUpdatedDateTime: "STRING_VALUE",
 * //         identificationHints: { // IdentificationHints
 * //           fqdn: "STRING_VALUE",
 * //           hostname: "STRING_VALUE",
 * //           vmWareUuid: "STRING_VALUE",
 * //           awsInstanceID: "STRING_VALUE",
 * //         },
 * //         networkInterfaces: [ // NetworkInterfaces
 * //           { // NetworkInterface
 * //             macAddress: "STRING_VALUE",
 * //             ips: [ // IPsList
 * //               "STRING_VALUE",
 * //             ],
 * //             isPrimary: true || false,
 * //           },
 * //         ],
 * //         disks: [ // RecoveryInstanceDisks
 * //           { // RecoveryInstanceDisk
 * //             internalDeviceName: "STRING_VALUE",
 * //             bytes: Number("long"),
 * //             ebsVolumeID: "STRING_VALUE",
 * //           },
 * //         ],
 * //         cpus: [ // Cpus
 * //           { // CPU
 * //             cores: Number("long"),
 * //             modelName: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ramBytes: Number("long"),
 * //         os: { // OS
 * //           fullString: "STRING_VALUE",
 * //         },
 * //       },
 * //       pointInTimeSnapshotDateTime: "STRING_VALUE",
 * //       isDrill: true || false,
 * //       originEnvironment: "STRING_VALUE",
 * //       originAvailabilityZone: "STRING_VALUE",
 * //       agentVersion: "STRING_VALUE",
 * //       sourceOutpostArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRecoveryInstancesCommandInput - {@link DescribeRecoveryInstancesCommandInput}
 * @returns {@link DescribeRecoveryInstancesCommandOutput}
 * @see {@link DescribeRecoveryInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoveryInstancesCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
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
 *
 * @public
 */
export class DescribeRecoveryInstancesCommand extends $Command
  .classBuilder<
    DescribeRecoveryInstancesCommandInput,
    DescribeRecoveryInstancesCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticDisasterRecoveryService", "DescribeRecoveryInstances", {})
  .n("DrsClient", "DescribeRecoveryInstancesCommand")
  .sc(DescribeRecoveryInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecoveryInstancesRequest;
      output: DescribeRecoveryInstancesResponse;
    };
    sdk: {
      input: DescribeRecoveryInstancesCommandInput;
      output: DescribeRecoveryInstancesCommandOutput;
    };
  };
}
