// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLanguageModelsRequest, ListLanguageModelsResponse } from "../models/models_0";
import { de_ListLanguageModelsCommand, se_ListLanguageModelsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLanguageModelsCommand}.
 */
export interface ListLanguageModelsCommandInput extends ListLanguageModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListLanguageModelsCommand}.
 */
export interface ListLanguageModelsCommandOutput extends ListLanguageModelsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of custom language models that match the specified criteria. If no
 *             criteria are specified, all custom language models are returned.</p>
 *          <p>To get detailed information about a specific custom language model, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListLanguageModelsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListLanguageModelsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // ListLanguageModelsRequest
 *   StatusEquals: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLanguageModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListLanguageModelsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Models: [ // Models
 * //     { // LanguageModel
 * //       ModelName: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LanguageCode: "en-US" || "hi-IN" || "es-US" || "en-GB" || "en-AU" || "de-DE" || "ja-JP",
 * //       BaseModelName: "NarrowBand" || "WideBand",
 * //       ModelStatus: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //       UpgradeAvailability: true || false,
 * //       FailureReason: "STRING_VALUE",
 * //       InputDataConfig: { // InputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         TuningDataS3Uri: "STRING_VALUE",
 * //         DataAccessRoleArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLanguageModelsCommandInput - {@link ListLanguageModelsCommandInput}
 * @returns {@link ListLanguageModelsCommandOutput}
 * @see {@link ListLanguageModelsCommandInput} for command's `input` shape.
 * @see {@link ListLanguageModelsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
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
export class ListLanguageModelsCommand extends $Command
  .classBuilder<
    ListLanguageModelsCommandInput,
    ListLanguageModelsCommandOutput,
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
  .s("Transcribe", "ListLanguageModels", {})
  .n("TranscribeClient", "ListLanguageModelsCommand")
  .f(void 0, void 0)
  .ser(se_ListLanguageModelsCommand)
  .de(de_ListLanguageModelsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLanguageModelsRequest;
      output: ListLanguageModelsResponse;
    };
    sdk: {
      input: ListLanguageModelsCommandInput;
      output: ListLanguageModelsCommandOutput;
    };
  };
}
