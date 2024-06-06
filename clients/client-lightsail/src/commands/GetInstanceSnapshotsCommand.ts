// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetInstanceSnapshotsRequest, GetInstanceSnapshotsResult } from "../models/models_1";
import { de_GetInstanceSnapshotsCommand, se_GetInstanceSnapshotsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceSnapshotsCommand}.
 */
export interface GetInstanceSnapshotsCommandInput extends GetInstanceSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceSnapshotsCommand}.
 */
export interface GetInstanceSnapshotsCommandOutput extends GetInstanceSnapshotsResult, __MetadataBearer {}

/**
 * <p>Returns all instance snapshots for the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetInstanceSnapshotsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetInstanceSnapshotsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetInstanceSnapshotsRequest
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetInstanceSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceSnapshotsResult
 * //   instanceSnapshots: [ // InstanceSnapshotList
 * //     { // InstanceSnapshot
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       supportCode: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       state: "pending" || "error" || "available",
 * //       progress: "STRING_VALUE",
 * //       fromAttachedDisks: [ // DiskList
 * //         { // Disk
 * //           name: "STRING_VALUE",
 * //           arn: "STRING_VALUE",
 * //           supportCode: "STRING_VALUE",
 * //           createdAt: new Date("TIMESTAMP"),
 * //           location: {
 * //             availabilityZone: "STRING_VALUE",
 * //             regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //           },
 * //           resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //           tags: [
 * //             {
 * //               key: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           addOns: [ // AddOnList
 * //             { // AddOn
 * //               name: "STRING_VALUE",
 * //               status: "STRING_VALUE",
 * //               snapshotTimeOfDay: "STRING_VALUE",
 * //               nextSnapshotTimeOfDay: "STRING_VALUE",
 * //               threshold: "STRING_VALUE",
 * //               duration: "STRING_VALUE",
 * //             },
 * //           ],
 * //           sizeInGb: Number("int"),
 * //           isSystemDisk: true || false,
 * //           iops: Number("int"),
 * //           path: "STRING_VALUE",
 * //           state: "pending" || "error" || "available" || "in-use" || "unknown",
 * //           attachedTo: "STRING_VALUE",
 * //           isAttached: true || false,
 * //           attachmentState: "STRING_VALUE",
 * //           gbInUse: Number("int"),
 * //           autoMountStatus: "Failed" || "Pending" || "Mounted" || "NotMounted",
 * //         },
 * //       ],
 * //       fromInstanceName: "STRING_VALUE",
 * //       fromInstanceArn: "STRING_VALUE",
 * //       fromBlueprintId: "STRING_VALUE",
 * //       fromBundleId: "STRING_VALUE",
 * //       isFromAutoSnapshot: true || false,
 * //       sizeInGb: Number("int"),
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstanceSnapshotsCommandInput - {@link GetInstanceSnapshotsCommandInput}
 * @returns {@link GetInstanceSnapshotsCommandOutput}
 * @see {@link GetInstanceSnapshotsCommandInput} for command's `input` shape.
 * @see {@link GetInstanceSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 * @public
 */
export class GetInstanceSnapshotsCommand extends $Command
  .classBuilder<
    GetInstanceSnapshotsCommandInput,
    GetInstanceSnapshotsCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetInstanceSnapshots", {})
  .n("LightsailClient", "GetInstanceSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_GetInstanceSnapshotsCommand)
  .de(de_GetInstanceSnapshotsCommand)
  .build() {}
