// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { ListRecommendations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandInput extends ListRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandOutput extends ListRecommendationsResponse, __MetadataBearer {}

/**
 * Lists recommendations for the specified agent space
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsAgentClient, ListRecommendationsCommand } from "@aws-sdk/client-devops-agent"; // ES Modules import
 * // const { DevOpsAgentClient, ListRecommendationsCommand } = require("@aws-sdk/client-devops-agent"); // CommonJS import
 * // import type { DevOpsAgentClientConfig } from "@aws-sdk/client-devops-agent";
 * const config = {}; // type is DevOpsAgentClientConfig
 * const client = new DevOpsAgentClient(config);
 * const input = { // ListRecommendationsRequest
 *   agentSpaceId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE",
 *   goalId: "STRING_VALUE",
 *   status: "PROPOSED" || "ACCEPTED" || "REJECTED" || "CLOSED" || "COMPLETED" || "UPDATE_IN_PROGRESS",
 *   priority: "HIGH" || "MEDIUM" || "LOW",
 *   limit: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   recommendations: [ // RecommendationList // required
 * //     { // Recommendation
 * //       agentSpaceArn: "STRING_VALUE", // required
 * //       recommendationId: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE", // required
 * //       goalId: "STRING_VALUE",
 * //       title: "STRING_VALUE", // required
 * //       content: { // RecommendationContent
 * //         summary: "STRING_VALUE", // required
 * //         spec: "STRING_VALUE",
 * //       },
 * //       status: "PROPOSED" || "ACCEPTED" || "REJECTED" || "CLOSED" || "COMPLETED" || "UPDATE_IN_PROGRESS", // required
 * //       priority: "HIGH" || "MEDIUM" || "LOW", // required
 * //       goalVersion: Number("long"),
 * //       additionalContext: "STRING_VALUE",
 * //       rankPosition: Number("int"),
 * //       rankedAt: new Date("TIMESTAMP"),
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       version: Number("long"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationsCommandInput - {@link ListRecommendationsCommandInput}
 * @returns {@link ListRecommendationsCommandOutput}
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsAgentClientResolvedConfig | config} for DevOpsAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the requested resource is denied due to insufficient permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown when an unexpected error occurs in the processing of a request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Please slow down and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request conflicts with the current state of the resource.
 *
 * @throws {@link ContentSizeExceededException} (client fault)
 *
 * This exception is thrown when the content size exceeds the allowed limit.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters provided in the request are invalid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed the service quota limit.
 *
 * @throws {@link DevOpsAgentServiceException}
 *
 * Base exception class for all service exceptions from DevOpsAgent service.
 *
 * @public
 */
export class ListRecommendationsCommand extends command<ListRecommendationsCommandInput, ListRecommendationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRecommendations",
  ListRecommendations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendationsRequest;
      output: ListRecommendationsResponse;
    };
    sdk: {
      input: ListRecommendationsCommandInput;
      output: ListRecommendationsCommandOutput;
    };
  };
}
