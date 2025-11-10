// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkProfileRequest, DeleteNetworkProfileResult } from "../models/models_0";
import { DeleteNetworkProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkProfileCommand}.
 */
export interface DeleteNetworkProfileCommandInput extends DeleteNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkProfileCommand}.
 */
export interface DeleteNetworkProfileCommandOutput extends DeleteNetworkProfileResult, __MetadataBearer {}

/**
 * <p>Deletes a network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteNetworkProfileRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkProfileCommandInput - {@link DeleteNetworkProfileCommandInput}
 * @returns {@link DeleteNetworkProfileCommandOutput}
 * @see {@link DeleteNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkProfileCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class DeleteNetworkProfileCommand extends $Command
  .classBuilder<
    DeleteNetworkProfileCommandInput,
    DeleteNetworkProfileCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "DeleteNetworkProfile", {})
  .n("DeviceFarmClient", "DeleteNetworkProfileCommand")
  .sc(DeleteNetworkProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteNetworkProfileCommandInput;
      output: DeleteNetworkProfileCommandOutput;
    };
  };
}
