// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddBridgeOutputsRequest, AddBridgeOutputsResponse } from "../models/models_0";
import { de_AddBridgeOutputsCommand, se_AddBridgeOutputsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddBridgeOutputsCommand}.
 */
export interface AddBridgeOutputsCommandInput extends AddBridgeOutputsRequest {}
/**
 * @public
 *
 * The output of {@link AddBridgeOutputsCommand}.
 */
export interface AddBridgeOutputsCommandOutput extends AddBridgeOutputsResponse, __MetadataBearer {}

/**
 * <p> Adds outputs to an existing bridge.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddBridgeOutputsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddBridgeOutputsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // AddBridgeOutputsRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   Outputs: [ // __listOfAddBridgeOutputRequest // required
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
 * };
 * const command = new AddBridgeOutputsCommand(input);
 * const response = await client.send(command);
 * // { // AddBridgeOutputsResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   Outputs: [ // __listOfBridgeOutput
 * //     { // BridgeOutput
 * //       FlowOutput: { // BridgeFlowOutput
 * //         FlowArn: "STRING_VALUE", // required
 * //         FlowSourceArn: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //       },
 * //       NetworkOutput: { // BridgeNetworkOutput
 * //         IpAddress: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         NetworkName: "STRING_VALUE", // required
 * //         Port: Number("int"), // required
 * //         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //         Ttl: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddBridgeOutputsCommandInput - {@link AddBridgeOutputsCommandInput}
 * @returns {@link AddBridgeOutputsCommandOutput}
 * @see {@link AddBridgeOutputsCommandInput} for command's `input` shape.
 * @see {@link AddBridgeOutputsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 * </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 * </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 * </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.
 * </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.
 * </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy.
 * </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling.
 * </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class AddBridgeOutputsCommand extends $Command
  .classBuilder<
    AddBridgeOutputsCommandInput,
    AddBridgeOutputsCommandOutput,
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
  .s("MediaConnect", "AddBridgeOutputs", {})
  .n("MediaConnectClient", "AddBridgeOutputsCommand")
  .f(void 0, void 0)
  .ser(se_AddBridgeOutputsCommand)
  .de(de_AddBridgeOutputsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddBridgeOutputsRequest;
      output: AddBridgeOutputsResponse;
    };
    sdk: {
      input: AddBridgeOutputsCommandInput;
      output: AddBridgeOutputsCommandOutput;
    };
  };
}
