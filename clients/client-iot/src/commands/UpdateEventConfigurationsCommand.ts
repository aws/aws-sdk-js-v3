// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEventConfigurationsRequest, UpdateEventConfigurationsResponse } from "../models/models_2";
import { UpdateEventConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the event configurations.
 *
 * Requires permission to access the [UpdateEventConfigurations](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateEventConfigurationsCommand extends command<UpdateEventConfigurationsCommandInput, UpdateEventConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEventConfigurations",
  UpdateEventConfigurations$
) {
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
