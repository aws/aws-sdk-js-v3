// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartJobUpgradeAnalysisRequest, StartJobUpgradeAnalysisResponse } from "../models/models_3";
import { StartJobUpgradeAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartJobUpgradeAnalysisCommand}.
 */
export interface StartJobUpgradeAnalysisCommandInput extends StartJobUpgradeAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link StartJobUpgradeAnalysisCommand}.
 */
export interface StartJobUpgradeAnalysisCommandOutput extends StartJobUpgradeAnalysisResponse, __MetadataBearer {}

/**
 * <p>Resumes an analysis that is waiting for upgrade consent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartJobUpgradeAnalysisCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartJobUpgradeAnalysisCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartJobUpgradeAnalysisRequest
 *   jobName: "STRING_VALUE", // required
 *   analysisId: "STRING_VALUE",
 *   upgradeConsent: "APPROVE" || "DECLINE",
 * };
 * const command = new StartJobUpgradeAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // StartJobUpgradeAnalysisResponse
 * //   analysisId: "STRING_VALUE",
 * //   jobName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartJobUpgradeAnalysisCommandInput - {@link StartJobUpgradeAnalysisCommandInput}
 * @returns {@link StartJobUpgradeAnalysisCommandOutput}
 * @see {@link StartJobUpgradeAnalysisCommandInput} for command's `input` shape.
 * @see {@link StartJobUpgradeAnalysisCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartJobUpgradeAnalysisCommand extends command<StartJobUpgradeAnalysisCommandInput, StartJobUpgradeAnalysisCommandOutput>(
  _ep0,
  _mw0,
  "StartJobUpgradeAnalysis",
  StartJobUpgradeAnalysis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartJobUpgradeAnalysisRequest;
      output: StartJobUpgradeAnalysisResponse;
    };
    sdk: {
      input: StartJobUpgradeAnalysisCommandInput;
      output: StartJobUpgradeAnalysisCommandOutput;
    };
  };
}
