// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddBridgeOutputsRequest, AddBridgeOutputsResponse } from "../models/models_0";
import { AddBridgeOutputs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds outputs to an existing bridge.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddBridgeOutputsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddBridgeOutputsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
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
export class AddBridgeOutputsCommand extends command<AddBridgeOutputsCommandInput, AddBridgeOutputsCommandOutput>(
  _ep0,
  _mw0,
  "AddBridgeOutputs",
  AddBridgeOutputs$
) {
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
