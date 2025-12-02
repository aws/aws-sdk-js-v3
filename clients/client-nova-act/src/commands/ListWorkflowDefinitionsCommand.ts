// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkflowDefinitionsRequest, ListWorkflowDefinitionsResponse } from "../models/models_0";
import { NovaActClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NovaActClient";
import { ListWorkflowDefinitions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowDefinitionsCommand}.
 */
export interface ListWorkflowDefinitionsCommandInput extends ListWorkflowDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowDefinitionsCommand}.
 */
export interface ListWorkflowDefinitionsCommandOutput extends ListWorkflowDefinitionsResponse, __MetadataBearer {}

/**
 * <p>Lists all workflow definitions in your account with optional filtering and pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NovaActClient, ListWorkflowDefinitionsCommand } from "@aws-sdk/client-nova-act"; // ES Modules import
 * // const { NovaActClient, ListWorkflowDefinitionsCommand } = require("@aws-sdk/client-nova-act"); // CommonJS import
 * // import type { NovaActClientConfig } from "@aws-sdk/client-nova-act";
 * const config = {}; // type is NovaActClientConfig
 * const client = new NovaActClient(config);
 * const input = { // ListWorkflowDefinitionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   sortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListWorkflowDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowDefinitionsResponse
 * //   workflowDefinitionSummaries: [ // WorkflowDefinitionSummaries // required
 * //     { // WorkflowDefinitionSummary
 * //       workflowDefinitionArn: "STRING_VALUE", // required
 * //       workflowDefinitionName: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       status: "ACTIVE" || "DELETING", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowDefinitionsCommandInput - {@link ListWorkflowDefinitionsCommandInput}
 * @returns {@link ListWorkflowDefinitionsCommandOutput}
 * @see {@link ListWorkflowDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link NovaActClientResolvedConfig | config} for NovaActClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Please try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Please try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for the request are invalid.</p>
 *
 * @throws {@link NovaActServiceException}
 * <p>Base exception class for all service exceptions from NovaAct service.</p>
 *
 *
 * @public
 */
export class ListWorkflowDefinitionsCommand extends $Command
  .classBuilder<
    ListWorkflowDefinitionsCommandInput,
    ListWorkflowDefinitionsCommandOutput,
    NovaActClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NovaActClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNovaAgentsDataPlane", "ListWorkflowDefinitions", {})
  .n("NovaActClient", "ListWorkflowDefinitionsCommand")
  .sc(ListWorkflowDefinitions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowDefinitionsRequest;
      output: ListWorkflowDefinitionsResponse;
    };
    sdk: {
      input: ListWorkflowDefinitionsCommandInput;
      output: ListWorkflowDefinitionsCommandOutput;
    };
  };
}
