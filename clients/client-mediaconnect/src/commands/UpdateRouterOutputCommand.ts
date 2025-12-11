// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { UpdateRouterOutputRequest, UpdateRouterOutputResponse } from "../models/models_1";
import { UpdateRouterOutput } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRouterOutputCommand}.
 */
export interface UpdateRouterOutputCommandInput extends UpdateRouterOutputRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRouterOutputCommand}.
 */
export interface UpdateRouterOutputCommandOutput extends UpdateRouterOutputResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing router output in AWS Elemental MediaConnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateRouterOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateRouterOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateRouterOutputRequest
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Configuration: { // RouterOutputConfiguration Union: only one key present
 *     Standard: { // StandardRouterOutputConfiguration
 *       NetworkInterfaceArn: "STRING_VALUE", // required
 *       ProtocolConfiguration: { // RouterOutputProtocolConfiguration Union: only one key present
 *         Rtp: { // RtpRouterOutputConfiguration
 *           DestinationAddress: "STRING_VALUE", // required
 *           DestinationPort: Number("int"), // required
 *           ForwardErrorCorrection: "ENABLED" || "DISABLED",
 *         },
 *         Rist: { // RistRouterOutputConfiguration
 *           DestinationAddress: "STRING_VALUE", // required
 *           DestinationPort: Number("int"), // required
 *         },
 *         SrtListener: { // SrtListenerRouterOutputConfiguration
 *           Port: Number("int"), // required
 *           MinimumLatencyMilliseconds: Number("long"), // required
 *           EncryptionConfiguration: { // SrtEncryptionConfiguration
 *             EncryptionKey: { // SecretsManagerEncryptionKeyConfiguration
 *               SecretArn: "STRING_VALUE", // required
 *               RoleArn: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *         SrtCaller: { // SrtCallerRouterOutputConfiguration
 *           DestinationAddress: "STRING_VALUE", // required
 *           DestinationPort: Number("int"), // required
 *           MinimumLatencyMilliseconds: Number("long"), // required
 *           StreamId: "STRING_VALUE",
 *           EncryptionConfiguration: {
 *             EncryptionKey: {
 *               SecretArn: "STRING_VALUE", // required
 *               RoleArn: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *       },
 *       Protocol: "RTP" || "RIST" || "SRT_CALLER" || "SRT_LISTENER",
 *     },
 *     MediaConnectFlow: { // MediaConnectFlowRouterOutputConfiguration
 *       FlowArn: "STRING_VALUE",
 *       FlowSourceArn: "STRING_VALUE",
 *       DestinationTransitEncryption: { // FlowTransitEncryption
 *         EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 *         EncryptionKeyConfiguration: { // FlowTransitEncryptionKeyConfiguration Union: only one key present
 *           SecretsManager: {
 *             SecretArn: "STRING_VALUE", // required
 *             RoleArn: "STRING_VALUE", // required
 *           },
 *           Automatic: {},
 *         },
 *       },
 *     },
 *     MediaLiveInput: { // MediaLiveInputRouterOutputConfiguration
 *       MediaLiveInputArn: "STRING_VALUE",
 *       MediaLivePipelineId: "PIPELINE_0" || "PIPELINE_1",
 *       DestinationTransitEncryption: { // MediaLiveTransitEncryption
 *         EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 *         EncryptionKeyConfiguration: { // MediaLiveTransitEncryptionKeyConfiguration Union: only one key present
 *           SecretsManager: {
 *             SecretArn: "STRING_VALUE", // required
 *             RoleArn: "STRING_VALUE", // required
 *           },
 *           Automatic: {},
 *         },
 *       },
 *     },
 *   },
 *   MaximumBitrate: Number("long"),
 *   RoutingScope: "REGIONAL" || "GLOBAL",
 *   Tier: "OUTPUT_100" || "OUTPUT_50" || "OUTPUT_20",
 *   MaintenanceConfiguration: { // MaintenanceConfiguration Union: only one key present
 *     PreferredDayTime: { // PreferredDayTimeMaintenanceConfiguration
 *       Day: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 *       Time: "STRING_VALUE", // required
 *     },
 *     Default: {},
 *   },
 * };
 * const command = new UpdateRouterOutputCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRouterOutputResponse
 * //   RouterOutput: { // RouterOutput
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     State: "CREATING" || "STANDBY" || "STARTING" || "ACTIVE" || "STOPPING" || "DELETING" || "UPDATING" || "ERROR" || "RECOVERING" || "MIGRATING", // required
 * //     OutputType: "STANDARD" || "MEDIACONNECT_FLOW" || "MEDIALIVE_INPUT", // required
 * //     Configuration: { // RouterOutputConfiguration Union: only one key present
 * //       Standard: { // StandardRouterOutputConfiguration
 * //         NetworkInterfaceArn: "STRING_VALUE", // required
 * //         ProtocolConfiguration: { // RouterOutputProtocolConfiguration Union: only one key present
 * //           Rtp: { // RtpRouterOutputConfiguration
 * //             DestinationAddress: "STRING_VALUE", // required
 * //             DestinationPort: Number("int"), // required
 * //             ForwardErrorCorrection: "ENABLED" || "DISABLED",
 * //           },
 * //           Rist: { // RistRouterOutputConfiguration
 * //             DestinationAddress: "STRING_VALUE", // required
 * //             DestinationPort: Number("int"), // required
 * //           },
 * //           SrtListener: { // SrtListenerRouterOutputConfiguration
 * //             Port: Number("int"), // required
 * //             MinimumLatencyMilliseconds: Number("long"), // required
 * //             EncryptionConfiguration: { // SrtEncryptionConfiguration
 * //               EncryptionKey: { // SecretsManagerEncryptionKeyConfiguration
 * //                 SecretArn: "STRING_VALUE", // required
 * //                 RoleArn: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           SrtCaller: { // SrtCallerRouterOutputConfiguration
 * //             DestinationAddress: "STRING_VALUE", // required
 * //             DestinationPort: Number("int"), // required
 * //             MinimumLatencyMilliseconds: Number("long"), // required
 * //             StreamId: "STRING_VALUE",
 * //             EncryptionConfiguration: {
 * //               EncryptionKey: {
 * //                 SecretArn: "STRING_VALUE", // required
 * //                 RoleArn: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //         },
 * //         Protocol: "RTP" || "RIST" || "SRT_CALLER" || "SRT_LISTENER",
 * //       },
 * //       MediaConnectFlow: { // MediaConnectFlowRouterOutputConfiguration
 * //         FlowArn: "STRING_VALUE",
 * //         FlowSourceArn: "STRING_VALUE",
 * //         DestinationTransitEncryption: { // FlowTransitEncryption
 * //           EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //           EncryptionKeyConfiguration: { // FlowTransitEncryptionKeyConfiguration Union: only one key present
 * //             SecretsManager: {
 * //               SecretArn: "STRING_VALUE", // required
 * //               RoleArn: "STRING_VALUE", // required
 * //             },
 * //             Automatic: {},
 * //           },
 * //         },
 * //       },
 * //       MediaLiveInput: { // MediaLiveInputRouterOutputConfiguration
 * //         MediaLiveInputArn: "STRING_VALUE",
 * //         MediaLivePipelineId: "PIPELINE_0" || "PIPELINE_1",
 * //         DestinationTransitEncryption: { // MediaLiveTransitEncryption
 * //           EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //           EncryptionKeyConfiguration: { // MediaLiveTransitEncryptionKeyConfiguration Union: only one key present
 * //             SecretsManager: {
 * //               SecretArn: "STRING_VALUE", // required
 * //               RoleArn: "STRING_VALUE", // required
 * //             },
 * //             Automatic: {},
 * //           },
 * //         },
 * //       },
 * //     },
 * //     RoutedState: "ROUTED" || "ROUTING" || "UNROUTED", // required
 * //     RegionName: "STRING_VALUE", // required
 * //     AvailabilityZone: "STRING_VALUE", // required
 * //     MaximumBitrate: Number("long"), // required
 * //     RoutingScope: "REGIONAL" || "GLOBAL", // required
 * //     Tier: "OUTPUT_100" || "OUTPUT_50" || "OUTPUT_20", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     Messages: [ // RouterOutputMessages // required
 * //       { // RouterOutputMessage
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Tags: { // __mapOfString // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     StreamDetails: { // RouterOutputStreamDetails Union: only one key present
 * //       Standard: { // StandardRouterOutputStreamDetails
 * //         DestinationIpAddress: "STRING_VALUE",
 * //       },
 * //       MediaConnectFlow: {},
 * //       MediaLiveInput: {},
 * //     },
 * //     IpAddress: "STRING_VALUE",
 * //     RoutedInputArn: "STRING_VALUE",
 * //     MaintenanceType: "PREFERRED_DAY_TIME" || "DEFAULT", // required
 * //     MaintenanceConfiguration: { // MaintenanceConfiguration Union: only one key present
 * //       PreferredDayTime: { // PreferredDayTimeMaintenanceConfiguration
 * //         Day: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 * //         Time: "STRING_VALUE", // required
 * //       },
 * //       Default: {},
 * //     },
 * //     MaintenanceScheduleType: "WINDOW",
 * //     MaintenanceSchedule: { // MaintenanceSchedule Union: only one key present
 * //       Window: { // WindowMaintenanceSchedule
 * //         Start: new Date("TIMESTAMP"), // required
 * //         End: new Date("TIMESTAMP"), // required
 * //         ScheduledTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRouterOutputCommandInput - {@link UpdateRouterOutputCommandInput}
 * @returns {@link UpdateRouterOutputCommandOutput}
 * @see {@link UpdateRouterOutputCommandInput} for command's `input` shape.
 * @see {@link UpdateRouterOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class UpdateRouterOutputCommand extends $Command
  .classBuilder<
    UpdateRouterOutputCommandInput,
    UpdateRouterOutputCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "UpdateRouterOutput", {})
  .n("MediaConnectClient", "UpdateRouterOutputCommand")
  .sc(UpdateRouterOutput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRouterOutputRequest;
      output: UpdateRouterOutputResponse;
    };
    sdk: {
      input: UpdateRouterOutputCommandInput;
      output: UpdateRouterOutputCommandOutput;
    };
  };
}
