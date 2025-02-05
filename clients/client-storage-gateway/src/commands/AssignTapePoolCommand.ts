// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssignTapePoolInput, AssignTapePoolOutput } from "../models/models_0";
import { de_AssignTapePoolCommand, se_AssignTapePoolCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssignTapePoolCommand}.
 */
export interface AssignTapePoolCommandInput extends AssignTapePoolInput {}
/**
 * @public
 *
 * The output of {@link AssignTapePoolCommand}.
 */
export interface AssignTapePoolCommandOutput extends AssignTapePoolOutput, __MetadataBearer {}

/**
 * <p>Assigns a tape to a tape pool for archiving. The tape assigned to a pool is archived in
 *          the S3 storage class that is associated with the pool. When you use your backup application
 *          to eject the tape, the tape is archived directly into the S3 storage class (S3 Glacier or
 *          S3 Glacier Deep Archive) that corresponds to the pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AssignTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AssignTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new StorageGatewayClient(config);
 * const input = { // AssignTapePoolInput
 *   TapeARN: "STRING_VALUE", // required
 *   PoolId: "STRING_VALUE", // required
 *   BypassGovernanceRetention: true || false,
 * };
 * const command = new AssignTapePoolCommand(input);
 * const response = await client.send(command);
 * // { // AssignTapePoolOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssignTapePoolCommandInput - {@link AssignTapePoolCommandInput}
 * @returns {@link AssignTapePoolCommandOutput}
 * @see {@link AssignTapePoolCommandInput} for command's `input` shape.
 * @see {@link AssignTapePoolCommandOutput} for command's `response` shape.
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
 * @public
 */
export class AssignTapePoolCommand extends $Command
  .classBuilder<
    AssignTapePoolCommandInput,
    AssignTapePoolCommandOutput,
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
  .s("StorageGateway_20130630", "AssignTapePool", {})
  .n("StorageGatewayClient", "AssignTapePoolCommand")
  .f(void 0, void 0)
  .ser(se_AssignTapePoolCommand)
  .de(de_AssignTapePoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssignTapePoolInput;
      output: AssignTapePoolOutput;
    };
    sdk: {
      input: AssignTapePoolCommandInput;
      output: AssignTapePoolCommandOutput;
    };
  };
}
