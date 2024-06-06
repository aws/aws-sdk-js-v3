// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartPolicyGenerationRequest, StartPolicyGenerationResponse } from "../models/models_0";
import { de_StartPolicyGenerationCommand, se_StartPolicyGenerationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPolicyGenerationCommand}.
 */
export interface StartPolicyGenerationCommandInput extends StartPolicyGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartPolicyGenerationCommand}.
 */
export interface StartPolicyGenerationCommandOutput extends StartPolicyGenerationResponse, __MetadataBearer {}

/**
 * <p>Starts the policy generation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartPolicyGenerationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartPolicyGenerationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // StartPolicyGenerationRequest
 *   policyGenerationDetails: { // PolicyGenerationDetails
 *     principalArn: "STRING_VALUE", // required
 *   },
 *   cloudTrailDetails: { // CloudTrailDetails
 *     trails: [ // TrailList // required
 *       { // Trail
 *         cloudTrailArn: "STRING_VALUE", // required
 *         regions: [ // RegionList
 *           "STRING_VALUE",
 *         ],
 *         allRegions: true || false,
 *       },
 *     ],
 *     accessRole: "STRING_VALUE", // required
 *     startTime: new Date("TIMESTAMP"), // required
 *     endTime: new Date("TIMESTAMP"),
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartPolicyGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartPolicyGenerationResponse
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartPolicyGenerationCommandInput - {@link StartPolicyGenerationCommandInput}
 * @returns {@link StartPolicyGenerationCommandOutput}
 * @see {@link StartPolicyGenerationCommandInput} for command's `input` shape.
 * @see {@link StartPolicyGenerationCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quote met error.</p>
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
 * @public
 */
export class StartPolicyGenerationCommand extends $Command
  .classBuilder<
    StartPolicyGenerationCommandInput,
    StartPolicyGenerationCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AccessAnalyzer", "StartPolicyGeneration", {})
  .n("AccessAnalyzerClient", "StartPolicyGenerationCommand")
  .f(void 0, void 0)
  .ser(se_StartPolicyGenerationCommand)
  .de(de_StartPolicyGenerationCommand)
  .build() {}
