// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisVideoArchivedMediaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisVideoArchivedMediaClient";
import type { GetImagesInput, GetImagesOutput } from "../models/models_0";
import { GetImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetImagesCommand}.
 */
export interface GetImagesCommandInput extends GetImagesInput {}
/**
 * @public
 *
 * The output of {@link GetImagesCommand}.
 */
export interface GetImagesCommandOutput extends GetImagesOutput, __MetadataBearer {}

/**
 * <p>Retrieves a list of images corresponding to each timestamp for a given time range,
 *             sampling interval, and image format configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoArchivedMediaClient, GetImagesCommand } from "@aws-sdk/client-kinesis-video-archived-media"; // ES Modules import
 * // const { KinesisVideoArchivedMediaClient, GetImagesCommand } = require("@aws-sdk/client-kinesis-video-archived-media"); // CommonJS import
 * // import type { KinesisVideoArchivedMediaClientConfig } from "@aws-sdk/client-kinesis-video-archived-media";
 * const config = {}; // type is KinesisVideoArchivedMediaClientConfig
 * const client = new KinesisVideoArchivedMediaClient(config);
 * const input = { // GetImagesInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   ImageSelectorType: "PRODUCER_TIMESTAMP" || "SERVER_TIMESTAMP", // required
 *   StartTimestamp: new Date("TIMESTAMP"), // required
 *   EndTimestamp: new Date("TIMESTAMP"), // required
 *   SamplingInterval: Number("int"),
 *   Format: "JPEG" || "PNG", // required
 *   FormatConfig: { // FormatConfig
 *     "<keys>": "STRING_VALUE",
 *   },
 *   WidthPixels: Number("int"),
 *   HeightPixels: Number("int"),
 *   MaxResults: Number("long"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetImagesCommand(input);
 * const response = await client.send(command);
 * // { // GetImagesOutput
 * //   Images: [ // Images
 * //     { // Image
 * //       TimeStamp: new Date("TIMESTAMP"),
 * //       Error: "NO_MEDIA" || "MEDIA_ERROR",
 * //       ImageContent: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetImagesCommandInput - {@link GetImagesCommandInput}
 * @returns {@link GetImagesCommandOutput}
 * @see {@link GetImagesCommandInput} for command's `input` shape.
 * @see {@link GetImagesCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoArchivedMediaClientResolvedConfig | config} for KinesisVideoArchivedMediaClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded a limit. Try making the call later. For information about limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be
 *             used.</p>
 *
 * @throws {@link NoDataRetentionException} (client fault)
 *  <p>
 *             <code>GetImages</code> was requested for a stream that does not retain data (that is, has
 *             a <code>DataRetentionInHours</code> of 0). </p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Status Code: 403, The caller is not authorized to perform an operation on the given
 *             stream, or the token has expired.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *             <code>GetImages</code> will throw this error when Kinesis Video Streams can't find the stream
 *             that you specified.</p>
 *          <p>
 *             <code>GetHLSStreamingSessionURL</code> and <code>GetDASHStreamingSessionURL</code> throw
 *             this error if a session with a <code>PlaybackMode</code> of <code>ON_DEMAND</code> or
 *                 <code>LIVE_REPLAY</code>is requested for a stream that has no fragments within the
 *             requested time range, or if a session with a <code>PlaybackMode</code> of
 *                 <code>LIVE</code> is requested for a stream that has no fragments within the last 30
 *             seconds.</p>
 *
 * @throws {@link KinesisVideoArchivedMediaServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideoArchivedMedia service.</p>
 *
 *
 * @public
 */
export class GetImagesCommand extends $Command
  .classBuilder<
    GetImagesCommandInput,
    GetImagesCommandOutput,
    KinesisVideoArchivedMediaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoArchivedMediaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSAcuityReader", "GetImages", {})
  .n("KinesisVideoArchivedMediaClient", "GetImagesCommand")
  .sc(GetImages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetImagesInput;
      output: GetImagesOutput;
    };
    sdk: {
      input: GetImagesCommandInput;
      output: GetImagesCommandOutput;
    };
  };
}
