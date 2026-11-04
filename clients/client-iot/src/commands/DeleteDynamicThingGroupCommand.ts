// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDynamicThingGroupRequest, DeleteDynamicThingGroupResponse } from "../models/models_0";
import { DeleteDynamicThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDynamicThingGroupCommand}.
 */
export interface DeleteDynamicThingGroupCommandInput extends DeleteDynamicThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDynamicThingGroupCommand}.
 */
export interface DeleteDynamicThingGroupCommandOutput extends DeleteDynamicThingGroupResponse, __MetadataBearer {}

/**
 * Deletes a dynamic thing group.
 *
 * Requires permission to access the [DeleteDynamicThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteDynamicThingGroupRequest
 *   thingGroupName: "STRING_VALUE", // required
 *   expectedVersion: Number("long"),
 * };
 * const command = new DeleteDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDynamicThingGroupCommandInput - {@link DeleteDynamicThingGroupCommandInput}
 * @returns {@link DeleteDynamicThingGroupCommandOutput}
 * @see {@link DeleteDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDynamicThingGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link VersionConflictException} (client fault)
 *
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DeleteDynamicThingGroupCommand extends command<DeleteDynamicThingGroupCommandInput, DeleteDynamicThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDynamicThingGroup",
  DeleteDynamicThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDynamicThingGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteDynamicThingGroupCommandInput;
      output: DeleteDynamicThingGroupCommandOutput;
    };
  };
}
