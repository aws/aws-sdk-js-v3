// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TestMappingRequest, TestMappingResponse } from "../models/models_0";
import { de_TestMappingCommand, se_TestMappingCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Maps the input file according to the provided template file. The API call downloads the file contents from the Amazon S3 location, and passes the contents in as a string, to the <code>inputFileContent</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, TestMappingCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, TestMappingCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // TestMappingRequest
 *   inputFileContent: "STRING_VALUE", // required
 *   mappingTemplate: "STRING_VALUE", // required
 *   fileFormat: "XML" || "JSON", // required
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
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
 * @example Sample TestMapping call
 * ```javascript
 * //
 * const input = {
 *   "fileFormat": "JSON",
 *   "inputFileContent": "Sample file content",
 *   "mappingTemplate": "$"
 * };
 * const command = new TestMappingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "mappedFileContent": "Sample file content"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class TestMappingCommand extends $Command
  .classBuilder<
    TestMappingCommandInput,
    TestMappingCommandOutput,
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
  .s("B2BI", "TestMapping", {})
  .n("B2biClient", "TestMappingCommand")
  .f(void 0, void 0)
  .ser(se_TestMappingCommand)
  .de(de_TestMappingCommand)
  .build() {}
