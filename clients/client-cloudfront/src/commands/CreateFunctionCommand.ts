// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateFunctionRequest, CreateFunctionResult } from "../models/models_0";
import { CreateFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandInput extends CreateFunctionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandOutput extends CreateFunctionResult, __MetadataBearer {}

/**
 * <p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   FunctionConfig: { // FunctionConfig
 *     Comment: "STRING_VALUE", // required
 *     Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 *     KeyValueStoreAssociations: { // KeyValueStoreAssociations
 *       Quantity: Number("int"), // required
 *       Items: [ // KeyValueStoreAssociationList
 *         { // KeyValueStoreAssociation
 *           KeyValueStoreARN: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   FunctionCode: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * // { // CreateFunctionResult
 * //   FunctionSummary: { // FunctionSummary
 * //     Name: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE",
 * //     FunctionConfig: { // FunctionConfig
 * //       Comment: "STRING_VALUE", // required
 * //       Runtime: "cloudfront-js-1.0" || "cloudfront-js-2.0", // required
 * //       KeyValueStoreAssociations: { // KeyValueStoreAssociations
 * //         Quantity: Number("int"), // required
 * //         Items: [ // KeyValueStoreAssociationList
 * //           { // KeyValueStoreAssociation
 * //             KeyValueStoreARN: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     FunctionMetadata: { // FunctionMetadata
 * //       FunctionARN: "STRING_VALUE", // required
 * //       Stage: "DEVELOPMENT" || "LIVE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFunctionCommandInput - {@link CreateFunctionCommandInput}
 * @returns {@link CreateFunctionCommandOutput}
 * @see {@link CreateFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FunctionAlreadyExists} (client fault)
 *  <p>A function with the same name already exists in this Amazon Web Services account. To create a function, you must provide a unique name. To update an existing function, use <code>UpdateFunction</code>.</p>
 *
 * @throws {@link FunctionSizeLimitExceeded} (client fault)
 *  <p>The function is too large. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link TooManyFunctions} (client fault)
 *  <p>You have reached the maximum number of CloudFront functions for this Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @example To create a function
 * ```javascript
 * // Use the following command to create a function.
 * const input = {
 *   FunctionCode: "function-code.js",
 *   FunctionConfig: {
 *     Comment: "my-function-comment",
 *     KeyValueStoreAssociations: {
 *       Items: [
 *         {
 *           KeyValueStoreARN: "arn:aws:cloudfront::123456789012:key-value-store/54947df8-0e9e-4471-a2f9-9af509fb5889"
 *         }
 *       ],
 *       Quantity: 1
 *     },
 *     Runtime: "cloudfront-js-2.0"
 *   },
 *   Name: "my-function-name"
 * };
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ETag: "ETVPDKIKX0DER",
 *   FunctionSummary: {
 *     FunctionConfig: {
 *       Comment: "my-function-comment",
 *       KeyValueStoreAssociations: {
 *         Items: [
 *           {
 *             KeyValueStoreARN: "arn:aws:cloudfront::123456789012:key-value-store/54947df8-0e9e-4471-a2f9-9af509fb5889"
 *           }
 *         ],
 *         Quantity: 1
 *       },
 *       Runtime: "cloudfront-js-2.0"
 *     },
 *     FunctionMetadata: {
 *       CreatedTime: "2023-11-07T19:53:50.334Z",
 *       FunctionARN: "arn:aws:cloudfront::123456789012:function/my-function-name",
 *       LastModifiedTime: "2023-11-07T19:53:50.334Z",
 *       Stage: "DEVELOPMENT"
 *     },
 *     Name: "my-function-name",
 *     Status: "UNPUBLISHED"
 *   },
 *   Location: "https://cloudfront.amazonaws.com/2020-05-31/function/arn:aws:cloudfront::123456789012:function/my-function-name"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateFunctionCommand extends $Command
  .classBuilder<
    CreateFunctionCommandInput,
    CreateFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreateFunction", {})
  .n("CloudFrontClient", "CreateFunctionCommand")
  .sc(CreateFunction$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateFunctionRequest;
      output: CreateFunctionResult;
    };
    sdk: {
      input: CreateFunctionCommandInput;
      output: CreateFunctionCommandOutput;
    };
  };
}
