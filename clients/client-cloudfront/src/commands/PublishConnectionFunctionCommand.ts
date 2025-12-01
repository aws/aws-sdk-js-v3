// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PublishConnectionFunctionRequest, PublishConnectionFunctionResult } from "../models/models_1";
import { PublishConnectionFunction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishConnectionFunctionCommand}.
 */
export interface PublishConnectionFunctionCommandInput extends PublishConnectionFunctionRequest {}
/**
 * @public
 *
 * The output of {@link PublishConnectionFunctionCommand}.
 */
export interface PublishConnectionFunctionCommandOutput extends PublishConnectionFunctionResult, __MetadataBearer {}

/**
 * <p>Publishes a connection function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, PublishConnectionFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, PublishConnectionFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // PublishConnectionFunctionRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new PublishConnectionFunctionCommand(input);
 * const response = await client.send(command);
 * // { // PublishConnectionFunctionResult
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
 * // };
 *
 * ```
 *
 * @param PublishConnectionFunctionCommandInput - {@link PublishConnectionFunctionCommandInput}
 * @returns {@link PublishConnectionFunctionCommandOutput}
 * @see {@link PublishConnectionFunctionCommandInput} for command's `input` shape.
 * @see {@link PublishConnectionFunctionCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to <code>false</code>.</p>
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
export class PublishConnectionFunctionCommand extends $Command
  .classBuilder<
    PublishConnectionFunctionCommandInput,
    PublishConnectionFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "PublishConnectionFunction", {})
  .n("CloudFrontClient", "PublishConnectionFunctionCommand")
  .sc(PublishConnectionFunction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishConnectionFunctionRequest;
      output: PublishConnectionFunctionResult;
    };
    sdk: {
      input: PublishConnectionFunctionCommandInput;
      output: PublishConnectionFunctionCommandOutput;
    };
  };
}
