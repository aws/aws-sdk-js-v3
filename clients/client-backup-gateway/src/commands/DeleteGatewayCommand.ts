// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGatewayInput, DeleteGatewayOutput } from "../models/models_0";
import { de_DeleteGatewayCommand, se_DeleteGatewayCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGatewayCommand}.
 */
export interface DeleteGatewayCommandInput extends DeleteGatewayInput {}
/**
 * @public
 *
 * The output of {@link DeleteGatewayCommand}.
 */
export interface DeleteGatewayCommandOutput extends DeleteGatewayOutput, __MetadataBearer {}

/**
 * <p>Deletes a backup gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, DeleteGatewayCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, DeleteGatewayCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // DeleteGatewayInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGatewayOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteGatewayCommandInput - {@link DeleteGatewayCommandInput}
 * @returns {@link DeleteGatewayCommandOutput}
 * @see {@link DeleteGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 *
 * @public
 */
export class DeleteGatewayCommand extends $Command
  .classBuilder<
    DeleteGatewayCommandInput,
    DeleteGatewayCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackupOnPremises_v20210101", "DeleteGateway", {})
  .n("BackupGatewayClient", "DeleteGatewayCommand")
  .f(void 0, void 0)
  .ser(se_DeleteGatewayCommand)
  .de(de_DeleteGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGatewayInput;
      output: DeleteGatewayOutput;
    };
    sdk: {
      input: DeleteGatewayCommandInput;
      output: DeleteGatewayCommandOutput;
    };
  };
}
