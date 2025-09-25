// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIAMPolicyAssignmentRequest, CreateIAMPolicyAssignmentResponse } from "../models/models_3";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateIAMPolicyAssignment } from "../schemas/schemas_33_Policy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIAMPolicyAssignmentCommand}.
 */
export interface CreateIAMPolicyAssignmentCommandInput extends CreateIAMPolicyAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateIAMPolicyAssignmentCommand}.
 */
export interface CreateIAMPolicyAssignmentCommandOutput extends CreateIAMPolicyAssignmentResponse, __MetadataBearer {}

/**
 * <p>Creates an assignment with one specified IAM policy, identified by its
 * 			Amazon Resource Name (ARN). This policy assignment is attached to the specified groups
 * 			or users of Amazon QuickSight. Assignment names are unique per Amazon Web Services
 * 			account. To avoid overwriting rules in other namespaces, use assignment names that are
 * 			unique.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateIAMPolicyAssignmentCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateIAMPolicyAssignmentCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateIAMPolicyAssignmentRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssignmentName: "STRING_VALUE", // required
 *   AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED", // required
 *   PolicyArn: "STRING_VALUE",
 *   Identities: { // IdentityMap
 *     "<keys>": [ // IdentityNameList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Namespace: "STRING_VALUE", // required
 * };
 * const command = new CreateIAMPolicyAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateIAMPolicyAssignmentResponse
 * //   AssignmentName: "STRING_VALUE",
 * //   AssignmentId: "STRING_VALUE",
 * //   AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 * //   PolicyArn: "STRING_VALUE",
 * //   Identities: { // IdentityMap
 * //     "<keys>": [ // IdentityNameList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateIAMPolicyAssignmentCommandInput - {@link CreateIAMPolicyAssignmentCommandInput}
 * @returns {@link CreateIAMPolicyAssignmentCommandOutput}
 * @see {@link CreateIAMPolicyAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateIAMPolicyAssignmentCommandOutput} for command's `response` shape.
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
export class CreateIAMPolicyAssignmentCommand extends $Command
  .classBuilder<
    CreateIAMPolicyAssignmentCommandInput,
    CreateIAMPolicyAssignmentCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "CreateIAMPolicyAssignment", {})
  .n("QuickSightClient", "CreateIAMPolicyAssignmentCommand")
  .sc(CreateIAMPolicyAssignment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIAMPolicyAssignmentRequest;
      output: CreateIAMPolicyAssignmentResponse;
    };
    sdk: {
      input: CreateIAMPolicyAssignmentCommandInput;
      output: CreateIAMPolicyAssignmentCommandOutput;
    };
  };
}
