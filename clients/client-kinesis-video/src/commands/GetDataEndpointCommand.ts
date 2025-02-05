// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { GetDataEndpointInput, GetDataEndpointOutput } from "../models/models_0";
import { de_GetDataEndpointCommand, se_GetDataEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataEndpointCommand}.
 */
export interface GetDataEndpointCommandInput extends GetDataEndpointInput {}
/**
 * @public
 *
 * The output of {@link GetDataEndpointCommand}.
 */
export interface GetDataEndpointCommandOutput extends GetDataEndpointOutput, __MetadataBearer {}

/**
 * <p>Gets an endpoint for a specified stream for either reading or writing. Use this
 *             endpoint in your application to read from the specified stream (using the
 *                 <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write
 *             to it (using the <code>PutMedia</code> operation).
 *             </p>
 *          <note>
 *             <p>The returned endpoint does not have the API name appended. The client needs to
 *                 add the API name to the returned endpoint.</p>
 *          </note>
 *          <p>In the request, specify the stream either by <code>StreamName</code> or
 *                 <code>StreamARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, GetDataEndpointCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, GetDataEndpointCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KinesisVideoClient(config);
 * const input = { // GetDataEndpointInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   APIName: "PUT_MEDIA" || "GET_MEDIA" || "LIST_FRAGMENTS" || "GET_MEDIA_FOR_FRAGMENT_LIST" || "GET_HLS_STREAMING_SESSION_URL" || "GET_DASH_STREAMING_SESSION_URL" || "GET_CLIP" || "GET_IMAGES", // required
 * };
 * const command = new GetDataEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetDataEndpointOutput
 * //   DataEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataEndpointCommandInput - {@link GetDataEndpointCommandInput}
 * @returns {@link GetDataEndpointCommandOutput}
 * @see {@link GetDataEndpointCommandInput} for command's `input` shape.
 * @see {@link GetDataEndpointCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The caller is not authorized to perform this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 * @public
 */
export class GetDataEndpointCommand extends $Command
  .classBuilder<
    GetDataEndpointCommandInput,
    GetDataEndpointCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisVideo_20170930", "GetDataEndpoint", {})
  .n("KinesisVideoClient", "GetDataEndpointCommand")
  .f(void 0, void 0)
  .ser(se_GetDataEndpointCommand)
  .de(de_GetDataEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataEndpointInput;
      output: GetDataEndpointOutput;
    };
    sdk: {
      input: GetDataEndpointCommandInput;
      output: GetDataEndpointCommandOutput;
    };
  };
}
