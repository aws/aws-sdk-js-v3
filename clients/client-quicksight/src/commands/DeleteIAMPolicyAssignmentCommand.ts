// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIAMPolicyAssignmentRequest, DeleteIAMPolicyAssignmentResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteIAMPolicyAssignment } from "../schemas/schemas_33_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an existing IAM policy assignment.</p>
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
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConcurrentUpdatingException} (server fault)
 *  <p>A resource is already in a state that indicates an operation is happening that must complete
 * 			before a new update can be applied.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class DeleteIAMPolicyAssignmentCommand extends $Command
  .classBuilder<
    DeleteIAMPolicyAssignmentCommandInput,
    DeleteIAMPolicyAssignmentCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "DeleteIAMPolicyAssignment", {})
  .n("QuickSightClient", "DeleteIAMPolicyAssignmentCommand")
  .sc(DeleteIAMPolicyAssignment)
  .build() {
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
