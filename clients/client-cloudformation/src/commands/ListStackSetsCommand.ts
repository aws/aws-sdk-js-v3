// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStackSetsInput, ListStackSetsOutput } from "../models/models_1";
import { de_ListStackSetsCommand, se_ListStackSetsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackSetsCommand}.
 */
export interface ListStackSetsCommandInput extends ListStackSetsInput {}
/**
 * @public
 *
 * The output of {@link ListStackSetsCommand}.
 */
export interface ListStackSetsCommandOutput extends ListStackSetsOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about StackSets that are associated with the user.</p>
 *          <note>
 *             <p>This API provides <i>strongly consistent</i> reads meaning it will always
 *         return the most up-to-date data.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to
 *             <code>SELF</code> while signed in to your Amazon Web Services account, <code>ListStackSets</code>
 *           returns all self-managed StackSets in your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to
 *             <code>SELF</code> while signed in to the organization's management account,
 *             <code>ListStackSets</code> returns all StackSets in the management account.</p>
 *             </li>
 *             <li>
 *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to
 *             <code>DELEGATED_ADMIN</code> while signed in to your member account,
 *             <code>ListStackSets</code> returns all StackSets with service-managed permissions in the
 *             management account.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackSetsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackSetsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackSetsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "ACTIVE" || "DELETED",
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ListStackSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackSetsOutput
 * //   Summaries: [ // StackSetSummaries
 * //     { // StackSetSummary
 * //       StackSetName: "STRING_VALUE",
 * //       StackSetId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "ACTIVE" || "DELETED",
 * //       AutoDeployment: { // AutoDeployment
 * //         Enabled: true || false,
 * //         RetainStacksOnAccountRemoval: true || false,
 * //       },
 * //       PermissionModel: "SERVICE_MANAGED" || "SELF_MANAGED",
 * //       DriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED",
 * //       LastDriftCheckTimestamp: new Date("TIMESTAMP"),
 * //       ManagedExecution: { // ManagedExecution
 * //         Active: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackSetsCommandInput - {@link ListStackSetsCommandInput}
 * @returns {@link ListStackSetsCommandOutput}
 * @see {@link ListStackSetsCommandInput} for command's `input` shape.
 * @see {@link ListStackSetsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListStackSetsCommand extends $Command
  .classBuilder<
    ListStackSetsCommandInput,
    ListStackSetsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListStackSets", {})
  .n("CloudFormationClient", "ListStackSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListStackSetsCommand)
  .de(de_ListStackSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackSetsInput;
      output: ListStackSetsOutput;
    };
    sdk: {
      input: ListStackSetsCommandInput;
      output: ListStackSetsCommandOutput;
    };
  };
}
