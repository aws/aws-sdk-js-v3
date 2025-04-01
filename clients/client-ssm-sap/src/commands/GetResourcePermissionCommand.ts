// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetResourcePermissionInput, GetResourcePermissionOutput } from "../models/models_0";
import { de_GetResourcePermissionCommand, se_GetResourcePermissionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourcePermissionCommand}.
 */
export interface GetResourcePermissionCommandInput extends GetResourcePermissionInput {}
/**
 * @public
 *
 * The output of {@link GetResourcePermissionCommand}.
 */
export interface GetResourcePermissionCommandOutput extends GetResourcePermissionOutput, __MetadataBearer {}

/**
 * <p>Gets permissions associated with the target database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetResourcePermissionCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetResourcePermissionCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const input = { // GetResourcePermissionInput
 *   ActionType: "RESTORE",
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetResourcePermissionCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePermissionOutput
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourcePermissionCommandInput - {@link GetResourcePermissionCommandInput}
 * @returns {@link GetResourcePermissionCommandOutput}
 * @see {@link GetResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link GetResourcePermissionCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class GetResourcePermissionCommand extends $Command
  .classBuilder<
    GetResourcePermissionCommandInput,
    GetResourcePermissionCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SsmSap", "GetResourcePermission", {})
  .n("SsmSapClient", "GetResourcePermissionCommand")
  .f(void 0, void 0)
  .ser(se_GetResourcePermissionCommand)
  .de(de_GetResourcePermissionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcePermissionInput;
      output: GetResourcePermissionOutput;
    };
    sdk: {
      input: GetResourcePermissionCommandInput;
      output: GetResourcePermissionCommandOutput;
    };
  };
}
