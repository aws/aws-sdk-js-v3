// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { DeleteCoreDeviceRequest } from "../models/models_0";
import { DeleteCoreDevice } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCoreDeviceCommand}.
 */
export interface DeleteCoreDeviceCommandInput extends DeleteCoreDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCoreDeviceCommand}.
 */
export interface DeleteCoreDeviceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a Greengrass core device, which is an IoT thing. This operation removes the core
 *       device from the list of core devices. This operation doesn't delete the IoT thing. For more
 *       information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the
 *         <i>IoT API Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, DeleteCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, DeleteCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // DeleteCoreDeviceRequest
 *   coreDeviceThingName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCoreDeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCoreDeviceCommandInput - {@link DeleteCoreDeviceCommandInput}
 * @returns {@link DeleteCoreDeviceCommandOutput}
 * @see {@link DeleteCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class DeleteCoreDeviceCommand extends $Command
  .classBuilder<
    DeleteCoreDeviceCommandInput,
    DeleteCoreDeviceCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "DeleteCoreDevice", {})
  .n("GreengrassV2Client", "DeleteCoreDeviceCommand")
  .sc(DeleteCoreDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCoreDeviceRequest;
      output: {};
    };
    sdk: {
      input: DeleteCoreDeviceCommandInput;
      output: DeleteCoreDeviceCommandOutput;
    };
  };
}
