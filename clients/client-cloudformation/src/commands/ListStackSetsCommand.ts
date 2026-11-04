// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStackSetsInput, ListStackSetsOutput } from "../models/models_0";
import { ListStackSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns summary information about StackSets that are associated with the user.
 *
 * > **Note:** This API provides *strongly consistent* reads meaning it will always return the most up-to-date data.
 *
 * - [Self-managed permissions] If you set the `CallAs` parameter to `SELF` while signed in to your Amazon Web Services account, `ListStackSets` returns all self-managed StackSets in your Amazon Web Services account.
 * - [Service-managed permissions] If you set the `CallAs` parameter to `SELF` while signed in to the organization's management account, `ListStackSets` returns all StackSets in the management account.
 * - [Service-managed permissions] If you set the `CallAs` parameter to `DELEGATED_ADMIN` while signed in to your member account, `ListStackSets` returns all StackSets with service-managed permissions in the management account.
 *
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
 * //         DependsOn: [ // StackSetARNList
 * //           "STRING_VALUE",
 * //         ],
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
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class ListStackSetsCommand extends command<ListStackSetsCommandInput, ListStackSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListStackSets",
  ListStackSets$
) {
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
