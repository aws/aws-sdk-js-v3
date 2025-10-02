// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ImportTerminologyRequest,
  ImportTerminologyRequestFilterSensitiveLog,
  ImportTerminologyResponse,
} from "../models/models_0";
import { de_ImportTerminologyCommand, se_ImportTerminologyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportTerminologyCommand}.
 */
export interface ImportTerminologyCommandInput extends ImportTerminologyRequest {}
/**
 * @public
 *
 * The output of {@link ImportTerminologyCommand}.
 */
export interface ImportTerminologyCommandOutput extends ImportTerminologyResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a custom terminology, depending on whether one already exists for the
 *       given terminology name. Importing a terminology with the same name as an existing one will
 *       merge the terminologies based on the chosen merge strategy. The only supported merge strategy
 *       is OVERWRITE, where the imported terminology overwrites the existing terminology of the same
 *       name.</p>
 *          <p>If you import a terminology that overwrites an existing one, the new terminology takes up
 *       to 10 minutes to fully propagate. After that, translations have access to the new
 *       terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ImportTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ImportTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // ImportTerminologyRequest
 *   Name: "STRING_VALUE", // required
 *   MergeStrategy: "OVERWRITE", // required
 *   Description: "STRING_VALUE",
 *   TerminologyData: { // TerminologyData
 *     File: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")     // required
 *     Format: "CSV" || "TMX" || "TSV", // required
 *     Directionality: "UNI" || "MULTI",
 *   },
 *   EncryptionKey: { // EncryptionKey
 *     Type: "KMS", // required
 *     Id: "STRING_VALUE", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ImportTerminologyCommand(input);
 * const response = await client.send(command);
 * // { // ImportTerminologyResponse
 * //   TerminologyProperties: { // TerminologyProperties
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     SourceLanguageCode: "STRING_VALUE",
 * //     TargetLanguageCodes: [ // LanguageCodeStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     EncryptionKey: { // EncryptionKey
 * //       Type: "KMS", // required
 * //       Id: "STRING_VALUE", // required
 * //     },
 * //     SizeBytes: Number("int"),
 * //     TermCount: Number("int"),
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     Directionality: "UNI" || "MULTI",
 * //     Message: "STRING_VALUE",
 * //     SkippedTermCount: Number("int"),
 * //     Format: "CSV" || "TMX" || "TSV",
 * //   },
 * //   AuxiliaryDataLocation: { // TerminologyDataLocation
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ImportTerminologyCommandInput - {@link ImportTerminologyCommandInput}
 * @returns {@link ImportTerminologyCommandOutput}
 * @see {@link ImportTerminologyCommandInput} for command's `input` shape.
 * @see {@link ImportTerminologyCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The specified limit has been exceeded. Review your request and retry it with a quantity
 *       below the stated limit.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have added too many tags to this resource. The maximum is 50 tags.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class ImportTerminologyCommand extends $Command
  .classBuilder<
    ImportTerminologyCommandInput,
    ImportTerminologyCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShineFrontendService_20170701", "ImportTerminology", {})
  .n("TranslateClient", "ImportTerminologyCommand")
  .f(ImportTerminologyRequestFilterSensitiveLog, void 0)
  .ser(se_ImportTerminologyCommand)
  .de(de_ImportTerminologyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportTerminologyRequest;
      output: ImportTerminologyResponse;
    };
    sdk: {
      input: ImportTerminologyCommandInput;
      output: ImportTerminologyCommandOutput;
    };
  };
}
