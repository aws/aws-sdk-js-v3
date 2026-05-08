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
import type { GetABTestRequest, GetABTestResponse } from "../models/models_0";
import { GetABTest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetABTestCommand}.
 */
export interface GetABTestCommandInput extends GetABTestRequest {}
/**
 * @public
 *
 * The output of {@link GetABTestCommand}.
 */
export interface GetABTestCommandOutput extends GetABTestResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about an A/B test, including its configuration, status, and statistical results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetABTestCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetABTestCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetABTestRequest
 *   abTestId: "STRING_VALUE", // required
 * };
 * const command = new GetABTestCommand(input);
 * const response = await client.send(command);
 * // { // GetABTestResponse
 * //   abTestId: "STRING_VALUE", // required
 * //   abTestArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED" || "FAILED", // required
 * //   executionStatus: "PAUSED" || "RUNNING" || "STOPPED" || "NOT_STARTED", // required
 * //   gatewayArn: "STRING_VALUE", // required
 * //   variants: [ // VariantList // required
 * //     { // Variant
 * //       name: "STRING_VALUE", // required
 * //       weight: Number("int"), // required
 * //       variantConfiguration: { // VariantConfiguration
 * //         configurationBundle: { // ConfigurationBundleRef
 * //           bundleArn: "STRING_VALUE", // required
 * //           bundleVersion: "STRING_VALUE", // required
 * //         },
 * //         target: { // TargetRef
 * //           name: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   gatewayFilter: { // GatewayFilter
 * //     targetPaths: [ // TargetPathList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   evaluationConfig: { // ABTestEvaluationConfig Union: only one key present
 * //     onlineEvaluationConfigArn: "STRING_VALUE",
 * //     perVariantOnlineEvaluationConfig: [ // PerVariantOnlineEvaluationConfigList
 * //       { // PerVariantOnlineEvaluationConfig
 * //         name: "STRING_VALUE", // required
 * //         onlineEvaluationConfigArn: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   roleArn: "STRING_VALUE",
 * //   currentRunId: "STRING_VALUE",
 * //   errorDetails: [ // ErrorDetailsList
 * //     "STRING_VALUE",
 * //   ],
 * //   startedAt: new Date("TIMESTAMP"),
 * //   stoppedAt: new Date("TIMESTAMP"),
 * //   maxDurationExpiresAt: new Date("TIMESTAMP"),
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   results: { // ABTestResults
 * //     analysisTimestamp: new Date("TIMESTAMP"),
 * //     evaluatorMetrics: [ // EvaluatorMetricList // required
 * //       { // EvaluatorMetric
 * //         evaluatorArn: "STRING_VALUE", // required
 * //         controlStats: { // ControlStats
 * //           variantName: "STRING_VALUE", // required
 * //           sampleSize: Number("int"), // required
 * //           mean: Number("double"), // required
 * //         },
 * //         variantResults: [ // VariantResultList // required
 * //           { // VariantResult
 * //             variantName: "STRING_VALUE", // required
 * //             sampleSize: Number("int"), // required
 * //             mean: Number("double"), // required
 * //             absoluteChange: Number("double"),
 * //             percentChange: Number("double"),
 * //             pValue: Number("double"),
 * //             confidenceInterval: { // ConfidenceInterval
 * //               lower: Number("double"),
 * //               upper: Number("double"),
 * //             },
 * //             isSignificant: true || false, // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetABTestCommandInput - {@link GetABTestCommandInput}
 * @returns {@link GetABTestCommandOutput}
 * @see {@link GetABTestCommandInput} for command's `input` shape.
 * @see {@link GetABTestCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
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
export class GetABTestCommand extends $Command
  .classBuilder<
    GetABTestCommandInput,
    GetABTestCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "GetABTest", {})
  .n("BedrockAgentCoreClient", "GetABTestCommand")
  .sc(GetABTest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetABTestRequest;
      output: GetABTestResponse;
    };
    sdk: {
      input: GetABTestCommandInput;
      output: GetABTestCommandOutput;
    };
  };
}
