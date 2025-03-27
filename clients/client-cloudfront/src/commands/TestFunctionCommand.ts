// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  TestFunctionRequest,
  TestFunctionRequestFilterSensitiveLog,
  TestFunctionResult,
  TestFunctionResultFilterSensitiveLog,
} from "../models/models_1";
import { de_TestFunctionCommand, se_TestFunctionCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestFunctionCommand}.
 */
export interface TestFunctionCommandInput extends TestFunctionRequest {}
/**
 * @public
 *
 * The output of {@link TestFunctionCommand}.
 */
export interface TestFunctionCommandOutput extends TestFunctionResult, __MetadataBearer {}

/**
 * <p>Tests a CloudFront function.</p>
 *          <p>To test a function, you provide an <i>event object</i> that represents
 * 			an HTTP request or response that your CloudFront distribution could receive in production.
 * 			CloudFront runs the function, passing it the event object that you provided, and returns the
 * 			function's result (the modified event object) in the response. The response also
 * 			contains function logs and error messages, if any exist. For more information about
 * 			testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          <p>To test a function, you provide the function's name and version (<code>ETag</code>
 * 			value) along with the event object. To get the function's name and version, you can use
 * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, TestFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, TestFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // TestFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 *   Stage: "DEVELOPMENT" || "LIVE",
 *   EventObject: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new TestFunctionCommand(input);
 * const response = await client.send(command);
 * // { // TestFunctionResult
 * //   TestResult: { // TestResult
 * //     FunctionSummary: { // FunctionSummary
 * //       Name: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE",
 * //       FunctionConfig: { // FunctionConfig
 * //         Comment: "STRING_VALUE", // required
 * //         Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 * //         KeyValueStoreAssociations: { // KeyValueStoreAssociations
 * //           Quantity: Number("int"), // required
 * //           Items: [ // KeyValueStoreAssociationList
 * //             { // KeyValueStoreAssociation
 * //               KeyValueStoreARN: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       FunctionMetadata: { // FunctionMetadata
 * //         FunctionARN: "STRING_VALUE", // required
 * //         Stage: "DEVELOPMENT" || "LIVE",
 * //         CreatedTime: new Date("TIMESTAMP"),
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //     ComputeUtilization: "STRING_VALUE",
 * //     FunctionExecutionLogs: [ // FunctionExecutionLogList
 * //       "STRING_VALUE",
 * //     ],
 * //     FunctionErrorMessage: "STRING_VALUE",
 * //     FunctionOutput: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TestFunctionCommandInput - {@link TestFunctionCommandInput}
 * @returns {@link TestFunctionCommandOutput}
 * @see {@link TestFunctionCommandInput} for command's `input` shape.
 * @see {@link TestFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link NoSuchFunctionExists} (client fault)
 *  <p>The function does not exist.</p>
 *
 * @throws {@link TestFunctionFailed} (server fault)
 *  <p>The CloudFront function failed.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class TestFunctionCommand extends $Command
  .classBuilder<
    TestFunctionCommandInput,
    TestFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "TestFunction", {})
  .n("CloudFrontClient", "TestFunctionCommand")
  .f(TestFunctionRequestFilterSensitiveLog, TestFunctionResultFilterSensitiveLog)
  .ser(se_TestFunctionCommand)
  .de(de_TestFunctionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestFunctionRequest;
      output: TestFunctionResult;
    };
    sdk: {
      input: TestFunctionCommandInput;
      output: TestFunctionCommandOutput;
    };
  };
}
