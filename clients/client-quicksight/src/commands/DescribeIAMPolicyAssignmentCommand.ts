// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeIAMPolicyAssignmentRequest, DescribeIAMPolicyAssignmentResponse } from "../models/models_4";
import { DescribeIAMPolicyAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeIAMPolicyAssignmentCommand}.
 */
export interface DescribeIAMPolicyAssignmentCommandInput extends DescribeIAMPolicyAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIAMPolicyAssignmentCommand}.
 */
export interface DescribeIAMPolicyAssignmentCommandOutput extends DescribeIAMPolicyAssignmentResponse, __MetadataBearer {}

/**
 * <p>Describes an existing IAM policy assignment, as specified by the
 * 			assignment name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeIAMPolicyAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssignmentName: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DescribeIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIAMPolicyAssignmentResponse
 * //   IAMPolicyAssignment: { // IAMPolicyAssignment
 * //     AwsAccountId: "STRING_VALUE",
 * //     AssignmentId: "STRING_VALUE",
 * //     AssignmentName: "STRING_VALUE",
 * //     PolicyArn: "STRING_VALUE",
 * //     Identities: { // IdentityMap
 * //       "<keys>": [ // IdentityNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeIAMPolicyAssignmentCommandInput - {@link DescribeIAMPolicyAssignmentCommandInput}
 * @returns {@link DescribeIAMPolicyAssignmentCommandOutput}
 * @see {@link DescribeIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link DescribeIAMPolicyAssignmentCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
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
export class DescribeIAMPolicyAssignmentCommand extends command<DescribeIAMPolicyAssignmentCommandInput, DescribeIAMPolicyAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "DescribeIAMPolicyAssignment",
  DescribeIAMPolicyAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIAMPolicyAssignmentRequest;
      output: DescribeIAMPolicyAssignmentResponse;
    };
    sdk: {
      input: DescribeIAMPolicyAssignmentCommandInput;
      output: DescribeIAMPolicyAssignmentCommandOutput;
    };
  };
}
