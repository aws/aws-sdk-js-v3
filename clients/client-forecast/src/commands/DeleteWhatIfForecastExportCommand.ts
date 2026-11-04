// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteWhatIfForecastExportRequest } from "../models/models_0";
import { DeleteWhatIfForecastExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteWhatIfForecastExportCommand}.
 */
export interface DeleteWhatIfForecastExportCommandInput extends DeleteWhatIfForecastExportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWhatIfForecastExportCommand}.
 */
export interface DeleteWhatIfForecastExportCommandOutput extends __MetadataBearer {}

/**
 * Deletes a what-if forecast export created using the CreateWhatIfForecastExport operation. You can delete only what-if forecast exports that have a status of `ACTIVE` or `CREATE_FAILED`. To get the status, use the DescribeWhatIfForecastExport operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteWhatIfForecastExportRequest
 *   WhatIfForecastExportArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWhatIfForecastExportCommandInput - {@link DeleteWhatIfForecastExportCommandInput}
 * @returns {@link DeleteWhatIfForecastExportCommandOutput}
 * @see {@link DeleteWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatIfForecastExportCommandOutput} for command's `response` shape.
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
export class DeleteWhatIfForecastExportCommand extends command<DeleteWhatIfForecastExportCommandInput, DeleteWhatIfForecastExportCommandOutput>(
  _ep0,
  _mw0,
  "DeleteWhatIfForecastExport",
  DeleteWhatIfForecastExport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWhatIfForecastExportRequest;
      output: {};
    };
    sdk: {
      input: DeleteWhatIfForecastExportCommandInput;
      output: DeleteWhatIfForecastExportCommandOutput;
    };
  };
}
