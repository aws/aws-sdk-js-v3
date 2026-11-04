// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSMBSecurityStrategyInput, UpdateSMBSecurityStrategyOutput } from "../models/models_0";
import { UpdateSMBSecurityStrategy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSMBSecurityStrategyCommand}.
 */
export interface UpdateSMBSecurityStrategyCommandInput extends UpdateSMBSecurityStrategyInput {}
/**
 * @public
 *
 * The output of {@link UpdateSMBSecurityStrategyCommand}.
 */
export interface UpdateSMBSecurityStrategyCommandOutput extends UpdateSMBSecurityStrategyOutput, __MetadataBearer {}

/**
 * Updates the SMB security strategy level for an Amazon S3 file gateway. This action is only supported for Amazon S3 file gateways.
 *
 * > **Note:**
 * >
 * > For information about configuring this setting using the Amazon Web Services console, see [Setting a security level for your gateway](https://docs.aws.amazon.com/filegateway/latest/files3/security-strategy.html) in the *Amazon S3 File Gateway User Guide*.
 * >
 * > A higher security strategy level can affect performance of the gateway.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSMBSecurityStrategyInput
 *   GatewayARN: "STRING_VALUE", // required
 *   SMBSecurityStrategy: "ClientSpecified" || "MandatorySigning" || "MandatoryEncryption" || "MandatoryEncryptionNoAes128", // required
 * };
 * const command = new UpdateSMBSecurityStrategyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSMBSecurityStrategyOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSMBSecurityStrategyCommandInput - {@link UpdateSMBSecurityStrategyCommandInput}
 * @returns {@link UpdateSMBSecurityStrategyCommandOutput}
 * @see {@link UpdateSMBSecurityStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBSecurityStrategyCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An internal server error has occurred during the request. For more information, see the error and message fields.
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *
 * An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.
 *
 * @throws {@link StorageGatewayServiceException}
 *
 * Base exception class for all service exceptions from StorageGateway service.
 *
 * @public
 */
export class UpdateSMBSecurityStrategyCommand extends command<UpdateSMBSecurityStrategyCommandInput, UpdateSMBSecurityStrategyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSMBSecurityStrategy",
  UpdateSMBSecurityStrategy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSMBSecurityStrategyInput;
      output: UpdateSMBSecurityStrategyOutput;
    };
    sdk: {
      input: UpdateSMBSecurityStrategyCommandInput;
      output: UpdateSMBSecurityStrategyCommandOutput;
    };
  };
}
