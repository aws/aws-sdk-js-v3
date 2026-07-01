// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPolicyEngineSummariesRequest, ListPolicyEngineSummariesResponse } from "../models/models_1";
import { ListPolicyEngineSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPolicyEngineSummariesCommand}.
 */
export interface ListPolicyEngineSummariesCommandInput extends ListPolicyEngineSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListPolicyEngineSummariesCommand}.
 */
export interface ListPolicyEngineSummariesCommandOutput extends ListPolicyEngineSummariesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a paginated list of metadata-only policy engine summaries without decrypting customer content. This lightweight read operation returns resource identifiers, status, and timestamps for each policy engine, but does not include descriptions or status reasons. Because this operation does not require access to the customer's KMS key, it is suitable for resource discovery, inventory, and integration scenarios where only metadata is needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPolicyEngineSummariesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPolicyEngineSummariesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPolicyEngineSummariesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPolicyEngineSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyEngineSummariesResponse
 * //   policyEngines: [ // PolicyEngineSummaryList // required
 * //     { // PolicyEngineSummary
 * //       policyEngineId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       policyEngineArn: "STRING_VALUE", // required
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //       encryptionKeyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPolicyEngineSummariesCommandInput - {@link ListPolicyEngineSummariesCommandInput}
 * @returns {@link ListPolicyEngineSummariesCommandOutput}
 * @see {@link ListPolicyEngineSummariesCommandInput} for command's `input` shape.
 * @see {@link ListPolicyEngineSummariesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class ListPolicyEngineSummariesCommand extends command<ListPolicyEngineSummariesCommandInput, ListPolicyEngineSummariesCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicyEngineSummaries",
  ListPolicyEngineSummaries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyEngineSummariesRequest;
      output: ListPolicyEngineSummariesResponse;
    };
    sdk: {
      input: ListPolicyEngineSummariesCommandInput;
      output: ListPolicyEngineSummariesCommandOutput;
    };
  };
}
