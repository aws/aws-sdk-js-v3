// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteDynamicThingGroupRequest, DeleteDynamicThingGroupResponse } from "../models/models_1";
import { de_DeleteDynamicThingGroupCommand, se_DeleteDynamicThingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a dynamic thing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDynamicThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDynamicThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDynamicThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
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
 * @public
 */
export class DeleteDynamicThingGroupCommand extends $Command
  .classBuilder<
    DeleteDynamicThingGroupCommandInput,
    DeleteDynamicThingGroupCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DeleteDynamicThingGroup", {})
  .n("IoTClient", "DeleteDynamicThingGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDynamicThingGroupCommand)
  .de(de_DeleteDynamicThingGroupCommand)
  .build() {}
