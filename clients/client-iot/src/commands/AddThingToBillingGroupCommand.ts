// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { AddThingToBillingGroupRequest, AddThingToBillingGroupResponse } from "../models/models_0";
import { AddThingToBillingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds a thing to a billing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AddThingToBillingGroup</a> action.</p>
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
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class AddThingToBillingGroupCommand extends $Command
  .classBuilder<
    AddThingToBillingGroupCommandInput,
    AddThingToBillingGroupCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "AddThingToBillingGroup", {})
  .n("IoTClient", "AddThingToBillingGroupCommand")
  .sc(AddThingToBillingGroup$)
  .build() {
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
