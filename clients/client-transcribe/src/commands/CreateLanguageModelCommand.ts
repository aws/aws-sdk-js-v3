// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLanguageModelRequest, CreateLanguageModelResponse } from "../models/models_0";
import { de_CreateLanguageModelCommand, se_CreateLanguageModelCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLanguageModelCommand}.
 */
export interface CreateLanguageModelCommandInput extends CreateLanguageModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateLanguageModelCommand}.
 */
export interface CreateLanguageModelCommandOutput extends CreateLanguageModelResponse, __MetadataBearer {}

/**
 * <p>Creates a new custom language model.</p>
 *          <p>When creating a new custom language model, you must specify:</p>
 *          <ul>
 *             <li>
 *                <p>If you want a Wideband (audio sample rates over 16,000 Hz) or Narrowband
 *                     (audio sample rates under 16,000 Hz) base model</p>
 *             </li>
 *             <li>
 *                <p>The location of your training and tuning files (this must be an Amazon S3 URI)</p>
 *             </li>
 *             <li>
 *                <p>The language of your model</p>
 *             </li>
 *             <li>
 *                <p>A unique name for your model</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, CreateLanguageModelCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, CreateLanguageModelCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // CreateLanguageModelRequest
 *   LanguageCode: "en-US" || "hi-IN" || "es-US" || "en-GB" || "en-AU" || "de-DE" || "ja-JP", // required
 *   BaseModelName: "NarrowBand" || "WideBand", // required
 *   ModelName: "STRING_VALUE", // required
 *   InputDataConfig: { // InputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     TuningDataS3Uri: "STRING_VALUE",
 *     DataAccessRoleArn: "STRING_VALUE", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateLanguageModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateLanguageModelResponse
 * //   LanguageCode: "en-US" || "hi-IN" || "es-US" || "en-GB" || "en-AU" || "de-DE" || "ja-JP",
 * //   BaseModelName: "NarrowBand" || "WideBand",
 * //   ModelName: "STRING_VALUE",
 * //   InputDataConfig: { // InputDataConfig
 * //     S3Uri: "STRING_VALUE", // required
 * //     TuningDataS3Uri: "STRING_VALUE",
 * //     DataAccessRoleArn: "STRING_VALUE", // required
 * //   },
 * //   ModelStatus: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * // };
 *
 * ```
 *
 * @param CreateLanguageModelCommandInput - {@link CreateLanguageModelCommandInput}
 * @returns {@link CreateLanguageModelCommandOutput}
 * @see {@link CreateLanguageModelCommandInput} for command's `input` shape.
 * @see {@link CreateLanguageModelCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource already exists with this name. Resource names must be unique within an
 *                 Amazon Web Services account.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 *
 * @public
 */
export class CreateLanguageModelCommand extends $Command
  .classBuilder<
    CreateLanguageModelCommandInput,
    CreateLanguageModelCommandOutput,
    TranscribeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranscribeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Transcribe", "CreateLanguageModel", {})
  .n("TranscribeClient", "CreateLanguageModelCommand")
  .f(void 0, void 0)
  .ser(se_CreateLanguageModelCommand)
  .de(de_CreateLanguageModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLanguageModelRequest;
      output: CreateLanguageModelResponse;
    };
    sdk: {
      input: CreateLanguageModelCommandInput;
      output: CreateLanguageModelCommandOutput;
    };
  };
}
