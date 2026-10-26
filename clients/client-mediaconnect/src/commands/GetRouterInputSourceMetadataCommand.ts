// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRouterInputSourceMetadataRequest, GetRouterInputSourceMetadataResponse } from "../models/models_1";
import { GetRouterInputSourceMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRouterInputSourceMetadataCommand}.
 */
export interface GetRouterInputSourceMetadataCommandInput extends GetRouterInputSourceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetRouterInputSourceMetadataCommand}.
 */
export interface GetRouterInputSourceMetadataCommandOutput extends GetRouterInputSourceMetadataResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed metadata information about a specific router input source, including stream details and connection state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, GetRouterInputSourceMetadataCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, GetRouterInputSourceMetadataCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // GetRouterInputSourceMetadataRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetRouterInputSourceMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetRouterInputSourceMetadataResponse
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   SourceMetadataDetails: { // RouterInputSourceMetadataDetails
 * //     SourceMetadataMessages: [ // RouterInputMessages // required
 * //       { // RouterInputMessage
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Timestamp: new Date("TIMESTAMP"), // required
 * //     RouterInputMetadata: { // RouterInputMetadata Union: only one key present
 * //       TransportStreamMediaInfo: { // TransportMediaInfo
 * //         Programs: [ // __listOfTransportStreamProgram // required
 * //           { // TransportStreamProgram
 * //             PcrPid: Number("int"), // required
 * //             ProgramName: "STRING_VALUE",
 * //             ProgramNumber: Number("int"), // required
 * //             ProgramPid: Number("int"), // required
 * //             Streams: [ // __listOfTransportStream // required
 * //               { // TransportStream
 * //                 Channels: Number("int"),
 * //                 Codec: "STRING_VALUE",
 * //                 Color: { // ColorInformation
 * //                   Colorimetry: "BT709" || "BT470M" || "BT470BG" || "BT601" || "SMPTE240M" || "GENERIC_FILM" || "BT2020" || "SMPTE428" || "SMPTE431" || "SMPTE432",
 * //                   TransferCharacteristics: "BT709" || "BT470M" || "BT470BG" || "BT601" || "SMPTE240M" || "LINEAR" || "LOG100" || "LOG316" || "IEC61966_2_4" || "BT1361_ECG" || "IEC61966_2_1" || "BT2020_10" || "BT2020_12" || "BT2100_PQ" || "SMPTE428" || "BT2100_HLG",
 * //                   MatrixCoefficients: "IDENTITY" || "BT709" || "FCC" || "BT470BG" || "BT601" || "SMPTE240M" || "YCGCO" || "BT2020_NCL" || "BT2020_CL" || "SMPTE2085" || "CHROMATICITY_DERIVED_NCL" || "CHROMATICITY_DERIVED_CL" || "BT2100_ICTCP" || "IPT_C2",
 * //                 },
 * //                 FrameRate: "STRING_VALUE",
 * //                 FrameResolution: { // FrameResolution
 * //                   FrameHeight: Number("int"), // required
 * //                   FrameWidth: Number("int"), // required
 * //                 },
 * //                 Pid: Number("int"), // required
 * //                 SampleRate: Number("int"),
 * //                 SampleSize: Number("int"),
 * //                 StreamType: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         TsId: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRouterInputSourceMetadataCommandInput - {@link GetRouterInputSourceMetadataCommandInput}
 * @returns {@link GetRouterInputSourceMetadataCommandOutput}
 * @see {@link GetRouterInputSourceMetadataCommandInput} for command's `input` shape.
 * @see {@link GetRouterInputSourceMetadataCommandOutput} for command's `response` shape.
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
export class GetRouterInputSourceMetadataCommand extends command<GetRouterInputSourceMetadataCommandInput, GetRouterInputSourceMetadataCommandOutput>(
  _ep0,
  _mw0,
  "GetRouterInputSourceMetadata",
  GetRouterInputSourceMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRouterInputSourceMetadataRequest;
      output: GetRouterInputSourceMetadataResponse;
    };
    sdk: {
      input: GetRouterInputSourceMetadataCommandInput;
      output: GetRouterInputSourceMetadataCommandOutput;
    };
  };
}
