// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateThingGroupsForThingRequest, UpdateThingGroupsForThingResponse } from "../models/models_2";
import { de_UpdateThingGroupsForThingCommand, se_UpdateThingGroupsForThingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThingGroupsForThingCommand}.
 */
export interface UpdateThingGroupsForThingCommandInput extends UpdateThingGroupsForThingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThingGroupsForThingCommand}.
 */
export interface UpdateThingGroupsForThingCommandOutput extends UpdateThingGroupsForThingResponse, __MetadataBearer {}

/**
 * <p>Updates the groups to which the thing belongs.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingGroupsForThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingGroupsForThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingGroupsForThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateThingGroupsForThingRequest
 *   thingName: "STRING_VALUE",
 *   thingGroupsToAdd: [ // ThingGroupList
 *     "STRING_VALUE",
 *   ],
 *   thingGroupsToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   overrideDynamicGroups: true || false,
 * };
 * const command = new UpdateThingGroupsForThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateThingGroupsForThingCommandInput - {@link UpdateThingGroupsForThingCommandInput}
 * @returns {@link UpdateThingGroupsForThingCommandOutput}
 * @see {@link UpdateThingGroupsForThingCommandInput} for command's `input` shape.
 * @see {@link UpdateThingGroupsForThingCommandOutput} for command's `response` shape.
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
export class UpdateThingGroupsForThingCommand extends $Command
  .classBuilder<
    UpdateThingGroupsForThingCommandInput,
    UpdateThingGroupsForThingCommandOutput,
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
  .s("AWSIotService", "UpdateThingGroupsForThing", {})
  .n("IoTClient", "UpdateThingGroupsForThingCommand")
  .f(void 0, void 0)
  .ser(se_UpdateThingGroupsForThingCommand)
  .de(de_UpdateThingGroupsForThingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThingGroupsForThingRequest;
      output: {};
    };
    sdk: {
      input: UpdateThingGroupsForThingCommandInput;
      output: UpdateThingGroupsForThingCommandOutput;
    };
  };
}
