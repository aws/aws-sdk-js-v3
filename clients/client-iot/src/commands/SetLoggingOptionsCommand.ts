// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { SetLoggingOptionsRequest } from "../models/models_2";
import { SetLoggingOptions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Sets the logging options.</p>
 *          <p>NOTE: use of this command is not recommended. Use <code>SetV2LoggingOptions</code>
 *          instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetLoggingOptions</a> action.</p>
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
export class SetLoggingOptionsCommand extends $Command
  .classBuilder<
    SetLoggingOptionsCommandInput,
    SetLoggingOptionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "SetLoggingOptions", {})
  .n("IoTClient", "SetLoggingOptionsCommand")
  .sc(SetLoggingOptions)
  .build() {
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
