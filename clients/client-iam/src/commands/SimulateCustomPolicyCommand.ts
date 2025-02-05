// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { SimulateCustomPolicyRequest } from "../models/models_0";
import { SimulatePolicyResponse } from "../models/models_1";
import { de_SimulateCustomPolicyCommand, se_SimulateCustomPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SimulateCustomPolicyCommand}.
 */
export interface SimulateCustomPolicyCommandInput extends SimulateCustomPolicyRequest {}
/**
 * @public
 *
 * The output of {@link SimulateCustomPolicyCommand}.
 */
export interface SimulateCustomPolicyCommandOutput extends SimulatePolicyResponse, __MetadataBearer {}

/**
 * <p>Simulate how a set of IAM policies and optionally a resource-based policy works with
 *             a list of API operations and Amazon Web Services resources to determine the policies' effective
 *             permissions. The policies are provided as strings.</p>
 *          <p>The simulation does not perform the API operations; it only checks the authorization
 *             to determine if the simulated policies allow or deny the operations. You can simulate
 *             resources that don't exist in your account.</p>
 *          <p>If you want to simulate existing policies that are attached to an IAM user, group,
 *             or role, use <a>SimulatePrincipalPolicy</a> instead.</p>
 *          <p>Context keys are variables that are maintained by Amazon Web Services and its services and which
 *             provide details about the context of an API query request. You can use the
 *                 <code>Condition</code> element of an IAM policy to evaluate context keys. To get
 *             the list of context keys that the policies require for correct simulation, use <a>GetContextKeysForCustomPolicy</a>.</p>
 *          <p>If the output is long, you can use <code>MaxItems</code> and <code>Marker</code>
 *             parameters to paginate the results.</p>
 *          <note>
 *             <p>The IAM policy simulator evaluates statements in the identity-based policy and
 *                 the inputs that you provide during simulation. The policy simulator results can
 *                 differ from your live Amazon Web Services environment. We recommend that you check your policies
 *                 against your live Amazon Web Services environment after testing using the policy simulator to
 *                 confirm that you have the desired results. For more information about using the
 *                 policy simulator, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html">Testing IAM
 *                     policies with the IAM policy simulator </a>in the
 *                     <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, SimulateCustomPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, SimulateCustomPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = { // SimulateCustomPolicyRequest
 *   PolicyInputList: [ // SimulationPolicyListType // required
 *     "STRING_VALUE",
 *   ],
 *   PermissionsBoundaryPolicyInputList: [
 *     "STRING_VALUE",
 *   ],
 *   ActionNames: [ // ActionNameListType // required
 *     "STRING_VALUE",
 *   ],
 *   ResourceArns: [ // ResourceNameListType
 *     "STRING_VALUE",
 *   ],
 *   ResourcePolicy: "STRING_VALUE",
 *   ResourceOwner: "STRING_VALUE",
 *   CallerArn: "STRING_VALUE",
 *   ContextEntries: [ // ContextEntryListType
 *     { // ContextEntry
 *       ContextKeyName: "STRING_VALUE",
 *       ContextKeyValues: [ // ContextKeyValueListType
 *         "STRING_VALUE",
 *       ],
 *       ContextKeyType: "string" || "stringList" || "numeric" || "numericList" || "boolean" || "booleanList" || "ip" || "ipList" || "binary" || "binaryList" || "date" || "dateList",
 *     },
 *   ],
 *   ResourceHandlingOption: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new SimulateCustomPolicyCommand(input);
 * const response = await client.send(command);
 * // { // SimulatePolicyResponse
 * //   EvaluationResults: [ // EvaluationResultsListType
 * //     { // EvaluationResult
 * //       EvalActionName: "STRING_VALUE", // required
 * //       EvalResourceName: "STRING_VALUE",
 * //       EvalDecision: "allowed" || "explicitDeny" || "implicitDeny", // required
 * //       MatchedStatements: [ // StatementListType
 * //         { // Statement
 * //           SourcePolicyId: "STRING_VALUE",
 * //           SourcePolicyType: "user" || "group" || "role" || "aws-managed" || "user-managed" || "resource" || "none",
 * //           StartPosition: { // Position
 * //             Line: Number("int"),
 * //             Column: Number("int"),
 * //           },
 * //           EndPosition: {
 * //             Line: Number("int"),
 * //             Column: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //       MissingContextValues: [ // ContextKeyNamesResultListType
 * //         "STRING_VALUE",
 * //       ],
 * //       OrganizationsDecisionDetail: { // OrganizationsDecisionDetail
 * //         AllowedByOrganizations: true || false,
 * //       },
 * //       PermissionsBoundaryDecisionDetail: { // PermissionsBoundaryDecisionDetail
 * //         AllowedByPermissionsBoundary: true || false,
 * //       },
 * //       EvalDecisionDetails: { // EvalDecisionDetailsType
 * //         "<keys>": "allowed" || "explicitDeny" || "implicitDeny",
 * //       },
 * //       ResourceSpecificResults: [ // ResourceSpecificResultListType
 * //         { // ResourceSpecificResult
 * //           EvalResourceName: "STRING_VALUE", // required
 * //           EvalResourceDecision: "allowed" || "explicitDeny" || "implicitDeny", // required
 * //           MatchedStatements: [
 * //             {
 * //               SourcePolicyId: "STRING_VALUE",
 * //               SourcePolicyType: "user" || "group" || "role" || "aws-managed" || "user-managed" || "resource" || "none",
 * //               StartPosition: {
 * //                 Line: Number("int"),
 * //                 Column: Number("int"),
 * //               },
 * //               EndPosition: {
 * //                 Line: Number("int"),
 * //                 Column: Number("int"),
 * //               },
 * //             },
 * //           ],
 * //           MissingContextValues: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EvalDecisionDetails: {
 * //             "<keys>": "allowed" || "explicitDeny" || "implicitDeny",
 * //           },
 * //           PermissionsBoundaryDecisionDetail: {
 * //             AllowedByPermissionsBoundary: true || false,
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SimulateCustomPolicyCommandInput - {@link SimulateCustomPolicyCommandInput}
 * @returns {@link SimulateCustomPolicyCommandOutput}
 * @see {@link SimulateCustomPolicyCommandInput} for command's `input` shape.
 * @see {@link SimulateCustomPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link PolicyEvaluationException} (server fault)
 *  <p>The request failed because a provided policy could not be successfully evaluated. An
 *       additional detailed message indicates the source of the failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export class SimulateCustomPolicyCommand extends $Command
  .classBuilder<
    SimulateCustomPolicyCommandInput,
    SimulateCustomPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "SimulateCustomPolicy", {})
  .n("IAMClient", "SimulateCustomPolicyCommand")
  .f(void 0, void 0)
  .ser(se_SimulateCustomPolicyCommand)
  .de(de_SimulateCustomPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SimulateCustomPolicyRequest;
      output: SimulatePolicyResponse;
    };
    sdk: {
      input: SimulateCustomPolicyCommandInput;
      output: SimulateCustomPolicyCommandOutput;
    };
  };
}
