// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPolicyAssignmentRequest, GetPolicyAssignmentResponse } from "../models/models_4";
import { GetPolicyAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPolicyAssignmentCommand}.
 */
export interface GetPolicyAssignmentCommandInput extends GetPolicyAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyAssignmentCommand}.
 */
export interface GetPolicyAssignmentCommandOutput extends GetPolicyAssignmentResponse, __MetadataBearer {}

/**
 * <p>Describes the policy of the specified type that an Amazon Quick Sight principal has. If the principal has no
 *          policy of that type, the response contains no policy details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, GetPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, GetPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // GetPolicyAssignmentRequest
 *   AccountId: "STRING_VALUE", // required
 *   PolicyType: "LIMITS_PROFILE" || "CUSTOM_PERMISSIONS", // required
 *   PrincipalArn: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyAssignmentResponse
 * //   PolicyArn: "STRING_VALUE",
 * //   PolicyName: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   Revision: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetPolicyAssignmentCommandInput - {@link GetPolicyAssignmentCommandInput}
 * @returns {@link GetPolicyAssignmentCommandOutput}
 * @see {@link GetPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link GetPolicyAssignmentCommandOutput} for command's `response` shape.
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
export class GetPolicyAssignmentCommand extends command<GetPolicyAssignmentCommandInput, GetPolicyAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "GetPolicyAssignment",
  GetPolicyAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyAssignmentRequest;
      output: GetPolicyAssignmentResponse;
    };
    sdk: {
      input: GetPolicyAssignmentCommandInput;
      output: GetPolicyAssignmentCommandOutput;
    };
  };
}
