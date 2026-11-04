// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMatchingWorkflowsInput, ListMatchingWorkflowsOutput } from "../models/models_0";
import { ListMatchingWorkflows$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMatchingWorkflowsCommand}.
 */
export interface ListMatchingWorkflowsCommandInput extends ListMatchingWorkflowsInput {}
/**
 * @public
 *
 * The output of {@link ListMatchingWorkflowsCommand}.
 */
export interface ListMatchingWorkflowsCommandOutput extends ListMatchingWorkflowsOutput, __MetadataBearer {}

/**
 * Returns a list of all the `MatchingWorkflows` that have been created for an Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, ListMatchingWorkflowsCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, ListMatchingWorkflowsCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // ListMatchingWorkflowsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListMatchingWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // ListMatchingWorkflowsOutput
 * //   workflowSummaries: [ // MatchingWorkflowList
 * //     { // MatchingWorkflowSummary
 * //       workflowName: "STRING_VALUE", // required
 * //       workflowArn: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       resolutionType: "RULE_MATCHING" || "ML_MATCHING" || "PROVIDER", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMatchingWorkflowsCommandInput - {@link ListMatchingWorkflowsCommandInput}
 * @returns {@link ListMatchingWorkflowsCommandOutput}
 * @see {@link ListMatchingWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListMatchingWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class ListMatchingWorkflowsCommand extends command<ListMatchingWorkflowsCommandInput, ListMatchingWorkflowsCommandOutput>(
  _ep0,
  _mw0,
  "ListMatchingWorkflows",
  ListMatchingWorkflows$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMatchingWorkflowsInput;
      output: ListMatchingWorkflowsOutput;
    };
    sdk: {
      input: ListMatchingWorkflowsCommandInput;
      output: ListMatchingWorkflowsCommandOutput;
    };
  };
}
