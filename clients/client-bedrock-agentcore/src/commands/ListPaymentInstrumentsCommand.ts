// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPaymentInstrumentsRequest, ListPaymentInstrumentsResponse } from "../models/models_1";
import { ListPaymentInstruments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPaymentInstrumentsCommand}.
 */
export interface ListPaymentInstrumentsCommandInput extends ListPaymentInstrumentsRequest {}
/**
 * @public
 *
 * The output of {@link ListPaymentInstrumentsCommand}.
 */
export interface ListPaymentInstrumentsCommandOutput extends ListPaymentInstrumentsResponse, __MetadataBearer {}

/**
 * List payment instruments for a manager
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ListPaymentInstrumentsCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ListPaymentInstrumentsCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ListPaymentInstrumentsRequest
 *   userId: "STRING_VALUE",
 *   agentName: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPaymentInstrumentsCommand(input);
 * const response = await client.send(command);
 * // { // ListPaymentInstrumentsResponse
 * //   paymentInstruments: [ // PaymentInstrumentSummaryList // required
 * //     { // PaymentInstrumentSummary
 * //       paymentInstrumentId: "STRING_VALUE", // required
 * //       paymentManagerArn: "STRING_VALUE", // required
 * //       paymentConnectorId: "STRING_VALUE", // required
 * //       userId: "STRING_VALUE", // required
 * //       paymentInstrumentType: "EMBEDDED_CRYPTO_WALLET", // required
 * //       status: "INITIATED" || "ACTIVE" || "FAILED" || "DELETED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPaymentInstrumentsCommandInput - {@link ListPaymentInstrumentsCommandInput}
 * @returns {@link ListPaymentInstrumentsCommandOutput}
 * @see {@link ListPaymentInstrumentsCommandInput} for command's `input` shape.
 * @see {@link ListPaymentInstrumentsCommandOutput} for command's `response` shape.
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
export class ListPaymentInstrumentsCommand extends $Command
  .classBuilder<
    ListPaymentInstrumentsCommandInput,
    ListPaymentInstrumentsCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "ListPaymentInstruments", {})
  .n("BedrockAgentCoreClient", "ListPaymentInstrumentsCommand")
  .sc(ListPaymentInstruments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPaymentInstrumentsRequest;
      output: ListPaymentInstrumentsResponse;
    };
    sdk: {
      input: ListPaymentInstrumentsCommandInput;
      output: ListPaymentInstrumentsCommandOutput;
    };
  };
}
