// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAlternateContactRequest } from "../models/models_0";
import { DeleteAlternateContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAlternateContactCommand}.
 */
export interface DeleteAlternateContactCommandInput extends DeleteAlternateContactRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAlternateContactCommand}.
 */
export interface DeleteAlternateContactCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified alternate contact from an Amazon Web Services account.
 *
 * For complete details about how to use the alternate contact operations, see [Update the alternate contacts for your Amazon Web Services account](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact-alternate.html).
 *
 * > **Note:** Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see [Enable trusted access for Amazon Web Services Account Management](https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, DeleteAlternateContactCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, DeleteAlternateContactCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // DeleteAlternateContactRequest
 *   AlternateContactType: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteAlternateContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAlternateContactCommandInput - {@link DeleteAlternateContactCommandInput}
 * @returns {@link DeleteAlternateContactCommandOutput}
 * @see {@link DeleteAlternateContactCommandInput} for command's `input` shape.
 * @see {@link DeleteAlternateContactCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation failed because the calling identity doesn't have the minimum required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation failed because of an error internal to Amazon Web Services. Try your operation again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation failed because it specified a resource that can't be found.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The operation failed because it was called too frequently and exceeded a throttle limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation failed because one of the input parameters was invalid.
 *
 * @throws {@link AccountServiceException}
 *
 * Base exception class for all service exceptions from Account service.
 *
 * @public
 */
export class DeleteAlternateContactCommand extends command<DeleteAlternateContactCommandInput, DeleteAlternateContactCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAlternateContact",
  DeleteAlternateContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAlternateContactRequest;
      output: {};
    };
    sdk: {
      input: DeleteAlternateContactCommandInput;
      output: DeleteAlternateContactCommandOutput;
    };
  };
}
