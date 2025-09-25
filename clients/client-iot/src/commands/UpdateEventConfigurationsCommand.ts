// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateEventConfigurationsRequest, UpdateEventConfigurationsResponse } from "../models/models_2";
import { UpdateEventConfigurations } from "../schemas/schemas_91_Configuration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventConfigurationsCommand}.
 */
export interface UpdateEventConfigurationsCommandInput extends UpdateEventConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventConfigurationsCommand}.
 */
export interface UpdateEventConfigurationsCommandOutput extends UpdateEventConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Updates the event configurations.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateEventConfigurations</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateEventConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateEventConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateEventConfigurationsRequest
 *   eventConfigurations: { // EventConfigurations
 *     "<keys>": { // Configuration
 *       Enabled: true || false,
 *     },
 *   },
 * };
 * const command = new UpdateEventConfigurationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventConfigurationsCommandInput - {@link UpdateEventConfigurationsCommandInput}
 * @returns {@link UpdateEventConfigurationsCommandOutput}
 * @see {@link UpdateEventConfigurationsCommandInput} for command's `input` shape.
 * @see {@link UpdateEventConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateEventConfigurationsCommand extends $Command
  .classBuilder<
    UpdateEventConfigurationsCommandInput,
    UpdateEventConfigurationsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "UpdateEventConfigurations", {})
  .n("IoTClient", "UpdateEventConfigurationsCommand")
  .sc(UpdateEventConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventConfigurationsRequest;
      output: {};
    };
    sdk: {
      input: UpdateEventConfigurationsCommandInput;
      output: UpdateEventConfigurationsCommandOutput;
    };
  };
}
