// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetCodeReviewJobTasksInput, BatchGetCodeReviewJobTasksOutput } from "../models/models_0";
import { BatchGetCodeReviewJobTasks$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCodeReviewJobTasksCommand}.
 */
export interface BatchGetCodeReviewJobTasksCommandInput extends BatchGetCodeReviewJobTasksInput {}
/**
 * @public
 *
 * The output of {@link BatchGetCodeReviewJobTasksCommand}.
 */
export interface BatchGetCodeReviewJobTasksCommandOutput extends BatchGetCodeReviewJobTasksOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more tasks within a code review job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetCodeReviewJobTasksCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetCodeReviewJobTasksCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetCodeReviewJobTasksInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   codeReviewJobTaskIds: [ // TaskIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCodeReviewJobTasksCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCodeReviewJobTasksOutput
 * //   codeReviewJobTasks: [ // CodeReviewJobTaskList
 * //     { // CodeReviewJobTask
 * //       taskId: "STRING_VALUE", // required
 * //       codeReviewId: "STRING_VALUE",
 * //       codeReviewJobId: "STRING_VALUE",
 * //       agentSpaceId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       categories: [ // CategoryList
 * //         { // Category
 * //           name: "STRING_VALUE",
 * //           isPrimary: true || false,
 * //         },
 * //       ],
 * //       riskType: "CROSS_SITE_SCRIPTING" || "DEFAULT_CREDENTIALS" || "INSECURE_DIRECT_OBJECT_REFERENCE" || "PRIVILEGE_ESCALATION" || "SERVER_SIDE_TEMPLATE_INJECTION" || "COMMAND_INJECTION" || "CODE_INJECTION" || "SQL_INJECTION" || "ARBITRARY_FILE_UPLOAD" || "INSECURE_DESERIALIZATION" || "LOCAL_FILE_INCLUSION" || "INFORMATION_DISCLOSURE" || "PATH_TRAVERSAL" || "SERVER_SIDE_REQUEST_FORGERY" || "JSON_WEB_TOKEN_VULNERABILITIES" || "XML_EXTERNAL_ENTITY" || "FILE_DELETION" || "OTHER" || "GRAPHQL_VULNERABILITIES" || "BUSINESS_LOGIC_VULNERABILITIES" || "CRYPTOGRAPHIC_VULNERABILITIES" || "DENIAL_OF_SERVICE" || "FILE_ACCESS" || "FILE_CREATION" || "DATABASE_MODIFICATION" || "DATABASE_ACCESS" || "OUTBOUND_SERVICE_REQUEST" || "UNKNOWN",
 * //       executionStatus: "IN_PROGRESS" || "ABORTED" || "COMPLETED" || "INTERNAL_ERROR" || "FAILED",
 * //       logsLocation: { // LogLocation
 * //         logType: "CLOUDWATCH",
 * //         cloudWatchLog: { // CloudWatchLog
 * //           logGroup: "STRING_VALUE",
 * //           logStream: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   notFound: [ // TaskIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCodeReviewJobTasksCommandInput - {@link BatchGetCodeReviewJobTasksCommandInput}
 * @returns {@link BatchGetCodeReviewJobTasksCommandOutput}
 * @see {@link BatchGetCodeReviewJobTasksCommandInput} for command's `input` shape.
 * @see {@link BatchGetCodeReviewJobTasksCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchGetCodeReviewJobTasksCommand extends $Command
  .classBuilder<
    BatchGetCodeReviewJobTasksCommandInput,
    BatchGetCodeReviewJobTasksCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "BatchGetCodeReviewJobTasks", {})
  .n("SecurityAgentClient", "BatchGetCodeReviewJobTasksCommand")
  .sc(BatchGetCodeReviewJobTasks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCodeReviewJobTasksInput;
      output: BatchGetCodeReviewJobTasksOutput;
    };
    sdk: {
      input: BatchGetCodeReviewJobTasksCommandInput;
      output: BatchGetCodeReviewJobTasksCommandOutput;
    };
  };
}
