// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateClassifierRequest, CreateClassifierResponse } from "../models/models_1";
import { de_CreateClassifierCommand, se_CreateClassifierCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClassifierCommand}.
 */
export interface CreateClassifierCommandInput extends CreateClassifierRequest {}
/**
 * @public
 *
 * The output of {@link CreateClassifierCommand}.
 */
export interface CreateClassifierCommandOutput extends CreateClassifierResponse, __MetadataBearer {}

/**
 * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an
 *         <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>,
 *       depending on which field of the request is present.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateClassifierRequest
 *   GrokClassifier: { // CreateGrokClassifierRequest
 *     Classification: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     GrokPattern: "STRING_VALUE", // required
 *     CustomPatterns: "STRING_VALUE",
 *   },
 *   XMLClassifier: { // CreateXMLClassifierRequest
 *     Classification: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     RowTag: "STRING_VALUE",
 *   },
 *   JsonClassifier: { // CreateJsonClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     JsonPath: "STRING_VALUE", // required
 *   },
 *   CsvClassifier: { // CreateCsvClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     Delimiter: "STRING_VALUE",
 *     QuoteSymbol: "STRING_VALUE",
 *     ContainsHeader: "UNKNOWN" || "PRESENT" || "ABSENT",
 *     Header: [ // CsvHeader
 *       "STRING_VALUE",
 *     ],
 *     DisableValueTrimming: true || false,
 *     AllowSingleColumn: true || false,
 *     CustomDatatypeConfigured: true || false,
 *     CustomDatatypes: [ // CustomDatatypes
 *       "STRING_VALUE",
 *     ],
 *     Serde: "OpenCSVSerDe" || "LazySimpleSerDe" || "None",
 *   },
 * };
 * const command = new CreateClassifierCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateClassifierCommandInput - {@link CreateClassifierCommandInput}
 * @returns {@link CreateClassifierCommandOutput}
 * @see {@link CreateClassifierCommandInput} for command's `input` shape.
 * @see {@link CreateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateClassifierCommand extends $Command
  .classBuilder<
    CreateClassifierCommandInput,
    CreateClassifierCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "CreateClassifier", {})
  .n("GlueClient", "CreateClassifierCommand")
  .f(void 0, void 0)
  .ser(se_CreateClassifierCommand)
  .de(de_CreateClassifierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClassifierRequest;
      output: {};
    };
    sdk: {
      input: CreateClassifierCommandInput;
      output: CreateClassifierCommandOutput;
    };
  };
}
