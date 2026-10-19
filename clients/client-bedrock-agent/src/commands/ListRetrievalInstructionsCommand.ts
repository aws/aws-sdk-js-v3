// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRetrievalInstructionsRequest, ListRetrievalInstructionsResponse } from "../models/models_1";
import { ListRetrievalInstructions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRetrievalInstructionsCommand}.
 */
export interface ListRetrievalInstructionsCommandInput extends ListRetrievalInstructionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRetrievalInstructionsCommand}.
 */
export interface ListRetrievalInstructionsCommandOutput extends ListRetrievalInstructionsResponse, __MetadataBearer {}

/**
 * <p>Lists the retrieval instructions in the caller's account. Results are paginated. Use the nextToken parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListRetrievalInstructionsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListRetrievalInstructionsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListRetrievalInstructionsRequest
 *   status: "ACTIVE" || "INACTIVE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRetrievalInstructionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRetrievalInstructionsResponse
 * //   retrievalInstructionSummaries: [ // RetrievalInstructionSummaries // required
 * //     { // RetrievalInstructionSummary
 * //       retrievalInstructionId: "STRING_VALUE", // required
 * //       retrievalInstructionArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "INACTIVE", // required
 * //       lastTransitionStatus: "CREATING" || "UPDATING" || "CREATE_SUCCESSFUL" || "CREATE_FAILED" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRetrievalInstructionsCommandInput - {@link ListRetrievalInstructionsCommandInput}
 * @returns {@link ListRetrievalInstructionsCommandOutput}
 * @see {@link ListRetrievalInstructionsCommandInput} for command's `input` shape.
 * @see {@link ListRetrievalInstructionsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
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
export class ListRetrievalInstructionsCommand extends command<ListRetrievalInstructionsCommandInput, ListRetrievalInstructionsCommandOutput>(
  _ep0,
  _mw0,
  "ListRetrievalInstructions",
  ListRetrievalInstructions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRetrievalInstructionsRequest;
      output: ListRetrievalInstructionsResponse;
    };
    sdk: {
      input: ListRetrievalInstructionsCommandInput;
      output: ListRetrievalInstructionsCommandOutput;
    };
  };
}
