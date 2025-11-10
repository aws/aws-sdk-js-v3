// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDeliveryChannelRequest } from "../models/models_0";
import { DeleteDeliveryChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeliveryChannelCommand}.
 */
export interface DeleteDeliveryChannelCommandInput extends DeleteDeliveryChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeliveryChannelCommand}.
 */
export interface DeleteDeliveryChannelCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the delivery channel.</p>
 *          <p>Before you can delete the delivery channel, you must stop the customer managed configuration recorder. You can use the <a>StopConfigurationRecorder</a> operation to stop the customer managed configuration recorder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteDeliveryChannelCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteDeliveryChannelCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteDeliveryChannelRequest
 *   DeliveryChannelName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeliveryChannelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDeliveryChannelCommandInput - {@link DeleteDeliveryChannelCommandInput}
 * @returns {@link DeleteDeliveryChannelCommandOutput}
 * @see {@link DeleteDeliveryChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteDeliveryChannelCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link LastDeliveryChannelDeleteFailedException} (client fault)
 *  <p>You cannot delete the delivery channel you specified because the customer managed configuration recorder is running.</p>
 *
 * @throws {@link NoSuchDeliveryChannelException} (client fault)
 *  <p>You have specified a delivery channel that does not
 * 			exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DeleteDeliveryChannelCommand extends $Command
  .classBuilder<
    DeleteDeliveryChannelCommandInput,
    DeleteDeliveryChannelCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeleteDeliveryChannel", {})
  .n("ConfigServiceClient", "DeleteDeliveryChannelCommand")
  .sc(DeleteDeliveryChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDeliveryChannelRequest;
      output: {};
    };
    sdk: {
      input: DeleteDeliveryChannelCommandInput;
      output: DeleteDeliveryChannelCommandOutput;
    };
  };
}
