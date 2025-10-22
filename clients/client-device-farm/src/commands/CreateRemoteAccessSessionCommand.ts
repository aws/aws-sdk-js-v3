// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRemoteAccessSessionRequest, CreateRemoteAccessSessionResult } from "../models/models_0";
import { de_CreateRemoteAccessSessionCommand, se_CreateRemoteAccessSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRemoteAccessSessionCommand}.
 */
export interface CreateRemoteAccessSessionCommandInput extends CreateRemoteAccessSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateRemoteAccessSessionCommand}.
 */
export interface CreateRemoteAccessSessionCommandOutput extends CreateRemoteAccessSessionResult, __MetadataBearer {}

/**
 * <p>Specifies and starts a remote access session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateRemoteAccessSessionRequest
 *   projectArn: "STRING_VALUE", // required
 *   deviceArn: "STRING_VALUE", // required
 *   appArn: "STRING_VALUE",
 *   instanceArn: "STRING_VALUE",
 *   sshPublicKey: "STRING_VALUE",
 *   remoteDebugEnabled: true || false,
 *   remoteRecordEnabled: true || false,
 *   remoteRecordAppArn: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   clientId: "STRING_VALUE",
 *   configuration: { // CreateRemoteAccessSessionConfiguration
 *     auxiliaryApps: [ // AuxiliaryAppArnList
 *       "STRING_VALUE",
 *     ],
 *     billingMethod: "METERED" || "UNMETERED",
 *     vpceConfigurationArns: [ // AmazonResourceNames
 *       "STRING_VALUE",
 *     ],
 *     deviceProxy: { // DeviceProxy
 *       host: "STRING_VALUE", // required
 *       port: Number("int"), // required
 *     },
 *   },
 *   interactionMode: "INTERACTIVE" || "NO_VIDEO" || "VIDEO_ONLY",
 *   skipAppResign: true || false,
 * };
 * const command = new CreateRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateRemoteAccessSessionResult
 * //   remoteAccessSession: { // RemoteAccessSession
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //     result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //     message: "STRING_VALUE",
 * //     started: new Date("TIMESTAMP"),
 * //     stopped: new Date("TIMESTAMP"),
 * //     device: { // Device
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       manufacturer: "STRING_VALUE",
 * //       model: "STRING_VALUE",
 * //       modelId: "STRING_VALUE",
 * //       formFactor: "PHONE" || "TABLET",
 * //       platform: "ANDROID" || "IOS",
 * //       os: "STRING_VALUE",
 * //       cpu: { // CPU
 * //         frequency: "STRING_VALUE",
 * //         architecture: "STRING_VALUE",
 * //         clock: Number("double"),
 * //       },
 * //       resolution: { // Resolution
 * //         width: Number("int"),
 * //         height: Number("int"),
 * //       },
 * //       heapSize: Number("long"),
 * //       memory: Number("long"),
 * //       image: "STRING_VALUE",
 * //       carrier: "STRING_VALUE",
 * //       radio: "STRING_VALUE",
 * //       remoteAccessEnabled: true || false,
 * //       remoteDebugEnabled: true || false,
 * //       fleetType: "STRING_VALUE",
 * //       fleetName: "STRING_VALUE",
 * //       instances: [ // DeviceInstances
 * //         { // DeviceInstance
 * //           arn: "STRING_VALUE",
 * //           deviceArn: "STRING_VALUE",
 * //           labels: [ // InstanceLabels
 * //             "STRING_VALUE",
 * //           ],
 * //           status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //           udid: "STRING_VALUE",
 * //           instanceProfile: { // InstanceProfile
 * //             arn: "STRING_VALUE",
 * //             packageCleanup: true || false,
 * //             excludeAppPackagesFromCleanup: [ // PackageIds
 * //               "STRING_VALUE",
 * //             ],
 * //             rebootAfterUse: true || false,
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //     },
 * //     instanceArn: "STRING_VALUE",
 * //     remoteDebugEnabled: true || false,
 * //     remoteRecordEnabled: true || false,
 * //     remoteRecordAppArn: "STRING_VALUE",
 * //     hostAddress: "STRING_VALUE",
 * //     clientId: "STRING_VALUE",
 * //     billingMethod: "METERED" || "UNMETERED",
 * //     deviceMinutes: { // DeviceMinutes
 * //       total: Number("double"),
 * //       metered: Number("double"),
 * //       unmetered: Number("double"),
 * //     },
 * //     endpoint: "STRING_VALUE",
 * //     deviceUdid: "STRING_VALUE",
 * //     interactionMode: "INTERACTIVE" || "NO_VIDEO" || "VIDEO_ONLY",
 * //     skipAppResign: true || false,
 * //     vpcConfig: { // VpcConfig
 * //       securityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // VpcSubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE", // required
 * //     },
 * //     deviceProxy: { // DeviceProxy
 * //       host: "STRING_VALUE", // required
 * //       port: Number("int"), // required
 * //     },
 * //     appUpload: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRemoteAccessSessionCommandInput - {@link CreateRemoteAccessSessionCommandInput}
 * @returns {@link CreateRemoteAccessSessionCommandOutput}
 * @see {@link CreateRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link CreateRemoteAccessSessionCommandOutput} for command's `response` shape.
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
 * @example To create a remote access session
 * ```javascript
 * // The following example creates a remote access session named MySession.
 * const input = {
 *   configuration: {
 *     billingMethod: "METERED"
 *   },
 *   deviceArn: "arn:aws:devicefarm:us-west-2::device:123EXAMPLE",
 *   name: "MySession",
 *   projectArn: "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456"
 * };
 * const command = new CreateRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   remoteAccessSession:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateRemoteAccessSessionCommand extends $Command
  .classBuilder<
    CreateRemoteAccessSessionCommandInput,
    CreateRemoteAccessSessionCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "CreateRemoteAccessSession", {})
  .n("DeviceFarmClient", "CreateRemoteAccessSessionCommand")
  .f(void 0, void 0)
  .ser(se_CreateRemoteAccessSessionCommand)
  .de(de_CreateRemoteAccessSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRemoteAccessSessionRequest;
      output: CreateRemoteAccessSessionResult;
    };
    sdk: {
      input: CreateRemoteAccessSessionCommandInput;
      output: CreateRemoteAccessSessionCommandOutput;
    };
  };
}
