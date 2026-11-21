// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutPolicyAssignmentRequest, PutPolicyAssignmentResponse } from "../models/models_5";
import { PutPolicyAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutPolicyAssignmentCommand}.
 */
export interface PutPolicyAssignmentCommandInput extends PutPolicyAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link PutPolicyAssignmentCommand}.
 */
export interface PutPolicyAssignmentCommandOutput extends PutPolicyAssignmentResponse, __MetadataBearer {}

/**
 * <p>Assigns a governance policy to an Amazon Quick Sight principal. A principal can have one policy of each
 *          policy type. If the principal already has a policy of the same type, this operation replaces it.</p>
 *          <p>To make the change conditional, specify <code>ExistingPolicyArn</code>, <code>Revision</code>, or
 *          both. If the current assignment doesn't match, the request fails with a <code>ConflictException</code>
 *          and makes no change. If the principal already has the specified policy, the request succeeds and makes
 *          no change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, PutPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, PutPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // PutPolicyAssignmentRequest
 *   AccountId: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 *   PrincipalArn: "STRING_VALUE", // required
 *   ExistingPolicyArn: "STRING_VALUE",
 *   Revision: Number("long"),
 * };
 * const command = new PutPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // PutPolicyAssignmentResponse
 * //   PolicyArn: "STRING_VALUE", // required
 * //   ReplacedPolicyArn: "STRING_VALUE",
 * //   Revision: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param PutPolicyAssignmentCommandInput - {@link PutPolicyAssignmentCommandInput}
 * @returns {@link PutPolicyAssignmentCommandOutput}
 * @see {@link PutPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link PutPolicyAssignmentCommandOutput} for command's `response` shape.
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
export class PutPolicyAssignmentCommand extends command<PutPolicyAssignmentCommandInput, PutPolicyAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "PutPolicyAssignment",
  PutPolicyAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPolicyAssignmentRequest;
      output: PutPolicyAssignmentResponse;
    };
    sdk: {
      input: PutPolicyAssignmentCommandInput;
      output: PutPolicyAssignmentCommandOutput;
    };
  };
}
