// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePublicKeyRequest, UpdatePublicKeyResult } from "../models/models_1";
import { UpdatePublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePublicKeyCommand}.
 */
export interface UpdatePublicKeyCommandInput extends UpdatePublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePublicKeyCommand}.
 */
export interface UpdatePublicKeyCommandOutput extends UpdatePublicKeyResult, __MetadataBearer {}

/**
 * Update public key information. Note that the only value you can change is the comment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdatePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdatePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdatePublicKeyRequest
 *   PublicKeyConfig: { // PublicKeyConfig
 *     CallerReference: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     EncodedKey: "STRING_VALUE", // required
 *     Comment: "STRING_VALUE",
 *   },
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new UpdatePublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePublicKeyResult
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
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePublicKeyCommandInput - {@link UpdatePublicKeyCommandInput}
 * @returns {@link UpdatePublicKeyCommandOutput}
 * @see {@link UpdatePublicKeyCommandInput} for command's `input` shape.
 * @see {@link UpdatePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CannotChangeImmutablePublicKeyFields} (client fault)
 *
 * You can't change the value of a public key.
 *
 * @throws {@link IllegalUpdate} (client fault)
 *
 * The update contains modifications that are not allowed.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link NoSuchPublicKey} (client fault)
 *
 * The specified public key doesn't exist.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdatePublicKeyCommand extends command<UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePublicKey",
  UpdatePublicKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePublicKeyRequest;
      output: UpdatePublicKeyResult;
    };
    sdk: {
      input: UpdatePublicKeyCommandInput;
      output: UpdatePublicKeyCommandOutput;
    };
  };
}
