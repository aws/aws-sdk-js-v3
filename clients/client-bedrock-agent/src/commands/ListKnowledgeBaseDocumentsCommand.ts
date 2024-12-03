// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListKnowledgeBaseDocumentsRequest, ListKnowledgeBaseDocumentsResponse } from "../models/models_1";
import { de_ListKnowledgeBaseDocumentsCommand, se_ListKnowledgeBaseDocumentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKnowledgeBaseDocumentsCommand}.
 */
export interface ListKnowledgeBaseDocumentsCommandInput extends ListKnowledgeBaseDocumentsRequest {}
/**
 * @public
 *
 * The output of {@link ListKnowledgeBaseDocumentsCommand}.
 */
export interface ListKnowledgeBaseDocumentsCommandOutput extends ListKnowledgeBaseDocumentsResponse, __MetadataBearer {}

/**
 * <p>Retrieves all the documents contained in a data source that is connected to a knowledge base. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-real-time-ingestion.html">Ingest documents into a knowledge base in real-time</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListKnowledgeBaseDocumentsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListKnowledgeBaseDocumentsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * const client = new BedrockAgentClient(config);
 * const input = { // ListKnowledgeBaseDocumentsRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListKnowledgeBaseDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // ListKnowledgeBaseDocumentsResponse
 * //   documentDetails: [ // KnowledgeBaseDocumentDetails // required
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
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKnowledgeBaseDocumentsCommandInput - {@link ListKnowledgeBaseDocumentsCommandInput}
 * @returns {@link ListKnowledgeBaseDocumentsCommandOutput}
 * @see {@link ListKnowledgeBaseDocumentsCommandInput} for command's `input` shape.
 * @see {@link ListKnowledgeBaseDocumentsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListKnowledgeBaseDocumentsCommand extends $Command
  .classBuilder<
    ListKnowledgeBaseDocumentsCommandInput,
    ListKnowledgeBaseDocumentsCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListKnowledgeBaseDocuments", {})
  .n("BedrockAgentClient", "ListKnowledgeBaseDocumentsCommand")
  .f(void 0, void 0)
  .ser(se_ListKnowledgeBaseDocumentsCommand)
  .de(de_ListKnowledgeBaseDocumentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKnowledgeBaseDocumentsRequest;
      output: ListKnowledgeBaseDocumentsResponse;
    };
    sdk: {
      input: ListKnowledgeBaseDocumentsCommandInput;
      output: ListKnowledgeBaseDocumentsCommandOutput;
    };
  };
}
