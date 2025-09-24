// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetClassifiersRequest, GetClassifiersResponse } from "../models/models_2";
import { GetClassifiers } from "../schemas/schemas_46_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClassifiersCommand}.
 */
export interface GetClassifiersCommandInput extends GetClassifiersRequest {}
/**
 * @public
 *
 * The output of {@link GetClassifiersCommand}.
 */
export interface GetClassifiersCommandOutput extends GetClassifiersResponse, __MetadataBearer {}

/**
 * <p>Lists all classifier objects in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetClassifiersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetClassifiersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetClassifiersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetClassifiersCommand(input);
 * const response = await client.send(command);
 * // { // GetClassifiersResponse
 * //   Classifiers: [ // ClassifierList
 * //     { // Classifier
 * //       GrokClassifier: { // GrokClassifier
 * //         Name: "STRING_VALUE", // required
 * //         Classification: "STRING_VALUE", // required
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //         Version: Number("long"),
 * //         GrokPattern: "STRING_VALUE", // required
 * //         CustomPatterns: "STRING_VALUE",
 * //       },
 * //       XMLClassifier: { // XMLClassifier
 * //         Name: "STRING_VALUE", // required
 * //         Classification: "STRING_VALUE", // required
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //         Version: Number("long"),
 * //         RowTag: "STRING_VALUE",
 * //       },
 * //       JsonClassifier: { // JsonClassifier
 * //         Name: "STRING_VALUE", // required
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //         Version: Number("long"),
 * //         JsonPath: "STRING_VALUE", // required
 * //       },
 * //       CsvClassifier: { // CsvClassifier
 * //         Name: "STRING_VALUE", // required
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //         Version: Number("long"),
 * //         Delimiter: "STRING_VALUE",
 * //         QuoteSymbol: "STRING_VALUE",
 * //         ContainsHeader: "UNKNOWN" || "PRESENT" || "ABSENT",
 * //         Header: [ // CsvHeader
 * //           "STRING_VALUE",
 * //         ],
 * //         DisableValueTrimming: true || false,
 * //         AllowSingleColumn: true || false,
 * //         CustomDatatypeConfigured: true || false,
 * //         CustomDatatypes: [ // CustomDatatypes
 * //           "STRING_VALUE",
 * //         ],
 * //         Serde: "OpenCSVSerDe" || "LazySimpleSerDe" || "None",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetClassifiersCommandInput - {@link GetClassifiersCommandInput}
 * @returns {@link GetClassifiersCommandOutput}
 * @see {@link GetClassifiersCommandInput} for command's `input` shape.
 * @see {@link GetClassifiersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class GetClassifiersCommand extends $Command
  .classBuilder<
    GetClassifiersCommandInput,
    GetClassifiersCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetClassifiers", {})
  .n("GlueClient", "GetClassifiersCommand")
  .sc(GetClassifiers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClassifiersRequest;
      output: GetClassifiersResponse;
    };
    sdk: {
      input: GetClassifiersCommandInput;
      output: GetClassifiersCommandOutput;
    };
  };
}
