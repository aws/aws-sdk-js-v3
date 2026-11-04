// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRuleGroupsNamespacesRequest, ListRuleGroupsNamespacesResponse } from "../models/models_0";
import { ListRuleGroupsNamespaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRuleGroupsNamespacesCommand}.
 */
export interface ListRuleGroupsNamespacesCommandInput extends ListRuleGroupsNamespacesRequest {}
/**
 * @public
 *
 * The output of {@link ListRuleGroupsNamespacesCommand}.
 */
export interface ListRuleGroupsNamespacesCommandOutput extends ListRuleGroupsNamespacesResponse, __MetadataBearer {}

/**
 * Returns a list of rule groups namespaces in a workspace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListRuleGroupsNamespacesCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListRuleGroupsNamespacesCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // ListRuleGroupsNamespacesRequest
 *   workspaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRuleGroupsNamespacesCommand(input);
 * const response = await client.send(command);
 * // { // ListRuleGroupsNamespacesResponse
 * //   ruleGroupsNamespaces: [ // RuleGroupsNamespaceSummaryList // required
 * //     { // RuleGroupsNamespaceSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: { // RuleGroupsNamespaceStatus
 * //         statusCode: "STRING_VALUE", // required
 * //         statusReason: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"), // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRuleGroupsNamespacesCommandInput - {@link ListRuleGroupsNamespacesCommandInput}
 * @returns {@link ListRuleGroupsNamespacesCommandOutput}
 * @see {@link ListRuleGroupsNamespacesCommandInput} for command's `input` shape.
 * @see {@link ListRuleGroupsNamespacesCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class ListRuleGroupsNamespacesCommand extends command<ListRuleGroupsNamespacesCommandInput, ListRuleGroupsNamespacesCommandOutput>(
  _ep0,
  _mw0,
  "ListRuleGroupsNamespaces",
  ListRuleGroupsNamespaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRuleGroupsNamespacesRequest;
      output: ListRuleGroupsNamespacesResponse;
    };
    sdk: {
      input: ListRuleGroupsNamespacesCommandInput;
      output: ListRuleGroupsNamespacesCommandOutput;
    };
  };
}
