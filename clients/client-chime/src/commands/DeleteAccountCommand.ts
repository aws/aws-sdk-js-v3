// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccountRequest, DeleteAccountResponse } from "../models/models_0";
import { DeleteAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccountCommand}.
 */
export interface DeleteAccountCommandInput extends DeleteAccountRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccountCommand}.
 */
export interface DeleteAccountCommandOutput extends DeleteAccountResponse, __MetadataBearer {}

/**
 * Deletes the specified Amazon Chime account. You must suspend all users before deleting `Team` account. You can use the BatchSuspendUser action to dodo.
 *
 * For `EnterpriseLWA` and `EnterpriseAD` accounts, you must release the claimed domains for your Amazon Chime account before deletion. As soon as you release the domain, all users under that account are suspended.
 *
 * Deleted accounts appear in your `Disabled` accounts list for 90 days. To restore deleted account from your `Disabled` accounts list, you must contact AWS Support.
 *
 * After 90 days, deleted accounts are permanently removed from your `Disabled` accounts list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteAccountCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteAccountCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // DeleteAccountRequest
 *   AccountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccountCommandInput - {@link DeleteAccountCommandInput}
 * @returns {@link DeleteAccountCommandOutput}
 * @see {@link DeleteAccountCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 *
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class DeleteAccountCommand extends command<DeleteAccountCommandInput, DeleteAccountCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccount",
  DeleteAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccountRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccountCommandInput;
      output: DeleteAccountCommandOutput;
    };
  };
}
