// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { ListMatchingWorkflowsInput, ListMatchingWorkflowsOutput } from "../models/models_0";
import { ListMatchingWorkflows } from "../schemas/schemas_12_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of all the <code>MatchingWorkflows</code> that have been created for an Amazon Web Services account.</p>
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 *
 * @public
 */
export class ListMatchingWorkflowsCommand extends $Command
  .classBuilder<
    ListMatchingWorkflowsCommandInput,
    ListMatchingWorkflowsCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSVeniceService", "ListMatchingWorkflows", {})
  .n("EntityResolutionClient", "ListMatchingWorkflowsCommand")
  .sc(ListMatchingWorkflows)
  .build() {
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
