// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { StopThingRegistrationTaskRequest, StopThingRegistrationTaskResponse } from "../models/models_2";
import { StopThingRegistrationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopThingRegistrationTaskCommand}.
 */
export interface StopThingRegistrationTaskCommandInput extends StopThingRegistrationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StopThingRegistrationTaskCommand}.
 */
export interface StopThingRegistrationTaskCommandOutput extends StopThingRegistrationTaskResponse, __MetadataBearer {}

/**
 * <p>Cancels a bulk thing provisioning task.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopThingRegistrationTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StopThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StopThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // StopThingRegistrationTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new StopThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopThingRegistrationTaskCommandInput - {@link StopThingRegistrationTaskCommandInput}
 * @returns {@link StopThingRegistrationTaskCommandOutput}
 * @see {@link StopThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link StopThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class StopThingRegistrationTaskCommand extends $Command
  .classBuilder<
    StopThingRegistrationTaskCommandInput,
    StopThingRegistrationTaskCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "StopThingRegistrationTask", {})
  .n("IoTClient", "StopThingRegistrationTaskCommand")
  .sc(StopThingRegistrationTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopThingRegistrationTaskRequest;
      output: {};
    };
    sdk: {
      input: StopThingRegistrationTaskCommandInput;
      output: StopThingRegistrationTaskCommandOutput;
    };
  };
}
