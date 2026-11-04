// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateMappingRequest, GenerateMappingResponse } from "../models/models_0";
import { GenerateMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Takes sample input and output documents and uses Amazon Bedrock to generate a mapping automatically. Depending on the accuracy and other factors, you can then edit the mapping for your needs.
 *
 * > **Note:** Before you can use the AI-assisted feature for Amazon Web Services B2B Data Interchange you must enable models in Amazon Bedrock. For details, see [AI-assisted template mapping prerequisites](https://docs.aws.amazon.com/b2bi/latest/userguide/ai-assisted-mapping.html#ai-assist-prereq) in the *Amazon Web Services B2B Data Interchange User guide*.
 *
 * To generate a mapping, perform the following steps:
 *
 * 1. Start with an X12 EDI document to use as the input.
 * 2. Call `TestMapping` using your EDI document.
 * 3. Use the output from the `TestMapping` operation as either input or output for your GenerateMapping call, along with your sample file.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, GenerateMappingCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, GenerateMappingCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // import type { B2biClientConfig } from "@aws-sdk/client-b2bi";
 * const config = {}; // type is B2biClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Occurs when a B2BI object cannot be validated against a request from another object. This exception can be thrown during standard EDI validation or when custom validation rules fail, such as when element length constraints are violated, invalid codes are used in code list validations, or required elements are missing based on configured element requirement rules.
 *
 * @throws {@link B2biServiceException}
 *
 * Base exception class for all service exceptions from B2bi service.
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
export class GenerateMappingCommand extends command<GenerateMappingCommandInput, GenerateMappingCommandOutput>(
  _ep0,
  _mw0,
  "GenerateMapping",
  GenerateMapping$
) {
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
