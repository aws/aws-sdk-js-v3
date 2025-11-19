// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateIAMPolicyAssignmentRequest, UpdateIAMPolicyAssignmentResponse } from "../models/models_4";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { UpdateIAMPolicyAssignment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIAMPolicyAssignmentCommand}.
 */
export interface UpdateIAMPolicyAssignmentCommandInput extends UpdateIAMPolicyAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIAMPolicyAssignmentCommand}.
 */
export interface UpdateIAMPolicyAssignmentCommandOutput extends UpdateIAMPolicyAssignmentResponse, __MetadataBearer {}

/**
 * <p>Updates an existing IAM policy assignment. This operation updates only
 * 			the optional parameter or parameters that are specified in the request. This overwrites
 * 			all of the users included in <code>Identities</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateIAMPolicyAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssignmentName: "STRING_VALUE", // required
 *   Namespace: "STRING_VALUE", // required
 *   AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 *   PolicyArn: "STRING_VALUE",
 *   Identities: { // IdentityMap
 *     "<keys>": [ // IdentityNameList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIAMPolicyAssignmentResponse
 * //   AssignmentName: "STRING_VALUE",
 * //   AssignmentId: "STRING_VALUE",
 * //   PolicyArn: "STRING_VALUE",
 * //   Identities: { // IdentityMap
 * //     "<keys>": [ // IdentityNameList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateIAMPolicyAssignmentCommandInput - {@link UpdateIAMPolicyAssignmentCommandInput}
 * @returns {@link UpdateIAMPolicyAssignmentCommandOutput}
 * @see {@link UpdateIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link UpdateIAMPolicyAssignmentCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
export class UpdateIAMPolicyAssignmentCommand extends $Command
  .classBuilder<
    UpdateIAMPolicyAssignmentCommandInput,
    UpdateIAMPolicyAssignmentCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "UpdateIAMPolicyAssignment", {})
  .n("QuickSightClient", "UpdateIAMPolicyAssignmentCommand")
  .sc(UpdateIAMPolicyAssignment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIAMPolicyAssignmentRequest;
      output: UpdateIAMPolicyAssignmentResponse;
    };
    sdk: {
      input: UpdateIAMPolicyAssignmentCommandInput;
      output: UpdateIAMPolicyAssignmentCommandOutput;
    };
  };
}
