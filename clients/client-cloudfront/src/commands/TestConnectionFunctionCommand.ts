// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { TestConnectionFunctionRequest, TestConnectionFunctionResult } from "../models/models_1";
import { TestConnectionFunction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestConnectionFunctionCommand}.
 */
export interface TestConnectionFunctionCommandInput extends TestConnectionFunctionRequest {}
/**
 * @public
 *
 * The output of {@link TestConnectionFunctionCommand}.
 */
export interface TestConnectionFunctionCommandOutput extends TestConnectionFunctionResult, __MetadataBearer {}

/**
 * <p>Tests a connection function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, TestConnectionFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, TestConnectionFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // TestConnectionFunctionRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 *   Stage: "DEVELOPMENT" || "LIVE",
 *   ConnectionObject: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new TestConnectionFunctionCommand(input);
 * const response = await client.send(command);
 * // { // TestConnectionFunctionResult
 * //   ConnectionFunctionTestResult: { // ConnectionFunctionTestResult
 * //     ConnectionFunctionSummary: { // ConnectionFunctionSummary
 * //       Name: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       ConnectionFunctionConfig: { // FunctionConfig
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
 * //       ConnectionFunctionArn: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       Stage: "DEVELOPMENT" || "LIVE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //     ComputeUtilization: "STRING_VALUE",
 * //     ConnectionFunctionExecutionLogs: [ // FunctionExecutionLogList
 * //       "STRING_VALUE",
 * //     ],
 * //     ConnectionFunctionErrorMessage: "STRING_VALUE",
 * //     ConnectionFunctionOutput: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param TestConnectionFunctionCommandInput - {@link TestConnectionFunctionCommandInput}
 * @returns {@link TestConnectionFunctionCommandOutput}
 * @see {@link TestConnectionFunctionCommandInput} for command's `input` shape.
 * @see {@link TestConnectionFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
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
export class TestConnectionFunctionCommand extends $Command
  .classBuilder<
    TestConnectionFunctionCommandInput,
    TestConnectionFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "TestConnectionFunction", {})
  .n("CloudFrontClient", "TestConnectionFunctionCommand")
  .sc(TestConnectionFunction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestConnectionFunctionRequest;
      output: TestConnectionFunctionResult;
    };
    sdk: {
      input: TestConnectionFunctionCommandInput;
      output: TestConnectionFunctionCommandOutput;
    };
  };
}
