// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetJobUpgradeAnalysisRequest, GetJobUpgradeAnalysisResponse } from "../models/models_2";
import { GetJobUpgradeAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetJobUpgradeAnalysisCommand}.
 */
export interface GetJobUpgradeAnalysisCommandInput extends GetJobUpgradeAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link GetJobUpgradeAnalysisCommand}.
 */
export interface GetJobUpgradeAnalysisCommandOutput extends GetJobUpgradeAnalysisResponse, __MetadataBearer {}

/**
 * <p>Retrieves the current status and results of an upgrade analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobUpgradeAnalysisCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobUpgradeAnalysisCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetJobUpgradeAnalysisRequest
 *   analysisId: "STRING_VALUE", // required
 *   jobName: "STRING_VALUE", // required
 * };
 * const command = new GetJobUpgradeAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // GetJobUpgradeAnalysisResponse
 * //   jobName: "STRING_VALUE", // required
 * //   analysisId: "STRING_VALUE", // required
 * //   status: "OBSERVING" || "WAITING_FOR_CONSENT" || "UPGRADING" || "SUCCEEDED" || "FAILED" || "TIMEOUT" || "STOPPED", // required
 * //   sourceVersion: "STRING_VALUE",
 * //   targetVersion: "STRING_VALUE", // required
 * //   analysisType: "AUTO_UPGRADE",
 * //   autoUpgradeEvaluationSummary: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   autoUpgradeEligibilitySummary: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetJobUpgradeAnalysisCommandInput - {@link GetJobUpgradeAnalysisCommandInput}
 * @returns {@link GetJobUpgradeAnalysisCommandOutput}
 * @see {@link GetJobUpgradeAnalysisCommandInput} for command's `input` shape.
 * @see {@link GetJobUpgradeAnalysisCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not available in the region.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetJobUpgradeAnalysisCommand extends command<GetJobUpgradeAnalysisCommandInput, GetJobUpgradeAnalysisCommandOutput>(
  _ep0,
  _mw0,
  "GetJobUpgradeAnalysis",
  GetJobUpgradeAnalysis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobUpgradeAnalysisRequest;
      output: GetJobUpgradeAnalysisResponse;
    };
    sdk: {
      input: GetJobUpgradeAnalysisCommandInput;
      output: GetJobUpgradeAnalysisCommandOutput;
    };
  };
}
