// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateFunctionRequest, CreateFunctionResult } from "../models/models_0";
import { CreateFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a CloudFront function.
 *
 * To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.
 *
 * When you create a function, it's in the `DEVELOPMENT` stage. In this stage, you can test the function with `TestFunction`, and update it with `UpdateFunction`.
 *
 * When you're ready to use your function with a CloudFront distribution, use `PublishFunction` to copy the function from the `DEVELOPMENT` stage to `LIVE`. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.
 *
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
 *   Tags: { // Tags
 *     Items: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
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
 *
 * A function with the same name already exists in this Amazon Web Services account. To create a function, you must provide a unique name. To update an existing function, use `UpdateFunction`.
 *
 * @throws {@link FunctionSizeLimitExceeded} (client fault)
 *
 * The function is too large. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link TooManyFunctions} (client fault)
 *
 * You have reached the maximum number of CloudFront functions for this Amazon Web Services account. For more information, see [Quotas](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html) (formerly known as limits) in the *Amazon CloudFront Developer Guide*.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
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
export class CreateFunctionCommand extends command<CreateFunctionCommandInput, CreateFunctionCommandOutput>(
  _ep0,
  _mw0,
  "CreateFunction",
  CreateFunction$
) {
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
