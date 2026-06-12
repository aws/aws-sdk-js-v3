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
import type { CreateABTestRequest, CreateABTestResponse } from "../models/models_0";
import { CreateABTest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateABTestCommand}.
 */
export interface CreateABTestCommandInput extends CreateABTestRequest {}
/**
 * @public
 *
 * The output of {@link CreateABTestCommand}.
 */
export interface CreateABTestCommandOutput extends CreateABTestResponse, __MetadataBearer {}

/**
 * <p>Creates an A/B test for comparing agent configurations. A/B tests split traffic between a control variant and a treatment variant through a gateway, then evaluate performance using online evaluation configurations to determine which variant performs better.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, CreateABTestCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, CreateABTestCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // CreateABTestRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   gatewayArn: "STRING_VALUE", // required
 *   variants: [ // VariantList // required
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
 *   roleArn: "STRING_VALUE", // required
 *   enableOnCreate: true || false,
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateABTestCommand(input);
 * const response = await client.send(command);
 * // { // CreateABTestResponse
 * //   abTestId: "STRING_VALUE", // required
 * //   abTestArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED" || "FAILED", // required
 * //   executionStatus: "PAUSED" || "RUNNING" || "STOPPED" || "NOT_STARTED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateABTestCommandInput - {@link CreateABTestCommandInput}
 * @returns {@link CreateABTestCommandOutput}
 * @see {@link CreateABTestCommandInput} for command's `input` shape.
 * @see {@link CreateABTestCommandOutput} for command's `response` shape.
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
export class CreateABTestCommand extends $Command
  .classBuilder<
    CreateABTestCommandInput,
    CreateABTestCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "CreateABTest", {})
  .n("BedrockAgentCoreClient", "CreateABTestCommand")
  .sc(CreateABTest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateABTestRequest;
      output: CreateABTestResponse;
    };
    sdk: {
      input: CreateABTestCommandInput;
      output: CreateABTestCommandOutput;
    };
  };
}
