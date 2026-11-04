// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyAquaInputMessage, ModifyAquaOutputMessage } from "../models/models_0";
import { ModifyAquaConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This operation is retired. Calling this operation does not change AQUA configuration. Amazon Redshift automatically determines whether to use AQUA (Advanced Query Accelerator).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyAquaConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyAquaConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *
 * The specified cluster is not in the `available` state.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class ModifyAquaConfigurationCommand extends command<ModifyAquaConfigurationCommandInput, ModifyAquaConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "ModifyAquaConfiguration",
  ModifyAquaConfiguration$
) {
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
