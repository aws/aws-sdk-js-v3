// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetLoggingOptionsRequest } from "../models/models_2";
import { SetLoggingOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetLoggingOptionsCommand}.
 */
export interface SetLoggingOptionsCommandInput extends SetLoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link SetLoggingOptionsCommand}.
 */
export interface SetLoggingOptionsCommandOutput extends __MetadataBearer {}

/**
 * Sets the logging options.
 *
 * NOTE: use of this command is not recommended. Use `SetV2LoggingOptions` instead.
 *
 * Requires permission to access the [SetLoggingOptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetLoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetLoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // SetLoggingOptionsRequest
 *   loggingOptionsPayload: { // LoggingOptionsPayload
 *     roleArn: "STRING_VALUE", // required
 *     logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED",
 *   },
 * };
 * const command = new SetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetLoggingOptionsCommandInput - {@link SetLoggingOptionsCommandInput}
 * @returns {@link SetLoggingOptionsCommandOutput}
 * @see {@link SetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link SetLoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class SetLoggingOptionsCommand extends command<SetLoggingOptionsCommandInput, SetLoggingOptionsCommandOutput>(
  _ep0,
  _mw0,
  "SetLoggingOptions",
  SetLoggingOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetLoggingOptionsRequest;
      output: {};
    };
    sdk: {
      input: SetLoggingOptionsCommandInput;
      output: SetLoggingOptionsCommandOutput;
    };
  };
}
