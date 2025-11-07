// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateClassifierRequest, UpdateClassifierResponse } from "../models/models_3";
import { UpdateClassifier } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateClassifierCommand}.
 */
export interface UpdateClassifierCommandInput extends UpdateClassifierRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClassifierCommand}.
 */
export interface UpdateClassifierCommandOutput extends UpdateClassifierResponse, __MetadataBearer {}

/**
 * <p>Modifies an existing classifier (a <code>GrokClassifier</code>,
 *       an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on
 *       which field is present).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateClassifierRequest
 *   GrokClassifier: { // UpdateGrokClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     Classification: "STRING_VALUE",
 *     GrokPattern: "STRING_VALUE",
 *     CustomPatterns: "STRING_VALUE",
 *   },
 *   XMLClassifier: { // UpdateXMLClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     Classification: "STRING_VALUE",
 *     RowTag: "STRING_VALUE",
 *   },
 *   JsonClassifier: { // UpdateJsonClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     JsonPath: "STRING_VALUE",
 *   },
 *   CsvClassifier: { // UpdateCsvClassifierRequest
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
 * const command = new UpdateClassifierCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateClassifierCommandInput - {@link UpdateClassifierCommandInput}
 * @returns {@link UpdateClassifierCommandOutput}
 * @see {@link UpdateClassifierCommandInput} for command's `input` shape.
 * @see {@link UpdateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link VersionMismatchException} (client fault)
 *  <p>There was a version conflict.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateClassifierCommand extends $Command
  .classBuilder<
    UpdateClassifierCommandInput,
    UpdateClassifierCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateClassifier", {})
  .n("GlueClient", "UpdateClassifierCommand")
  .sc(UpdateClassifier)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateClassifierRequest;
      output: {};
    };
    sdk: {
      input: UpdateClassifierCommandInput;
      output: UpdateClassifierCommandOutput;
    };
  };
}
