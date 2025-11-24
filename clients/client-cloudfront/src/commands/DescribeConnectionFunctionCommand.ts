// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConnectionFunctionRequest, DescribeConnectionFunctionResult } from "../models/models_0";
import { DescribeConnectionFunction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConnectionFunctionCommand}.
 */
export interface DescribeConnectionFunctionCommandInput extends DescribeConnectionFunctionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConnectionFunctionCommand}.
 */
export interface DescribeConnectionFunctionCommandOutput extends DescribeConnectionFunctionResult, __MetadataBearer {}

/**
 * <p>Describes a connection function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DescribeConnectionFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DescribeConnectionFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DescribeConnectionFunctionRequest
 *   Identifier: "STRING_VALUE", // required
 *   Stage: "DEVELOPMENT" || "LIVE",
 * };
 * const command = new DescribeConnectionFunctionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConnectionFunctionResult
 * //   ConnectionFunctionSummary: { // ConnectionFunctionSummary
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     ConnectionFunctionConfig: { // FunctionConfig
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
 * //     ConnectionFunctionArn: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     Stage: "DEVELOPMENT" || "LIVE", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConnectionFunctionCommandInput - {@link DescribeConnectionFunctionCommandInput}
 * @returns {@link DescribeConnectionFunctionCommandOutput}
 * @see {@link DescribeConnectionFunctionCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
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
export class DescribeConnectionFunctionCommand extends $Command
  .classBuilder<
    DescribeConnectionFunctionCommandInput,
    DescribeConnectionFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "DescribeConnectionFunction", {})
  .n("CloudFrontClient", "DescribeConnectionFunctionCommand")
  .sc(DescribeConnectionFunction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConnectionFunctionRequest;
      output: DescribeConnectionFunctionResult;
    };
    sdk: {
      input: DescribeConnectionFunctionCommandInput;
      output: DescribeConnectionFunctionCommandOutput;
    };
  };
}
