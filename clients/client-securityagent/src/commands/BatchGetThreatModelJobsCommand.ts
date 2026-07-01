// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetThreatModelJobsInput, BatchGetThreatModelJobsOutput } from "../models/models_0";
import { BatchGetThreatModelJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetThreatModelJobsCommand}.
 */
export interface BatchGetThreatModelJobsCommandInput extends BatchGetThreatModelJobsInput {}
/**
 * @public
 *
 * The output of {@link BatchGetThreatModelJobsCommand}.
 */
export interface BatchGetThreatModelJobsCommandOutput extends BatchGetThreatModelJobsOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more threat model jobs in an agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetThreatModelJobsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetThreatModelJobsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetThreatModelJobsInput
 *   threatModelJobIds: [ // ThreatModelJobIdList // required
 *     "STRING_VALUE",
 *   ],
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new BatchGetThreatModelJobsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetThreatModelJobsOutput
 * //   threatModelJobs: [ // ThreatModelJobList
 * //     { // ThreatModelJob
 * //       threatModelJobId: "STRING_VALUE",
 * //       threatModelId: "STRING_VALUE",
 * //       agentSpaceId: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "STOPPING" || "STOPPED" || "FAILED" || "COMPLETED",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       executionStartTime: new Date("TIMESTAMP"),
 * //       executionEndTime: new Date("TIMESTAMP"),
 * //       sourceCode: [ // SourceCodeRepositoryList
 * //         { // SourceCodeRepository
 * //           s3Location: "STRING_VALUE",
 * //         },
 * //       ],
 * //       integratedRepositories: [ // IntegratedRepositoryList
 * //         { // IntegratedRepository
 * //           integrationId: "STRING_VALUE", // required
 * //           providerResourceId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       documents: [ // DocumentList
 * //         { // DocumentInfo
 * //           s3Location: "STRING_VALUE",
 * //           artifactId: "STRING_VALUE",
 * //           integratedDocument: { // IntegratedDocument
 * //             integrationId: "STRING_VALUE", // required
 * //             resourceId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       scopeDocs: [
 * //         {
 * //           s3Location: "STRING_VALUE",
 * //           artifactId: "STRING_VALUE",
 * //           integratedDocument: {
 * //             integrationId: "STRING_VALUE", // required
 * //             resourceId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       errorInformation: { // ErrorInformation
 * //         code: "CLIENT_ERROR" || "INTERNAL_ERROR" || "STOPPED_BY_USER",
 * //         message: "STRING_VALUE",
 * //       },
 * //       systemOverview: "STRING_VALUE",
 * //     },
 * //   ],
 * //   notFound: [ // ThreatModelJobIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetThreatModelJobsCommandInput - {@link BatchGetThreatModelJobsCommandInput}
 * @returns {@link BatchGetThreatModelJobsCommandOutput}
 * @see {@link BatchGetThreatModelJobsCommandInput} for command's `input` shape.
 * @see {@link BatchGetThreatModelJobsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchGetThreatModelJobsCommand extends command<BatchGetThreatModelJobsCommandInput, BatchGetThreatModelJobsCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetThreatModelJobs",
  BatchGetThreatModelJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetThreatModelJobsInput;
      output: BatchGetThreatModelJobsOutput;
    };
    sdk: {
      input: BatchGetThreatModelJobsCommandInput;
      output: BatchGetThreatModelJobsCommandOutput;
    };
  };
}
