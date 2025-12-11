// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { UpdateFlowMediaStreamRequest, UpdateFlowMediaStreamResponse } from "../models/models_0";
import { UpdateFlowMediaStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlowMediaStreamCommand}.
 */
export interface UpdateFlowMediaStreamCommandInput extends UpdateFlowMediaStreamRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowMediaStreamCommand}.
 */
export interface UpdateFlowMediaStreamCommandOutput extends UpdateFlowMediaStreamResponse, __MetadataBearer {}

/**
 * <p> Updates an existing media stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowMediaStreamCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateFlowMediaStreamRequest
 *   Attributes: { // MediaStreamAttributesRequest
 *     Fmtp: { // FmtpRequest
 *       ChannelOrder: "STRING_VALUE",
 *       Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 *       ExactFramerate: "STRING_VALUE",
 *       Par: "STRING_VALUE",
 *       Range: "NARROW" || "FULL" || "FULLPROTECT",
 *       ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 *       Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 *     },
 *     Lang: "STRING_VALUE",
 *   },
 *   ClockRate: Number("int"),
 *   Description: "STRING_VALUE",
 *   FlowArn: "STRING_VALUE", // required
 *   MediaStreamName: "STRING_VALUE", // required
 *   MediaStreamType: "video" || "audio" || "ancillary-data",
 *   VideoFormat: "STRING_VALUE",
 * };
 * const command = new UpdateFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlowMediaStreamResponse
 * //   FlowArn: "STRING_VALUE",
 * //   MediaStream: { // MediaStream
 * //     Attributes: { // MediaStreamAttributes
 * //       Fmtp: { // Fmtp
 * //         ChannelOrder: "STRING_VALUE",
 * //         Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 * //         ExactFramerate: "STRING_VALUE",
 * //         Par: "STRING_VALUE",
 * //         Range: "NARROW" || "FULL" || "FULLPROTECT",
 * //         ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 * //         Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 * //       },
 * //       Lang: "STRING_VALUE",
 * //     },
 * //     ClockRate: Number("int"),
 * //     Description: "STRING_VALUE",
 * //     Fmt: Number("int"), // required
 * //     MediaStreamId: Number("int"), // required
 * //     MediaStreamName: "STRING_VALUE", // required
 * //     MediaStreamType: "video" || "audio" || "ancillary-data", // required
 * //     VideoFormat: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFlowMediaStreamCommandInput - {@link UpdateFlowMediaStreamCommandInput}
 * @returns {@link UpdateFlowMediaStreamCommandOutput}
 * @see {@link UpdateFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowMediaStreamCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
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
export class UpdateFlowMediaStreamCommand extends $Command
  .classBuilder<
    UpdateFlowMediaStreamCommandInput,
    UpdateFlowMediaStreamCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "UpdateFlowMediaStream", {})
  .n("MediaConnectClient", "UpdateFlowMediaStreamCommand")
  .sc(UpdateFlowMediaStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFlowMediaStreamRequest;
      output: UpdateFlowMediaStreamResponse;
    };
    sdk: {
      input: UpdateFlowMediaStreamCommandInput;
      output: UpdateFlowMediaStreamCommandOutput;
    };
  };
}
