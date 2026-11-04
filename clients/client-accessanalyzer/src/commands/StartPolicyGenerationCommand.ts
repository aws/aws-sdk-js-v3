// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartPolicyGenerationRequest, StartPolicyGenerationResponse } from "../models/models_0";
import { StartPolicyGeneration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts the policy generation request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartPolicyGenerationCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartPolicyGenerationCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict exception error.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Service quote met error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Throttling limit exceeded error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation exception error.
 *
 * @throws {@link AccessAnalyzerServiceException}
 *
 * Base exception class for all service exceptions from AccessAnalyzer service.
 *
 * @public
 */
export class StartPolicyGenerationCommand extends command<StartPolicyGenerationCommandInput, StartPolicyGenerationCommandOutput>(
  _ep0,
  _mw0,
  "StartPolicyGeneration",
  StartPolicyGeneration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPolicyGenerationRequest;
      output: StartPolicyGenerationResponse;
    };
    sdk: {
      input: StartPolicyGenerationCommandInput;
      output: StartPolicyGenerationCommandOutput;
    };
  };
}
