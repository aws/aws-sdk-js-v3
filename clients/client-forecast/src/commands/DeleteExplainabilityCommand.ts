// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteExplainabilityRequest } from "../models/models_0";
import { DeleteExplainability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteExplainabilityCommand}.
 */
export interface DeleteExplainabilityCommandInput extends DeleteExplainabilityRequest {}
/**
 * @public
 *
 * The output of {@link DeleteExplainabilityCommand}.
 */
export interface DeleteExplainabilityCommandOutput extends __MetadataBearer {}

/**
 * Deletes an Explainability resource.
 *
 * You can delete only predictor that have a status of `ACTIVE` or `CREATE_FAILED`. To get the status, use the DescribeExplainability operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteExplainabilityRequest
 *   ExplainabilityArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteExplainabilityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteExplainabilityCommandInput - {@link DeleteExplainabilityCommandInput}
 * @returns {@link DeleteExplainabilityCommandOutput}
 * @see {@link DeleteExplainabilityCommandInput} for command's `input` shape.
 * @see {@link DeleteExplainabilityCommandOutput} for command's `response` shape.
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
export class DeleteExplainabilityCommand extends command<DeleteExplainabilityCommandInput, DeleteExplainabilityCommandOutput>(
  _ep0,
  _mw0,
  "DeleteExplainability",
  DeleteExplainability$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteExplainabilityRequest;
      output: {};
    };
    sdk: {
      input: DeleteExplainabilityCommandInput;
      output: DeleteExplainabilityCommandOutput;
    };
  };
}
