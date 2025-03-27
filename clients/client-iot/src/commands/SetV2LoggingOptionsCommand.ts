// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetV2LoggingOptionsRequest } from "../models/models_2";
import { de_SetV2LoggingOptionsCommand, se_SetV2LoggingOptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetV2LoggingOptionsCommand}.
 */
export interface SetV2LoggingOptionsCommandInput extends SetV2LoggingOptionsRequest {}
/**
 * @public
 *
 * The output of {@link SetV2LoggingOptionsCommand}.
 */
export interface SetV2LoggingOptionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the logging options for the V2 logging service.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingOptions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetV2LoggingOptionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetV2LoggingOptionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // SetV2LoggingOptionsRequest
 *   roleArn: "STRING_VALUE",
 *   defaultLogLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED",
 *   disableAllLogs: true || false,
 * };
 * const command = new SetV2LoggingOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetV2LoggingOptionsCommandInput - {@link SetV2LoggingOptionsCommandInput}
 * @returns {@link SetV2LoggingOptionsCommandOutput}
 * @see {@link SetV2LoggingOptionsCommandInput} for command's `input` shape.
 * @see {@link SetV2LoggingOptionsCommandOutput} for command's `response` shape.
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
export class SetV2LoggingOptionsCommand extends $Command
  .classBuilder<
    SetV2LoggingOptionsCommandInput,
    SetV2LoggingOptionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "SetV2LoggingOptions", {})
  .n("IoTClient", "SetV2LoggingOptionsCommand")
  .f(void 0, void 0)
  .ser(se_SetV2LoggingOptionsCommand)
  .de(de_SetV2LoggingOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetV2LoggingOptionsRequest;
      output: {};
    };
    sdk: {
      input: SetV2LoggingOptionsCommandInput;
      output: SetV2LoggingOptionsCommandOutput;
    };
  };
}
