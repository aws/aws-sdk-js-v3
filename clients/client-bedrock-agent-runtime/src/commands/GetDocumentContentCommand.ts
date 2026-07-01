// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDocumentContentRequest, GetDocumentContentResponse } from "../models/models_0";
import { GetDocumentContent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDocumentContentCommand}.
 */
export interface GetDocumentContentCommandInput extends GetDocumentContentRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentContentCommand}.
 */
export interface GetDocumentContentCommandOutput extends GetDocumentContentResponse, __MetadataBearer {}

/**
 * <p>Retrieves the content of an ingested document from a knowledge base. Returns a pre-signed URL for secure document access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, GetDocumentContentCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, GetDocumentContentCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // GetDocumentContentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   dataSourceId: "STRING_VALUE", // required
 *   documentId: "STRING_VALUE", // required
 *   outputFormat: "RAW" || "EXTRACTED",
 *   userContext: { // UserContext
 *     userId: "STRING_VALUE", // required
 *   },
 * };
 * const command = new GetDocumentContentCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentContentResponse
 * //   mimeType: "STRING_VALUE", // required
 * //   presignedUrl: "STRING_VALUE", // required
 * //   documentContentLength: Number("long"),
 * // };
 *
 * ```
 *
 * @param GetDocumentContentCommandInput - {@link GetDocumentContentCommandInput}
 * @returns {@link GetDocumentContentCommandOutput}
 * @see {@link GetDocumentContentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentContentCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
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
 *
 * @public
 */
export class GetDocumentContentCommand extends command<GetDocumentContentCommandInput, GetDocumentContentCommandOutput>(
  _ep0,
  _mw0,
  "GetDocumentContent",
  GetDocumentContent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentContentRequest;
      output: GetDocumentContentResponse;
    };
    sdk: {
      input: GetDocumentContentCommandInput;
      output: GetDocumentContentCommandOutput;
    };
  };
}
