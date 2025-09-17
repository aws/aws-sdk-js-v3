// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetV2LoggingLevelRequest } from "../models/models_2";
import { de_SetV2LoggingLevelCommand, se_SetV2LoggingLevelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetV2LoggingLevelCommand}.
 */
export interface SetV2LoggingLevelCommandInput extends SetV2LoggingLevelRequest {}
/**
 * @public
 *
 * The output of {@link SetV2LoggingLevelCommand}.
 */
export interface SetV2LoggingLevelCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the logging level.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetV2LoggingLevel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetV2LoggingLevelCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetV2LoggingLevelCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // SetV2LoggingLevelRequest
 *   logTarget: { // LogTarget
 *     targetType: "DEFAULT" || "THING_GROUP" || "CLIENT_ID" || "SOURCE_IP" || "PRINCIPAL_ID", // required
 *     targetName: "STRING_VALUE",
 *   },
 *   logLevel: "DEBUG" || "INFO" || "ERROR" || "WARN" || "DISABLED", // required
 * };
 * const command = new SetV2LoggingLevelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetV2LoggingLevelCommandInput - {@link SetV2LoggingLevelCommandInput}
 * @returns {@link SetV2LoggingLevelCommandOutput}
 * @see {@link SetV2LoggingLevelCommandInput} for command's `input` shape.
 * @see {@link SetV2LoggingLevelCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
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
export class SetV2LoggingLevelCommand extends $Command
  .classBuilder<
    SetV2LoggingLevelCommandInput,
    SetV2LoggingLevelCommandOutput,
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
  .s("AWSIotService", "SetV2LoggingLevel", {})
  .n("IoTClient", "SetV2LoggingLevelCommand")
  .f(void 0, void 0)
  .ser(se_SetV2LoggingLevelCommand)
  .de(de_SetV2LoggingLevelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetV2LoggingLevelRequest;
      output: {};
    };
    sdk: {
      input: SetV2LoggingLevelCommandInput;
      output: SetV2LoggingLevelCommandOutput;
    };
  };
}
