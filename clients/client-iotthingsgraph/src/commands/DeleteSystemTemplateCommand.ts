// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeleteSystemTemplateRequest, DeleteSystemTemplateResponse } from "../models/models_0";
import { DeleteSystemTemplate } from "../schemas/schemas_4_System";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSystemTemplateCommand}.
 */
export interface DeleteSystemTemplateCommandInput extends DeleteSystemTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSystemTemplateCommand}.
 */
export interface DeleteSystemTemplateCommandOutput extends DeleteSystemTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a system. New deployments can't contain the system after its deletion.
 *       Existing deployments that contain the system will continue to work because they use a snapshot of the system that is taken when it is deployed.</p>
 *
 * @deprecated since: 2022-08-30
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, DeleteSystemTemplateCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, DeleteSystemTemplateCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // DeleteSystemTemplateRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteSystemTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSystemTemplateCommandInput - {@link DeleteSystemTemplateCommandInput}
 * @returns {@link DeleteSystemTemplateCommandOutput}
 * @see {@link DeleteSystemTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteSystemTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p></p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p></p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p></p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p></p>
 *
 * @throws {@link IoTThingsGraphServiceException}
 * <p>Base exception class for all service exceptions from IoTThingsGraph service.</p>
 *
 *
 * @public
 */
export class DeleteSystemTemplateCommand extends $Command
  .classBuilder<
    DeleteSystemTemplateCommandInput,
    DeleteSystemTemplateCommandOutput,
    IoTThingsGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTThingsGraphClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotThingsGraphFrontEndService", "DeleteSystemTemplate", {})
  .n("IoTThingsGraphClient", "DeleteSystemTemplateCommand")
  .sc(DeleteSystemTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSystemTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteSystemTemplateCommandInput;
      output: DeleteSystemTemplateCommandOutput;
    };
  };
}
