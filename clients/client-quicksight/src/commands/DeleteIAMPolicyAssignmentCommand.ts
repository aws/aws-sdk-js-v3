// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIAMPolicyAssignmentRequest, DeleteIAMPolicyAssignmentResponse } from "../models/models_3";
import { DeleteIAMPolicyAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIAMPolicyAssignmentCommand}.
 */
export interface DeleteIAMPolicyAssignmentCommandInput extends DeleteIAMPolicyAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIAMPolicyAssignmentCommand}.
 */
export interface DeleteIAMPolicyAssignmentCommandOutput extends DeleteIAMPolicyAssignmentResponse, __MetadataBearer {}

/**
 * Deletes an existing IAM policy assignment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteIAMPolicyAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssignmentName: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new DeleteIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIAMPolicyAssignmentResponse
 * //   AssignmentName: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteIAMPolicyAssignmentCommandInput - {@link DeleteIAMPolicyAssignmentCommandInput}
 * @returns {@link DeleteIAMPolicyAssignmentCommandOutput}
 * @see {@link DeleteIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link DeleteIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConcurrentUpdatingException} (server fault)
 *
 * A resource is already in a state that indicates an operation is happening that must complete before a new update can be applied.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class DeleteIAMPolicyAssignmentCommand extends command<DeleteIAMPolicyAssignmentCommandInput, DeleteIAMPolicyAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIAMPolicyAssignment",
  DeleteIAMPolicyAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIAMPolicyAssignmentRequest;
      output: DeleteIAMPolicyAssignmentResponse;
    };
    sdk: {
      input: DeleteIAMPolicyAssignmentCommandInput;
      output: DeleteIAMPolicyAssignmentCommandOutput;
    };
  };
}
