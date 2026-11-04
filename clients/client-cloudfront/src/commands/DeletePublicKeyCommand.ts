// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePublicKeyRequest } from "../models/models_0";
import { DeletePublicKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePublicKeyCommand}.
 */
export interface DeletePublicKeyCommandInput extends DeletePublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePublicKeyCommand}.
 */
export interface DeletePublicKeyCommandOutput extends __MetadataBearer {}

/**
 * Remove a public key you previously added to CloudFront.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeletePublicKeyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeletePublicKeyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeletePublicKeyRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE",
 * };
 * const command = new DeletePublicKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePublicKeyCommandInput - {@link DeletePublicKeyCommandInput}
 * @returns {@link DeletePublicKeyCommandOutput}
 * @see {@link DeletePublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeletePublicKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
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
 * @throws {@link PublicKeyInUse} (client fault)
 *
 * The specified public key is in use.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class DeletePublicKeyCommand extends command<DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput>(
  _ep0,
  _mw0,
  "DeletePublicKey",
  DeletePublicKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePublicKeyRequest;
      output: {};
    };
    sdk: {
      input: DeletePublicKeyCommandInput;
      output: DeletePublicKeyCommandOutput;
    };
  };
}
