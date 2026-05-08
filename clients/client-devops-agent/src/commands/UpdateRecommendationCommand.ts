// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRecommendationRequest, UpdateRecommendationResponse } from "../models/models_0";
import { UpdateRecommendation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecommendationCommand}.
 */
export interface UpdateRecommendationCommandInput extends UpdateRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecommendationCommand}.
 */
export interface UpdateRecommendationCommandOutput extends UpdateRecommendationResponse, __MetadataBearer {}

/**
 * Updates an existing recommendation with new content, status, or metadata
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, UpdateRecommendationCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, UpdateRecommendationCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // UpdateRecommendationRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   recommendationId: "STRING_VALUE", // required
 *   status: "PROPOSED" || "ACCEPTED" || "REJECTED" || "CLOSED" || "COMPLETED" || "UPDATE_IN_PROGRESS",
 *   additionalContext: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecommendationResponse
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
 * @param UpdateRecommendationCommandInput - {@link UpdateRecommendationCommandInput}
 * @returns {@link UpdateRecommendationCommandOutput}
 * @see {@link UpdateRecommendationCommandInput} for command's `input` shape.
 * @see {@link UpdateRecommendationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
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
export class UpdateRecommendationCommand extends $Command
  .classBuilder<
    UpdateRecommendationCommandInput,
    UpdateRecommendationCommandOutput,
    DevOpsAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DevOpsAgent", "UpdateRecommendation", {})
  .n("DevOpsAgentClient", "UpdateRecommendationCommand")
  .sc(UpdateRecommendation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecommendationRequest;
      output: UpdateRecommendationResponse;
    };
    sdk: {
      input: UpdateRecommendationCommandInput;
      output: UpdateRecommendationCommandOutput;
    };
  };
}
