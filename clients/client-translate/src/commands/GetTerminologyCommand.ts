// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTerminologyRequest, GetTerminologyResponse } from "../models/models_0";
import { de_GetTerminologyCommand, se_GetTerminologyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTerminologyCommand}.
 */
export interface GetTerminologyCommandInput extends GetTerminologyRequest {}
/**
 * @public
 *
 * The output of {@link GetTerminologyCommand}.
 */
export interface GetTerminologyCommandOutput extends GetTerminologyResponse, __MetadataBearer {}

/**
 * <p>Retrieves a custom terminology.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, GetTerminologyCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, GetTerminologyCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TranslateClient(config);
 * const input = { // GetTerminologyRequest
 *   Name: "STRING_VALUE", // required
 *   TerminologyDataFormat: "CSV" || "TMX" || "TSV",
 * };
 * const command = new GetTerminologyCommand(input);
 * const response = await client.send(command);
 * // { // GetTerminologyResponse
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
 * //   TerminologyDataLocation: { // TerminologyDataLocation
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * //   AuxiliaryDataLocation: {
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTerminologyCommandInput - {@link GetTerminologyCommandInput}
 * @returns {@link GetTerminologyCommandOutput}
 * @see {@link GetTerminologyCommandInput} for command's `input` shape.
 * @see {@link GetTerminologyCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetTerminologyCommand extends $Command
  .classBuilder<
    GetTerminologyCommandInput,
    GetTerminologyCommandOutput,
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
  .s("AWSShineFrontendService_20170701", "GetTerminology", {})
  .n("TranslateClient", "GetTerminologyCommand")
  .f(void 0, void 0)
  .ser(se_GetTerminologyCommand)
  .de(de_GetTerminologyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTerminologyRequest;
      output: GetTerminologyResponse;
    };
    sdk: {
      input: GetTerminologyCommandInput;
      output: GetTerminologyCommandOutput;
    };
  };
}
