// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApprovalPolicyRequest, DeleteApprovalPolicyResponse } from "../models/models_3";
import { DeleteApprovalPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApprovalPolicyCommand}.
 */
export interface DeleteApprovalPolicyCommandInput extends DeleteApprovalPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApprovalPolicyCommand}.
 */
export interface DeleteApprovalPolicyCommandOutput extends DeleteApprovalPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes an approval policy in Quick Sight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteApprovalPolicyCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteApprovalPolicyCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteApprovalPolicyRequest
 *   PolicyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApprovalPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApprovalPolicyCommandInput - {@link DeleteApprovalPolicyCommandInput}
 * @returns {@link DeleteApprovalPolicyCommandOutput}
 * @see {@link DeleteApprovalPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteApprovalPolicyCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteApprovalPolicyCommand extends command<DeleteApprovalPolicyCommandInput, DeleteApprovalPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApprovalPolicy",
  DeleteApprovalPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApprovalPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteApprovalPolicyCommandInput;
      output: DeleteApprovalPolicyCommandOutput;
    };
  };
}
