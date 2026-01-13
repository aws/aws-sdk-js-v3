// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetParallelDataRequest, GetParallelDataResponse } from "../models/models_0";
import { GetParallelData$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetParallelDataCommand}.
 */
export interface GetParallelDataCommandInput extends GetParallelDataRequest {}
/**
 * @public
 *
 * The output of {@link GetParallelDataCommand}.
 */
export interface GetParallelDataCommandOutput extends GetParallelDataResponse, __MetadataBearer {}

/**
 * <p>Provides information about a parallel data resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, GetParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, GetParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // GetParallelDataRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetParallelDataCommand(input);
 * const response = await client.send(command);
 * // { // GetParallelDataResponse
 * //   ParallelDataProperties: { // ParallelDataProperties
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     SourceLanguageCode: "STRING_VALUE",
 * //     TargetLanguageCodes: [ // LanguageCodeStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ParallelDataConfig: { // ParallelDataConfig
 * //       S3Uri: "STRING_VALUE",
 * //       Format: "TSV" || "CSV" || "TMX",
 * //     },
 * //     Message: "STRING_VALUE",
 * //     ImportedDataSize: Number("long"),
 * //     ImportedRecordCount: Number("long"),
 * //     FailedRecordCount: Number("long"),
 * //     SkippedRecordCount: Number("long"),
 * //     EncryptionKey: { // EncryptionKey
 * //       Type: "KMS", // required
 * //       Id: "STRING_VALUE", // required
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     LatestUpdateAttemptStatus: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     LatestUpdateAttemptAt: new Date("TIMESTAMP"),
 * //   },
 * //   DataLocation: { // ParallelDataDataLocation
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * //   AuxiliaryDataLocation: {
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * //   LatestUpdateAttemptAuxiliaryDataLocation: {
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetParallelDataCommandInput - {@link GetParallelDataCommandInput}
 * @returns {@link GetParallelDataCommandOutput}
 * @see {@link GetParallelDataCommandInput} for command's `input` shape.
 * @see {@link GetParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
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
export class GetParallelDataCommand extends $Command
  .classBuilder<
    GetParallelDataCommandInput,
    GetParallelDataCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShineFrontendService_20170701", "GetParallelData", {})
  .n("TranslateClient", "GetParallelDataCommand")
  .sc(GetParallelData$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParallelDataRequest;
      output: GetParallelDataResponse;
    };
    sdk: {
      input: GetParallelDataCommandInput;
      output: GetParallelDataCommandOutput;
    };
  };
}
