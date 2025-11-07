// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRemoteAccessSessionsRequest, ListRemoteAccessSessionsResult } from "../models/models_0";
import { ListRemoteAccessSessions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRemoteAccessSessionsCommand}.
 */
export interface ListRemoteAccessSessionsCommandInput extends ListRemoteAccessSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRemoteAccessSessionsCommand}.
 */
export interface ListRemoteAccessSessionsCommandOutput extends ListRemoteAccessSessionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of all currently running remote access sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListRemoteAccessSessionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListRemoteAccessSessionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListRemoteAccessSessionsRequest
 *   arn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRemoteAccessSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRemoteAccessSessionsResult
 * //   remoteAccessSessions: [ // RemoteAccessSessions
 * //     { // RemoteAccessSession
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       created: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //       result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //       message: "STRING_VALUE",
 * //       started: new Date("TIMESTAMP"),
 * //       stopped: new Date("TIMESTAMP"),
 * //       device: { // Device
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         manufacturer: "STRING_VALUE",
 * //         model: "STRING_VALUE",
 * //         modelId: "STRING_VALUE",
 * //         formFactor: "PHONE" || "TABLET",
 * //         platform: "ANDROID" || "IOS",
 * //         os: "STRING_VALUE",
 * //         cpu: { // CPU
 * //           frequency: "STRING_VALUE",
 * //           architecture: "STRING_VALUE",
 * //           clock: Number("double"),
 * //         },
 * //         resolution: { // Resolution
 * //           width: Number("int"),
 * //           height: Number("int"),
 * //         },
 * //         heapSize: Number("long"),
 * //         memory: Number("long"),
 * //         image: "STRING_VALUE",
 * //         carrier: "STRING_VALUE",
 * //         radio: "STRING_VALUE",
 * //         remoteAccessEnabled: true || false,
 * //         remoteDebugEnabled: true || false,
 * //         fleetType: "STRING_VALUE",
 * //         fleetName: "STRING_VALUE",
 * //         instances: [ // DeviceInstances
 * //           { // DeviceInstance
 * //             arn: "STRING_VALUE",
 * //             deviceArn: "STRING_VALUE",
 * //             labels: [ // InstanceLabels
 * //               "STRING_VALUE",
 * //             ],
 * //             status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //             udid: "STRING_VALUE",
 * //             instanceProfile: { // InstanceProfile
 * //               arn: "STRING_VALUE",
 * //               packageCleanup: true || false,
 * //               excludeAppPackagesFromCleanup: [ // PackageIds
 * //                 "STRING_VALUE",
 * //               ],
 * //               rebootAfterUse: true || false,
 * //               name: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //       },
 * //       instanceArn: "STRING_VALUE",
 * //       remoteDebugEnabled: true || false,
 * //       remoteRecordEnabled: true || false,
 * //       remoteRecordAppArn: "STRING_VALUE",
 * //       hostAddress: "STRING_VALUE",
 * //       clientId: "STRING_VALUE",
 * //       billingMethod: "METERED" || "UNMETERED",
 * //       deviceMinutes: { // DeviceMinutes
 * //         total: Number("double"),
 * //         metered: Number("double"),
 * //         unmetered: Number("double"),
 * //       },
 * //       endpoint: "STRING_VALUE",
 * //       deviceUdid: "STRING_VALUE",
 * //       interactionMode: "INTERACTIVE" || "NO_VIDEO" || "VIDEO_ONLY",
 * //       skipAppResign: true || false,
 * //       vpcConfig: { // VpcConfig
 * //         securityGroupIds: [ // VpcSecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         subnetIds: [ // VpcSubnetIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         vpcId: "STRING_VALUE", // required
 * //       },
 * //       deviceProxy: { // DeviceProxy
 * //         host: "STRING_VALUE", // required
 * //         port: Number("int"), // required
 * //       },
 * //       appUpload: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRemoteAccessSessionsCommandInput - {@link ListRemoteAccessSessionsCommandInput}
 * @returns {@link ListRemoteAccessSessionsCommandOutput}
 * @see {@link ListRemoteAccessSessionsCommandInput} for command's `input` shape.
 * @see {@link ListRemoteAccessSessionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @example To get information about a remote access session
 * ```javascript
 * // The following example returns information about a specific Device Farm remote access session.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2:123456789101:session:EXAMPLE-GUID-123-456",
 *   nextToken: "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE="
 * };
 * const command = new ListRemoteAccessSessionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   remoteAccessSessions:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRemoteAccessSessionsCommand extends $Command
  .classBuilder<
    ListRemoteAccessSessionsCommandInput,
    ListRemoteAccessSessionsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "ListRemoteAccessSessions", {})
  .n("DeviceFarmClient", "ListRemoteAccessSessionsCommand")
  .sc(ListRemoteAccessSessions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRemoteAccessSessionsRequest;
      output: ListRemoteAccessSessionsResult;
    };
    sdk: {
      input: ListRemoteAccessSessionsCommandInput;
      output: ListRemoteAccessSessionsCommandOutput;
    };
  };
}
