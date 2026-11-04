// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopThingRegistrationTaskRequest, StopThingRegistrationTaskResponse } from "../models/models_2";
import { StopThingRegistrationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Cancels a bulk thing provisioning task.
 *
 * Requires permission to access the [StopThingRegistrationTask](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class StopThingRegistrationTaskCommand extends command<StopThingRegistrationTaskCommandInput, StopThingRegistrationTaskCommandOutput>(
  _ep0,
  _mw0,
  "StopThingRegistrationTask",
  StopThingRegistrationTask$
) {
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
