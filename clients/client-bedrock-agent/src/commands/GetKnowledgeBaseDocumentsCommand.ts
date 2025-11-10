// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetKnowledgeBaseDocumentsRequest, GetKnowledgeBaseDocumentsResponse } from "../models/models_1";
import { GetKnowledgeBaseDocuments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKnowledgeBaseDocumentsCommand}.
 */
export interface GetKnowledgeBaseDocumentsCommandInput extends GetKnowledgeBaseDocumentsRequest {}
/**
 * @public
 *
 * The output of {@link GetKnowledgeBaseDocumentsCommand}.
 */
export interface GetKnowledgeBaseDocumentsCommandOutput extends GetKnowledgeBaseDocumentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves specific documents from a data source that is connected to a knowledge base. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-direct-ingestion.html">Ingest changes directly into a knowledge base</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetKnowledgeBaseDocumentsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetKnowledgeBaseDocumentsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetKnowledgeBaseDocumentsRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   documentIdentifiers: [ // DocumentIdentifiers // required
 *     { // DocumentIdentifier
 *       dataSourceType: "CUSTOM" || "S3", // required
 *       s3: { // S3Location
 *         uri: "STRING_VALUE", // required
 *       },
 *       custom: { // CustomDocumentIdentifier
 *         id: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new GetKnowledgeBaseDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // GetKnowledgeBaseDocumentsResponse
 * //   documentDetails: [ // KnowledgeBaseDocumentDetails
 * //     { // KnowledgeBaseDocumentDetail
 * //       knowledgeBaseId: "STRING_VALUE", // required
 * //       dataSourceId: "STRING_VALUE", // required
 * //       status: "INDEXED" || "PARTIALLY_INDEXED" || "PENDING" || "FAILED" || "METADATA_PARTIALLY_INDEXED" || "METADATA_UPDATE_FAILED" || "IGNORED" || "NOT_FOUND" || "STARTING" || "IN_PROGRESS" || "DELETING" || "DELETE_IN_PROGRESS", // required
 * //       identifier: { // DocumentIdentifier
 * //         dataSourceType: "CUSTOM" || "S3", // required
 * //         s3: { // S3Location
 * //           uri: "STRING_VALUE", // required
 * //         },
 * //         custom: { // CustomDocumentIdentifier
 * //           id: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       statusReason: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetKnowledgeBaseDocumentsCommandInput - {@link GetKnowledgeBaseDocumentsCommandInput}
 * @returns {@link GetKnowledgeBaseDocumentsCommandOutput}
 * @see {@link GetKnowledgeBaseDocumentsCommandInput} for command's `input` shape.
 * @see {@link GetKnowledgeBaseDocumentsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
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
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class GetKnowledgeBaseDocumentsCommand extends $Command
  .classBuilder<
    GetKnowledgeBaseDocumentsCommandInput,
    GetKnowledgeBaseDocumentsCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "GetKnowledgeBaseDocuments", {})
  .n("BedrockAgentClient", "GetKnowledgeBaseDocumentsCommand")
  .sc(GetKnowledgeBaseDocuments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKnowledgeBaseDocumentsRequest;
      output: GetKnowledgeBaseDocumentsResponse;
    };
    sdk: {
      input: GetKnowledgeBaseDocumentsCommandInput;
      output: GetKnowledgeBaseDocumentsCommandOutput;
    };
  };
}
