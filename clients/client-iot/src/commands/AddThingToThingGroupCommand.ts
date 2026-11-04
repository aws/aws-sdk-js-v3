// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddThingToThingGroupRequest, AddThingToThingGroupResponse } from "../models/models_0";
import { AddThingToThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddThingToThingGroupCommand}.
 */
export interface AddThingToThingGroupCommandInput extends AddThingToThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link AddThingToThingGroupCommand}.
 */
export interface AddThingToThingGroupCommandOutput extends AddThingToThingGroupResponse, __MetadataBearer {}

/**
 * Adds a thing to a thing group.
 *
 * Requires permission to access the [AddThingToThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AddThingToThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AddThingToThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // AddThingToThingGroupRequest
 *   thingGroupName: "STRING_VALUE",
 *   thingGroupArn: "STRING_VALUE",
 *   thingName: "STRING_VALUE",
 *   thingArn: "STRING_VALUE",
 *   overrideDynamicGroups: true || false,
 * };
 * const command = new AddThingToThingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddThingToThingGroupCommandInput - {@link AddThingToThingGroupCommandInput}
 * @returns {@link AddThingToThingGroupCommandOutput}
 * @see {@link AddThingToThingGroupCommandInput} for command's `input` shape.
 * @see {@link AddThingToThingGroupCommandOutput} for command's `response` shape.
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
export class AddThingToThingGroupCommand extends command<AddThingToThingGroupCommandInput, AddThingToThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "AddThingToThingGroup",
  AddThingToThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddThingToThingGroupRequest;
      output: {};
    };
    sdk: {
      input: AddThingToThingGroupCommandInput;
      output: AddThingToThingGroupCommandOutput;
    };
  };
}
