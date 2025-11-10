// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { CreateBridgeRequest, CreateBridgeResponse } from "../models/models_0";
import { CreateBridge } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBridgeCommand}.
 */
export interface CreateBridgeCommandInput extends CreateBridgeRequest {}
/**
 * @public
 *
 * The output of {@link CreateBridgeCommand}.
 */
export interface CreateBridgeCommandOutput extends CreateBridgeResponse, __MetadataBearer {}

/**
 * <p> Creates a new bridge. The request must include one source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, CreateBridgeCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, CreateBridgeCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // CreateBridgeRequest
 *   EgressGatewayBridge: { // AddEgressGatewayBridgeRequest
 *     MaxBitrate: Number("int"), // required
 *   },
 *   IngressGatewayBridge: { // AddIngressGatewayBridgeRequest
 *     MaxBitrate: Number("int"), // required
 *     MaxOutputs: Number("int"), // required
 *   },
 *   Name: "STRING_VALUE", // required
 *   Outputs: [ // __listOfAddBridgeOutputRequest
 *     { // AddBridgeOutputRequest
 *       NetworkOutput: { // AddBridgeNetworkOutputRequest
 *         IpAddress: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         NetworkName: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 *         Ttl: Number("int"), // required
 *       },
 *     },
 *   ],
 *   PlacementArn: "STRING_VALUE", // required
 *   SourceFailoverConfig: { // FailoverConfig
 *     FailoverMode: "MERGE" || "FAILOVER",
 *     RecoveryWindow: Number("int"),
 *     SourcePriority: { // SourcePriority
 *       PrimarySource: "STRING_VALUE",
 *     },
 *     State: "ENABLED" || "DISABLED",
 *   },
 *   Sources: [ // __listOfAddBridgeSourceRequest // required
 *     { // AddBridgeSourceRequest
 *       FlowSource: { // AddBridgeFlowSourceRequest
 *         FlowArn: "STRING_VALUE", // required
 *         FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 *           VpcInterfaceName: "STRING_VALUE",
 *         },
 *         Name: "STRING_VALUE", // required
 *       },
 *       NetworkSource: { // AddBridgeNetworkSourceRequest
 *         MulticastIp: "STRING_VALUE", // required
 *         MulticastSourceSettings: { // MulticastSourceSettings
 *           MulticastSourceIp: "STRING_VALUE",
 *         },
 *         Name: "STRING_VALUE", // required
 *         NetworkName: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateBridgeCommand(input);
 * const response = await client.send(command);
 * // { // CreateBridgeResponse
 * //   Bridge: { // Bridge
 * //     BridgeArn: "STRING_VALUE", // required
 * //     BridgeMessages: [ // __listOfMessageDetail
 * //       { // MessageDetail
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //         ResourceName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BridgeState: "CREATING" || "STANDBY" || "STARTING" || "DEPLOYING" || "ACTIVE" || "STOPPING" || "DELETING" || "DELETED" || "START_FAILED" || "START_PENDING" || "STOP_FAILED" || "UPDATING", // required
 * //     EgressGatewayBridge: { // EgressGatewayBridge
 * //       InstanceId: "STRING_VALUE",
 * //       MaxBitrate: Number("int"), // required
 * //     },
 * //     IngressGatewayBridge: { // IngressGatewayBridge
 * //       InstanceId: "STRING_VALUE",
 * //       MaxBitrate: Number("int"), // required
 * //       MaxOutputs: Number("int"), // required
 * //     },
 * //     Name: "STRING_VALUE", // required
 * //     Outputs: [ // __listOfBridgeOutput
 * //       { // BridgeOutput
 * //         FlowOutput: { // BridgeFlowOutput
 * //           FlowArn: "STRING_VALUE", // required
 * //           FlowSourceArn: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         NetworkOutput: { // BridgeNetworkOutput
 * //           IpAddress: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           NetworkName: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //           Ttl: Number("int"), // required
 * //         },
 * //       },
 * //     ],
 * //     PlacementArn: "STRING_VALUE", // required
 * //     SourceFailoverConfig: { // FailoverConfig
 * //       FailoverMode: "MERGE" || "FAILOVER",
 * //       RecoveryWindow: Number("int"),
 * //       SourcePriority: { // SourcePriority
 * //         PrimarySource: "STRING_VALUE",
 * //       },
 * //       State: "ENABLED" || "DISABLED",
 * //     },
 * //     Sources: [ // __listOfBridgeSource
 * //       { // BridgeSource
 * //         FlowSource: { // BridgeFlowSource
 * //           FlowArn: "STRING_VALUE", // required
 * //           FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //             VpcInterfaceName: "STRING_VALUE",
 * //           },
 * //           Name: "STRING_VALUE", // required
 * //           OutputArn: "STRING_VALUE",
 * //         },
 * //         NetworkSource: { // BridgeNetworkSource
 * //           MulticastIp: "STRING_VALUE", // required
 * //           MulticastSourceSettings: { // MulticastSourceSettings
 * //             MulticastSourceIp: "STRING_VALUE",
 * //           },
 * //           Name: "STRING_VALUE", // required
 * //           NetworkName: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBridgeCommandInput - {@link CreateBridgeCommandInput}
 * @returns {@link CreateBridgeCommandOutput}
 * @see {@link CreateBridgeCommandInput} for command's `input` shape.
 * @see {@link CreateBridgeCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link CreateBridge420Exception} (client fault)
 *  <p>Exception raised by Elemental MediaConnect when creating the bridge. See the error message for the operation for more information on the cause of this exception. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
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
export class CreateBridgeCommand extends $Command
  .classBuilder<
    CreateBridgeCommandInput,
    CreateBridgeCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "CreateBridge", {})
  .n("MediaConnectClient", "CreateBridgeCommand")
  .sc(CreateBridge)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBridgeRequest;
      output: CreateBridgeResponse;
    };
    sdk: {
      input: CreateBridgeCommandInput;
      output: CreateBridgeCommandOutput;
    };
  };
}
