// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWhatIfAnalysisRequest } from "../models/models_0";
import { DeleteWhatIfAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWhatIfAnalysisCommand}.
 */
export interface DeleteWhatIfAnalysisCommandInput extends DeleteWhatIfAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWhatIfAnalysisCommand}.
 */
export interface DeleteWhatIfAnalysisCommandOutput extends __MetadataBearer {}

/**
 * Deletes a what-if analysis created using the CreateWhatIfAnalysis operation. You can delete only what-if analyses that have a status of `ACTIVE` or `CREATE_FAILED`. To get the status, use the DescribeWhatIfAnalysis operation.
 *
 * You can't delete a what-if analysis while any of its forecasts are being exported.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteWhatIfAnalysisCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteWhatIfAnalysisCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteWhatIfAnalysisRequest
 *   WhatIfAnalysisArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatIfAnalysisCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWhatIfAnalysisCommandInput - {@link DeleteWhatIfAnalysisCommandInput}
 * @returns {@link DeleteWhatIfAnalysisCommandOutput}
 * @see {@link DeleteWhatIfAnalysisCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatIfAnalysisCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class DeleteWhatIfAnalysisCommand extends command<DeleteWhatIfAnalysisCommandInput, DeleteWhatIfAnalysisCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWhatIfAnalysis",
  DeleteWhatIfAnalysis$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWhatIfAnalysisRequest;
      output: {};
    };
    sdk: {
      input: DeleteWhatIfAnalysisCommandInput;
      output: DeleteWhatIfAnalysisCommandOutput;
    };
  };
}
