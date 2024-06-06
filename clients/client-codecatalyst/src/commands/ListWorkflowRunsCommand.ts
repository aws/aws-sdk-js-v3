// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkflowRunsRequest, ListWorkflowRunsResponse } from "../models/models_0";
import { de_ListWorkflowRunsCommand, se_ListWorkflowRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowRunsCommand}.
 */
export interface ListWorkflowRunsCommandInput extends ListWorkflowRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowRunsCommand}.
 */
export interface ListWorkflowRunsCommandOutput extends ListWorkflowRunsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of workflow runs of a specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListWorkflowRunsCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListWorkflowRunsCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const input = { // ListWorkflowRunsRequest
 *   spaceName: "STRING_VALUE", // required
 *   workflowId: "STRING_VALUE",
 *   projectName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   sortBy: [ // WorkflowRunSortCriteriaList
 *     {},
 *   ],
 * };
 * const command = new ListWorkflowRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowRunsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // WorkflowRunSummaries
 * //     { // WorkflowRunSummary
 * //       id: "STRING_VALUE", // required
 * //       workflowId: "STRING_VALUE", // required
 * //       workflowName: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       statusReasons: [ // WorkflowRunStatusReasons
 * //         {},
 * //       ],
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"),
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkflowRunsCommandInput - {@link ListWorkflowRunsCommandInput}
 * @returns {@link ListWorkflowRunsCommandOutput}
 * @see {@link ListWorkflowRunsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowRunsCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 * @public
 */
export class ListWorkflowRunsCommand extends $Command
  .classBuilder<
    ListWorkflowRunsCommandInput,
    ListWorkflowRunsCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeCatalyst", "ListWorkflowRuns", {})
  .n("CodeCatalystClient", "ListWorkflowRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowRunsCommand)
  .de(de_ListWorkflowRunsCommand)
  .build() {}
