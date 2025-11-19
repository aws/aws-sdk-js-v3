// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetClassifierRequest, GetClassifierResponse } from "../models/models_1";
import { GetClassifier } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClassifierCommand}.
 */
export interface GetClassifierCommandInput extends GetClassifierRequest {}
/**
 * @public
 *
 * The output of {@link GetClassifierCommand}.
 */
export interface GetClassifierCommandOutput extends GetClassifierResponse, __MetadataBearer {}

/**
 * <p>Retrieve a classifier by name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetClassifierRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetClassifierCommand(input);
 * const response = await client.send(command);
 * // { // GetClassifierResponse
 * //   Classifier: { // Classifier
 * //     GrokClassifier: { // GrokClassifier
 * //       Name: "STRING_VALUE", // required
 * //       Classification: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Version: Number("long"),
 * //       GrokPattern: "STRING_VALUE", // required
 * //       CustomPatterns: "STRING_VALUE",
 * //     },
 * //     XMLClassifier: { // XMLClassifier
 * //       Name: "STRING_VALUE", // required
 * //       Classification: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Version: Number("long"),
 * //       RowTag: "STRING_VALUE",
 * //     },
 * //     JsonClassifier: { // JsonClassifier
 * //       Name: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Version: Number("long"),
 * //       JsonPath: "STRING_VALUE", // required
 * //     },
 * //     CsvClassifier: { // CsvClassifier
 * //       Name: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Version: Number("long"),
 * //       Delimiter: "STRING_VALUE",
 * //       QuoteSymbol: "STRING_VALUE",
 * //       ContainsHeader: "UNKNOWN" || "PRESENT" || "ABSENT",
 * //       Header: [ // CsvHeader
 * //         "STRING_VALUE",
 * //       ],
 * //       DisableValueTrimming: true || false,
 * //       AllowSingleColumn: true || false,
 * //       CustomDatatypeConfigured: true || false,
 * //       CustomDatatypes: [ // CustomDatatypes
 * //         "STRING_VALUE",
 * //       ],
 * //       Serde: "OpenCSVSerDe" || "LazySimpleSerDe" || "None",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClassifierCommandInput - {@link GetClassifierCommandInput}
 * @returns {@link GetClassifierCommandOutput}
 * @see {@link GetClassifierCommandInput} for command's `input` shape.
 * @see {@link GetClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class GetClassifierCommand extends $Command
  .classBuilder<
    GetClassifierCommandInput,
    GetClassifierCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetClassifier", {})
  .n("GlueClient", "GetClassifierCommand")
  .sc(GetClassifier)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClassifierRequest;
      output: GetClassifierResponse;
    };
    sdk: {
      input: GetClassifierCommandInput;
      output: GetClassifierCommandOutput;
    };
  };
}
