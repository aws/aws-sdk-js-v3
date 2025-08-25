// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GenerateMappingRequest, GenerateMappingResponse } from "../models/models_0";
import { de_GenerateMappingCommand, se_GenerateMappingCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateMappingCommand}.
 */
export interface GenerateMappingCommandInput extends GenerateMappingRequest {}
/**
 * @public
 *
 * The output of {@link GenerateMappingCommand}.
 */
export interface GenerateMappingCommandOutput extends GenerateMappingResponse, __MetadataBearer {}

/**
 * <p>Takes sample input and output documents and uses Amazon Bedrock to generate a mapping automatically. Depending on the accuracy and other factors, you can then edit the mapping for your needs.</p> <note> <p>Before you can use the AI-assisted feature for Amazon Web Services B2B Data Interchange you must enable models in Amazon Bedrock. For details, see <a href="https://docs.aws.amazon.com/b2bi/latest/userguide/ai-assisted-mapping.html#ai-assist-prereq">AI-assisted template mapping prerequisites</a> in the <i>Amazon Web Services B2B Data Interchange User guide</i>.</p> </note> <p>To generate a mapping, perform the following steps:</p> <ol> <li> <p>Start with an X12 EDI document to use as the input.</p> </li> <li> <p>Call <code>TestMapping</code> using your EDI document.</p> </li> <li> <p>Use the output from the <code>TestMapping</code> operation as either input or output for your GenerateMapping call, along with your sample file.</p> </li> </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, GenerateMappingCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, GenerateMappingCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // GenerateMappingRequest
 *   inputFileContent: "STRING_VALUE", // required
 *   outputFileContent: "STRING_VALUE", // required
 *   mappingType: "JSONATA" || "XSLT", // required
 * };
 * const command = new GenerateMappingCommand(input);
 * const response = await client.send(command);
 * // { // GenerateMappingResponse
 * //   mappingTemplate: "STRING_VALUE", // required
 * //   mappingAccuracy: Number("float"),
 * // };
 *
 * ```
 *
 * @param GenerateMappingCommandInput - {@link GenerateMappingCommandInput}
 * @returns {@link GenerateMappingCommandOutput}
 * @see {@link GenerateMappingCommandInput} for command's `input` shape.
 * @see {@link GenerateMappingCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object. This exception can be thrown during standard EDI validation or when custom validation rules fail, such as when element length constraints are violated, invalid codes are used in code list validations, or required elements are missing based on configured element requirement rules.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 *
 * @example Sample GenerateMapping call
 * ```javascript
 * //
 * const input = {
 *   inputFileContent: "Sample input file content",
 *   mappingType: "JSONATA",
 *   outputFileContent: "Sample output file content"
 * };
 * const command = new GenerateMappingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   mappingAccuracy: 0.95,
 *   mappingTemplate: "Sample mapping content"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GenerateMappingCommand extends $Command
  .classBuilder<
    GenerateMappingCommandInput,
    GenerateMappingCommandOutput,
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
  .s("B2BI", "GenerateMapping", {})
  .n("B2biClient", "GenerateMappingCommand")
  .f(void 0, void 0)
  .ser(se_GenerateMappingCommand)
  .de(de_GenerateMappingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateMappingRequest;
      output: GenerateMappingResponse;
    };
    sdk: {
      input: GenerateMappingCommandInput;
      output: GenerateMappingCommandOutput;
    };
  };
}
