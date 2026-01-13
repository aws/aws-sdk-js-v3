// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateConnectionFunctionRequest, CreateConnectionFunctionResult } from "../models/models_0";
import { CreateConnectionFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectionFunctionCommand}.
 */
export interface CreateConnectionFunctionCommandInput extends CreateConnectionFunctionRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectionFunctionCommand}.
 */
export interface CreateConnectionFunctionCommandOutput extends CreateConnectionFunctionResult, __MetadataBearer {}

/**
 * <p>Creates a connection function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateConnectionFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateConnectionFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateConnectionFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   ConnectionFunctionConfig: { // FunctionConfig
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
 *   ConnectionFunctionCode: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   Tags: { // Tags
 *     Items: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateConnectionFunctionCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectionFunctionResult
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
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectionFunctionCommandInput - {@link CreateConnectionFunctionCommandInput}
 * @returns {@link CreateConnectionFunctionCommandOutput}
 * @see {@link CreateConnectionFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *  <p>The entity already exists. You must provide a unique entity.</p>
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *  <p>The entity limit has been exceeded.</p>
 *
 * @throws {@link EntitySizeLimitExceeded} (client fault)
 *  <p>The entity size limit was exceeded.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidTagging} (client fault)
 *  <p>The tagging specified is not valid.</p>
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
export class CreateConnectionFunctionCommand extends $Command
  .classBuilder<
    CreateConnectionFunctionCommandInput,
    CreateConnectionFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreateConnectionFunction", {})
  .n("CloudFrontClient", "CreateConnectionFunctionCommand")
  .sc(CreateConnectionFunction$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectionFunctionRequest;
      output: CreateConnectionFunctionResult;
    };
    sdk: {
      input: CreateConnectionFunctionCommandInput;
      output: CreateConnectionFunctionCommandOutput;
    };
  };
}
