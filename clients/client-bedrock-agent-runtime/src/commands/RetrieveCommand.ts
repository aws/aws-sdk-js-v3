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
export { __MetadataBearer, $Command };
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
 * @public
 * Retrieve from knowledge base.
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
 *       numberOfResults: Number("int"), // required
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
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link BadGatewayException} (server fault)
 *  This exception is thrown when a request fails due to dependency like Lambda, Bedrock, STS resource
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  This exception is thrown when a request fails due to dependency like Lambda, Bedrock, STS resource due to a customer fault (i.e. bad configuration)
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
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
