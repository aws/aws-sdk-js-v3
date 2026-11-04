// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLoggingOptionsRequest, GetLoggingOptionsResponse } from "../models/models_1";
import { GetLoggingOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLoggingOptionsCommand}.
 */
export interface GetLoggingOptionsCommandInput extends GetLoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link GetLoggingOptionsCommand}.
 */
export interface GetLoggingOptionsCommandOutput extends GetLoggingOptionsResponse, __MetadataBearer {}

/**
 * Gets the logging options.
 *
 * NOTE: use of this command is not recommended. Use `GetV2LoggingOptions` instead.
 *
 * Requires permission to access the [GetLoggingOptions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetLoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetLoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new GetLoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetLoggingOptionsResponse
 * //   roleArn: "STRING_VALUE",
 * //   logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetLoggingOptionsCommandInput - {@link GetLoggingOptionsCommandInput}
 * @returns {@link GetLoggingOptionsCommandOutput}
 * @see {@link GetLoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetLoggingOptionsCommandOutput} for command's `response` shape.
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
export class GetLoggingOptionsCommand extends command<GetLoggingOptionsCommandInput, GetLoggingOptionsCommandOutput>(
  _ep0,
  _mw0,
  "GetLoggingOptions",
  GetLoggingOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetLoggingOptionsResponse;
    };
    sdk: {
      input: GetLoggingOptionsCommandInput;
      output: GetLoggingOptionsCommandOutput;
    };
  };
}
