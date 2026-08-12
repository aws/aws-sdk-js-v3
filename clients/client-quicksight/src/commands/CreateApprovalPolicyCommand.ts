// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateApprovalPolicyRequest, CreateApprovalPolicyResponse } from "../models/models_2";
import { CreateApprovalPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateApprovalPolicyCommand}.
 */
export interface CreateApprovalPolicyCommandInput extends CreateApprovalPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateApprovalPolicyCommand}.
 */
export interface CreateApprovalPolicyCommandOutput extends CreateApprovalPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an approval policy in Quick Sight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateApprovalPolicyCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateApprovalPolicyCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateApprovalPolicyRequest
 *   PolicyId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Actions: [ // GovernedActionList // required
 *     "SHARE",
 *   ],
 *   AssetTypes: [ // AssetTypeList // required
 *     "AGENT" || "SPACE" || "KNOWLEDGE_BASE",
 *   ],
 *   ApplicableTo: { // ApplicableTo
 *     Type: "GROUP", // required
 *     GroupArns: [ // GroupArnList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ApprovalGroups: [ // ApprovalGroupList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateApprovalPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateApprovalPolicyResponse
 * //   Policy: { // ApprovalPolicy
 * //     PolicyId: "STRING_VALUE", // required
 * //     PolicyArn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Actions: [ // GovernedActionList // required
 * //       "SHARE",
 * //     ],
 * //     AssetTypes: [ // AssetTypeList // required
 * //       "AGENT" || "SPACE" || "KNOWLEDGE_BASE",
 * //     ],
 * //     ApplicableTo: { // ApplicableTo
 * //       Type: "GROUP", // required
 * //       GroupArns: [ // GroupArnList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ApprovalGroups: [ // ApprovalGroupList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApprovalPolicyCommandInput - {@link CreateApprovalPolicyCommandInput}
 * @returns {@link CreateApprovalPolicyCommandOutput}
 * @see {@link CreateApprovalPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateApprovalPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
export class CreateApprovalPolicyCommand extends command<CreateApprovalPolicyCommandInput, CreateApprovalPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateApprovalPolicy",
  CreateApprovalPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApprovalPolicyRequest;
      output: CreateApprovalPolicyResponse;
    };
    sdk: {
      input: CreateApprovalPolicyCommandInput;
      output: CreateApprovalPolicyCommandOutput;
    };
  };
}
