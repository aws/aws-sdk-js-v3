// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateDynamicThingGroupRequest, CreateDynamicThingGroupResponse } from "../models/models_0";
import { de_CreateDynamicThingGroupCommand, se_CreateDynamicThingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDynamicThingGroupCommand}.
 */
export interface CreateDynamicThingGroupCommandInput extends CreateDynamicThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateDynamicThingGroupCommand}.
 */
export interface CreateDynamicThingGroupCommandOutput extends CreateDynamicThingGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a dynamic thing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateDynamicThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateDynamicThingGroupRequest
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
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   queryVersion: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDynamicThingGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDynamicThingGroupResponse
 * //   thingGroupName: "STRING_VALUE",
 * //   thingGroupArn: "STRING_VALUE",
 * //   thingGroupId: "STRING_VALUE",
 * //   indexName: "STRING_VALUE",
 * //   queryString: "STRING_VALUE",
 * //   queryVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDynamicThingGroupCommandInput - {@link CreateDynamicThingGroupCommandInput}
 * @returns {@link CreateDynamicThingGroupCommandOutput}
 * @see {@link CreateDynamicThingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDynamicThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class CreateDynamicThingGroupCommand extends $Command
  .classBuilder<
    CreateDynamicThingGroupCommandInput,
    CreateDynamicThingGroupCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "CreateDynamicThingGroup", {})
  .n("IoTClient", "CreateDynamicThingGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateDynamicThingGroupCommand)
  .de(de_CreateDynamicThingGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDynamicThingGroupRequest;
      output: CreateDynamicThingGroupResponse;
    };
    sdk: {
      input: CreateDynamicThingGroupCommandInput;
      output: CreateDynamicThingGroupCommandOutput;
    };
  };
}
