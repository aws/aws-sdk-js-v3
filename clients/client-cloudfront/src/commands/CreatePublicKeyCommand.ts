// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreatePublicKeyRequest, CreatePublicKeyResult } from "../models/models_0";
import { CreatePublicKey } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePublicKeyCommand}.
 */
export interface CreatePublicKeyCommandInput extends CreatePublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreatePublicKeyCommand}.
 */
export interface CreatePublicKeyCommandOutput extends CreatePublicKeyResult, __MetadataBearer {}

/**
 * <p>Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreatePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreatePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreatePublicKeyRequest
 *   PublicKeyConfig: { // PublicKeyConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     EncodedKey: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreatePublicKeyResult
 * //   PublicKey: { // PublicKey
 * //     Id: "STRING_VALUE", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     PublicKeyConfig: { // PublicKeyConfig
 * //       CallerReference: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       EncodedKey: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //     },
 * //   },
 * //   Location: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePublicKeyCommandInput - {@link CreatePublicKeyCommandInput}
 * @returns {@link CreatePublicKeyCommandOutput}
 * @see {@link CreatePublicKeyCommandInput} for command's `input` shape.
 * @see {@link CreatePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link PublicKeyAlreadyExists} (client fault)
 *  <p>The specified public key already exists.</p>
 *
 * @throws {@link TooManyPublicKeys} (client fault)
 *  <p>The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreatePublicKeyCommand extends $Command
  .classBuilder<
    CreatePublicKeyCommandInput,
    CreatePublicKeyCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreatePublicKey", {})
  .n("CloudFrontClient", "CreatePublicKeyCommand")
  .sc(CreatePublicKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePublicKeyRequest;
      output: CreatePublicKeyResult;
    };
    sdk: {
      input: CreatePublicKeyCommandInput;
      output: CreatePublicKeyCommandOutput;
    };
  };
}
