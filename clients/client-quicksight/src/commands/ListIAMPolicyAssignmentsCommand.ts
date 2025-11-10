// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIAMPolicyAssignmentsRequest, ListIAMPolicyAssignmentsResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListIAMPolicyAssignments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIAMPolicyAssignmentsCommand}.
 */
export interface ListIAMPolicyAssignmentsCommandInput extends ListIAMPolicyAssignmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListIAMPolicyAssignmentsCommand}.
 */
export interface ListIAMPolicyAssignmentsCommandOutput extends ListIAMPolicyAssignmentsResponse, __MetadataBearer {}

/**
 * <p>Lists the
 * 			IAM policy assignments in the current Amazon Quick Sight
 * 			account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIAMPolicyAssignmentsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIAMPolicyAssignmentsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListIAMPolicyAssignmentsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 *   Namespace: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIAMPolicyAssignmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListIAMPolicyAssignmentsResponse
 * //   IAMPolicyAssignments: [ // IAMPolicyAssignmentSummaryList
 * //     { // IAMPolicyAssignmentSummary
 * //       AssignmentName: "STRING_VALUE",
 * //       AssignmentStatus: "ENABLED" || "DRAFT" || "DISABLED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListIAMPolicyAssignmentsCommandInput - {@link ListIAMPolicyAssignmentsCommandInput}
 * @returns {@link ListIAMPolicyAssignmentsCommandOutput}
 * @see {@link ListIAMPolicyAssignmentsCommandInput} for command's `input` shape.
 * @see {@link ListIAMPolicyAssignmentsCommandOutput} for command's `response` shape.
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
export class ListIAMPolicyAssignmentsCommand extends $Command
  .classBuilder<
    ListIAMPolicyAssignmentsCommandInput,
    ListIAMPolicyAssignmentsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListIAMPolicyAssignments", {})
  .n("QuickSightClient", "ListIAMPolicyAssignmentsCommand")
  .sc(ListIAMPolicyAssignments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIAMPolicyAssignmentsRequest;
      output: ListIAMPolicyAssignmentsResponse;
    };
    sdk: {
      input: ListIAMPolicyAssignmentsCommandInput;
      output: ListIAMPolicyAssignmentsCommandOutput;
    };
  };
}
