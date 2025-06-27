// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDevicePoolRequest, DeleteDevicePoolResult } from "../models/models_0";
import { de_DeleteDevicePoolCommand, se_DeleteDevicePoolCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDevicePoolCommand}.
 */
export interface DeleteDevicePoolCommandInput extends DeleteDevicePoolRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDevicePoolCommand}.
 */
export interface DeleteDevicePoolCommandOutput extends DeleteDevicePoolResult, __MetadataBearer {}

/**
 * <p>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools
 *             owned by the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteDevicePoolRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDevicePoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDevicePoolCommandInput - {@link DeleteDevicePoolCommandInput}
 * @returns {@link DeleteDevicePoolCommandOutput}
 * @see {@link DeleteDevicePoolCommandInput} for command's `input` shape.
 * @see {@link DeleteDevicePoolCommandOutput} for command's `response` shape.
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
 * @example To delete a device pool
 * ```javascript
 * // The following example deletes a specific device pool.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2::devicepool:123-456-EXAMPLE-GUID"
 * };
 * const command = new DeleteDevicePoolCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDevicePoolCommand extends $Command
  .classBuilder<
    DeleteDevicePoolCommandInput,
    DeleteDevicePoolCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "DeleteDevicePool", {})
  .n("DeviceFarmClient", "DeleteDevicePoolCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDevicePoolCommand)
  .de(de_DeleteDevicePoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDevicePoolRequest;
      output: {};
    };
    sdk: {
      input: DeleteDevicePoolCommandInput;
      output: DeleteDevicePoolCommandOutput;
    };
  };
}
