// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetLoggingOptionsRequest, GetLoggingOptionsResponse } from "../models/models_1";
import { GetLoggingOptions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the logging options.</p>
 *          <p>NOTE: use of this command is not recommended. Use <code>GetV2LoggingOptions</code>
 *          instead.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetLoggingOptions</a> action.</p>
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
export class GetLoggingOptionsCommand extends $Command
  .classBuilder<
    GetLoggingOptionsCommandInput,
    GetLoggingOptionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "GetLoggingOptions", {})
  .n("IoTClient", "GetLoggingOptionsCommand")
  .sc(GetLoggingOptions)
  .build() {
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
