// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTestSetsRequest, ListTestSetsResponse } from "../models/models_1";
import { ListTestSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTestSetsCommand}.
 */
export interface ListTestSetsCommandInput extends ListTestSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestSetsCommand}.
 */
export interface ListTestSetsCommandOutput extends ListTestSetsResponse, __MetadataBearer {}

/**
 * The list of the test sets
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListTestSetsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListTestSetsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // ListTestSetsRequest
 *   sortBy: { // TestSetSortBy
 *     attribute: "TestSetName" || "LastUpdatedDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestSetsResponse
 * //   testSets: [ // TestSetSummaryList
 * //     { // TestSetSummary
 * //       testSetId: "STRING_VALUE",
 * //       testSetName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       modality: "Text" || "Audio",
 * //       status: "Importing" || "PendingAnnotation" || "Deleting" || "ValidationError" || "Ready",
 * //       roleArn: "STRING_VALUE",
 * //       numTurns: Number("int"),
 * //       storageLocation: { // TestSetStorageLocation
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3Path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestSetsCommandInput - {@link ListTestSetsCommandInput}
 * @returns {@link ListTestSetsCommandOutput}
 * @see {@link ListTestSetsCommandInput} for command's `input` shape.
 * @see {@link ListTestSetsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
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
export class ListTestSetsCommand extends command<ListTestSetsCommandInput, ListTestSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListTestSets",
  ListTestSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTestSetsRequest;
      output: ListTestSetsResponse;
    };
    sdk: {
      input: ListTestSetsCommandInput;
      output: ListTestSetsCommandOutput;
    };
  };
}
