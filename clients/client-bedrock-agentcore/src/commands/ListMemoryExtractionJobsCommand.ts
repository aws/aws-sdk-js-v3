// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListMemoryExtractionJobsInput, ListMemoryExtractionJobsOutput } from "../models/models_0";
import { ListMemoryExtractionJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMemoryExtractionJobsCommand}.
 */
export interface ListMemoryExtractionJobsCommandInput extends ListMemoryExtractionJobsInput {}
/**
 * @public
 *
 * The output of {@link ListMemoryExtractionJobsCommand}.
 */
export interface ListMemoryExtractionJobsCommandOutput extends ListMemoryExtractionJobsOutput, __MetadataBearer {}

/**
 * <p>Lists all long-term memory extraction jobs that are eligible to be started with optional filtering.</p> <p>To use this operation, you must have the <code>bedrock-agentcore:ListMemoryExtractionJobs</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListMemoryExtractionJobsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListMemoryExtractionJobsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListMemoryExtractionJobsInput
 *   memoryId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   filter: { // ExtractionJobFilterInput
 *     strategyId: "STRING_VALUE",
 *     sessionId: "STRING_VALUE",
 *     actorId: "STRING_VALUE",
 *     status: "FAILED",
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListMemoryExtractionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMemoryExtractionJobsOutput
 * //   jobs: [ // ExtractionJobMetadataList // required
 * //     { // ExtractionJobMetadata
 * //       jobID: "STRING_VALUE", // required
 * //       messages: { // ExtractionJobMessages Union: only one key present
 * //         messagesList: [ // MessagesList
 * //           { // MessageMetadata
 * //             eventId: "STRING_VALUE", // required
 * //             messageIndex: Number("int"), // required
 * //           },
 * //         ],
 * //       },
 * //       status: "FAILED",
 * //       failureReason: "STRING_VALUE",
 * //       strategyId: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       actorId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMemoryExtractionJobsCommandInput - {@link ListMemoryExtractionJobsCommandInput}
 * @returns {@link ListMemoryExtractionJobsCommandOutput}
 * @see {@link ListMemoryExtractionJobsCommandInput} for command's `input` shape.
 * @see {@link ListMemoryExtractionJobsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The service encountered an internal error. Try your request again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class ListMemoryExtractionJobsCommand extends $Command
  .classBuilder<
    ListMemoryExtractionJobsCommandInput,
    ListMemoryExtractionJobsCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "ListMemoryExtractionJobs", {})
  .n("BedrockAgentCoreClient", "ListMemoryExtractionJobsCommand")
  .sc(ListMemoryExtractionJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMemoryExtractionJobsInput;
      output: ListMemoryExtractionJobsOutput;
    };
    sdk: {
      input: ListMemoryExtractionJobsCommandInput;
      output: ListMemoryExtractionJobsCommandOutput;
    };
  };
}
