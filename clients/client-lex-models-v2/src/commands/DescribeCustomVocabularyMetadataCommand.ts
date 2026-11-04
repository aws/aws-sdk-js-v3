// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeCustomVocabularyMetadataRequest,
  DescribeCustomVocabularyMetadataResponse,
} from "../models/models_0";
import { DescribeCustomVocabularyMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCustomVocabularyMetadataCommand}.
 */
export interface DescribeCustomVocabularyMetadataCommandInput extends DescribeCustomVocabularyMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomVocabularyMetadataCommand}.
 */
export interface DescribeCustomVocabularyMetadataCommandOutput extends DescribeCustomVocabularyMetadataResponse, __MetadataBearer {}

/**
 * Provides metadata information about a custom vocabulary.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeCustomVocabularyMetadataCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeCustomVocabularyMetadataCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeCustomVocabularyMetadataRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomVocabularyMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomVocabularyMetadataResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   customVocabularyStatus: "Ready" || "Deleting" || "Exporting" || "Importing" || "Creating",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeCustomVocabularyMetadataCommandInput - {@link DescribeCustomVocabularyMetadataCommandInput}
 * @returns {@link DescribeCustomVocabularyMetadataCommandOutput}
 * @see {@link DescribeCustomVocabularyMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomVocabularyMetadataCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You asked to describe a resource that doesn't exist. Check the resource that you are requesting and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have reached a quota for your bot.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request rate is too high. Reduce the frequency of requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the input parameters in your request isn't valid. Check the parameters and try your request again.
 *
 * @throws {@link LexModelsV2ServiceException}
 *
 * Base exception class for all service exceptions from LexModelsV2 service.
 *
 * @public
 */
export class DescribeCustomVocabularyMetadataCommand extends command<DescribeCustomVocabularyMetadataCommandInput, DescribeCustomVocabularyMetadataCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCustomVocabularyMetadata",
  DescribeCustomVocabularyMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomVocabularyMetadataRequest;
      output: DescribeCustomVocabularyMetadataResponse;
    };
    sdk: {
      input: DescribeCustomVocabularyMetadataCommandInput;
      output: DescribeCustomVocabularyMetadataCommandOutput;
    };
  };
}
