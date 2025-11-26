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
import type { StartMemoryExtractionJobInput, StartMemoryExtractionJobOutput } from "../models/models_0";
import { StartMemoryExtractionJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMemoryExtractionJobCommand}.
 */
export interface StartMemoryExtractionJobCommandInput extends StartMemoryExtractionJobInput {}
/**
 * @public
 *
 * The output of {@link StartMemoryExtractionJobCommand}.
 */
export interface StartMemoryExtractionJobCommandOutput extends StartMemoryExtractionJobOutput, __MetadataBearer {}

/**
 * <p> Starts a memory extraction job that processes events that failed extraction previously in an AgentCore Memory resource and produces structured memory records. When earlier extraction attempts have left events unprocessed, this job will pick up and extract those as well. </p> <p>To use this operation, you must have the <code>bedrock-agentcore:StartMemoryExtractionJob</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, StartMemoryExtractionJobCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, StartMemoryExtractionJobCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // StartMemoryExtractionJobInput
 *   memoryId: "STRING_VALUE", // required
 *   extractionJob: { // ExtractionJob
 *     jobId: "STRING_VALUE", // required
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartMemoryExtractionJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMemoryExtractionJobOutput
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartMemoryExtractionJobCommandInput - {@link StartMemoryExtractionJobCommandInput}
 * @returns {@link StartMemoryExtractionJobCommandOutput}
 * @see {@link StartMemoryExtractionJobCommandInput} for command's `input` shape.
 * @see {@link StartMemoryExtractionJobCommandOutput} for command's `response` shape.
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
export class StartMemoryExtractionJobCommand extends $Command
  .classBuilder<
    StartMemoryExtractionJobCommandInput,
    StartMemoryExtractionJobCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "StartMemoryExtractionJob", {})
  .n("BedrockAgentCoreClient", "StartMemoryExtractionJobCommand")
  .sc(StartMemoryExtractionJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMemoryExtractionJobInput;
      output: StartMemoryExtractionJobOutput;
    };
    sdk: {
      input: StartMemoryExtractionJobCommandInput;
      output: StartMemoryExtractionJobCommandOutput;
    };
  };
}
