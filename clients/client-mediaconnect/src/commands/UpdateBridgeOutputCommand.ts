// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBridgeOutputRequest, UpdateBridgeOutputResponse } from "../models/models_0";
import { UpdateBridgeOutput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateBridgeOutputCommand}.
 */
export interface UpdateBridgeOutputCommandInput extends UpdateBridgeOutputRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBridgeOutputCommand}.
 */
export interface UpdateBridgeOutputCommandOutput extends UpdateBridgeOutputResponse, __MetadataBearer {}

/**
 * Updates an existing bridge output.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateBridgeOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateBridgeOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateBridgeOutputRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   NetworkOutput: { // UpdateBridgeNetworkOutputRequest
 *     IpAddress: "STRING_VALUE",
 *     NetworkName: "STRING_VALUE",
 *     Port: Number("int"),
 *     Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq",
 *     Ttl: Number("int"),
 *   },
 *   OutputName: "STRING_VALUE", // required
 * };
 * const command = new UpdateBridgeOutputCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBridgeOutputResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   Output: { // BridgeOutput
 * //     FlowOutput: { // BridgeFlowOutput
 * //       FlowArn: "STRING_VALUE", // required
 * //       FlowSourceArn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //     NetworkOutput: { // BridgeNetworkOutput
 * //       IpAddress: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       NetworkName: "STRING_VALUE", // required
 * //       Port: Number("int"), // required
 * //       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //       Ttl: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBridgeOutputCommandInput - {@link UpdateBridgeOutputCommandInput}
 * @returns {@link UpdateBridgeOutputCommandOutput}
 * @see {@link UpdateBridgeOutputCommandInput} for command's `input` shape.
 * @see {@link UpdateBridgeOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class UpdateBridgeOutputCommand extends command<UpdateBridgeOutputCommandInput, UpdateBridgeOutputCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBridgeOutput",
  UpdateBridgeOutput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBridgeOutputRequest;
      output: UpdateBridgeOutputResponse;
    };
    sdk: {
      input: UpdateBridgeOutputCommandInput;
      output: UpdateBridgeOutputCommandOutput;
    };
  };
}
