// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetV2LoggingOptionsRequest, GetV2LoggingOptionsResponse } from "../models/models_1";
import { GetV2LoggingOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetV2LoggingOptionsCommand}.
 */
export interface GetV2LoggingOptionsCommandInput extends GetV2LoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link GetV2LoggingOptionsCommand}.
 */
export interface GetV2LoggingOptionsCommandOutput extends GetV2LoggingOptionsResponse, __MetadataBearer {}

/**
 * <p>Gets the fine grained logging options.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetV2LoggingOptions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetV2LoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetV2LoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // GetV2LoggingOptionsRequest
 *   verbose: true || false,
 * };
 * const command = new GetV2LoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // { // GetV2LoggingOptionsResponse
 * //   roleArn: "STRING_VALUE",
 * //   defaultLogLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED",
 * //   disableAllLogs: true || false,
 * //   eventConfigurations: [ // LogEventConfigurations
 * //     { // LogEventConfiguration
 * //       eventType: "STRING_VALUE", // required
 * //       logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED",
 * //       logDestination: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetV2LoggingOptionsCommandInput - {@link GetV2LoggingOptionsCommandInput}
 * @returns {@link GetV2LoggingOptionsCommandOutput}
 * @see {@link GetV2LoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link GetV2LoggingOptionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link NotConfiguredException} (client fault)
 *  <p>The resource is not configured.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class GetV2LoggingOptionsCommand extends command<GetV2LoggingOptionsCommandInput, GetV2LoggingOptionsCommandOutput>(
  _ep0,
  _mw0,
  "GetV2LoggingOptions",
  GetV2LoggingOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetV2LoggingOptionsRequest;
      output: GetV2LoggingOptionsResponse;
    };
    sdk: {
      input: GetV2LoggingOptionsCommandInput;
      output: GetV2LoggingOptionsCommandOutput;
    };
  };
}
