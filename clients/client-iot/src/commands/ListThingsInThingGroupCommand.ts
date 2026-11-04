// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThingsInThingGroupRequest, ListThingsInThingGroupResponse } from "../models/models_2";
import { ListThingsInThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThingsInThingGroupCommand}.
 */
export interface ListThingsInThingGroupCommandInput extends ListThingsInThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListThingsInThingGroupCommand}.
 */
export interface ListThingsInThingGroupCommandOutput extends ListThingsInThingGroupResponse, __MetadataBearer {}

/**
 * Lists the things in the specified group.
 *
 * Requires permission to access the [ListThingsInThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingsInThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingsInThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListThingsInThingGroupRequest
 *   thingGroupName: "STRING_VALUE", // required
 *   recursive: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListThingsInThingGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListThingsInThingGroupResponse
 * //   things: [ // ThingNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThingsInThingGroupCommandInput - {@link ListThingsInThingGroupCommandInput}
 * @returns {@link ListThingsInThingGroupCommandOutput}
 * @see {@link ListThingsInThingGroupCommandInput} for command's `input` shape.
 * @see {@link ListThingsInThingGroupCommandOutput} for command's `response` shape.
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
export class ListThingsInThingGroupCommand extends command<ListThingsInThingGroupCommandInput, ListThingsInThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "ListThingsInThingGroup",
  ListThingsInThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThingsInThingGroupRequest;
      output: ListThingsInThingGroupResponse;
    };
    sdk: {
      input: ListThingsInThingGroupCommandInput;
      output: ListThingsInThingGroupCommandOutput;
    };
  };
}
