// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddBridgeSourcesRequest, AddBridgeSourcesResponse } from "../models/models_0";
import { de_AddBridgeSourcesCommand, se_AddBridgeSourcesCommand } from "../protocols/Aws_restJson1";

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
 * Adds sources to an existing bridge.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddBridgeSourcesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddBridgeSourcesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
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
 * //         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
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
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "AddBridgeSources", {})
  .n("MediaConnectClient", "AddBridgeSourcesCommand")
  .f(void 0, void 0)
  .ser(se_AddBridgeSourcesCommand)
  .de(de_AddBridgeSourcesCommand)
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
