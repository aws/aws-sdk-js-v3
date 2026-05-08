// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRecommendationRequest, GetRecommendationResponse } from "../models/models_0";
import { GetRecommendation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationCommand}.
 */
export interface GetRecommendationCommandInput extends GetRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationCommand}.
 */
export interface GetRecommendationCommandOutput extends GetRecommendationResponse, __MetadataBearer {}

/**
 * Retrieves a specific recommendation by its ID
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, GetRecommendationCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, GetRecommendationCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // GetRecommendationRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   recommendationId: "STRING_VALUE", // required
 *   recommendationVersion: Number("long"),
 * };
 * const command = new GetRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationResponse
 * //   recommendation: { // Recommendation
 * //     agentSpaceArn: "STRING_VALUE", // required
 * //     recommendationId: "STRING_VALUE", // required
 * //     taskId: "STRING_VALUE", // required
 * //     goalId: "STRING_VALUE",
 * //     title: "STRING_VALUE", // required
 * //     content: { // RecommendationContent
 * //       summary: "STRING_VALUE", // required
 * //       spec: "STRING_VALUE",
 * //     },
 * //     status: "PROPOSED" || "ACCEPTED" || "REJECTED" || "CLOSED" || "COMPLETED" || "UPDATE_IN_PROGRESS", // required
 * //     priority: "HIGH" || "MEDIUM" || "LOW", // required
 * //     goalVersion: Number("long"),
 * //     additionalContext: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     version: Number("long"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecommendationCommandInput - {@link GetRecommendationCommandInput}
 * @returns {@link GetRecommendationCommandOutput}
 * @see {@link GetRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *  A standard error for input validation failures.
 * This should be thrown by services when a member of the input structure
 * falls outside of the modeled or documented constraints.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *  This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  One or more parameters provided in the request are invalid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 * <p>Base exception class for all service exceptions from DevOpsAgent service.</p>
 *
 *
 * @public
 */
export class GetRecommendationCommand extends $Command
  .classBuilder<
    GetRecommendationCommandInput,
    GetRecommendationCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "GetRecommendation", {})
  .n("DevOpsAgentClient", "GetRecommendationCommand")
  .sc(GetRecommendation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecommendationRequest;
      output: GetRecommendationResponse;
    };
    sdk: {
      input: GetRecommendationCommandInput;
      output: GetRecommendationCommandOutput;
    };
  };
}
