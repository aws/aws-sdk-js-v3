// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { InvokeGuardrailChecksRequest, InvokeGuardrailChecksResponse } from "../models/models_0";
import { InvokeGuardrailChecks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeGuardrailChecksCommand}.
 */
export interface InvokeGuardrailChecksCommandInput extends InvokeGuardrailChecksRequest {}
/**
 * @public
 *
 * The output of {@link InvokeGuardrailChecksCommand}.
 */
export interface InvokeGuardrailChecksCommandOutput extends InvokeGuardrailChecksResponse, __MetadataBearer {}

/**
 * <p>Evaluates messages against inline guardrail checks. You specify the check configurations directly in the request, and Amazon Bedrock returns per-check results with severity or confidence scores.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockRuntimeClient, InvokeGuardrailChecksCommand } from "@aws-sdk/client-bedrock-runtime"; // ES Modules import
 * // const { BedrockRuntimeClient, InvokeGuardrailChecksCommand } = require("@aws-sdk/client-bedrock-runtime"); // CommonJS import
 * // import type { BedrockRuntimeClientConfig } from "@aws-sdk/client-bedrock-runtime";
 * const config = {}; // type is BedrockRuntimeClientConfig
 * const client = new BedrockRuntimeClient(config);
 * const input = { // InvokeGuardrailChecksRequest
 *   messages: [ // GuardrailChecksMessageList // required
 *     { // GuardrailChecksMessage
 *       role: "user" || "assistant" || "system", // required
 *       content: [ // GuardrailChecksContentBlockList // required
 *         { // GuardrailChecksContentBlock Union: only one key present
 *           text: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   checks: { // GuardrailChecksConfig
 *     contentFilter: { // GuardrailChecksContentFilterConfig
 *       categories: [ // GuardrailChecksContentFilterCategoryConfigList // required
 *         { // GuardrailChecksContentFilterCategoryConfig
 *           category: "VIOLENCE" || "HATE" || "SEXUAL" || "MISCONDUCT" || "INSULTS", // required
 *         },
 *       ],
 *     },
 *     promptAttack: { // GuardrailChecksPromptAttackConfig
 *       categories: [ // GuardrailChecksPromptAttackCategoryConfigList // required
 *         { // GuardrailChecksPromptAttackCategoryConfig
 *           category: "JAILBREAK" || "PROMPT_INJECTION" || "PROMPT_LEAKAGE", // required
 *         },
 *       ],
 *     },
 *     sensitiveInformation: { // GuardrailChecksSensitiveInformationConfig
 *       entities: [ // GuardrailChecksSensitiveInformationEntityConfigList // required
 *         { // GuardrailChecksSensitiveInformationEntityConfig
 *           type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new InvokeGuardrailChecksCommand(input);
 * const response = await client.send(command);
 * // { // InvokeGuardrailChecksResponse
 * //   results: { // GuardrailChecksResults
 * //     contentFilter: { // GuardrailChecksContentFilterResult
 * //       results: [ // GuardrailChecksContentFilterResultList // required
 * //         { // GuardrailChecksContentFilterResultEntry
 * //           category: "VIOLENCE" || "HATE" || "SEXUAL" || "MISCONDUCT" || "INSULTS", // required
 * //           severityScore: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //     promptAttack: { // GuardrailChecksPromptAttackResult
 * //       results: [ // GuardrailChecksPromptAttackResultList // required
 * //         { // GuardrailChecksPromptAttackResultEntry
 * //           category: "JAILBREAK" || "PROMPT_INJECTION" || "PROMPT_LEAKAGE", // required
 * //           severityScore: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //     sensitiveInformation: { // GuardrailChecksSensitiveInformationResult
 * //       results: [ // GuardrailChecksSensitiveInformationResultList // required
 * //         { // GuardrailChecksSensitiveInformationResultEntry
 * //           type: "ADDRESS" || "AGE" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "DRIVER_ID" || "EMAIL" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "IP_ADDRESS" || "LICENSE_PLATE" || "MAC_ADDRESS" || "NAME" || "PASSWORD" || "PHONE" || "PIN" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "URL" || "USERNAME" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "VEHICLE_IDENTIFICATION_NUMBER", // required
 * //           confidenceScore: Number("double"), // required
 * //           beginOffset: Number("int"), // required
 * //           endOffset: Number("int"), // required
 * //           messageIndex: Number("int"), // required
 * //           contentIndex: Number("int"), // required
 * //         },
 * //       ],
 * //       truncated: true || false,
 * //     },
 * //   },
 * //   usage: { // GuardrailChecksUsageResults
 * //     contentFilter: { // GuardrailChecksContentFilterUsage
 * //       textUnits: Number("int"), // required
 * //     },
 * //     promptAttack: { // GuardrailChecksPromptAttackUsage
 * //       textUnits: Number("int"), // required
 * //     },
 * //     sensitiveInformation: { // GuardrailChecksSensitiveInformationUsage
 * //       textUnits: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param InvokeGuardrailChecksCommandInput - {@link InvokeGuardrailChecksCommandInput}
 * @returns {@link InvokeGuardrailChecksCommandOutput}
 * @see {@link InvokeGuardrailChecksCommandInput} for command's `input` shape.
 * @see {@link InvokeGuardrailChecksCommandOutput} for command's `response` shape.
 * @see {@link BedrockRuntimeClientResolvedConfig | config} for BedrockRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because you do not have sufficient permissions to perform the requested action. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-access-denied">AccessDeniedException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-internal-failure">InternalFailure</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service isn't currently available. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-service-unavailable">ServiceUnavailable</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request was denied due to exceeding the account quotas for <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-throttling-exception">ThrottlingException</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by <i>Amazon Bedrock</i>. For troubleshooting this error, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/troubleshooting-api-error-codes.html#ts-validation-error">ValidationError</a> in the Amazon Bedrock User Guide</p>
 *
 * @throws {@link BedrockRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockRuntime service.</p>
 *
 *
 * @public
 */
export class InvokeGuardrailChecksCommand extends $Command
  .classBuilder<
    InvokeGuardrailChecksCommandInput,
    InvokeGuardrailChecksCommandOutput,
    BedrockRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockFrontendService", "InvokeGuardrailChecks", {})
  .n("BedrockRuntimeClient", "InvokeGuardrailChecksCommand")
  .sc(InvokeGuardrailChecks$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeGuardrailChecksRequest;
      output: InvokeGuardrailChecksResponse;
    };
    sdk: {
      input: InvokeGuardrailChecksCommandInput;
      output: InvokeGuardrailChecksCommandOutput;
    };
  };
}
