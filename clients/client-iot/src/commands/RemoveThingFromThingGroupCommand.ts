// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveThingFromThingGroupRequest, RemoveThingFromThingGroupResponse } from "../models/models_2";
import { RemoveThingFromThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveThingFromThingGroupCommand}.
 */
export interface RemoveThingFromThingGroupCommandInput extends RemoveThingFromThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link RemoveThingFromThingGroupCommand}.
 */
export interface RemoveThingFromThingGroupCommandOutput extends RemoveThingFromThingGroupResponse, __MetadataBearer {}

/**
 * Remove the specified thing from the specified group.
 *
 * You must specify either a `thingGroupArn` or a `thingGroupName` to identify the thing group and either a `thingArn` or a `thingName` to identify the thing to remove from the thing group.
 *
 * Requires permission to access the [RemoveThingFromThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // RemoveThingFromThingGroupRequest
 *   thingGroupName: "STRING_VALUE",
 *   thingGroupArn: "STRING_VALUE",
 *   thingName: "STRING_VALUE",
 *   thingArn: "STRING_VALUE",
 * };
 * const command = new RemoveThingFromThingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveThingFromThingGroupCommandInput - {@link RemoveThingFromThingGroupCommandInput}
 * @returns {@link RemoveThingFromThingGroupCommandOutput}
 * @see {@link RemoveThingFromThingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromThingGroupCommandOutput} for command's `response` shape.
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
export class RemoveThingFromThingGroupCommand extends command<RemoveThingFromThingGroupCommandInput, RemoveThingFromThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "RemoveThingFromThingGroup",
  RemoveThingFromThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveThingFromThingGroupRequest;
      output: {};
    };
    sdk: {
      input: RemoveThingFromThingGroupCommandInput;
      output: RemoveThingFromThingGroupCommandOutput;
    };
  };
}
