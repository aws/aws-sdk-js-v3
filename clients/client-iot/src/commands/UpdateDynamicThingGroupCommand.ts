// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateDynamicThingGroupRequest, UpdateDynamicThingGroupResponse } from "../models/models_2";
import { de_UpdateDynamicThingGroupCommand, se_UpdateDynamicThingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates a dynamic thing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateDynamicThingGroup</a> action.</p>
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link VersionConflictException} (client fault)
 *  <p>An exception thrown when the version of an entity specified with the
 *             <code>expectedVersion</code> parameter does not match the latest version in the
 *          system.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateDynamicThingGroupCommand extends $Command
  .classBuilder<
    UpdateDynamicThingGroupCommandInput,
    UpdateDynamicThingGroupCommandOutput,
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
  .s("AWSIotService", "UpdateDynamicThingGroup", {})
  .n("IoTClient", "UpdateDynamicThingGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDynamicThingGroupCommand)
  .de(de_UpdateDynamicThingGroupCommand)
  .build() {
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
