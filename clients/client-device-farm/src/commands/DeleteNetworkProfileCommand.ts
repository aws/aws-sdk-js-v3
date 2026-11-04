// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteNetworkProfileRequest, DeleteNetworkProfileResult } from "../models/models_0";
import { DeleteNetworkProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a network profile.
 *
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
 *
 * An invalid argument was specified.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit was exceeded.
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
export class DeleteNetworkProfileCommand extends command<DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNetworkProfile",
  DeleteNetworkProfile$
) {
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
