// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { GetRouterInputSourceMetadataRequest, GetRouterInputSourceMetadataResponse } from "../models/models_0";
import { GetRouterInputSourceMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetRouterInputSourceMetadataCommandOutput
  extends GetRouterInputSourceMetadataResponse,
    __MetadataBearer {}

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
export class GetRouterInputSourceMetadataCommand extends $Command
  .classBuilder<
    GetRouterInputSourceMetadataCommandInput,
    GetRouterInputSourceMetadataCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "GetRouterInputSourceMetadata", {})
  .n("MediaConnectClient", "GetRouterInputSourceMetadataCommand")
  .sc(GetRouterInputSourceMetadata$)
  .build() {
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
