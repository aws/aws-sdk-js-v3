// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowMediaStreamsRequest, AddFlowMediaStreamsResponse } from "../models/models_0";
import { de_AddFlowMediaStreamsCommand, se_AddFlowMediaStreamsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddFlowMediaStreamsCommand}.
 */
export interface AddFlowMediaStreamsCommandInput extends AddFlowMediaStreamsRequest {}
/**
 * @public
 *
 * The output of {@link AddFlowMediaStreamsCommand}.
 */
export interface AddFlowMediaStreamsCommandOutput extends AddFlowMediaStreamsResponse, __MetadataBearer {}

/**
 * <p> Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowMediaStreamsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowMediaStreamsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // AddFlowMediaStreamsRequest
 *   FlowArn: "STRING_VALUE", // required
 *   MediaStreams: [ // __listOfAddMediaStreamRequest // required
 *     { // AddMediaStreamRequest
 *       Attributes: { // MediaStreamAttributesRequest
 *         Fmtp: { // FmtpRequest
 *           ChannelOrder: "STRING_VALUE",
 *           Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 *           ExactFramerate: "STRING_VALUE",
 *           Par: "STRING_VALUE",
 *           Range: "NARROW" || "FULL" || "FULLPROTECT",
 *           ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 *           Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 *         },
 *         Lang: "STRING_VALUE",
 *       },
 *       ClockRate: Number("int"),
 *       Description: "STRING_VALUE",
 *       MediaStreamId: Number("int"), // required
 *       MediaStreamName: "STRING_VALUE", // required
 *       MediaStreamType: "video" || "audio" || "ancillary-data", // required
 *       VideoFormat: "STRING_VALUE",
 *       MediaStreamTags: { // __mapOfString
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new AddFlowMediaStreamsCommand(input);
 * const response = await client.send(command);
 * // { // AddFlowMediaStreamsResponse
 * //   FlowArn: "STRING_VALUE",
 * //   MediaStreams: [ // __listOfMediaStream
 * //     { // MediaStream
 * //       Attributes: { // MediaStreamAttributes
 * //         Fmtp: { // Fmtp
 * //           ChannelOrder: "STRING_VALUE",
 * //           Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 * //           ExactFramerate: "STRING_VALUE",
 * //           Par: "STRING_VALUE",
 * //           Range: "NARROW" || "FULL" || "FULLPROTECT",
 * //           ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 * //           Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 * //         },
 * //         Lang: "STRING_VALUE",
 * //       },
 * //       ClockRate: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       Fmt: Number("int"), // required
 * //       MediaStreamId: Number("int"), // required
 * //       MediaStreamName: "STRING_VALUE", // required
 * //       MediaStreamType: "video" || "audio" || "ancillary-data", // required
 * //       VideoFormat: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddFlowMediaStreamsCommandInput - {@link AddFlowMediaStreamsCommandInput}
 * @returns {@link AddFlowMediaStreamsCommandOutput}
 * @see {@link AddFlowMediaStreamsCommandInput} for command's `input` shape.
 * @see {@link AddFlowMediaStreamsCommandOutput} for command's `response` shape.
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
export class AddFlowMediaStreamsCommand extends $Command
  .classBuilder<
    AddFlowMediaStreamsCommandInput,
    AddFlowMediaStreamsCommandOutput,
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
  .s("MediaConnect", "AddFlowMediaStreams", {})
  .n("MediaConnectClient", "AddFlowMediaStreamsCommand")
  .f(void 0, void 0)
  .ser(se_AddFlowMediaStreamsCommand)
  .de(de_AddFlowMediaStreamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddFlowMediaStreamsRequest;
      output: AddFlowMediaStreamsResponse;
    };
    sdk: {
      input: AddFlowMediaStreamsCommandInput;
      output: AddFlowMediaStreamsCommandOutput;
    };
  };
}
