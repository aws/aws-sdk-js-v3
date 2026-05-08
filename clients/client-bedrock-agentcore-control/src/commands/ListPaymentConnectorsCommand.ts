// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPaymentConnectorsRequest, ListPaymentConnectorsResponse } from "../models/models_1";
import { ListPaymentConnectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPaymentConnectorsCommand}.
 */
export interface ListPaymentConnectorsCommandInput extends ListPaymentConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListPaymentConnectorsCommand}.
 */
export interface ListPaymentConnectorsCommandOutput extends ListPaymentConnectorsResponse, __MetadataBearer {}

/**
 * <p>Lists all payment connectors for a specified payment manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPaymentConnectorsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPaymentConnectorsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPaymentConnectorsRequest
 *   paymentManagerId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPaymentConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListPaymentConnectorsResponse
 * //   paymentConnectors: [ // PaymentConnectorSummaries // required
 * //     { // PaymentConnectorSummary
 * //       paymentConnectorId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "CoinbaseCDP" || "StripePrivy", // required
 * //       status: "CREATING" || "UPDATING" || "DELETING" || "READY" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPaymentConnectorsCommandInput - {@link ListPaymentConnectorsCommandInput}
 * @returns {@link ListPaymentConnectorsCommandOutput}
 * @see {@link ListPaymentConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListPaymentConnectorsCommandOutput} for command's `response` shape.
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
export class ListPaymentConnectorsCommand extends $Command
  .classBuilder<
    ListPaymentConnectorsCommandInput,
    ListPaymentConnectorsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListPaymentConnectors", {})
  .n("BedrockAgentCoreControlClient", "ListPaymentConnectorsCommand")
  .sc(ListPaymentConnectors$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPaymentConnectorsRequest;
      output: ListPaymentConnectorsResponse;
    };
    sdk: {
      input: ListPaymentConnectorsCommandInput;
      output: ListPaymentConnectorsCommandOutput;
    };
  };
}
