// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPaymentSessionsRequest, ListPaymentSessionsResponse } from "../models/models_1";
import { ListPaymentSessions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPaymentSessionsCommand}.
 */
export interface ListPaymentSessionsCommandInput extends ListPaymentSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPaymentSessionsCommand}.
 */
export interface ListPaymentSessionsCommandOutput extends ListPaymentSessionsResponse, __MetadataBearer {}

/**
 * <p>List payment sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListPaymentSessionsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListPaymentSessionsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListPaymentSessionsRequest
 *   userId: "STRING_VALUE",
 *   agentName: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPaymentSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPaymentSessionsResponse
 * //   paymentSessions: [ // PaymentSessionSummaryList // required
 * //     { // PaymentSessionSummary
 * //       paymentSessionId: "STRING_VALUE", // required
 * //       paymentManagerArn: "STRING_VALUE", // required
 * //       userId: "STRING_VALUE", // required
 * //       expiryTimeInMinutes: Number("int"), // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPaymentSessionsCommandInput - {@link ListPaymentSessionsCommandInput}
 * @returns {@link ListPaymentSessionsCommandOutput}
 * @see {@link ListPaymentSessionsCommandInput} for command's `input` shape.
 * @see {@link ListPaymentSessionsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class ListPaymentSessionsCommand extends command<ListPaymentSessionsCommandInput, ListPaymentSessionsCommandOutput>(
  _ep0,
  _mw0,
  "ListPaymentSessions",
  ListPaymentSessions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPaymentSessionsRequest;
      output: ListPaymentSessionsResponse;
    };
    sdk: {
      input: ListPaymentSessionsCommandInput;
      output: ListPaymentSessionsCommandOutput;
    };
  };
}
