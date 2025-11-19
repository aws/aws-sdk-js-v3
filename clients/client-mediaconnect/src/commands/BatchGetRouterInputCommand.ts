// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { BatchGetRouterInputRequest, BatchGetRouterInputResponse } from "../models/models_0";
import { BatchGetRouterInput } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetRouterInputCommand}.
 */
export interface BatchGetRouterInputCommandInput extends BatchGetRouterInputRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetRouterInputCommand}.
 */
export interface BatchGetRouterInputCommandOutput extends BatchGetRouterInputResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about multiple router inputs in AWS Elemental MediaConnect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, BatchGetRouterInputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, BatchGetRouterInputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // BatchGetRouterInputRequest
 *   Arns: [ // RouterInputArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetRouterInputCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetRouterInputResponse
 * //   RouterInputs: [ // RouterInputList // required
 * //     { // RouterInput
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       State: "CREATING" || "STANDBY" || "STARTING" || "ACTIVE" || "STOPPING" || "DELETING" || "UPDATING" || "ERROR" || "RECOVERING" || "MIGRATING", // required
 * //       InputType: "STANDARD" || "FAILOVER" || "MERGE" || "MEDIACONNECT_FLOW", // required
 * //       Configuration: { // RouterInputConfiguration Union: only one key present
 * //         Standard: { // StandardRouterInputConfiguration
 * //           NetworkInterfaceArn: "STRING_VALUE", // required
 * //           ProtocolConfiguration: { // RouterInputProtocolConfiguration Union: only one key present
 * //             Rtp: { // RtpRouterInputConfiguration
 * //               Port: Number("int"), // required
 * //               ForwardErrorCorrection: "ENABLED" || "DISABLED",
 * //             },
 * //             Rist: { // RistRouterInputConfiguration
 * //               Port: Number("int"), // required
 * //               RecoveryLatencyMilliseconds: Number("long"), // required
 * //             },
 * //             SrtListener: { // SrtListenerRouterInputConfiguration
 * //               Port: Number("int"), // required
 * //               MinimumLatencyMilliseconds: Number("long"), // required
 * //               DecryptionConfiguration: { // SrtDecryptionConfiguration
 * //                 EncryptionKey: { // SecretsManagerEncryptionKeyConfiguration
 * //                   SecretArn: "STRING_VALUE", // required
 * //                   RoleArn: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //             },
 * //             SrtCaller: { // SrtCallerRouterInputConfiguration
 * //               SourceAddress: "STRING_VALUE", // required
 * //               SourcePort: Number("int"), // required
 * //               MinimumLatencyMilliseconds: Number("long"), // required
 * //               StreamId: "STRING_VALUE",
 * //               DecryptionConfiguration: {
 * //                 EncryptionKey: {
 * //                   SecretArn: "STRING_VALUE", // required
 * //                   RoleArn: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           Protocol: "RTP" || "RIST" || "SRT_CALLER" || "SRT_LISTENER",
 * //         },
 * //         Failover: { // FailoverRouterInputConfiguration
 * //           NetworkInterfaceArn: "STRING_VALUE", // required
 * //           ProtocolConfigurations: [ // FailoverRouterInputProtocolConfigurationList // required
 * //             { // FailoverRouterInputProtocolConfiguration Union: only one key present
 * //               Rtp: {
 * //                 Port: Number("int"), // required
 * //                 ForwardErrorCorrection: "ENABLED" || "DISABLED",
 * //               },
 * //               Rist: {
 * //                 Port: Number("int"), // required
 * //                 RecoveryLatencyMilliseconds: Number("long"), // required
 * //               },
 * //               SrtListener: {
 * //                 Port: Number("int"), // required
 * //                 MinimumLatencyMilliseconds: Number("long"), // required
 * //                 DecryptionConfiguration: {
 * //                   EncryptionKey: {
 * //                     SecretArn: "STRING_VALUE", // required
 * //                     RoleArn: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //               },
 * //               SrtCaller: {
 * //                 SourceAddress: "STRING_VALUE", // required
 * //                 SourcePort: Number("int"), // required
 * //                 MinimumLatencyMilliseconds: Number("long"), // required
 * //                 StreamId: "STRING_VALUE",
 * //                 DecryptionConfiguration: {
 * //                   EncryptionKey: {
 * //                     SecretArn: "STRING_VALUE", // required
 * //                     RoleArn: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //           SourcePriorityMode: "NO_PRIORITY" || "PRIMARY_SECONDARY", // required
 * //           PrimarySourceIndex: Number("int"),
 * //         },
 * //         Merge: { // MergeRouterInputConfiguration
 * //           NetworkInterfaceArn: "STRING_VALUE", // required
 * //           ProtocolConfigurations: [ // MergeRouterInputProtocolConfigurationList // required
 * //             { // MergeRouterInputProtocolConfiguration Union: only one key present
 * //               Rtp: {
 * //                 Port: Number("int"), // required
 * //                 ForwardErrorCorrection: "ENABLED" || "DISABLED",
 * //               },
 * //               Rist: {
 * //                 Port: Number("int"), // required
 * //                 RecoveryLatencyMilliseconds: Number("long"), // required
 * //               },
 * //             },
 * //           ],
 * //           MergeRecoveryWindowMilliseconds: Number("long"), // required
 * //         },
 * //         MediaConnectFlow: { // MediaConnectFlowRouterInputConfiguration
 * //           FlowArn: "STRING_VALUE",
 * //           FlowOutputArn: "STRING_VALUE",
 * //           SourceTransitDecryption: { // FlowTransitEncryption
 * //             EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //             EncryptionKeyConfiguration: { // FlowTransitEncryptionKeyConfiguration Union: only one key present
 * //               SecretsManager: "<SecretsManagerEncryptionKeyConfiguration>",
 * //               Automatic: {},
 * //             },
 * //           },
 * //         },
 * //       },
 * //       RoutedOutputs: Number("int"), // required
 * //       MaximumRoutedOutputs: Number("int"),
 * //       RegionName: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //       MaximumBitrate: Number("long"), // required
 * //       Tier: "INPUT_100" || "INPUT_50" || "INPUT_20", // required
 * //       RoutingScope: "REGIONAL" || "GLOBAL", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       Messages: [ // RouterInputMessages // required
 * //         { // RouterInputMessage
 * //           Code: "STRING_VALUE", // required
 * //           Message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       TransitEncryption: { // RouterInputTransitEncryption
 * //         EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //         EncryptionKeyConfiguration: { // RouterInputTransitEncryptionKeyConfiguration Union: only one key present
 * //           SecretsManager: "<SecretsManagerEncryptionKeyConfiguration>",
 * //           Automatic: {},
 * //         },
 * //       },
 * //       Tags: { // __mapOfString // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       StreamDetails: { // RouterInputStreamDetails Union: only one key present
 * //         Standard: { // StandardRouterInputStreamDetails
 * //           SourceIpAddress: "STRING_VALUE",
 * //         },
 * //         Failover: { // FailoverRouterInputStreamDetails
 * //           SourceIndexZeroStreamDetails: { // FailoverRouterInputIndexedStreamDetails
 * //             SourceIndex: Number("int"), // required
 * //             SourceIpAddress: "STRING_VALUE",
 * //           },
 * //           SourceIndexOneStreamDetails: {
 * //             SourceIndex: Number("int"), // required
 * //             SourceIpAddress: "STRING_VALUE",
 * //           },
 * //         },
 * //         Merge: { // MergeRouterInputStreamDetails
 * //           SourceIndexZeroStreamDetails: { // MergeRouterInputIndexedStreamDetails
 * //             SourceIndex: Number("int"), // required
 * //             SourceIpAddress: "STRING_VALUE",
 * //           },
 * //           SourceIndexOneStreamDetails: {
 * //             SourceIndex: Number("int"), // required
 * //             SourceIpAddress: "STRING_VALUE",
 * //           },
 * //         },
 * //         MediaConnectFlow: {},
 * //       },
 * //       IpAddress: "STRING_VALUE",
 * //       MaintenanceType: "PREFERRED_DAY_TIME" || "DEFAULT", // required
 * //       MaintenanceConfiguration: { // MaintenanceConfiguration Union: only one key present
 * //         PreferredDayTime: { // PreferredDayTimeMaintenanceConfiguration
 * //           Day: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY", // required
 * //           Time: "STRING_VALUE", // required
 * //         },
 * //         Default: {},
 * //       },
 * //       MaintenanceScheduleType: "WINDOW",
 * //       MaintenanceSchedule: { // MaintenanceSchedule Union: only one key present
 * //         Window: { // WindowMaintenanceSchedule
 * //           Start: new Date("TIMESTAMP"), // required
 * //           End: new Date("TIMESTAMP"), // required
 * //           ScheduledTime: new Date("TIMESTAMP"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // BatchGetRouterInputErrorList // required
 * //     { // BatchGetRouterInputError
 * //       Arn: "STRING_VALUE", // required
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetRouterInputCommandInput - {@link BatchGetRouterInputCommandInput}
 * @returns {@link BatchGetRouterInputCommandOutput}
 * @see {@link BatchGetRouterInputCommandInput} for command's `input` shape.
 * @see {@link BatchGetRouterInputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
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
export class BatchGetRouterInputCommand extends $Command
  .classBuilder<
    BatchGetRouterInputCommandInput,
    BatchGetRouterInputCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "BatchGetRouterInput", {})
  .n("MediaConnectClient", "BatchGetRouterInputCommand")
  .sc(BatchGetRouterInput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetRouterInputRequest;
      output: BatchGetRouterInputResponse;
    };
    sdk: {
      input: BatchGetRouterInputCommandInput;
      output: BatchGetRouterInputCommandOutput;
    };
  };
}
