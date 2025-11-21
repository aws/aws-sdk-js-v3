// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakehouseConfiguration } from "../models/models_0";
import { ModifyLakehouseConfigurationMessage } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyLakehouseConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyLakehouseConfigurationCommand}.
 */
export interface ModifyLakehouseConfigurationCommandInput extends ModifyLakehouseConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyLakehouseConfigurationCommand}.
 */
export interface ModifyLakehouseConfigurationCommandOutput extends LakehouseConfiguration, __MetadataBearer {}

/**
 * <p>Modifies the lakehouse configuration for a cluster. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyLakehouseConfigurationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyLakehouseConfigurationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyLakehouseConfigurationMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   LakehouseRegistration: "Register" || "Deregister",
 *   CatalogName: "STRING_VALUE",
 *   LakehouseIdcRegistration: "Associate" || "Disassociate",
 *   LakehouseIdcApplicationArn: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyLakehouseConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // LakehouseConfiguration
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   LakehouseIdcApplicationArn: "STRING_VALUE",
 * //   LakehouseRegistrationStatus: "STRING_VALUE",
 * //   CatalogArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyLakehouseConfigurationCommandInput - {@link ModifyLakehouseConfigurationCommandInput}
 * @returns {@link ModifyLakehouseConfigurationCommandOutput}
 * @see {@link ModifyLakehouseConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyLakehouseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link DependentServiceAccessDeniedFault} (client fault)
 *  <p>A dependent service denied access for the integration.</p>
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link RedshiftIdcApplicationNotExistsFault} (client fault)
 *  <p>The application you attempted to find doesn't exist.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
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
export class ModifyLakehouseConfigurationCommand extends $Command
  .classBuilder<
    ModifyLakehouseConfigurationCommandInput,
    ModifyLakehouseConfigurationCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ModifyLakehouseConfiguration", {})
  .n("RedshiftClient", "ModifyLakehouseConfigurationCommand")
  .sc(ModifyLakehouseConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyLakehouseConfigurationMessage;
      output: LakehouseConfiguration;
    };
    sdk: {
      input: ModifyLakehouseConfigurationCommandInput;
      output: ModifyLakehouseConfigurationCommandOutput;
    };
  };
}
