// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessGrantInput, DeleteAccessGrantOutput } from "../models/models_0";
import { DeleteAccessGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessGrantCommand}.
 */
export interface DeleteAccessGrantCommandInput extends DeleteAccessGrantInput {}
/**
 * @public
 *
 * The output of {@link DeleteAccessGrantCommand}.
 */
export interface DeleteAccessGrantCommandOutput extends DeleteAccessGrantOutput, __MetadataBearer {}

/**
 * Removes an existing AccessGrant, revoking the access it granted.
 *
 * A service-managed grant cannot be deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, DeleteAccessGrantCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, DeleteAccessGrantCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // DeleteAccessGrantInput
 *   grantId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccessGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessGrantCommandInput - {@link DeleteAccessGrantCommandInput}
 * @returns {@link DeleteAccessGrantCommandOutput}
 * @see {@link DeleteAccessGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessGrantCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Delete an access grant
 * ```javascript
 * // The following example deletes an access grant by ID, revoking the access it granted. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   grantId: "7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d"
 * };
 * const command = new DeleteAccessGrantCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteAccessGrantCommand extends command<DeleteAccessGrantCommandInput, DeleteAccessGrantCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessGrant",
  DeleteAccessGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessGrantInput;
      output: {};
    };
    sdk: {
      input: DeleteAccessGrantCommandInput;
      output: DeleteAccessGrantCommandOutput;
    };
  };
}
