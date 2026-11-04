// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRetentionPolicyRequest, DeleteRetentionPolicyResponse } from "../models/models_0";
import { DeleteRetentionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRetentionPolicyCommand}.
 */
export interface DeleteRetentionPolicyCommandInput extends DeleteRetentionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRetentionPolicyCommand}.
 */
export interface DeleteRetentionPolicyCommandOutput extends DeleteRetentionPolicyResponse, __MetadataBearer {}

/**
 * Deletes the specified retention policy from the specified organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteRetentionPolicyRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRetentionPolicyCommandInput - {@link DeleteRetentionPolicyCommandInput}
 * @returns {@link DeleteRetentionPolicyCommandOutput}
 * @see {@link DeleteRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
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
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class DeleteRetentionPolicyCommand extends command<DeleteRetentionPolicyCommandInput, DeleteRetentionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRetentionPolicy",
  DeleteRetentionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRetentionPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteRetentionPolicyCommandInput;
      output: DeleteRetentionPolicyCommandOutput;
    };
  };
}
