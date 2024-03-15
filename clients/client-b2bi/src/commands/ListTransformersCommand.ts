// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListTransformersRequest, ListTransformersResponse } from "../models/models_0";
import { de_ListTransformersCommand, se_ListTransformersCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTransformersCommand}.
 */
export interface ListTransformersCommandInput extends ListTransformersRequest {}
/**
 * @public
 *
 * The output of {@link ListTransformersCommand}.
 */
export interface ListTransformersCommandOutput extends ListTransformersResponse, __MetadataBearer {}

/**
 * <p>Lists the available transformers. A transformer
 *    describes how to process the incoming EDI documents and extract the necessary
 *    information to the output file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, ListTransformersCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, ListTransformersCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // ListTransformersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTransformersCommand(input);
 * const response = await client.send(command);
 * // { // ListTransformersResponse
 * //   transformers: [ // TransformerList // required
 * //     { // TransformerSummary
 * //       transformerId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       fileFormat: "XML" || "JSON", // required
 * //       mappingTemplate: "STRING_VALUE", // required
 * //       status: "active" || "inactive", // required
 * //       ediType: { // EdiType Union: only one key present
 * //         x12Details: { // X12Details
 * //           transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 * //           version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 * //         },
 * //       },
 * //       sampleDocument: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTransformersCommandInput - {@link ListTransformersCommandInput}
 * @returns {@link ListTransformersCommandOutput}
 * @see {@link ListTransformersCommandInput} for command's `input` shape.
 * @see {@link ListTransformersCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @public
 * @example Sample ListTransformers call
 * ```javascript
 * //
 * const input = {
 *   "maxResults": 50,
 *   "nextToken": "foo"
 * };
 * const command = new ListTransformersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "nextToken": "foo",
 *   "transformers": [
 *     {
 *       "name": "transformJSON",
 *       "createdAt": "2023-11-01T21:51:05.504Z",
 *       "ediType": {
 *         "x12Details": {
 *           "version": "VERSION_4010",
 *           "transactionSet": "X12_110"
 *         }
 *       },
 *       "fileFormat": "JSON",
 *       "mappingTemplate": "$",
 *       "modifiedAt": "2023-11-01T21:51:05.504Z",
 *       "sampleDocument": "s3://test-bucket/sampleDoc.txt",
 *       "status": "inactive",
 *       "transformerId": "tr-974c129999f84d8c9"
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class ListTransformersCommand extends $Command
  .classBuilder<
    ListTransformersCommandInput,
    ListTransformersCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "ListTransformers", {})
  .n("B2biClient", "ListTransformersCommand")
  .f(void 0, void 0)
  .ser(se_ListTransformersCommand)
  .de(de_ListTransformersCommand)
  .build() {}
