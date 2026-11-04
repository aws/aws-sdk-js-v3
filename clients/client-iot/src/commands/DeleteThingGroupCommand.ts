// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteThingGroupRequest, DeleteThingGroupResponse } from "../models/models_0";
import { DeleteThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteThingGroupCommand}.
 */
export interface DeleteThingGroupCommandInput extends DeleteThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThingGroupCommand}.
 */
export interface DeleteThingGroupCommandOutput extends DeleteThingGroupResponse, __MetadataBearer {}

/**
 * Deletes a thing group.
 *
 * Requires permission to access the [DeleteThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteThingGroupRequest
 *   thingGroupName: "STRING_VALUE", // required
 *   expectedVersion: Number("long"),
 * };
 * const command = new DeleteThingGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThingGroupCommandInput - {@link DeleteThingGroupCommandInput}
 * @returns {@link DeleteThingGroupCommandOutput}
 * @see {@link DeleteThingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteThingGroupCommandOutput} for command's `response` shape.
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
export class DeleteThingGroupCommand extends command<DeleteThingGroupCommandInput, DeleteThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteThingGroup",
  DeleteThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThingGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteThingGroupCommandInput;
      output: DeleteThingGroupCommandOutput;
    };
  };
}
