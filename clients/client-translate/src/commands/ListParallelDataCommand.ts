// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListParallelDataRequest, ListParallelDataResponse } from "../models/models_0";
import { ListParallelData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListParallelDataCommand}.
 */
export interface ListParallelDataCommandInput extends ListParallelDataRequest {}
/**
 * @public
 *
 * The output of {@link ListParallelDataCommand}.
 */
export interface ListParallelDataCommandOutput extends ListParallelDataResponse, __MetadataBearer {}

/**
 * <p>Provides a list of your parallel data resources in Amazon Translate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // ListParallelDataRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListParallelDataCommand(input);
 * const response = await client.send(command);
 * // { // ListParallelDataResponse
 * //   ParallelDataPropertiesList: [ // ParallelDataPropertiesList
 * //     { // ParallelDataProperties
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //       SourceLanguageCode: "STRING_VALUE",
 * //       TargetLanguageCodes: [ // LanguageCodeStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ParallelDataConfig: { // ParallelDataConfig
 * //         S3Uri: "STRING_VALUE",
 * //         Format: "TSV" || "CSV" || "TMX",
 * //       },
 * //       Message: "STRING_VALUE",
 * //       ImportedDataSize: Number("long"),
 * //       ImportedRecordCount: Number("long"),
 * //       FailedRecordCount: Number("long"),
 * //       SkippedRecordCount: Number("long"),
 * //       EncryptionKey: { // EncryptionKey
 * //         Type: "KMS", // required
 * //         Id: "STRING_VALUE", // required
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       LatestUpdateAttemptStatus: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //       LatestUpdateAttemptAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListParallelDataCommandInput - {@link ListParallelDataCommandInput}
 * @returns {@link ListParallelDataCommandOutput}
 * @see {@link ListParallelDataCommandInput} for command's `input` shape.
 * @see {@link ListParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class ListParallelDataCommand extends command<ListParallelDataCommandInput, ListParallelDataCommandOutput>(
  _ep0,
  _mw0,
  "ListParallelData",
  ListParallelData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListParallelDataRequest;
      output: ListParallelDataResponse;
    };
    sdk: {
      input: ListParallelDataCommandInput;
      output: ListParallelDataCommandOutput;
    };
  };
}
