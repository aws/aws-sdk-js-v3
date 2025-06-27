// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSMBFileShareVisibilityInput, UpdateSMBFileShareVisibilityOutput } from "../models/models_0";
import {
  de_UpdateSMBFileShareVisibilityCommand,
  se_UpdateSMBFileShareVisibilityCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSMBFileShareVisibilityCommand}.
 */
export interface UpdateSMBFileShareVisibilityCommandInput extends UpdateSMBFileShareVisibilityInput {}
/**
 * @public
 *
 * The output of {@link UpdateSMBFileShareVisibilityCommand}.
 */
export interface UpdateSMBFileShareVisibilityCommandOutput
  extends UpdateSMBFileShareVisibilityOutput,
    __MetadataBearer {}

/**
 * <p>Controls whether the shares on an S3 File Gateway are visible in a net view or browse
 *          list. The operation is only supported for S3 File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBFileShareVisibilityCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSMBFileShareVisibilityInput
 *   GatewayARN: "STRING_VALUE", // required
 *   FileSharesVisible: true || false, // required
 * };
 * const command = new UpdateSMBFileShareVisibilityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSMBFileShareVisibilityOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSMBFileShareVisibilityCommandInput - {@link UpdateSMBFileShareVisibilityCommandInput}
 * @returns {@link UpdateSMBFileShareVisibilityCommandOutput}
 * @see {@link UpdateSMBFileShareVisibilityCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBFileShareVisibilityCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class UpdateSMBFileShareVisibilityCommand extends $Command
  .classBuilder<
    UpdateSMBFileShareVisibilityCommandInput,
    UpdateSMBFileShareVisibilityCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "UpdateSMBFileShareVisibility", {})
  .n("StorageGatewayClient", "UpdateSMBFileShareVisibilityCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSMBFileShareVisibilityCommand)
  .de(de_UpdateSMBFileShareVisibilityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSMBFileShareVisibilityInput;
      output: UpdateSMBFileShareVisibilityOutput;
    };
    sdk: {
      input: UpdateSMBFileShareVisibilityCommandInput;
      output: UpdateSMBFileShareVisibilityCommandOutput;
    };
  };
}
