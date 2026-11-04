// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteKeyValueStoreRequest } from "../models/models_0";
import { DeleteKeyValueStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteKeyValueStoreCommand}.
 */
export interface DeleteKeyValueStoreCommandInput extends DeleteKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyValueStoreCommand}.
 */
export interface DeleteKeyValueStoreCommandOutput extends __MetadataBearer {}

/**
 * Specifies the key value store to delete.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteKeyValueStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteKeyValueStoreRequest
 *   Name: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteKeyValueStoreCommandInput - {@link DeleteKeyValueStoreCommandInput}
 * @returns {@link DeleteKeyValueStoreCommandOutput}
 * @see {@link DeleteKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyValueStoreCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @example To delete a KeyValueStore
 * ```javascript
 * // Use the following command to delete a KeyValueStore.
 * const input = {
 *   IfMatch: "ETVPDKIKX0DER",
 *   Name: "my-keyvaluestore-name"
 * };
 * const command = new DeleteKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteKeyValueStoreCommand extends command<DeleteKeyValueStoreCommandInput, DeleteKeyValueStoreCommandOutput>(
  _ep0,
  _mw0,
  "DeleteKeyValueStore",
  DeleteKeyValueStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyValueStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteKeyValueStoreCommandInput;
      output: DeleteKeyValueStoreCommandOutput;
    };
  };
}
