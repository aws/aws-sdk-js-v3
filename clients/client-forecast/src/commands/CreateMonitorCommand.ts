// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMonitorRequest, CreateMonitorResponse } from "../models/models_0";
import { CreateMonitor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandInput extends CreateMonitorRequest {}
/**
 * @public
 *
 * The output of {@link CreateMonitorCommand}.
 */
export interface CreateMonitorCommandOutput extends CreateMonitorResponse, __MetadataBearer {}

/**
 * Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see [Predictor Monitoring](https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateMonitorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateMonitorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // CreateMonitorRequest
 *   MonitorName: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMonitorCommand(input);
 * const response = await client.send(command);
 * // { // CreateMonitorResponse
 * //   MonitorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateMonitorCommandInput - {@link CreateMonitorCommandInput}
 * @returns {@link CreateMonitorCommandOutput}
 * @see {@link CreateMonitorCommandInput} for command's `input` shape.
 * @see {@link CreateMonitorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of resources per account has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * There is already a resource with this name. Try again with a different name.
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
export class CreateMonitorCommand extends command<CreateMonitorCommandInput, CreateMonitorCommandOutput>(
  _ep0,
  _mw0,
  "CreateMonitor",
  CreateMonitor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMonitorRequest;
      output: CreateMonitorResponse;
    };
    sdk: {
      input: CreateMonitorCommandInput;
      output: CreateMonitorCommandOutput;
    };
  };
}
