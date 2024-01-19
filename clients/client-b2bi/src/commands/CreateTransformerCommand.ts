// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransformerRequest, CreateTransformerResponse } from "../models/models_0";
import { de_CreateTransformerCommand, se_CreateTransformerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTransformerCommand}.
 */
export interface CreateTransformerCommandInput extends CreateTransformerRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransformerCommand}.
 */
export interface CreateTransformerCommandOutput extends CreateTransformerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a transformer. A transformer
 *    describes how to process the incoming EDI documents and extract the necessary
 *    information to the output file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, CreateTransformerCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, CreateTransformerCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // CreateTransformerRequest
 *   name: "STRING_VALUE", // required
 *   fileFormat: "XML" || "JSON", // required
 *   mappingTemplate: "STRING_VALUE", // required
 *   ediType: { // EdiType Union: only one key present
 *     x12Details: { // X12Details
 *       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 *       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 *     },
 *   },
 *   sampleDocument: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTransformerCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransformerResponse
 * //   transformerId: "STRING_VALUE", // required
 * //   transformerArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   fileFormat: "XML" || "JSON", // required
 * //   mappingTemplate: "STRING_VALUE", // required
 * //   status: "active" || "inactive", // required
 * //   ediType: { // EdiType Union: only one key present
 * //     x12Details: { // X12Details
 * //       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_214" || "X12_215" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_820" || "X12_824" || "X12_830" || "X12_846" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_940" || "X12_990" || "X12_997",
 * //       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010",
 * //     },
 * //   },
 * //   sampleDocument: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateTransformerCommandInput - {@link CreateTransformerCommandInput}
 * @returns {@link CreateTransformerCommandOutput}
 * @see {@link CreateTransformerCommandInput} for command's `input` shape.
 * @see {@link CreateTransformerCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception is thrown when you attempt to delete a resource (such as a profile or a capability) that is being used by other resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when the calling command attempts to exceed one of the service quotas, for example trying to create a capability when you already have the maximum number of capabilities allowed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @example Sample CreateTransformer call
 * ```javascript
 * //
 * const input = {
 *   "name": "transformJSON",
 *   "clientToken": "foo",
 *   "ediType": {
 *     "x12Details": {
 *       "version": "VERSION_4010",
 *       "transactionSet": "X12_110"
 *     }
 *   },
 *   "fileFormat": "JSON",
 *   "mappingTemplate": "{}",
 *   "sampleDocument": "s3://test-bucket/sampleDoc.txt",
 *   "tags": [
 *     {
 *       "Key": "sampleKey",
 *       "Value": "sampleValue"
 *     }
 *   ]
 * };
 * const command = new CreateTransformerCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "name": "transformJSON",
 *   "createdAt": "2023-11-01T21:51:05.504Z",
 *   "ediType": {
 *     "x12Details": {
 *       "version": "VERSION_4010",
 *       "transactionSet": "X12_110"
 *     }
 *   },
 *   "fileFormat": "JSON",
 *   "mappingTemplate": "$",
 *   "sampleDocument": "s3://test-bucket/sampleDoc.txt",
 *   "status": "inactive",
 *   "transformerArn": "arn:aws:b2bi:us-west-2:123456789012:transformer/tr-974c129999f84d8c9",
 *   "transformerId": "tr-974c129999f84d8c9"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CreateTransformerCommand extends $Command
  .classBuilder<
    CreateTransformerCommandInput,
    CreateTransformerCommandOutput,
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
  .s("B2BI", "CreateTransformer", {})
  .n("B2biClient", "CreateTransformerCommand")
  .f(void 0, void 0)
  .ser(se_CreateTransformerCommand)
  .de(de_CreateTransformerCommand)
  .build() {}
