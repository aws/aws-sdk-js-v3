// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutResourcePermissionInput, PutResourcePermissionOutput } from "../models/models_0";
import { PutResourcePermission } from "../schemas/schemas_4_Permission";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutResourcePermissionCommand}.
 */
export interface PutResourcePermissionCommandInput extends PutResourcePermissionInput {}
/**
 * @public
 *
 * The output of {@link PutResourcePermissionCommand}.
 */
export interface PutResourcePermissionCommandOutput extends PutResourcePermissionOutput, __MetadataBearer {}

/**
 * <p>Adds permissions to the target database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, PutResourcePermissionCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, PutResourcePermissionCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // PutResourcePermissionInput
 *   ActionType: "RESTORE", // required
 *   SourceResourceArn: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new PutResourcePermissionCommand(input);
 * const response = await client.send(command);
 * // { // PutResourcePermissionOutput
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutResourcePermissionCommandInput - {@link PutResourcePermissionCommandInput}
 * @returns {@link PutResourcePermissionCommandOutput}
 * @see {@link PutResourcePermissionCommandInput} for command's `input` shape.
 * @see {@link PutResourcePermissionCommandOutput} for command's `response` shape.
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
export class PutResourcePermissionCommand extends $Command
  .classBuilder<
    PutResourcePermissionCommandInput,
    PutResourcePermissionCommandOutput,
    SsmSapClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SsmSapClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SsmSap", "PutResourcePermission", {})
  .n("SsmSapClient", "PutResourcePermissionCommand")
  .sc(PutResourcePermission)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutResourcePermissionInput;
      output: PutResourcePermissionOutput;
    };
    sdk: {
      input: PutResourcePermissionCommandInput;
      output: PutResourcePermissionCommandOutput;
    };
  };
}
