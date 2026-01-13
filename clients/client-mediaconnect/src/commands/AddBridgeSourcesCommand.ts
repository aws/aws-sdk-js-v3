// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { AddBridgeSourcesRequest, AddBridgeSourcesResponse } from "../models/models_0";
import { AddBridgeSources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddBridgeSourcesCommand}.
 */
export interface AddBridgeSourcesCommandInput extends AddBridgeSourcesRequest {}
/**
 * @public
 *
 * The output of {@link AddBridgeSourcesCommand}.
 */
export interface AddBridgeSourcesCommandOutput extends AddBridgeSourcesResponse, __MetadataBearer {}

/**
 * <p> Adds sources to an existing bridge.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddBridgeSourcesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddBridgeSourcesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // AddBridgeSourcesRequest
 *   BridgeArn: "STRING_VALUE", // required
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
 * const command = new AddBridgeSourcesCommand(input);
 * const response = await client.send(command);
 * // { // AddBridgeSourcesResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   Sources: [ // __listOfBridgeSource
 * //     { // BridgeSource
 * //       FlowSource: { // BridgeFlowSource
 * //         FlowArn: "STRING_VALUE", // required
 * //         FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //           VpcInterfaceName: "STRING_VALUE",
 * //         },
 * //         Name: "STRING_VALUE", // required
 * //         OutputArn: "STRING_VALUE",
 * //       },
 * //       NetworkSource: { // BridgeNetworkSource
 * //         MulticastIp: "STRING_VALUE", // required
 * //         MulticastSourceSettings: { // MulticastSourceSettings
 * //           MulticastSourceIp: "STRING_VALUE",
 * //         },
 * //         Name: "STRING_VALUE", // required
 * //         NetworkName: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddBridgeSourcesCommandInput - {@link AddBridgeSourcesCommandInput}
 * @returns {@link AddBridgeSourcesCommandOutput}
 * @see {@link AddBridgeSourcesCommandInput} for command's `input` shape.
 * @see {@link AddBridgeSourcesCommandOutput} for command's `response` shape.
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
export class AddBridgeSourcesCommand extends $Command
  .classBuilder<
    AddBridgeSourcesCommandInput,
    AddBridgeSourcesCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "AddBridgeSources", {})
  .n("MediaConnectClient", "AddBridgeSourcesCommand")
  .sc(AddBridgeSources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddBridgeSourcesRequest;
      output: AddBridgeSourcesResponse;
    };
    sdk: {
      input: AddBridgeSourcesCommandInput;
      output: AddBridgeSourcesCommandOutput;
    };
  };
}
