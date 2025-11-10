// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { IngestKnowledgeBaseDocumentsRequest, IngestKnowledgeBaseDocumentsResponse } from "../models/models_1";
import { IngestKnowledgeBaseDocuments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link IngestKnowledgeBaseDocumentsCommand}.
 */
export interface IngestKnowledgeBaseDocumentsCommandInput extends IngestKnowledgeBaseDocumentsRequest {}
/**
 * @public
 *
 * The output of {@link IngestKnowledgeBaseDocumentsCommand}.
 */
export interface IngestKnowledgeBaseDocumentsCommandOutput
  extends IngestKnowledgeBaseDocumentsResponse,
    __MetadataBearer {}

/**
 * <p>Ingests documents directly into the knowledge base that is connected to the data source. The <code>dataSourceType</code> specified in the content for each document must match the type of the data source that you specify in the header. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/kb-direct-ingestion.html">Ingest changes directly into a knowledge base</a> in the Amazon Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, IngestKnowledgeBaseDocumentsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, IngestKnowledgeBaseDocumentsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // IngestKnowledgeBaseDocumentsRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   documents: [ // KnowledgeBaseDocuments // required
 *     { // KnowledgeBaseDocument
 *       metadata: { // DocumentMetadata
 *         type: "IN_LINE_ATTRIBUTE" || "S3_LOCATION", // required
 *         inlineAttributes: [ // MetadataAttributes
 *           { // MetadataAttribute
 *             key: "STRING_VALUE", // required
 *             value: { // MetadataAttributeValue
 *               type: "BOOLEAN" || "NUMBER" || "STRING" || "STRING_LIST", // required
 *               numberValue: Number("double"),
 *               booleanValue: true || false,
 *               stringValue: "STRING_VALUE",
 *               stringListValue: [ // StringListValue
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           },
 *         ],
 *         s3Location: { // CustomS3Location
 *           uri: "STRING_VALUE", // required
 *           bucketOwnerAccountId: "STRING_VALUE",
 *         },
 *       },
 *       content: { // DocumentContent
 *         dataSourceType: "CUSTOM" || "S3", // required
 *         custom: { // CustomContent
 *           customDocumentIdentifier: { // CustomDocumentIdentifier
 *             id: "STRING_VALUE", // required
 *           },
 *           sourceType: "IN_LINE" || "S3_LOCATION", // required
 *           s3Location: {
 *             uri: "STRING_VALUE", // required
 *             bucketOwnerAccountId: "STRING_VALUE",
 *           },
 *           inlineContent: { // InlineContent
 *             type: "BYTE" || "TEXT", // required
 *             byteContent: { // ByteContentDoc
 *               mimeType: "STRING_VALUE", // required
 *               data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")               // required
 *             },
 *             textContent: { // TextContentDoc
 *               data: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *         s3: { // S3Content
 *           s3Location: { // S3Location
 *             uri: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new IngestKnowledgeBaseDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // IngestKnowledgeBaseDocumentsResponse
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
 * @param IngestKnowledgeBaseDocumentsCommandInput - {@link IngestKnowledgeBaseDocumentsCommandInput}
 * @returns {@link IngestKnowledgeBaseDocumentsCommandOutput}
 * @see {@link IngestKnowledgeBaseDocumentsCommandInput} for command's `input` shape.
 * @see {@link IngestKnowledgeBaseDocumentsCommandOutput} for command's `response` shape.
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
export class IngestKnowledgeBaseDocumentsCommand extends $Command
  .classBuilder<
    IngestKnowledgeBaseDocumentsCommandInput,
    IngestKnowledgeBaseDocumentsCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "IngestKnowledgeBaseDocuments", {})
  .n("BedrockAgentClient", "IngestKnowledgeBaseDocumentsCommand")
  .sc(IngestKnowledgeBaseDocuments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IngestKnowledgeBaseDocumentsRequest;
      output: IngestKnowledgeBaseDocumentsResponse;
    };
    sdk: {
      input: IngestKnowledgeBaseDocumentsCommandInput;
      output: IngestKnowledgeBaseDocumentsCommandOutput;
    };
  };
}
