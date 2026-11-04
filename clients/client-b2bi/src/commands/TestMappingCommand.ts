// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TestMappingRequest, TestMappingResponse } from "../models/models_0";
import { TestMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TestMappingCommand}.
 */
export interface TestMappingCommandInput extends TestMappingRequest {}
/**
 * @public
 *
 * The output of {@link TestMappingCommand}.
 */
export interface TestMappingCommandOutput extends TestMappingResponse, __MetadataBearer {}

/**
 * Maps the input file according to the provided template file. The API call downloads the file contents from the Amazon S3 location, and passes the contents in as a string, to the `inputFileContent` parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, TestMappingCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, TestMappingCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * // import type { B2biClientConfig } from "@aws-sdk/client-b2bi";
 * const config = {}; // type is B2biClientConfig
 * const client = new B2biClient(config);
 * const input = { // TestMappingRequest
 *   inputFileContent: "STRING_VALUE", // required
 *   mappingTemplate: "STRING_VALUE", // required
 *   fileFormat: "XML" || "JSON" || "NOT_USED", // required
 * };
 * const command = new TestMappingCommand(input);
 * const response = await client.send(command);
 * // { // TestMappingResponse
 * //   mappedFileContent: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TestMappingCommandInput - {@link TestMappingCommandInput}
 * @returns {@link TestMappingCommandOutput}
 * @see {@link TestMappingCommandInput} for command's `input` shape.
 * @see {@link TestMappingCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.
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
 * @example Sample TestMapping call
 * ```javascript
 * //
 * const input = {
 *   fileFormat: "JSON",
 *   inputFileContent: "Sample file content",
 *   mappingTemplate: "$"
 * };
 * const command = new TestMappingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   mappedFileContent: "Sample file content"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class TestMappingCommand extends command<TestMappingCommandInput, TestMappingCommandOutput>(
  _ep0,
  _mw0,
  "TestMapping",
  TestMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestMappingRequest;
      output: TestMappingResponse;
    };
    sdk: {
      input: TestMappingCommandInput;
      output: TestMappingCommandOutput;
    };
  };
}
