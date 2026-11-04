// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMonitorRequest } from "../models/models_0";
import { DeleteMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandInput extends DeleteMonitorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandOutput extends __MetadataBearer {}

/**
 * Deletes a monitor resource. You can only delete a monitor resource with a status of `ACTIVE`, `ACTIVE_STOPPED`, `CREATE_FAILED`, or `CREATE_STOPPED`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteMonitorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteMonitorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteMonitorRequest
 *   MonitorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMonitorCommandInput - {@link DeleteMonitorCommandInput}
 * @returns {@link DeleteMonitorCommandOutput}
 * @see {@link DeleteMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitorCommandOutput} for command's `response` shape.
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
export class DeleteMonitorCommand extends command<DeleteMonitorCommandInput, DeleteMonitorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMonitor",
  DeleteMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMonitorRequest;
      output: {};
    };
    sdk: {
      input: DeleteMonitorCommandInput;
      output: DeleteMonitorCommandOutput;
    };
  };
}
