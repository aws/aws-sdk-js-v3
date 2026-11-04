// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateThingGroupsForThingRequest, UpdateThingGroupsForThingResponse } from "../models/models_2";
import { UpdateThingGroupsForThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the groups to which the thing belongs.
 *
 * Requires permission to access the [UpdateThingGroupsForThing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
export class UpdateThingGroupsForThingCommand extends command<UpdateThingGroupsForThingCommandInput, UpdateThingGroupsForThingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateThingGroupsForThing",
  UpdateThingGroupsForThing$
) {
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
