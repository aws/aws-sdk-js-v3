// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateFunctionRequest,
  UpdateFunctionRequestFilterSensitiveLog,
  UpdateFunctionResult,
} from "../models/models_1";
import { de_UpdateFunctionCommand, se_UpdateFunctionCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFunctionCommand}.
 */
export interface UpdateFunctionCommandInput extends UpdateFunctionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFunctionCommand}.
 */
export interface UpdateFunctionCommandOutput extends UpdateFunctionResult, __MetadataBearer {}

/**
 * <p>Updates a CloudFront function.</p>
 *          <p>You can update a function's code or the comment that describes the function. You
 * 			cannot update a function's name.</p>
 *          <p>To update a function, you provide the function's name and version (<code>ETag</code>
 * 			value) along with the updated function code. To get the name and version, you can use
 * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
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
 * const command = new UpdateFunctionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFunctionResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFunctionCommandInput - {@link UpdateFunctionCommandInput}
 * @returns {@link UpdateFunctionCommandOutput}
 * @see {@link UpdateFunctionCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link FunctionSizeLimitExceeded} (client fault)
 *  <p>The function is too large. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> (formerly known as limits) in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
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
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @example To update a function
 * ```javascript
 * // Use the following command to update a function.
 * const input = {
 *   FunctionCode: "function-code-changed.js",
 *   FunctionConfig: {
 *     Comment: "my-changed-comment",
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
 *   IfMatch: "ETVPDKIKX0DER",
 *   Name: "my-function-name"
 * };
 * const command = new UpdateFunctionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ETag: "E3UN6WX5RRO2AG",
 *   FunctionSummary: {
 *     FunctionConfig: {
 *       Comment: "my-changed-comment",
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
 *       LastModifiedTime: "2023-11-07T20:01:37.174Z",
 *       Stage: "DEVELOPMENT"
 *     },
 *     Name: "my-function-name",
 *     Status: "UNPUBLISHED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateFunctionCommand extends $Command
  .classBuilder<
    UpdateFunctionCommandInput,
    UpdateFunctionCommandOutput,
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
  .s("Cloudfront2020_05_31", "UpdateFunction", {})
  .n("CloudFrontClient", "UpdateFunctionCommand")
  .f(UpdateFunctionRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateFunctionCommand)
  .de(de_UpdateFunctionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFunctionRequest;
      output: UpdateFunctionResult;
    };
    sdk: {
      input: UpdateFunctionCommandInput;
      output: UpdateFunctionCommandOutput;
    };
  };
}
