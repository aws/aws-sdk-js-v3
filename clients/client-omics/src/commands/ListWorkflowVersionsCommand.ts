// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkflowVersionsRequest, ListWorkflowVersionsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListWorkflowVersionsCommand, se_ListWorkflowVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowVersionsCommand}.
 */
export interface ListWorkflowVersionsCommandInput extends ListWorkflowVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkflowVersionsCommand}.
 */
export interface ListWorkflowVersionsCommandOutput extends ListWorkflowVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the workflow versions for the specified workflow. For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html">Workflow versioning in Amazon Web Services HealthOmics</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListWorkflowVersionsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListWorkflowVersionsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListWorkflowVersionsRequest
 *   workflowId: "STRING_VALUE", // required
 *   type: "STRING_VALUE",
 *   workflowOwnerId: "STRING_VALUE",
 *   startingToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkflowVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkflowVersionsResponse
 * //   items: [ // WorkflowVersionList
 * //     { // WorkflowVersionListItem
 * //       arn: "STRING_VALUE",
 * //       workflowId: "STRING_VALUE",
 * //       versionName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
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
 * @param ListWorkflowVersionsCommandInput - {@link ListWorkflowVersionsCommandInput}
 * @returns {@link ListWorkflowVersionsCommandOutput}
 * @see {@link ListWorkflowVersionsCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowVersionsCommandOutput} for command's `response` shape.
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
export class ListWorkflowVersionsCommand extends $Command
  .classBuilder<
    ListWorkflowVersionsCommandInput,
    ListWorkflowVersionsCommandOutput,
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
  .s("Omics", "ListWorkflowVersions", {})
  .n("OmicsClient", "ListWorkflowVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkflowVersionsCommand)
  .de(de_ListWorkflowVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowVersionsRequest;
      output: ListWorkflowVersionsResponse;
    };
    sdk: {
      input: ListWorkflowVersionsCommandInput;
      output: ListWorkflowVersionsCommandOutput;
    };
  };
}
