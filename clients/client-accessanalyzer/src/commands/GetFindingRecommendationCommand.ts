// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFindingRecommendationRequest, GetFindingRecommendationResponse } from "../models/models_0";
import { GetFindingRecommendation } from "../schemas/schemas_3_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingRecommendationCommand}.
 */
export interface GetFindingRecommendationCommandInput extends GetFindingRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingRecommendationCommand}.
 */
export interface GetFindingRecommendationCommandOutput extends GetFindingRecommendationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a finding recommendation for the specified analyzer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetFindingRecommendationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetFindingRecommendationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetFindingRecommendationRequest
 *   analyzerArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingRecommendationResponse
 * //   startedAt: new Date("TIMESTAMP"), // required
 * //   completedAt: new Date("TIMESTAMP"),
 * //   nextToken: "STRING_VALUE",
 * //   error: { // RecommendationError
 * //     code: "STRING_VALUE", // required
 * //     message: "STRING_VALUE", // required
 * //   },
 * //   resourceArn: "STRING_VALUE", // required
 * //   recommendedSteps: [ // RecommendedStepList
 * //     { // RecommendedStep Union: only one key present
 * //       unusedPermissionsRecommendedStep: { // UnusedPermissionsRecommendedStep
 * //         policyUpdatedAt: new Date("TIMESTAMP"),
 * //         recommendedAction: "STRING_VALUE", // required
 * //         recommendedPolicy: "STRING_VALUE",
 * //         existingPolicyId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   recommendationType: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetFindingRecommendationCommandInput - {@link GetFindingRecommendationCommandInput}
 * @returns {@link GetFindingRecommendationCommandOutput}
 * @see {@link GetFindingRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetFindingRecommendationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @example Successfully fetched finding recommendation
 * ```javascript
 * //
 * const input = {
 *   analyzerArn: "arn:aws:access-analyzer:us-east-1:111122223333:analyzer/a",
 *   id: "finding-id",
 *   maxResults: 3,
 *   nextToken: "token"
 * };
 * const command = new GetFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   completedAt: "2000-01-01T00:00:01Z",
 *   recommendationType: "UnusedPermissionRecommendation",
 *   recommendedSteps: [
 *     {
 *       unusedPermissionsRecommendedStep: {
 *         existingPolicyId: "policy-id",
 *         recommendedAction: "DETACH_POLICY"
 *       }
 *     },
 *     {
 *       unusedPermissionsRecommendedStep: {
 *         existingPolicyId: "policy-id",
 *         recommendedAction: "CREATE_POLICY",
 *         recommendedPolicy: "policy-content"
 *       }
 *     }
 *   ],
 *   resourceArn: "arn:aws:iam::111122223333:role/test",
 *   startedAt: "2000-01-01T00:00:00Z",
 *   status: "SUCCEEDED"
 * }
 * *\/
 * ```
 *
 * @example In progress finding recommendation
 * ```javascript
 * //
 * const input = {
 *   analyzerArn: "arn:aws:access-analyzer:us-east-1:111122223333:analyzer/a",
 *   id: "finding-id",
 *   maxResults: 3
 * };
 * const command = new GetFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   recommendationType: "UnusedPermissionRecommendation",
 *   resourceArn: "arn:aws:iam::111122223333:role/test",
 *   startedAt: "2000-01-01T00:00:00Z",
 *   status: "IN_PROGRESS"
 * }
 * *\/
 * ```
 *
 * @example Failed finding recommendation
 * ```javascript
 * //
 * const input = {
 *   analyzerArn: "arn:aws:access-analyzer:us-east-1:111122223333:analyzer/a",
 *   id: "finding-id",
 *   maxResults: 3
 * };
 * const command = new GetFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   completedAt: "2000-01-01T00:00:01Z",
 *   error: {
 *     code: "SERVICE_ERROR",
 *     message: "Service error. Please try again."
 *   },
 *   recommendationType: "UnusedPermissionRecommendation",
 *   resourceArn: "arn:aws:iam::111122223333:role/test",
 *   startedAt: "2000-01-01T00:00:00Z",
 *   status: "FAILED"
 * }
 * *\/
 * ```
 *
 * @example Failed field validation for id value
 * ```javascript
 * //
 * const input = {
 *   analyzerArn: "arn:aws:access-analyzer:us-east-1:111122223333:analyzer/a",
 *   id: "!"
 * };
 * const command = new GetFindingRecommendationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetFindingRecommendationCommand extends $Command
  .classBuilder<
    GetFindingRecommendationCommandInput,
    GetFindingRecommendationCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GetFindingRecommendation", {})
  .n("AccessAnalyzerClient", "GetFindingRecommendationCommand")
  .sc(GetFindingRecommendation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingRecommendationRequest;
      output: GetFindingRecommendationResponse;
    };
    sdk: {
      input: GetFindingRecommendationCommandInput;
      output: GetFindingRecommendationCommandOutput;
    };
  };
}
