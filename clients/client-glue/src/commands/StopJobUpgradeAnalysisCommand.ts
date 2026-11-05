// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopJobUpgradeAnalysisRequest, StopJobUpgradeAnalysisResponse } from "../models/models_3";
import { StopJobUpgradeAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopJobUpgradeAnalysisCommand}.
 */
export interface StopJobUpgradeAnalysisCommandInput extends StopJobUpgradeAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link StopJobUpgradeAnalysisCommand}.
 */
export interface StopJobUpgradeAnalysisCommandOutput extends StopJobUpgradeAnalysisResponse, __MetadataBearer {}

/**
 * <p>Stops an in-progress upgrade analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopJobUpgradeAnalysisCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopJobUpgradeAnalysisCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopJobUpgradeAnalysisRequest
 *   jobName: "STRING_VALUE", // required
 *   analysisId: "STRING_VALUE", // required
 * };
 * const command = new StopJobUpgradeAnalysisCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopJobUpgradeAnalysisCommandInput - {@link StopJobUpgradeAnalysisCommandInput}
 * @returns {@link StopJobUpgradeAnalysisCommandOutput}
 * @see {@link StopJobUpgradeAnalysisCommandInput} for command's `input` shape.
 * @see {@link StopJobUpgradeAnalysisCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StopJobUpgradeAnalysisCommand extends command<StopJobUpgradeAnalysisCommandInput, StopJobUpgradeAnalysisCommandOutput>(
  _ep0,
  _mw0,
  "StopJobUpgradeAnalysis",
  StopJobUpgradeAnalysis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopJobUpgradeAnalysisRequest;
      output: {};
    };
    sdk: {
      input: StopJobUpgradeAnalysisCommandInput;
      output: StopJobUpgradeAnalysisCommandOutput;
    };
  };
}
