// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartThingRegistrationTaskRequest, StartThingRegistrationTaskResponse } from "../models/models_2";
import { StartThingRegistrationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a bulk thing provisioning task.
 *
 * Requires permission to access the [StartThingRegistrationTask](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
export class StartThingRegistrationTaskCommand extends command<StartThingRegistrationTaskCommandInput, StartThingRegistrationTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartThingRegistrationTask",
  StartThingRegistrationTask$
) {
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
