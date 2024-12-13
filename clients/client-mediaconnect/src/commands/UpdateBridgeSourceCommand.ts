// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateBridgeSourceRequest, UpdateBridgeSourceResponse } from "../models/models_0";
import { de_UpdateBridgeSourceCommand, se_UpdateBridgeSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBridgeSourceCommand}.
 */
export interface UpdateBridgeSourceCommandInput extends UpdateBridgeSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBridgeSourceCommand}.
 */
export interface UpdateBridgeSourceCommandOutput extends UpdateBridgeSourceResponse, __MetadataBearer {}

/**
 * Updates an existing bridge source.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateBridgeSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateBridgeSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateBridgeSourceRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   FlowSource: { // UpdateBridgeFlowSourceRequest
 *     FlowArn: "STRING_VALUE",
 *     FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 *       VpcInterfaceName: "STRING_VALUE",
 *     },
 *   },
 *   NetworkSource: { // UpdateBridgeNetworkSourceRequest
 *     MulticastIp: "STRING_VALUE",
 *     MulticastSourceSettings: { // MulticastSourceSettings
 *       MulticastSourceIp: "STRING_VALUE",
 *     },
 *     NetworkName: "STRING_VALUE",
 *     Port: Number("int"),
 *     Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp",
 *   },
 *   SourceName: "STRING_VALUE", // required
 * };
 * const command = new UpdateBridgeSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBridgeSourceResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   Source: { // BridgeSource
 * //     FlowSource: { // BridgeFlowSource
 * //       FlowArn: "STRING_VALUE", // required
 * //       FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //         VpcInterfaceName: "STRING_VALUE",
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //       OutputArn: "STRING_VALUE",
 * //     },
 * //     NetworkSource: { // BridgeNetworkSource
 * //       MulticastIp: "STRING_VALUE", // required
 * //       MulticastSourceSettings: { // MulticastSourceSettings
 * //         MulticastSourceIp: "STRING_VALUE",
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //       NetworkName: "STRING_VALUE", // required
 * //       Port: Number("int"), // required
 * //       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBridgeSourceCommandInput - {@link UpdateBridgeSourceCommandInput}
 * @returns {@link UpdateBridgeSourceCommandOutput}
 * @see {@link UpdateBridgeSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateBridgeSourceCommandOutput} for command's `response` shape.
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
export class UpdateBridgeSourceCommand extends $Command
  .classBuilder<
    UpdateBridgeSourceCommandInput,
    UpdateBridgeSourceCommandOutput,
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
  .s("MediaConnect", "UpdateBridgeSource", {})
  .n("MediaConnectClient", "UpdateBridgeSourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBridgeSourceCommand)
  .de(de_UpdateBridgeSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBridgeSourceRequest;
      output: UpdateBridgeSourceResponse;
    };
    sdk: {
      input: UpdateBridgeSourceCommandInput;
      output: UpdateBridgeSourceCommandOutput;
    };
  };
}
