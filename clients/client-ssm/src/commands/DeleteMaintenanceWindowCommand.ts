// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMaintenanceWindowRequest, DeleteMaintenanceWindowResult } from "../models/models_0";
import { de_DeleteMaintenanceWindowCommand, se_DeleteMaintenanceWindowCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMaintenanceWindowCommand}.
 */
export interface DeleteMaintenanceWindowCommandInput extends DeleteMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMaintenanceWindowCommand}.
 */
export interface DeleteMaintenanceWindowCommandOutput extends DeleteMaintenanceWindowResult, __MetadataBearer {}

/**
 * <p>Deletes a maintenance window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // DeleteMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMaintenanceWindowCommandInput - {@link DeleteMaintenanceWindowCommandInput}
 * @returns {@link DeleteMaintenanceWindowCommandOutput}
 * @see {@link DeleteMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeleteMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class DeleteMaintenanceWindowCommand extends $Command
  .classBuilder<
    DeleteMaintenanceWindowCommandInput,
    DeleteMaintenanceWindowCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DeleteMaintenanceWindow", {})
  .n("SSMClient", "DeleteMaintenanceWindowCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMaintenanceWindowCommand)
  .de(de_DeleteMaintenanceWindowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMaintenanceWindowRequest;
      output: DeleteMaintenanceWindowResult;
    };
    sdk: {
      input: DeleteMaintenanceWindowCommandInput;
      output: DeleteMaintenanceWindowCommandOutput;
    };
  };
}
