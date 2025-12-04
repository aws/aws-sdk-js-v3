// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTerminologiesRequest, ListTerminologiesResponse } from "../models/models_0";
import { ListTerminologies } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTerminologiesCommand}.
 */
export interface ListTerminologiesCommandInput extends ListTerminologiesRequest {}
/**
 * @public
 *
 * The output of {@link ListTerminologiesCommand}.
 */
export interface ListTerminologiesCommandOutput extends ListTerminologiesResponse, __MetadataBearer {}

/**
 * <p>Provides a list of custom terminologies associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTerminologiesCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListTerminologiesCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // import type { TranslateClientConfig } from "@aws-sdk/client-translate";
 * const config = {}; // type is TranslateClientConfig
 * const client = new TranslateClient(config);
 * const input = { // ListTerminologiesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTerminologiesCommand(input);
 * const response = await client.send(command);
 * // { // ListTerminologiesResponse
 * //   TerminologyPropertiesList: [ // TerminologyPropertiesList
 * //     { // TerminologyProperties
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       SourceLanguageCode: "STRING_VALUE",
 * //       TargetLanguageCodes: [ // LanguageCodeStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       EncryptionKey: { // EncryptionKey
 * //         Type: "KMS", // required
 * //         Id: "STRING_VALUE", // required
 * //       },
 * //       SizeBytes: Number("int"),
 * //       TermCount: Number("int"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Directionality: "UNI" || "MULTI",
 * //       Message: "STRING_VALUE",
 * //       SkippedTermCount: Number("int"),
 * //       Format: "CSV" || "TMX" || "TSV",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTerminologiesCommandInput - {@link ListTerminologiesCommandInput}
 * @returns {@link ListTerminologiesCommandOutput}
 * @see {@link ListTerminologiesCommandInput} for command's `input` shape.
 * @see {@link ListTerminologiesCommandOutput} for command's `response` shape.
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
export class ListTerminologiesCommand extends $Command
  .classBuilder<
    ListTerminologiesCommandInput,
    ListTerminologiesCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShineFrontendService_20170701", "ListTerminologies", {})
  .n("TranslateClient", "ListTerminologiesCommand")
  .sc(ListTerminologies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTerminologiesRequest;
      output: ListTerminologiesResponse;
    };
    sdk: {
      input: ListTerminologiesCommandInput;
      output: ListTerminologiesCommandOutput;
    };
  };
}
