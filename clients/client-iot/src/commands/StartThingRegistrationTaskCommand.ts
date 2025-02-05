// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartThingRegistrationTaskRequest, StartThingRegistrationTaskResponse } from "../models/models_2";
import { de_StartThingRegistrationTaskCommand, se_StartThingRegistrationTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartThingRegistrationTaskCommand}.
 */
export interface StartThingRegistrationTaskCommandInput extends StartThingRegistrationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartThingRegistrationTaskCommand}.
 */
export interface StartThingRegistrationTaskCommandOutput extends StartThingRegistrationTaskResponse, __MetadataBearer {}

/**
 * <p>Creates a bulk thing provisioning task.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartThingRegistrationTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // StartThingRegistrationTaskRequest
 *   templateBody: "STRING_VALUE", // required
 *   inputFileBucket: "STRING_VALUE", // required
 *   inputFileKey: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 * };
 * const command = new StartThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartThingRegistrationTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartThingRegistrationTaskCommandInput - {@link StartThingRegistrationTaskCommandInput}
 * @returns {@link StartThingRegistrationTaskCommandOutput}
 * @see {@link StartThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link StartThingRegistrationTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class StartThingRegistrationTaskCommand extends $Command
  .classBuilder<
    StartThingRegistrationTaskCommandInput,
    StartThingRegistrationTaskCommandOutput,
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
  .s("AWSIotService", "StartThingRegistrationTask", {})
  .n("IoTClient", "StartThingRegistrationTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartThingRegistrationTaskCommand)
  .de(de_StartThingRegistrationTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartThingRegistrationTaskRequest;
      output: StartThingRegistrationTaskResponse;
    };
    sdk: {
      input: StartThingRegistrationTaskCommandInput;
      output: StartThingRegistrationTaskCommandOutput;
    };
  };
}
