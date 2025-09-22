// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateThingGroupRequest, CreateThingGroupResponse } from "../models/models_0";
import { CreateThingGroup } from "../schemas/schemas_44_Thing";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Create a thing group.</p>
 *          <note>
 *             <p>This is a control plane operation. See <a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-authorization.html">Authorization</a> for
 * 				information about authorizing control plane actions.</p>
 *             <p>If the <code>ThingGroup</code> that you create has the exact same attributes as an existing
 * 					<code>ThingGroup</code>, you will get a 200 success response.
 * 			</p>
 *          </note>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateThingGroup</a> action.</p>
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateThingGroupCommand extends $Command
  .classBuilder<
    CreateThingGroupCommandInput,
    CreateThingGroupCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "CreateThingGroup", {})
  .n("IoTClient", "CreateThingGroupCommand")
  .sc(CreateThingGroup)
  .build() {
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
