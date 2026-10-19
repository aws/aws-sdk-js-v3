// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListRetrievalInstructionVersionsRequest,
  ListRetrievalInstructionVersionsResponse,
} from "../models/models_1";
import { ListRetrievalInstructionVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRetrievalInstructionVersionsCommand}.
 */
export interface ListRetrievalInstructionVersionsCommandInput extends ListRetrievalInstructionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRetrievalInstructionVersionsCommand}.
 */
export interface ListRetrievalInstructionVersionsCommandOutput extends ListRetrievalInstructionVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the numbered versions of a retrieval instruction, newest first. DRAFT is not listed; read it with GetRetrievalInstruction without retrievalInstructionVersion. Results are paginated. Use the nextToken parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListRetrievalInstructionVersionsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListRetrievalInstructionVersionsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListRetrievalInstructionVersionsRequest
 *   retrievalInstructionId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRetrievalInstructionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRetrievalInstructionVersionsResponse
 * //   retrievalInstructionVersionSummaries: [ // RetrievalInstructionVersionSummaries // required
 * //     { // RetrievalInstructionVersionSummary
 * //       version: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRetrievalInstructionVersionsCommandInput - {@link ListRetrievalInstructionVersionsCommandInput}
 * @returns {@link ListRetrievalInstructionVersionsCommandOutput}
 * @see {@link ListRetrievalInstructionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListRetrievalInstructionVersionsCommandOutput} for command's `response` shape.
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
export class ListRetrievalInstructionVersionsCommand extends command<ListRetrievalInstructionVersionsCommandInput, ListRetrievalInstructionVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListRetrievalInstructionVersions",
  ListRetrievalInstructionVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRetrievalInstructionVersionsRequest;
      output: ListRetrievalInstructionVersionsResponse;
    };
    sdk: {
      input: ListRetrievalInstructionVersionsCommandInput;
      output: ListRetrievalInstructionVersionsCommandOutput;
    };
  };
}
