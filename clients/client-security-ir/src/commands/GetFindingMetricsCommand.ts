// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFindingMetricsRequest, GetFindingMetricsResponse } from "../models/models_0";
import { GetFindingMetrics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFindingMetricsCommand}.
 */
export interface GetFindingMetricsCommandInput extends GetFindingMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingMetricsCommand}.
 */
export interface GetFindingMetricsCommandOutput extends GetFindingMetricsResponse, __MetadataBearer {}

/**
 * Returns finding-lifecycle metrics for a membership over a date range.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, GetFindingMetricsCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, GetFindingMetricsCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // GetFindingMetricsRequest
 *   membershipId: "STRING_VALUE", // required
 *   startDate: new Date("TIMESTAMP"), // required
 *   endDate: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetFindingMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingMetricsResponse
 * //   findingsIngestedSecurityHub: Number("long"), // required
 * //   findingsIngestedGuardDuty: Number("long"), // required
 * //   findingsTriaged: Number("long"), // required
 * //   findingsTriagedFalsePositive: Number("long"), // required
 * //   findingsInvestigated: Number("long"), // required
 * //   findingsInvestigatedFalsePositive: Number("long"), // required
 * //   findingsEscalated: Number("long"), // required
 * //   findingsEscalatedFalsePositive: Number("long"), // required
 * //   findingsTruePositive: Number("long"), // required
 * //   findingsInvestigatedInProgress: Number("long"), // required
 * //   findingsEscalatedInProgress: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetFindingMetricsCommandInput - {@link GetFindingMetricsCommandInput}
 * @returns {@link GetFindingMetricsCommandOutput}
 * @see {@link GetFindingMetricsCommandInput} for command's `input` shape.
 * @see {@link GetFindingMetricsCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 *
 * @example Retrieve finding-lifecycle metrics for a membership
 * ```javascript
 * //
 * const input = {
 *   endDate: "2026-08-18T00:00:00Z",
 *   membershipId: "m-a1b2c3d4e5f",
 *   startDate: "2026-08-01T00:00:00Z"
 * };
 * const command = new GetFindingMetricsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   findingsEscalated: 8,
 *   findingsEscalatedFalsePositive: 2,
 *   findingsEscalatedInProgress: 0,
 *   findingsIngestedGuardDuty: 45,
 *   findingsIngestedSecurityHub: 120,
 *   findingsInvestigated: 60,
 *   findingsInvestigatedFalsePositive: 12,
 *   findingsInvestigatedInProgress: 40,
 *   findingsTriaged: 165,
 *   findingsTriagedFalsePositive: 30,
 *   findingsTruePositive: 6
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetFindingMetricsCommand extends command<GetFindingMetricsCommandInput, GetFindingMetricsCommandOutput>(
  _ep0,
  _mw0,
  "GetFindingMetrics",
  GetFindingMetrics$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFindingMetricsRequest;
      output: GetFindingMetricsResponse;
    };
    sdk: {
      input: GetFindingMetricsCommandInput;
      output: GetFindingMetricsCommandOutput;
    };
  };
}
