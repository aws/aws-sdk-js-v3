// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStarterMappingTemplateRequest, CreateStarterMappingTemplateResponse } from "../models/models_0";
import {
  de_CreateStarterMappingTemplateCommand,
  se_CreateStarterMappingTemplateCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStarterMappingTemplateCommand}.
 */
export interface CreateStarterMappingTemplateCommandInput extends CreateStarterMappingTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateStarterMappingTemplateCommand}.
 */
export interface CreateStarterMappingTemplateCommandOutput
  extends CreateStarterMappingTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Amazon Web Services B2B Data Interchange uses a mapping template in JSONata or XSLT format to transform a customer input file into a JSON or XML file that can be converted to EDI.</p>
 *          <p>If you provide a sample EDI file with the same structure as the EDI files that you wish to generate, then the service can generate a mapping template.
 *       The starter template contains placeholder values which you can replace with JSONata or XSLT expressions to take data from your input file and insert it
 *       into the JSON or XML file that is used to generate the EDI.</p>
 *          <p>If you do not provide a sample EDI file, then the service can generate a mapping template based on the EDI settings in the <code>templateDetails</code> parameter.
 *    </p>
 *          <p> Currently, we only support generating a template that can generate the input to produce an Outbound X12 EDI file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, CreateStarterMappingTemplateCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, CreateStarterMappingTemplateCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // CreateStarterMappingTemplateRequest
 *   outputSampleLocation: { // S3Location
 *     bucketName: "STRING_VALUE",
 *     key: "STRING_VALUE",
 *   },
 *   mappingType: "JSONATA" || "XSLT", // required
 *   templateDetails: { // TemplateDetails Union: only one key present
 *     x12: { // X12Details
 *       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_211" || "X12_214" || "X12_215" || "X12_259" || "X12_260" || "X12_266" || "X12_269" || "X12_270" || "X12_271" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_417" || "X12_421" || "X12_426" || "X12_810" || "X12_820" || "X12_824" || "X12_830" || "X12_832" || "X12_834" || "X12_835" || "X12_837" || "X12_844" || "X12_846" || "X12_849" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_865" || "X12_869" || "X12_870" || "X12_940" || "X12_945" || "X12_990" || "X12_997" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 *       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010" || "VERSION_5010_HIPAA",
 *     },
 *   },
 * };
 * const command = new CreateStarterMappingTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateStarterMappingTemplateResponse
 * //   mappingTemplate: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateStarterMappingTemplateCommandInput - {@link CreateStarterMappingTemplateCommandInput}
 * @returns {@link CreateStarterMappingTemplateCommandOutput}
 * @see {@link CreateStarterMappingTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateStarterMappingTemplateCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @public
 * @example Sample CreateStarterMappingTemplate call
 * ```javascript
 * //
 * const input = {
 *   "mappingType": "JSONATA",
 *   "outputSampleLocation": {
 *     "key": "output-sample-key",
 *     "bucketName": "output-sample-bucket"
 *   },
 *   "templateDetails": {
 *     "x12": {
 *       "version": "VERSION_4010",
 *       "transactionSet": "X12_110"
 *     }
 *   }
 * };
 * const command = new CreateStarterMappingTemplateCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "mappingTemplate": "Example Mapping Template"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CreateStarterMappingTemplateCommand extends $Command
  .classBuilder<
    CreateStarterMappingTemplateCommandInput,
    CreateStarterMappingTemplateCommandOutput,
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
  .s("B2BI", "CreateStarterMappingTemplate", {})
  .n("B2biClient", "CreateStarterMappingTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateStarterMappingTemplateCommand)
  .de(de_CreateStarterMappingTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStarterMappingTemplateRequest;
      output: CreateStarterMappingTemplateResponse;
    };
    sdk: {
      input: CreateStarterMappingTemplateCommandInput;
      output: CreateStarterMappingTemplateCommandOutput;
    };
  };
}
