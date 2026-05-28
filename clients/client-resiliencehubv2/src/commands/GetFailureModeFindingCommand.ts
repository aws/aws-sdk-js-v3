// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFailureModeFindingRequest, GetFailureModeFindingResponse } from "../models/models_0";
import type {
  Resiliencehubv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Resiliencehubv2Client";
import { GetFailureModeFinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFailureModeFindingCommand}.
 */
export interface GetFailureModeFindingCommandInput extends GetFailureModeFindingRequest {}
/**
 * @public
 *
 * The output of {@link GetFailureModeFindingCommand}.
 */
export interface GetFailureModeFindingCommandOutput extends GetFailureModeFindingResponse, __MetadataBearer {}

/**
 * <p>Retrieves a finding by findingId.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, GetFailureModeFindingCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, GetFailureModeFindingCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // GetFailureModeFindingRequest
 *   findingId: "STRING_VALUE", // required
 *   serviceArn: "STRING_VALUE", // required
 * };
 * const command = new GetFailureModeFindingCommand(input);
 * const response = await client.send(command);
 * // { // GetFailureModeFindingResponse
 * //   finding: { // Finding
 * //     findingId: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     failureCategory: "SHARED_FATE" || "EXCESSIVE_LOAD" || "EXCESSIVE_LATENCY" || "MISCONFIGURATION_AND_BUGS" || "SINGLE_POINT_OF_FAILURE",
 * //     status: "OPEN" || "RESOLVED" || "IRRELEVANT",
 * //     reasoning: "STRING_VALUE",
 * //     comment: "STRING_VALUE",
 * //     severity: "LOW" || "MEDIUM" || "HIGH",
 * //     serviceFunctions: [ // FunctionsList
 * //       "STRING_VALUE",
 * //     ],
 * //     policyComponent: "AVAILABILITY_SLO" || "MULTI_AZ_DISASTER_RECOVERY" || "MULTI_REGION_DISASTER_RECOVERY" || "DATA_RECOVERY",
 * //     infrastructureAndCodeRecommendations: [ // InfrastructureAndCodeRecommendationsList
 * //       { // InfrastructureAndCodeRecommendation
 * //         suggestedChanges: [ // SuggestedChangesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     observabilityRecommendations: [ // ObservabilityRecommendationsList
 * //       { // ObservabilityRecommendation
 * //         suggestedChanges: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     testingRecommendations: [ // TestingRecommendationsList
 * //       { // TestingRecommendation
 * //         suggestedChanges: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFailureModeFindingCommandInput - {@link GetFailureModeFindingCommandInput}
 * @returns {@link GetFailureModeFindingCommandOutput}
 * @see {@link GetFailureModeFindingCommandInput} for command's `input` shape.
 * @see {@link GetFailureModeFindingCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation error — invalid input parameters.</p>
 *
 * @throws {@link Resiliencehubv2ServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehubv2 service.</p>
 *
 *
 * @public
 */
export class GetFailureModeFindingCommand extends $Command
  .classBuilder<
    GetFailureModeFindingCommandInput,
    GetFailureModeFindingCommandOutput,
    Resiliencehubv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Resiliencehubv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NGRHServiceCore", "GetFailureModeFinding", {})
  .n("Resiliencehubv2Client", "GetFailureModeFindingCommand")
  .sc(GetFailureModeFinding$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFailureModeFindingRequest;
      output: GetFailureModeFindingResponse;
    };
    sdk: {
      input: GetFailureModeFindingCommandInput;
      output: GetFailureModeFindingCommandOutput;
    };
  };
}
