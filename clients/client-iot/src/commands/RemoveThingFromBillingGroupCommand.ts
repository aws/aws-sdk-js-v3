// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveThingFromBillingGroupRequest, RemoveThingFromBillingGroupResponse } from "../models/models_2";
import { RemoveThingFromBillingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveThingFromBillingGroupCommand}.
 */
export interface RemoveThingFromBillingGroupCommandInput extends RemoveThingFromBillingGroupRequest {}
/**
 * @public
 *
 * The output of {@link RemoveThingFromBillingGroupCommand}.
 */
export interface RemoveThingFromBillingGroupCommandOutput extends RemoveThingFromBillingGroupResponse, __MetadataBearer {}

/**
 * Removes the given thing from the billing group.
 *
 * Requires permission to access the [RemoveThingFromBillingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * > **Note:** This call is asynchronous. It might take several seconds for the detachment to propagate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // RemoveThingFromBillingGroupRequest
 *   billingGroupName: "STRING_VALUE",
 *   billingGroupArn: "STRING_VALUE",
 *   thingName: "STRING_VALUE",
 *   thingArn: "STRING_VALUE",
 * };
 * const command = new RemoveThingFromBillingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveThingFromBillingGroupCommandInput - {@link RemoveThingFromBillingGroupCommandInput}
 * @returns {@link RemoveThingFromBillingGroupCommandOutput}
 * @see {@link RemoveThingFromBillingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromBillingGroupCommandOutput} for command's `response` shape.
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
export class RemoveThingFromBillingGroupCommand extends command<RemoveThingFromBillingGroupCommandInput, RemoveThingFromBillingGroupCommandOutput>(
  _ep0,
  _mw0,
  "RemoveThingFromBillingGroup",
  RemoveThingFromBillingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveThingFromBillingGroupRequest;
      output: {};
    };
    sdk: {
      input: RemoveThingFromBillingGroupCommandInput;
      output: RemoveThingFromBillingGroupCommandOutput;
    };
  };
}
