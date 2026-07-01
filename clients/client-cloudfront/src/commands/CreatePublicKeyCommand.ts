// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePublicKeyRequest, CreatePublicKeyResult } from "../models/models_0";
import { CreatePublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class CreatePublicKeyCommand extends command<CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "CreatePublicKey",
  CreatePublicKey$
) {
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
