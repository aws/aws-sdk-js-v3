// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPaymentManagersRequest, ListPaymentManagersResponse } from "../models/models_1";
import { ListPaymentManagers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPaymentManagersCommand}.
 */
export interface ListPaymentManagersCommandInput extends ListPaymentManagersRequest {}
/**
 * @public
 *
 * The output of {@link ListPaymentManagersCommand}.
 */
export interface ListPaymentManagersCommandOutput extends ListPaymentManagersResponse, __MetadataBearer {}

/**
 * <p>Lists all payment managers in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPaymentManagersCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPaymentManagersCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPaymentManagersRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPaymentManagersCommand(input);
 * const response = await client.send(command);
 * // { // ListPaymentManagersResponse
 * //   paymentManagers: [ // PaymentManagerSummaries // required
 * //     { // PaymentManagerSummary
 * //       paymentManagerArn: "STRING_VALUE", // required
 * //       paymentManagerId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       authorizerType: "CUSTOM_JWT" || "AWS_IAM", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "READY" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPaymentManagersCommandInput - {@link ListPaymentManagersCommandInput}
 * @returns {@link ListPaymentManagersCommandOutput}
 * @see {@link ListPaymentManagersCommandInput} for command's `input` shape.
 * @see {@link ListPaymentManagersCommandOutput} for command's `response` shape.
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
export class ListPaymentManagersCommand extends command<ListPaymentManagersCommandInput, ListPaymentManagersCommandOutput>(
  _ep0,
  _mw0,
  "ListPaymentManagers",
  ListPaymentManagers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPaymentManagersRequest;
      output: ListPaymentManagersResponse;
    };
    sdk: {
      input: ListPaymentManagersCommandInput;
      output: ListPaymentManagersCommandOutput;
    };
  };
}
