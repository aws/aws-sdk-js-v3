// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateDelegateToResourceRequest, AssociateDelegateToResourceResponse } from "../models/models_0";
import { AssociateDelegateToResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateDelegateToResourceCommand}.
 */
export interface AssociateDelegateToResourceCommandInput extends AssociateDelegateToResourceRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDelegateToResourceCommand}.
 */
export interface AssociateDelegateToResourceCommandOutput extends AssociateDelegateToResourceResponse, __MetadataBearer {}

/**
 * Adds a member (user or group) to the resource's set of delegates.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssociateDelegateToResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssociateDelegateToResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // AssociateDelegateToResourceRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   ResourceId: "STRING_VALUE", // required
 *   EntityId: "STRING_VALUE", // required
 * };
 * const command = new AssociateDelegateToResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDelegateToResourceCommandInput - {@link AssociateDelegateToResourceCommandInput}
 * @returns {@link AssociateDelegateToResourceCommandOutput}
 * @see {@link AssociateDelegateToResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateDelegateToResourceCommandOutput} for command's `response` shape.
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
export class AssociateDelegateToResourceCommand extends command<AssociateDelegateToResourceCommandInput, AssociateDelegateToResourceCommandOutput>(
  _ep0,
  _mw0,
  "AssociateDelegateToResource",
  AssociateDelegateToResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDelegateToResourceRequest;
      output: {};
    };
    sdk: {
      input: AssociateDelegateToResourceCommandInput;
      output: AssociateDelegateToResourceCommandOutput;
    };
  };
}
