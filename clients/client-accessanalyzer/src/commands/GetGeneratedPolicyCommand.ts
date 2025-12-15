// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetGeneratedPolicyRequest, GetGeneratedPolicyResponse } from "../models/models_0";
import { GetGeneratedPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGeneratedPolicyCommand}.
 */
export interface GetGeneratedPolicyCommandInput extends GetGeneratedPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetGeneratedPolicyCommand}.
 */
export interface GetGeneratedPolicyCommandOutput extends GetGeneratedPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the policy that was generated using <code>StartPolicyGeneration</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetGeneratedPolicyCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetGeneratedPolicyCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetGeneratedPolicyRequest
 *   jobId: "STRING_VALUE", // required
 *   includeResourcePlaceholders: true || false,
 *   includeServiceLevelTemplate: true || false,
 * };
 * const command = new GetGeneratedPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetGeneratedPolicyResponse
 * //   jobDetails: { // JobDetails
 * //     jobId: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     startedOn: new Date("TIMESTAMP"), // required
 * //     completedOn: new Date("TIMESTAMP"),
 * //     jobError: { // JobError
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   generatedPolicyResult: { // GeneratedPolicyResult
 * //     properties: { // GeneratedPolicyProperties
 * //       isComplete: true || false,
 * //       principalArn: "STRING_VALUE", // required
 * //       cloudTrailProperties: { // CloudTrailProperties
 * //         trailProperties: [ // TrailPropertiesList // required
 * //           { // TrailProperties
 * //             cloudTrailArn: "STRING_VALUE", // required
 * //             regions: [ // RegionList
 * //               "STRING_VALUE",
 * //             ],
 * //             allRegions: true || false,
 * //           },
 * //         ],
 * //         startTime: new Date("TIMESTAMP"), // required
 * //         endTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //     generatedPolicies: [ // GeneratedPolicyList
 * //       { // GeneratedPolicy
 * //         policy: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGeneratedPolicyCommandInput - {@link GetGeneratedPolicyCommandInput}
 * @returns {@link GetGeneratedPolicyCommandOutput}
 * @see {@link GetGeneratedPolicyCommandInput} for command's `input` shape.
 * @see {@link GetGeneratedPolicyCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
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
 * @public
 */
export class GetGeneratedPolicyCommand extends $Command
  .classBuilder<
    GetGeneratedPolicyCommandInput,
    GetGeneratedPolicyCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GetGeneratedPolicy", {})
  .n("AccessAnalyzerClient", "GetGeneratedPolicyCommand")
  .sc(GetGeneratedPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGeneratedPolicyRequest;
      output: GetGeneratedPolicyResponse;
    };
    sdk: {
      input: GetGeneratedPolicyCommandInput;
      output: GetGeneratedPolicyCommandOutput;
    };
  };
}
