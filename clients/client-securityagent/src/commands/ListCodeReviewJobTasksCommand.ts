// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCodeReviewJobTasksInput, ListCodeReviewJobTasksOutput } from "../models/models_0";
import { ListCodeReviewJobTasks$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCodeReviewJobTasksCommand}.
 */
export interface ListCodeReviewJobTasksCommandInput extends ListCodeReviewJobTasksInput {}
/**
 * @public
 *
 * The output of {@link ListCodeReviewJobTasksCommand}.
 */
export interface ListCodeReviewJobTasksCommandOutput extends ListCodeReviewJobTasksOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of task summaries for the specified code review job, optionally filtered by step name or category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListCodeReviewJobTasksCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListCodeReviewJobTasksCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListCodeReviewJobTasksInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   codeReviewJobId: "STRING_VALUE",
 *   stepName: "PREFLIGHT" || "STATIC_ANALYSIS" || "PENTEST" || "FINALIZING" || "VALIDATION",
 *   categoryName: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCodeReviewJobTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeReviewJobTasksOutput
 * //   codeReviewJobTaskSummaries: [ // CodeReviewJobTaskSummaryList
 * //     { // CodeReviewJobTaskSummary
 * //       taskId: "STRING_VALUE", // required
 * //       codeReviewId: "STRING_VALUE",
 * //       codeReviewJobId: "STRING_VALUE",
 * //       agentSpaceId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       riskType: "CROSS_SITE_SCRIPTING" || "DEFAULT_CREDENTIALS" || "INSECURE_DIRECT_OBJECT_REFERENCE" || "PRIVILEGE_ESCALATION" || "SERVER_SIDE_TEMPLATE_INJECTION" || "COMMAND_INJECTION" || "CODE_INJECTION" || "SQL_INJECTION" || "ARBITRARY_FILE_UPLOAD" || "INSECURE_DESERIALIZATION" || "LOCAL_FILE_INCLUSION" || "INFORMATION_DISCLOSURE" || "PATH_TRAVERSAL" || "SERVER_SIDE_REQUEST_FORGERY" || "JSON_WEB_TOKEN_VULNERABILITIES" || "XML_EXTERNAL_ENTITY" || "FILE_DELETION" || "OTHER" || "GRAPHQL_VULNERABILITIES" || "BUSINESS_LOGIC_VULNERABILITIES" || "CRYPTOGRAPHIC_VULNERABILITIES" || "DENIAL_OF_SERVICE" || "FILE_ACCESS" || "FILE_CREATION" || "DATABASE_MODIFICATION" || "DATABASE_ACCESS" || "OUTBOUND_SERVICE_REQUEST" || "UNKNOWN",
 * //       executionStatus: "IN_PROGRESS" || "ABORTED" || "COMPLETED" || "INTERNAL_ERROR" || "FAILED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeReviewJobTasksCommandInput - {@link ListCodeReviewJobTasksCommandInput}
 * @returns {@link ListCodeReviewJobTasksCommandOutput}
 * @see {@link ListCodeReviewJobTasksCommandInput} for command's `input` shape.
 * @see {@link ListCodeReviewJobTasksCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListCodeReviewJobTasksCommand extends $Command
  .classBuilder<
    ListCodeReviewJobTasksCommandInput,
    ListCodeReviewJobTasksCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "ListCodeReviewJobTasks", {})
  .n("SecurityAgentClient", "ListCodeReviewJobTasksCommand")
  .sc(ListCodeReviewJobTasks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeReviewJobTasksInput;
      output: ListCodeReviewJobTasksOutput;
    };
    sdk: {
      input: ListCodeReviewJobTasksCommandInput;
      output: ListCodeReviewJobTasksCommandOutput;
    };
  };
}
