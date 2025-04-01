// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyAquaInputMessage, ModifyAquaOutputMessage } from "../models/models_1";
import { de_ModifyAquaConfigurationCommand, se_ModifyAquaConfigurationCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyAquaConfigurationCommand}.
 */
export interface ModifyAquaConfigurationCommandInput extends ModifyAquaInputMessage {}
/**
 * @public
 *
 * The output of {@link ModifyAquaConfigurationCommand}.
 */
export interface ModifyAquaConfigurationCommandOutput extends ModifyAquaOutputMessage, __MetadataBearer {}

/**
 * <p>This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyAquaConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyAquaConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ModifyAquaInputMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   AquaConfigurationStatus: "enabled" || "disabled" || "auto",
 * };
 * const command = new ModifyAquaConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyAquaOutputMessage
 * //   AquaConfiguration: { // AquaConfiguration
 * //     AquaStatus: "enabled" || "disabled" || "applying",
 * //     AquaConfigurationStatus: "enabled" || "disabled" || "auto",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyAquaConfigurationCommandInput - {@link ModifyAquaConfigurationCommandInput}
 * @returns {@link ModifyAquaConfigurationCommandOutput}
 * @see {@link ModifyAquaConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyAquaConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ModifyAquaConfigurationCommand extends $Command
  .classBuilder<
    ModifyAquaConfigurationCommandInput,
    ModifyAquaConfigurationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "ModifyAquaConfiguration", {})
  .n("RedshiftClient", "ModifyAquaConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyAquaConfigurationCommand)
  .de(de_ModifyAquaConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyAquaInputMessage;
      output: ModifyAquaOutputMessage;
    };
    sdk: {
      input: ModifyAquaConfigurationCommandInput;
      output: ModifyAquaConfigurationCommandOutput;
    };
  };
}
