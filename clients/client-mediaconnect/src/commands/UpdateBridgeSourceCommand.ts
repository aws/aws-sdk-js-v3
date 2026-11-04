// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateBridgeSourceRequest, UpdateBridgeSourceResponse } from "../models/models_0";
import { UpdateBridgeSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateBridgeSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateBridgeSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
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
 *     Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq",
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
 * //       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
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
export class UpdateBridgeSourceCommand extends command<UpdateBridgeSourceCommandInput, UpdateBridgeSourceCommandOutput>(
  _ep0,
  _mw0,
  "UpdateBridgeSource",
  UpdateBridgeSource$
) {
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
