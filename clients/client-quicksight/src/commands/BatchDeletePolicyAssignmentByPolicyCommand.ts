// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchDeletePolicyAssignmentByPolicyRequest,
  BatchDeletePolicyAssignmentByPolicyResponse,
} from "../models/models_2";
import { BatchDeletePolicyAssignmentByPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchDeletePolicyAssignmentByPolicyCommand}.
 */
export interface BatchDeletePolicyAssignmentByPolicyCommandInput extends BatchDeletePolicyAssignmentByPolicyRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeletePolicyAssignmentByPolicyCommand}.
 */
export interface BatchDeletePolicyAssignmentByPolicyCommandOutput extends BatchDeletePolicyAssignmentByPolicyResponse, __MetadataBearer {}

/**
 * <p>Removes a governance policy from multiple Amazon Quick Sight principals in a single request. A principal that
 *          doesn't have the policy is reported as a success.</p>
 *          <p>Each entry succeeds or fails independently. Check the <code>Errors</code> list in the response for
 *          entries that failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, BatchDeletePolicyAssignmentByPolicyCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, BatchDeletePolicyAssignmentByPolicyCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // BatchDeletePolicyAssignmentByPolicyRequest
 *   AccountId: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 *   PrincipalArns: [ // BatchDeletePolicyAssignmentByPolicyRequestPrincipalArnsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeletePolicyAssignmentByPolicyCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeletePolicyAssignmentByPolicyResponse
 * //   PolicyArn: "STRING_VALUE", // required
 * //   Success: [ // BatchDeletePolicyAssignmentSuccessList // required
 * //     { // BatchDeletePolicyAssignmentSuccess
 * //       PrincipalArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Errors: [ // BatchDeletePolicyAssignmentErrorList // required
 * //     { // BatchDeletePolicyAssignmentError
 * //       PrincipalArn: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeletePolicyAssignmentByPolicyCommandInput - {@link BatchDeletePolicyAssignmentByPolicyCommandInput}
 * @returns {@link BatchDeletePolicyAssignmentByPolicyCommandOutput}
 * @see {@link BatchDeletePolicyAssignmentByPolicyCommandInput} for command's `input` shape.
 * @see {@link BatchDeletePolicyAssignmentByPolicyCommandOutput} for command's `response` shape.
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
export class BatchDeletePolicyAssignmentByPolicyCommand extends command<BatchDeletePolicyAssignmentByPolicyCommandInput, BatchDeletePolicyAssignmentByPolicyCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeletePolicyAssignmentByPolicy",
  BatchDeletePolicyAssignmentByPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeletePolicyAssignmentByPolicyRequest;
      output: BatchDeletePolicyAssignmentByPolicyResponse;
    };
    sdk: {
      input: BatchDeletePolicyAssignmentByPolicyCommandInput;
      output: BatchDeletePolicyAssignmentByPolicyCommandOutput;
    };
  };
}
