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
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a transformer. Amazon Web Services B2B Data Interchange currently supports two scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Inbound EDI</i>: the Amazon Web Services customer receives an EDI file from their trading partner. Amazon Web Services B2B Data Interchange
 *                converts this EDI file into a JSON or XML file with a service-defined structure. A mapping template provided by the customer,
 *                in JSONata or XSLT format, is optionally applied to this file to produce a JSON or XML file with the structure the customer requires.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Outbound EDI</i>: the Amazon Web Services customer has a JSON or XML file containing data that they wish to use
 *                in an EDI file. A mapping template, provided by the customer (in either JSONata or XSLT format) is applied to this file to generate
 *                a JSON or XML file in the service-defined structure. This file is then converted to an EDI file.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The following fields are provided for backwards compatibility only: <code>fileFormat</code>,
 *             <code>mappingTemplate</code>, <code>ediType</code>, and <code>sampleDocument</code>.</p>
 *             <ul>
 *                <li>
 *                   <p>Use the <code>mapping</code> data type in place of <code>mappingTemplate</code> and <code>fileFormat</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Use the <code>sampleDocuments</code> data type in place of <code>sampleDocument</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Use either the <code>inputConversion</code> or <code>outputConversion</code> in place of <code>ediType</code>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, CreateTransformerCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, CreateTransformerCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // CreateTransformerRequest
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   fileFormat: "XML" || "JSON" || "NOT_USED",
 *   mappingTemplate: "STRING_VALUE",
 *   ediType: { // EdiType Union: only one key present
 *     x12Details: { // X12Details
 *       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_211" || "X12_214" || "X12_215" || "X12_259" || "X12_260" || "X12_266" || "X12_269" || "X12_270" || "X12_271" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_417" || "X12_421" || "X12_426" || "X12_810" || "X12_820" || "X12_824" || "X12_830" || "X12_832" || "X12_834" || "X12_835" || "X12_837" || "X12_844" || "X12_846" || "X12_849" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_865" || "X12_869" || "X12_870" || "X12_940" || "X12_945" || "X12_990" || "X12_997" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 *       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010" || "VERSION_5010_HIPAA",
 *     },
 *   },
 *   sampleDocument: "STRING_VALUE",
 *   inputConversion: { // InputConversion
 *     fromFormat: "X12", // required
 *     formatOptions: { // FormatOptions Union: only one key present
 *       x12: {
 *         transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_211" || "X12_214" || "X12_215" || "X12_259" || "X12_260" || "X12_266" || "X12_269" || "X12_270" || "X12_271" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_417" || "X12_421" || "X12_426" || "X12_810" || "X12_820" || "X12_824" || "X12_830" || "X12_832" || "X12_834" || "X12_835" || "X12_837" || "X12_844" || "X12_846" || "X12_849" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_865" || "X12_869" || "X12_870" || "X12_940" || "X12_945" || "X12_990" || "X12_997" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 *         version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010" || "VERSION_5010_HIPAA",
 *       },
 *     },
 *   },
 *   mapping: { // Mapping
 *     templateLanguage: "XSLT" || "JSONATA", // required
 *     template: "STRING_VALUE",
 *   },
 *   outputConversion: { // OutputConversion
 *     toFormat: "X12", // required
 *     formatOptions: {//  Union: only one key present
 *       x12: {
 *         transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_211" || "X12_214" || "X12_215" || "X12_259" || "X12_260" || "X12_266" || "X12_269" || "X12_270" || "X12_271" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_417" || "X12_421" || "X12_426" || "X12_810" || "X12_820" || "X12_824" || "X12_830" || "X12_832" || "X12_834" || "X12_835" || "X12_837" || "X12_844" || "X12_846" || "X12_849" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_865" || "X12_869" || "X12_870" || "X12_940" || "X12_945" || "X12_990" || "X12_997" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 *         version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010" || "VERSION_5010_HIPAA",
 *       },
 *     },
 *   },
 *   sampleDocuments: { // SampleDocuments
 *     bucketName: "STRING_VALUE", // required
 *     keys: [ // KeyList // required
 *       { // SampleDocumentKeys
 *         input: "STRING_VALUE",
 *         output: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateTransformerCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransformerResponse
 * //   transformerId: "STRING_VALUE", // required
 * //   transformerArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "active" || "inactive", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   fileFormat: "XML" || "JSON" || "NOT_USED",
 * //   mappingTemplate: "STRING_VALUE",
 * //   ediType: { // EdiType Union: only one key present
 * //     x12Details: { // X12Details
 * //       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_211" || "X12_214" || "X12_215" || "X12_259" || "X12_260" || "X12_266" || "X12_269" || "X12_270" || "X12_271" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_417" || "X12_421" || "X12_426" || "X12_810" || "X12_820" || "X12_824" || "X12_830" || "X12_832" || "X12_834" || "X12_835" || "X12_837" || "X12_844" || "X12_846" || "X12_849" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_865" || "X12_869" || "X12_870" || "X12_940" || "X12_945" || "X12_990" || "X12_997" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 * //       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010" || "VERSION_5010_HIPAA",
 * //     },
 * //   },
 * //   sampleDocument: "STRING_VALUE",
 * //   inputConversion: { // InputConversion
 * //     fromFormat: "X12", // required
 * //     formatOptions: { // FormatOptions Union: only one key present
 * //       x12: {
 * //         transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_211" || "X12_214" || "X12_215" || "X12_259" || "X12_260" || "X12_266" || "X12_269" || "X12_270" || "X12_271" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_417" || "X12_421" || "X12_426" || "X12_810" || "X12_820" || "X12_824" || "X12_830" || "X12_832" || "X12_834" || "X12_835" || "X12_837" || "X12_844" || "X12_846" || "X12_849" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_865" || "X12_869" || "X12_870" || "X12_940" || "X12_945" || "X12_990" || "X12_997" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 * //         version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010" || "VERSION_5010_HIPAA",
 * //       },
 * //     },
 * //   },
 * //   mapping: { // Mapping
 * //     templateLanguage: "XSLT" || "JSONATA", // required
 * //     template: "STRING_VALUE",
 * //   },
 * //   outputConversion: { // OutputConversion
 * //     toFormat: "X12", // required
 * //     formatOptions: {//  Union: only one key present
 * //       x12: {
 * //         transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_211" || "X12_214" || "X12_215" || "X12_259" || "X12_260" || "X12_266" || "X12_269" || "X12_270" || "X12_271" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_417" || "X12_421" || "X12_426" || "X12_810" || "X12_820" || "X12_824" || "X12_830" || "X12_832" || "X12_834" || "X12_835" || "X12_837" || "X12_844" || "X12_846" || "X12_849" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_865" || "X12_869" || "X12_870" || "X12_940" || "X12_945" || "X12_990" || "X12_997" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 * //         version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010" || "VERSION_5010_HIPAA",
 * //       },
 * //     },
 * //   },
 * //   sampleDocuments: { // SampleDocuments
 * //     bucketName: "STRING_VALUE", // required
 * //     keys: [ // KeyList // required
 * //       { // SampleDocumentKeys
 * //         input: "STRING_VALUE",
 * //         output: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
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
 * @public
 * @example Sample CreateTransformer call
 * ```javascript
 * //
 * const input = {
 *   "name": "transformX12",
 *   "clientToken": "foo",
 *   "inputConversion": {
 *     "formatOptions": {
 *       "x12": {
 *         "version": "VERSION_4010",
 *         "transactionSet": "X12_110"
 *       }
 *     },
 *     "fromFormat": "X12"
 *   },
 *   "mapping": {
 *     "template": "{}",
 *     "templateLanguage": "JSONATA"
 *   },
 *   "sampleDocuments": {
 *     "bucketName": "test-bucket",
 *     "keys": [
 *       {
 *         "input": "sampleDoc.txt"
 *       }
 *     ]
 *   },
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
 *   "name": "transformX12",
 *   "createdAt": "2023-11-01T21:51:05.504Z",
 *   "inputConversion": {
 *     "formatOptions": {
 *       "x12": {
 *         "version": "VERSION_4010",
 *         "transactionSet": "X12_110"
 *       }
 *     },
 *     "fromFormat": "X12"
 *   },
 *   "mapping": {
 *     "template": "{}",
 *     "templateLanguage": "JSONATA"
 *   },
 *   "sampleDocuments": {
 *     "bucketName": "test-bucket",
 *     "keys": [
 *       {
 *         "input": "sampleDoc.txt"
 *       }
 *     ]
 *   },
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
  .ep(commonParams)
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
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTransformerRequest;
      output: CreateTransformerResponse;
    };
    sdk: {
      input: CreateTransformerCommandInput;
      output: CreateTransformerCommandOutput;
    };
  };
}
