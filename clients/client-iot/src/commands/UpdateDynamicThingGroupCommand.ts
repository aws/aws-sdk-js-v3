// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDynamicThingGroupRequest, UpdateDynamicThingGroupResponse } from "../models/models_2";
import { UpdateDynamicThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDynamicThingGroupCommand}.
 */
export interface UpdateDynamicThingGroupCommandInput extends UpdateDynamicThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDynamicThingGroupCommand}.
 */
export interface UpdateDynamicThingGroupCommandOutput extends UpdateDynamicThingGroupResponse, __MetadataBearer {}

/**
 * Updates a dynamic thing group.
 *
 * Requires permission to access the [UpdateDynamicThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateDynamicThingGroupRequest
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
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE",
 *   queryVersion: "STRING_VALUE",
 * };
 * const command = new UpdateDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDynamicThingGroupResponse
 * //   version: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdateDynamicThingGroupCommandInput - {@link UpdateDynamicThingGroupCommandInput}
 * @returns {@link UpdateDynamicThingGroupCommandOutput}
 * @see {@link UpdateDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidQueryException} (client fault)
 *
 * The query is invalid.
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
export class UpdateDynamicThingGroupCommand extends command<UpdateDynamicThingGroupCommandInput, UpdateDynamicThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDynamicThingGroup",
  UpdateDynamicThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDynamicThingGroupRequest;
      output: UpdateDynamicThingGroupResponse;
    };
    sdk: {
      input: UpdateDynamicThingGroupCommandInput;
      output: UpdateDynamicThingGroupCommandOutput;
    };
  };
}
