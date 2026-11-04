// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListKnowledgeBaseDocumentsRequest, ListKnowledgeBaseDocumentsResponse } from "../models/models_1";
import { ListKnowledgeBaseDocuments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves all the documents contained in a data source that is connected to a knowledge base. For more information, see [Ingest changes directly into a knowledge base](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-direct-ingestion.html) in the Amazon Bedrock User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListKnowledgeBaseDocumentsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListKnowledgeBaseDocumentsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
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
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class ListKnowledgeBaseDocumentsCommand extends command<ListKnowledgeBaseDocumentsCommandInput, ListKnowledgeBaseDocumentsCommandOutput>(
  _ep0,
  _mw0,
  "ListKnowledgeBaseDocuments",
  ListKnowledgeBaseDocuments$
) {
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
