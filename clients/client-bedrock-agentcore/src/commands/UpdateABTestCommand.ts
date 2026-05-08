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
import type { UpdateABTestRequest, UpdateABTestResponse } from "../models/models_0";
import { UpdateABTest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateABTestCommand}.
 */
export interface UpdateABTestCommandInput extends UpdateABTestRequest {}
/**
 * @public
 *
 * The output of {@link UpdateABTestCommand}.
 */
export interface UpdateABTestCommandOutput extends UpdateABTestResponse, __MetadataBearer {}

/**
 * <p>Updates an A/B test's configuration, including variants, traffic allocation, evaluation settings, or execution status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, UpdateABTestCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, UpdateABTestCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // UpdateABTestRequest
 *   abTestId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   variants: [ // VariantList
 *     { // Variant
 *       name: "STRING_VALUE", // required
 *       weight: Number("int"), // required
 *       variantConfiguration: { // VariantConfiguration
 *         configurationBundle: { // ConfigurationBundleRef
 *           bundleArn: "STRING_VALUE", // required
 *           bundleVersion: "STRING_VALUE", // required
 *         },
 *         target: { // TargetRef
 *           name: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   gatewayFilter: { // GatewayFilter
 *     targetPaths: [ // TargetPathList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   evaluationConfig: { // ABTestEvaluationConfig Union: only one key present
 *     onlineEvaluationConfigArn: "STRING_VALUE",
 *     perVariantOnlineEvaluationConfig: [ // PerVariantOnlineEvaluationConfigList
 *       { // PerVariantOnlineEvaluationConfig
 *         name: "STRING_VALUE", // required
 *         onlineEvaluationConfigArn: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   roleArn: "STRING_VALUE",
 *   executionStatus: "PAUSED" || "RUNNING" || "STOPPED" || "NOT_STARTED",
 * };
 * const command = new UpdateABTestCommand(input);
 * const response = await client.send(command);
 * // { // UpdateABTestResponse
 * //   abTestId: "STRING_VALUE", // required
 * //   abTestArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED" || "FAILED", // required
 * //   executionStatus: "PAUSED" || "RUNNING" || "STOPPED" || "NOT_STARTED", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateABTestCommandInput - {@link UpdateABTestCommandInput}
 * @returns {@link UpdateABTestCommandOutput}
 * @see {@link UpdateABTestCommandInput} for command's `input` shape.
 * @see {@link UpdateABTestCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
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
export class UpdateABTestCommand extends $Command
  .classBuilder<
    UpdateABTestCommandInput,
    UpdateABTestCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "UpdateABTest", {})
  .n("BedrockAgentCoreClient", "UpdateABTestCommand")
  .sc(UpdateABTest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateABTestRequest;
      output: UpdateABTestResponse;
    };
    sdk: {
      input: UpdateABTestCommandInput;
      output: UpdateABTestCommandOutput;
    };
  };
}
