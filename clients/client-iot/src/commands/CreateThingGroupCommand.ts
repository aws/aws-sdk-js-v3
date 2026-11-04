// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateThingGroupRequest, CreateThingGroupResponse } from "../models/models_0";
import { CreateThingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateThingGroupCommand}.
 */
export interface CreateThingGroupCommandInput extends CreateThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateThingGroupCommand}.
 */
export interface CreateThingGroupCommandOutput extends CreateThingGroupResponse, __MetadataBearer {}

/**
 * Create a thing group.
 *
 * > **Note:**
 * >
 * > This is a control plane operation. See [Authorization](https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html) for information about authorizing control plane actions.
 * >
 * > If the `ThingGroup` that you create has the exact same attributes as an existing `ThingGroup`, you will get a 200 success response.
 *
 * Requires permission to access the [CreateThingGroup](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateThingGroupRequest
 *   thingGroupName: "STRING_VALUE", // required
 *   parentGroupName: "STRING_VALUE",
 *   thingGroupProperties: { // ThingGroupProperties
 *     thingGroupDescription: "STRING_VALUE",
 *     attributePayload: { // AttributePayload
 *       attributes: { // Attributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *       merge: true || false,
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateThingGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateThingGroupResponse
 * //   thingGroupName: "STRING_VALUE",
 * //   thingGroupArn: "STRING_VALUE",
 * //   thingGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateThingGroupCommandInput - {@link CreateThingGroupCommandInput}
 * @returns {@link CreateThingGroupCommandOutput}
 * @see {@link CreateThingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateThingGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
export class CreateThingGroupCommand extends command<CreateThingGroupCommandInput, CreateThingGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateThingGroup",
  CreateThingGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThingGroupRequest;
      output: CreateThingGroupResponse;
    };
    sdk: {
      input: CreateThingGroupCommandInput;
      output: CreateThingGroupCommandOutput;
    };
  };
}
