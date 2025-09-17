// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkflowsRequest, ListWorkflowsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListWorkflowsCommand, se_ListWorkflowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandInput extends ListWorkflowsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowsCommand}.
 */
export interface ListWorkflowsCommandOutput extends ListWorkflowsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of existing workflows. You can filter for specific workflows by their name and type. Using the type parameter, specify <code>PRIVATE</code> to retrieve a list of private workflows or specify <code>READY2RUN</code> for a list of all Ready2Run workflows. If you do not specify the type of workflow, this operation returns a list of existing workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListWorkflowsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListWorkflowsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListWorkflowsRequest
 *   type: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   startingToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkflowsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowsResponse
 * //   items: [ // WorkflowList
 * //     { // WorkflowListItem
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       digest: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       metadata: { // WorkflowMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowsCommandInput - {@link ListWorkflowsCommandInput}
 * @returns {@link ListWorkflowsCommandOutput}
 * @see {@link ListWorkflowsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class ListWorkflowsCommand extends $Command
  .classBuilder<
    ListWorkflowsCommandInput,
    ListWorkflowsCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "ListWorkflows", {})
  .n("OmicsClient", "ListWorkflowsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowsCommand)
  .de(de_ListWorkflowsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowsRequest;
      output: ListWorkflowsResponse;
    };
    sdk: {
      input: ListWorkflowsCommandInput;
      output: ListWorkflowsCommandOutput;
    };
  };
}
