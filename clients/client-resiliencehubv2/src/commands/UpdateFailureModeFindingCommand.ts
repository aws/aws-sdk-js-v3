// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFailureModeFindingRequest, UpdateFailureModeFindingResponse } from "../models/models_0";
import { UpdateFailureModeFinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFailureModeFindingCommand}.
 */
export interface UpdateFailureModeFindingCommandInput extends UpdateFailureModeFindingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFailureModeFindingCommand}.
 */
export interface UpdateFailureModeFindingCommandOutput extends UpdateFailureModeFindingResponse, __MetadataBearer {}

/**
 * <p>Updates an existing finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, UpdateFailureModeFindingCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, UpdateFailureModeFindingCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // UpdateFailureModeFindingRequest
 *   findingId: "STRING_VALUE", // required
 *   status: "OPEN" || "RESOLVED" || "IRRELEVANT", // required
 *   serviceArn: "STRING_VALUE", // required
 *   comment: "STRING_VALUE",
 * };
 * const command = new UpdateFailureModeFindingCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFailureModeFindingResponse
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
 * @param UpdateFailureModeFindingCommandInput - {@link UpdateFailureModeFindingCommandInput}
 * @returns {@link UpdateFailureModeFindingCommandOutput}
 * @see {@link UpdateFailureModeFindingCommandInput} for command's `input` shape.
 * @see {@link UpdateFailureModeFindingCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied — caller lacks required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Conflict — resource already exists.</p>
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
export class UpdateFailureModeFindingCommand extends command<UpdateFailureModeFindingCommandInput, UpdateFailureModeFindingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFailureModeFinding",
  UpdateFailureModeFinding$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFailureModeFindingRequest;
      output: UpdateFailureModeFindingResponse;
    };
    sdk: {
      input: UpdateFailureModeFindingCommandInput;
      output: UpdateFailureModeFindingCommandOutput;
    };
  };
}
