// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  BatchPutPolicyAssignmentByPolicyRequest,
  BatchPutPolicyAssignmentByPolicyResponse,
} from "../models/models_2";
import { BatchPutPolicyAssignmentByPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchPutPolicyAssignmentByPolicyCommand}.
 */
export interface BatchPutPolicyAssignmentByPolicyCommandInput extends BatchPutPolicyAssignmentByPolicyRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutPolicyAssignmentByPolicyCommand}.
 */
export interface BatchPutPolicyAssignmentByPolicyCommandOutput extends BatchPutPolicyAssignmentByPolicyResponse, __MetadataBearer {}

/**
 * <p>Assigns a governance policy to multiple Amazon Quick Sight principals in a single request. If a principal
 *          already has a policy of the same type, this operation replaces it.</p>
 *          <p>Each entry succeeds or fails independently. Check the <code>Errors</code> list in the response for
 *          entries that failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, BatchPutPolicyAssignmentByPolicyCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, BatchPutPolicyAssignmentByPolicyCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // BatchPutPolicyAssignmentByPolicyRequest
 *   AccountId: "STRING_VALUE", // required
 *   PolicyArn: "STRING_VALUE", // required
 *   Assignments: [ // BatchPutPolicyAssignmentByPolicyRequestAssignmentsList // required
 *     { // PutAssignmentEntry
 *       PrincipalArn: "STRING_VALUE", // required
 *       ExistingPolicyArn: "STRING_VALUE",
 *       Revision: Number("long"),
 *     },
 *   ],
 * };
 * const command = new BatchPutPolicyAssignmentByPolicyCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutPolicyAssignmentByPolicyResponse
 * //   PolicyArn: "STRING_VALUE", // required
 * //   Success: [ // BatchPutPolicyAssignmentSuccessList // required
 * //     { // BatchPutPolicyAssignmentSuccess
 * //       PrincipalArn: "STRING_VALUE", // required
 * //       ReplacedPolicyArn: "STRING_VALUE",
 * //       Revision: Number("long"), // required
 * //     },
 * //   ],
 * //   Errors: [ // BatchPutPolicyAssignmentErrorList // required
 * //     { // BatchPutPolicyAssignmentError
 * //       PrincipalArn: "STRING_VALUE", // required
 * //       ErrorCode: "STRING_VALUE", // required
 * //       ErrorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutPolicyAssignmentByPolicyCommandInput - {@link BatchPutPolicyAssignmentByPolicyCommandInput}
 * @returns {@link BatchPutPolicyAssignmentByPolicyCommandOutput}
 * @see {@link BatchPutPolicyAssignmentByPolicyCommandInput} for command's `input` shape.
 * @see {@link BatchPutPolicyAssignmentByPolicyCommandOutput} for command's `response` shape.
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
export class BatchPutPolicyAssignmentByPolicyCommand extends command<BatchPutPolicyAssignmentByPolicyCommandInput, BatchPutPolicyAssignmentByPolicyCommandOutput>(
  _ep0,
  _mw0,
  "BatchPutPolicyAssignmentByPolicy",
  BatchPutPolicyAssignmentByPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutPolicyAssignmentByPolicyRequest;
      output: BatchPutPolicyAssignmentByPolicyResponse;
    };
    sdk: {
      input: BatchPutPolicyAssignmentByPolicyCommandInput;
      output: BatchPutPolicyAssignmentByPolicyCommandOutput;
    };
  };
}
