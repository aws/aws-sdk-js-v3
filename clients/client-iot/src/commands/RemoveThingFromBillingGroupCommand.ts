// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RemoveThingFromBillingGroupRequest, RemoveThingFromBillingGroupResponse } from "../models/models_2";
import {
  de_RemoveThingFromBillingGroupCommand,
  se_RemoveThingFromBillingGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface RemoveThingFromBillingGroupCommandOutput
  extends RemoveThingFromBillingGroupResponse,
    __MetadataBearer {}

/**
 * <p>Removes the given thing from the billing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p>
 *          <note>
 *             <p>This call is asynchronous. It might take several seconds for the detachment to propagate.</p>
 *          </note>
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
export class RemoveThingFromBillingGroupCommand extends $Command
  .classBuilder<
    RemoveThingFromBillingGroupCommandInput,
    RemoveThingFromBillingGroupCommandOutput,
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
  .s("AWSIotService", "RemoveThingFromBillingGroup", {})
  .n("IoTClient", "RemoveThingFromBillingGroupCommand")
  .f(void 0, void 0)
  .ser(se_RemoveThingFromBillingGroupCommand)
  .de(de_RemoveThingFromBillingGroupCommand)
  .build() {
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
