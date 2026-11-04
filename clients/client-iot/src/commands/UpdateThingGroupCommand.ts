// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateThingGroupRequest, UpdateThingGroupResponse } from "../models/models_2";
import { UpdateThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateThingGroupCommand}.
 */
export interface UpdateThingGroupCommandInput extends UpdateThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThingGroupCommand}.
 */
export interface UpdateThingGroupCommandOutput extends UpdateThingGroupResponse, __MetadataBearer {}

/**
 * Update a thing group.
 *
 * Requires permission to access the [UpdateThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateThingGroupRequest
 *   thingGroupName: "STRING_VALUE", // required
 *   thingGroupProperties: { // ThingGroupProperties
 *     thingGroupDescription: "STRING_VALUE",
 *     attributePayload: { // AttributePayload
 *       attributes: { // Attributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *       merge: true || false,
 *     },
 *   },
 *   expectedVersion: Number("long"),
 * };
 * const command = new UpdateThingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThingGroupResponse
 * //   version: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdateThingGroupCommandInput - {@link UpdateThingGroupCommandInput}
 * @returns {@link UpdateThingGroupCommandOutput}
 * @see {@link UpdateThingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateThingGroupCommandOutput} for command's `response` shape.
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
export class UpdateThingGroupCommand extends command<UpdateThingGroupCommandInput, UpdateThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateThingGroup",
  UpdateThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThingGroupRequest;
      output: UpdateThingGroupResponse;
    };
    sdk: {
      input: UpdateThingGroupCommandInput;
      output: UpdateThingGroupCommandOutput;
    };
  };
}
