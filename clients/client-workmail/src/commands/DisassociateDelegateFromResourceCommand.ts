// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateDelegateFromResourceRequest,
  DisassociateDelegateFromResourceResponse,
} from "../models/models_0";
import { DisassociateDelegateFromResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateDelegateFromResourceCommand}.
 */
export interface DisassociateDelegateFromResourceCommandInput extends DisassociateDelegateFromResourceRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDelegateFromResourceCommand}.
 */
export interface DisassociateDelegateFromResourceCommandOutput extends DisassociateDelegateFromResourceResponse, __MetadataBearer {}

/**
 * Removes a member from the resource's set of delegates.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DisassociateDelegateFromResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DisassociateDelegateFromResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DisassociateDelegateFromResourceRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateDelegateFromResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDelegateFromResourceCommandInput - {@link DisassociateDelegateFromResourceCommandInput}
 * @returns {@link DisassociateDelegateFromResourceCommandOutput}
 * @see {@link DisassociateDelegateFromResourceCommandInput} for command's `input` shape.
 * @see {@link DisassociateDelegateFromResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * The identifier supplied for the user, group, or resource does not exist in your organization.
 *
 * @throws {@link EntityStateException} (client fault)
 *
 * You are performing an operation on a user, group, or resource that isn't in the expected state, such as trying to delete an active user.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * You can't perform a write operation against a read-only directory.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class DisassociateDelegateFromResourceCommand extends command<DisassociateDelegateFromResourceCommandInput, DisassociateDelegateFromResourceCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateDelegateFromResource",
  DisassociateDelegateFromResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDelegateFromResourceRequest;
      output: {};
    };
    sdk: {
      input: DisassociateDelegateFromResourceCommandInput;
      output: DisassociateDelegateFromResourceCommandOutput;
    };
  };
}
