// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DescribeFlowSourceMetadataRequest, DescribeFlowSourceMetadataResponse } from "../models/models_0";
import { de_DescribeFlowSourceMetadataCommand, se_DescribeFlowSourceMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowSourceMetadataCommand}.
 */
export interface DescribeFlowSourceMetadataCommandInput extends DescribeFlowSourceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowSourceMetadataCommand}.
 */
export interface DescribeFlowSourceMetadataCommandOutput extends DescribeFlowSourceMetadataResponse, __MetadataBearer {}

/**
 * <p> The <code>DescribeFlowSourceMetadata</code> API is used to view information about the flow's source transport stream and programs. This API displays status messages about the flow's source as well as details about the program's video, audio, and other data. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeFlowSourceMetadataCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeFlowSourceMetadataCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // DescribeFlowSourceMetadataRequest
 *   FlowArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlowSourceMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowSourceMetadataResponse
 * //   FlowArn: "STRING_VALUE",
 * //   Messages: [ // __listOfMessageDetail
 * //     { // MessageDetail
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //       ResourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Timestamp: new Date("TIMESTAMP"),
 * //   TransportMediaInfo: { // TransportMediaInfo
 * //     Programs: [ // __listOfTransportStreamProgram // required
 * //       { // TransportStreamProgram
 * //         PcrPid: Number("int"), // required
 * //         ProgramName: "STRING_VALUE",
 * //         ProgramNumber: Number("int"), // required
 * //         ProgramPid: Number("int"), // required
 * //         Streams: [ // __listOfTransportStream // required
 * //           { // TransportStream
 * //             Channels: Number("int"),
 * //             Codec: "STRING_VALUE",
 * //             FrameRate: "STRING_VALUE",
 * //             FrameResolution: { // FrameResolution
 * //               FrameHeight: Number("int"), // required
 * //               FrameWidth: Number("int"), // required
 * //             },
 * //             Pid: Number("int"), // required
 * //             SampleRate: Number("int"),
 * //             SampleSize: Number("int"),
 * //             StreamType: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFlowSourceMetadataCommandInput - {@link DescribeFlowSourceMetadataCommandInput}
 * @returns {@link DescribeFlowSourceMetadataCommandOutput}
 * @see {@link DescribeFlowSourceMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowSourceMetadataCommandOutput} for command's `response` shape.
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
export class DescribeFlowSourceMetadataCommand extends $Command
  .classBuilder<
    DescribeFlowSourceMetadataCommandInput,
    DescribeFlowSourceMetadataCommandOutput,
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
  .s("MediaConnect", "DescribeFlowSourceMetadata", {})
  .n("MediaConnectClient", "DescribeFlowSourceMetadataCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFlowSourceMetadataCommand)
  .de(de_DescribeFlowSourceMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFlowSourceMetadataRequest;
      output: DescribeFlowSourceMetadataResponse;
    };
    sdk: {
      input: DescribeFlowSourceMetadataCommandInput;
      output: DescribeFlowSourceMetadataCommandOutput;
    };
  };
}
