// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RetrieveRequest,
  RetrieveRequestFilterSensitiveLog,
  RetrieveResponse,
  RetrieveResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_RetrieveCommand, se_RetrieveCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RetrieveCommand}.
 */
export interface RetrieveCommandInput extends RetrieveRequest {}
/**
 * @public
 *
 * The output of {@link RetrieveCommand}.
 */
export interface RetrieveCommandOutput extends RetrieveResponse, __MetadataBearer {}

/**
 * <p>Queries a knowledge base and retrieves information from it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, RetrieveCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, RetrieveCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // RetrieveRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   retrievalQuery: { // KnowledgeBaseQuery
 *     text: "STRING_VALUE", // required
 *   },
 *   retrievalConfiguration: { // KnowledgeBaseRetrievalConfiguration
 *     vectorSearchConfiguration: { // KnowledgeBaseVectorSearchConfiguration
 *       numberOfResults: Number("int"),
 *       overrideSearchType: "HYBRID" || "SEMANTIC",
 *       filter: { // RetrievalFilter Union: only one key present
 *         equals: { // FilterAttribute
 *           key: "STRING_VALUE", // required
 *           value: "DOCUMENT_VALUE", // required
 *         },
 *         notEquals: {
 *           key: "STRING_VALUE", // required
 *           value: "DOCUMENT_VALUE", // required
 *         },
 *         greaterThan: {
 *           key: "STRING_VALUE", // required
 *           value: "DOCUMENT_VALUE", // required
 *         },
 *         greaterThanOrEquals: {
 *           key: "STRING_VALUE", // required
 *           value: "DOCUMENT_VALUE", // required
 *         },
 *         lessThan: {
 *           key: "STRING_VALUE", // required
 *           value: "DOCUMENT_VALUE", // required
 *         },
 *         lessThanOrEquals: "<FilterAttribute>",
 *         in: "<FilterAttribute>",
 *         notIn: "<FilterAttribute>",
 *         startsWith: "<FilterAttribute>",
 *         listContains: "<FilterAttribute>",
 *         stringContains: "<FilterAttribute>",
 *         andAll: [ // RetrievalFilterList
 *           {//  Union: only one key present
 *             equals: "<FilterAttribute>",
 *             notEquals: "<FilterAttribute>",
 *             greaterThan: "<FilterAttribute>",
 *             greaterThanOrEquals: "<FilterAttribute>",
 *             lessThan: "<FilterAttribute>",
 *             lessThanOrEquals: "<FilterAttribute>",
 *             in: "<FilterAttribute>",
 *             notIn: "<FilterAttribute>",
 *             startsWith: "<FilterAttribute>",
 *             listContains: "<FilterAttribute>",
 *             stringContains: "<FilterAttribute>",
 *             andAll: [
 *               "<RetrievalFilter>",
 *             ],
 *             orAll: [
 *               "<RetrievalFilter>",
 *             ],
 *           },
 *         ],
 *         orAll: [
 *           "<RetrievalFilter>",
 *         ],
 *       },
 *     },
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new RetrieveCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveResponse
 * //   retrievalResults: [ // KnowledgeBaseRetrievalResults // required
 * //     { // KnowledgeBaseRetrievalResult
 * //       content: { // RetrievalResultContent
 * //         text: "STRING_VALUE", // required
 * //       },
 * //       location: { // RetrievalResultLocation
 * //         type: "S3", // required
 * //         s3Location: { // RetrievalResultS3Location
 * //           uri: "STRING_VALUE",
 * //         },
 * //       },
 * //       score: Number("double"),
 * //       metadata: { // RetrievalResultMetadata
 * //         "<keys>": "DOCUMENT_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetrieveCommandInput - {@link RetrieveCommandInput}
 * @returns {@link RetrieveCommandOutput}
 * @see {@link RetrieveCommandInput} for command's `input` shape.
 * @see {@link RetrieveCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 * @public
 */
export class RetrieveCommand extends $Command
  .classBuilder<
    RetrieveCommandInput,
    RetrieveCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentRunTimeService", "Retrieve", {})
  .n("BedrockAgentRuntimeClient", "RetrieveCommand")
  .f(RetrieveRequestFilterSensitiveLog, RetrieveResponseFilterSensitiveLog)
  .ser(se_RetrieveCommand)
  .de(de_RetrieveCommand)
  .build() {}
