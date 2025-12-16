// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTrustStoreRequest, CreateTrustStoreResult } from "../models/models_0";
import { CreateTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandInput extends CreateTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustStoreCommand}.
 */
export interface CreateTrustStoreCommandOutput extends CreateTrustStoreResult, __MetadataBearer {}

/**
 * <p>Creates a trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateTrustStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateTrustStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateTrustStoreRequest
 *   Name: "STRING_VALUE", // required
 *   CaCertificatesBundleSource: { // CaCertificatesBundleSource Union: only one key present
 *     CaCertificatesBundleS3Location: { // CaCertificatesBundleS3Location
 *       Bucket: "STRING_VALUE", // required
 *       Key: "STRING_VALUE", // required
 *       Region: "STRING_VALUE", // required
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   Tags: { // Tags
 *     Items: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustStoreResult
 * //   TrustStore: { // TrustStore
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "pending" || "active" || "failed",
 * //     NumberOfCaCertificates: Number("int"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     Reason: "STRING_VALUE",
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrustStoreCommandInput - {@link CreateTrustStoreCommandInput}
 * @returns {@link CreateTrustStoreCommandOutput}
 * @see {@link CreateTrustStoreCommandInput} for command's `input` shape.
 * @see {@link CreateTrustStoreCommandOutput} for command's `response` shape.
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
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidTagging} (client fault)
 *  <p>The tagging specified is not valid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateTrustStoreCommand extends $Command
  .classBuilder<
    CreateTrustStoreCommandInput,
    CreateTrustStoreCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreateTrustStore", {})
  .n("CloudFrontClient", "CreateTrustStoreCommand")
  .sc(CreateTrustStore$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrustStoreRequest;
      output: CreateTrustStoreResult;
    };
    sdk: {
      input: CreateTrustStoreCommandInput;
      output: CreateTrustStoreCommandOutput;
    };
  };
}
