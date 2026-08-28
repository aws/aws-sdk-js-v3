// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IngestDataInput, IngestDataOutput } from "../models/models_1";
import { IngestData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IngestDataCommand}.
 */
export interface IngestDataCommandInput extends IngestDataInput {}
/**
 * @public
 *
 * The output of {@link IngestDataCommand}.
 */
export interface IngestDataCommandOutput extends IngestDataOutput, __MetadataBearer {}

/**
 * <p>Submits content directly for ingestion to generate long-term memory records in a AgentCore Memory resource.</p> <p>To use this operation, you must have the <code>bedrock-agentcore:IngestData</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, IngestDataCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, IngestDataCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // IngestDataInput
 *   memoryId: "STRING_VALUE", // required
 *   source: { // ContentSource Union: only one key present
 *     inline: { // InlineMemoryContent
 *       payload: [ // IngestPayloadList // required
 *         { // IngestPayloadType Union: only one key present
 *           conversational: { // Conversational
 *             content: { // Content Union: only one key present
 *               text: "STRING_VALUE",
 *             },
 *             role: "ASSISTANT" || "USER" || "TOOL" || "OTHER", // required
 *           },
 *           json: { // MemoryJsonData
 *             content: "DOCUMENT_VALUE", // required
 *           },
 *         },
 *       ],
 *     },
 *   },
 *   contentTimestamp: new Date("TIMESTAMP"), // required
 *   actorId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE",
 *   extractionConfig: { // ExtractionConfig
 *     namespaceVariables: { // NamespaceVariablesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   metadata: { // MetadataMap
 *     "<keys>": { // MetadataValue Union: only one key present
 *       stringValue: "STRING_VALUE",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new IngestDataCommand(input);
 * const response = await client.send(command);
 * // { // IngestDataOutput
 * //   sessionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param IngestDataCommandInput - {@link IngestDataCommandInput}
 * @returns {@link IngestDataCommandOutput}
 * @see {@link IngestDataCommandInput} for command's `input` shape.
 * @see {@link IngestDataCommandOutput} for command's `response` shape.
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
export class IngestDataCommand extends command<IngestDataCommandInput, IngestDataCommandOutput>(
  _ep0,
  _mw0,
  "IngestData",
  IngestData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IngestDataInput;
      output: IngestDataOutput;
    };
    sdk: {
      input: IngestDataCommandInput;
      output: IngestDataCommandOutput;
    };
  };
}
