// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrustStoreRequest } from "../models/models_0";
import { DeleteTrustStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTrustStoreCommand}.
 */
export interface DeleteTrustStoreCommandInput extends DeleteTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrustStoreCommand}.
 */
export interface DeleteTrustStoreCommandOutput extends __MetadataBearer {}

/**
 * Deletes a trust store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteTrustStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteTrustStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteTrustStoreRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrustStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrustStoreCommandInput - {@link DeleteTrustStoreCommandInput}
 * @returns {@link DeleteTrustStoreCommandOutput}
 * @see {@link DeleteTrustStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link CannotDeleteEntityWhileInUse} (client fault)
 *
 * The entity cannot be deleted while it is in use.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
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
export class DeleteTrustStoreCommand extends command<DeleteTrustStoreCommandInput, DeleteTrustStoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrustStore",
  DeleteTrustStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrustStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrustStoreCommandInput;
      output: DeleteTrustStoreCommandOutput;
    };
  };
}
