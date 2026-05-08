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
import type { CreatePaymentSessionRequest, CreatePaymentSessionResponse } from "../models/models_1";
import { CreatePaymentSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePaymentSessionCommand}.
 */
export interface CreatePaymentSessionCommandInput extends CreatePaymentSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePaymentSessionCommand}.
 */
export interface CreatePaymentSessionCommandOutput extends CreatePaymentSessionResponse, __MetadataBearer {}

/**
 * Create a new payment manager session
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, CreatePaymentSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, CreatePaymentSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // CreatePaymentSessionRequest
 *   userId: "STRING_VALUE",
 *   agentName: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   limits: { // SessionLimits
 *     maxSpendAmount: { // Amount
 *       value: "STRING_VALUE", // required
 *       currency: "USD", // required
 *     },
 *   },
 *   expiryTimeInMinutes: Number("int"), // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePaymentSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreatePaymentSessionResponse
 * //   paymentSession: { // PaymentSession
 * //     paymentSessionId: "STRING_VALUE", // required
 * //     paymentManagerArn: "STRING_VALUE", // required
 * //     limits: { // SessionLimits
 * //       maxSpendAmount: { // Amount
 * //         value: "STRING_VALUE", // required
 * //         currency: "USD", // required
 * //       },
 * //     },
 * //     userId: "STRING_VALUE", // required
 * //     expiryTimeInMinutes: Number("int"), // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     availableLimits: { // AvailableLimits
 * //       availableSpendAmount: {
 * //         value: "STRING_VALUE", // required
 * //         currency: "USD", // required
 * //       },
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePaymentSessionCommandInput - {@link CreatePaymentSessionCommandInput}
 * @returns {@link CreatePaymentSessionCommandOutput}
 * @see {@link CreatePaymentSessionCommandInput} for command's `input` shape.
 * @see {@link CreatePaymentSessionCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
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
export class CreatePaymentSessionCommand extends $Command
  .classBuilder<
    CreatePaymentSessionCommandInput,
    CreatePaymentSessionCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "CreatePaymentSession", {})
  .n("BedrockAgentCoreClient", "CreatePaymentSessionCommand")
  .sc(CreatePaymentSession$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePaymentSessionRequest;
      output: CreatePaymentSessionResponse;
    };
    sdk: {
      input: CreatePaymentSessionCommandInput;
      output: CreatePaymentSessionCommandOutput;
    };
  };
}
