// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVPCEConfigurationRequest, DeleteVPCEConfigurationResult } from "../models/models_0";
import { DeleteVPCEConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVPCEConfigurationCommand}.
 */
export interface DeleteVPCEConfigurationCommandInput extends DeleteVPCEConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVPCEConfigurationCommand}.
 */
export interface DeleteVPCEConfigurationCommandOutput extends DeleteVPCEConfigurationResult, __MetadataBearer {}

/**
 * Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteVPCEConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVPCEConfigurationCommandInput - {@link DeleteVPCEConfigurationCommandInput}
 * @returns {@link DeleteVPCEConfigurationCommandOutput}
 * @see {@link DeleteVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *
 * An invalid argument was specified.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * There was an error with the update request, or you do not have sufficient permissions to update this VPC endpoint configuration.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified entity was not found.
 *
 * @throws {@link ServiceAccountException} (client fault)
 *
 * There was a problem with the service account.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
 *
 * @public
 */
export class DeleteVPCEConfigurationCommand extends command<DeleteVPCEConfigurationCommandInput, DeleteVPCEConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVPCEConfiguration",
  DeleteVPCEConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVPCEConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteVPCEConfigurationCommandInput;
      output: DeleteVPCEConfigurationCommandOutput;
    };
  };
}
