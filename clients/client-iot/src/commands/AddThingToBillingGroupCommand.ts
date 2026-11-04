// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddThingToBillingGroupRequest, AddThingToBillingGroupResponse } from "../models/models_0";
import { AddThingToBillingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddThingToBillingGroupCommand}.
 */
export interface AddThingToBillingGroupCommandInput extends AddThingToBillingGroupRequest {}
/**
 * @public
 *
 * The output of {@link AddThingToBillingGroupCommand}.
 */
export interface AddThingToBillingGroupCommandOutput extends AddThingToBillingGroupResponse, __MetadataBearer {}

/**
 * Adds a thing to a billing group.
 *
 * Requires permission to access the [AddThingToBillingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AddThingToBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AddThingToBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // AddThingToBillingGroupRequest
 *   billingGroupName: "STRING_VALUE",
 *   billingGroupArn: "STRING_VALUE",
 *   thingName: "STRING_VALUE",
 *   thingArn: "STRING_VALUE",
 * };
 * const command = new AddThingToBillingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddThingToBillingGroupCommandInput - {@link AddThingToBillingGroupCommandInput}
 * @returns {@link AddThingToBillingGroupCommandOutput}
 * @see {@link AddThingToBillingGroupCommandInput} for command's `input` shape.
 * @see {@link AddThingToBillingGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class AddThingToBillingGroupCommand extends command<AddThingToBillingGroupCommandInput, AddThingToBillingGroupCommandOutput>(
  _ep0,
  _mw0,
  "AddThingToBillingGroup",
  AddThingToBillingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddThingToBillingGroupRequest;
      output: {};
    };
    sdk: {
      input: AddThingToBillingGroupCommandInput;
      output: AddThingToBillingGroupCommandOutput;
    };
  };
}
