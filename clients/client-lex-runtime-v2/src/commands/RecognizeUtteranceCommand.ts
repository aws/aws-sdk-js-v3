// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type {
  MetadataBearer as __MetadataBearer,
  StreamingBlobPayloadInputTypes,
  StreamingBlobPayloadOutputTypes,
} from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LexRuntimeV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexRuntimeV2Client";
import { RecognizeUtteranceRequest, RecognizeUtteranceResponse } from "../models/models_0";
import { RecognizeUtterance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RecognizeUtteranceCommand}.
 */
export interface RecognizeUtteranceCommandInput extends Omit<RecognizeUtteranceRequest, "inputStream"> {
  inputStream?: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link RecognizeUtteranceCommand}.
 */
export interface RecognizeUtteranceCommandOutput
  extends Omit<RecognizeUtteranceResponse, "audioStream">,
    __MetadataBearer {
  audioStream?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use
 *          this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2
 *          interprets the user input using the machine learning model built for
 *          the bot.</p>
 *          <p>The following request fields must be compressed with gzip and then
 *          base64 encoded before you send them to Amazon Lex V2. </p>
 *          <ul>
 *             <li>
 *                <p>requestAttributes</p>
 *             </li>
 *             <li>
 *                <p>sessionState</p>
 *             </li>
 *          </ul>
 *          <p>The following response fields are compressed using gzip and then
 *          base64 encoded by Amazon Lex V2. Before you can use these fields, you must
 *          decode and decompress them. </p>
 *          <ul>
 *             <li>
 *                <p>inputTranscript</p>
 *             </li>
 *             <li>
 *                <p>interpretations</p>
 *             </li>
 *             <li>
 *                <p>messages</p>
 *             </li>
 *             <li>
 *                <p>requestAttributes</p>
 *             </li>
 *             <li>
 *                <p>sessionState</p>
 *             </li>
 *          </ul>
 *          <p>The example contains a Java application that compresses and encodes
 *          a Java object to send to Amazon Lex V2, and a second that decodes and
 *          decompresses a response from Amazon Lex V2.</p>
 *          <p>If the optional post-fulfillment response is specified, the messages
 *          are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Success message</b> - Returned if
 *                the Lambda function completes successfully and the intent state is
 *                fulfilled or ready fulfillment if the message is present.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Failed message</b> - The failed
 *                message is returned if the Lambda function throws an exception or
 *                if the Lambda function returns a failed intent state without a
 *                message.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Timeout message</b> - If you
 *                don't configure a timeout message and a timeout, and the Lambda
 *                function doesn't return within 30 seconds, the timeout message is
 *                returned. If you configure a timeout, the timeout message is
 *                returned when the period times out. </p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeV2Client, RecognizeUtteranceCommand } from "@aws-sdk/client-lex-runtime-v2"; // ES Modules import
 * // const { LexRuntimeV2Client, RecognizeUtteranceCommand } = require("@aws-sdk/client-lex-runtime-v2"); // CommonJS import
 * // import type { LexRuntimeV2ClientConfig } from "@aws-sdk/client-lex-runtime-v2";
 * const config = {}; // type is LexRuntimeV2ClientConfig
 * const client = new LexRuntimeV2Client(config);
 * const input = { // RecognizeUtteranceRequest
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   sessionState: "STRING_VALUE",
 *   requestAttributes: "STRING_VALUE",
 *   requestContentType: "STRING_VALUE", // required
 *   responseContentType: "STRING_VALUE",
 *   inputStream: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes
 * };
 * const command = new RecognizeUtteranceCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.audioStream.transformToByteArray();
 * // const str = await response.audioStream.transformToString();
 * // response.audioStream.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // RecognizeUtteranceResponse
 * //   inputMode: "STRING_VALUE",
 * //   contentType: "STRING_VALUE",
 * //   messages: "STRING_VALUE",
 * //   interpretations: "STRING_VALUE",
 * //   sessionState: "STRING_VALUE",
 * //   requestAttributes: "STRING_VALUE",
 * //   sessionId: "STRING_VALUE",
 * //   inputTranscript: "STRING_VALUE",
 * //   audioStream: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   recognizedBotMember: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RecognizeUtteranceCommandInput - {@link RecognizeUtteranceCommandInput}
 * @returns {@link RecognizeUtteranceCommandOutput}
 * @see {@link RecognizeUtteranceCommandInput} for command's `input` shape.
 * @see {@link RecognizeUtteranceCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeV2ClientResolvedConfig | config} for LexRuntimeV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p></p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p></p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p></p>
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  <p></p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p></p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p></p>
 *
 * @throws {@link LexRuntimeV2ServiceException}
 * <p>Base exception class for all service exceptions from LexRuntimeV2 service.</p>
 *
 *
 * @public
 */
export class RecognizeUtteranceCommand extends $Command
  .classBuilder<
    RecognizeUtteranceCommandInput,
    RecognizeUtteranceCommandOutput,
    LexRuntimeV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexRuntimeV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseRunTimeServiceApi2_0", "RecognizeUtterance", {})
  .n("LexRuntimeV2Client", "RecognizeUtteranceCommand")
  .sc(RecognizeUtterance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RecognizeUtteranceRequest;
      output: RecognizeUtteranceResponse;
    };
    sdk: {
      input: RecognizeUtteranceCommandInput;
      output: RecognizeUtteranceCommandOutput;
    };
  };
}
