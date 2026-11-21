// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePolicyAssignmentRequest, DeletePolicyAssignmentResponse } from "../models/models_4";
import { DeletePolicyAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePolicyAssignmentCommand}.
 */
export interface DeletePolicyAssignmentCommandInput extends DeletePolicyAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DeletePolicyAssignmentCommand}.
 */
export interface DeletePolicyAssignmentCommandOutput extends DeletePolicyAssignmentResponse, __MetadataBearer {}

/**
 * <p>Removes a governance policy from an Amazon Quick Sight principal. If the principal doesn't have the specified
 *          policy, the request succeeds and makes no change. If the principal has a different policy of the same
 *          type, the request fails with a <code>ConflictException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeletePolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeletePolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeletePolicyAssignmentRequest
 *   AccountId: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 *   PrincipalArn: "STRING_VALUE", // required
 *   Revision: Number("long"),
 * };
 * const command = new DeletePolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyAssignmentCommandInput - {@link DeletePolicyAssignmentCommandInput}
 * @returns {@link DeletePolicyAssignmentCommandOutput}
 * @see {@link DeletePolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeletePolicyAssignmentCommand extends command<DeletePolicyAssignmentCommandInput, DeletePolicyAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "DeletePolicyAssignment",
  DeletePolicyAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyAssignmentRequest;
      output: {};
    };
    sdk: {
      input: DeletePolicyAssignmentCommandInput;
      output: DeletePolicyAssignmentCommandOutput;
    };
  };
}
