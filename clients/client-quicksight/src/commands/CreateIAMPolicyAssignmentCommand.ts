// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIAMPolicyAssignmentRequest, CreateIAMPolicyAssignmentResponse } from "../models/models_3";
import { CreateIAMPolicyAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy assignment is attached to the specified groups or users of Amazon Quick Sight. Assignment names are unique per Amazon Web Services account. To avoid overwriting rules in other namespaces, use assignment names that are unique.
 *
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
export class CreateIAMPolicyAssignmentCommand extends command<CreateIAMPolicyAssignmentCommandInput, CreateIAMPolicyAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "CreateIAMPolicyAssignment",
  CreateIAMPolicyAssignment$
) {
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
