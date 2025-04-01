// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyCustomDomainAssociationMessage, ModifyCustomDomainAssociationResult } from "../models/models_1";
import {
  de_ModifyCustomDomainAssociationCommand,
  se_ModifyCustomDomainAssociationCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyCustomDomainAssociationCommand}.
 */
export interface ModifyCustomDomainAssociationCommandInput extends ModifyCustomDomainAssociationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCustomDomainAssociationCommand}.
 */
export interface ModifyCustomDomainAssociationCommandOutput
  extends ModifyCustomDomainAssociationResult,
    __MetadataBearer {}

/**
 * <p>Contains information for changing a custom domain association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyCustomDomainAssociationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ModifyCustomDomainAssociationMessage
 *   CustomDomainName: "STRING_VALUE", // required
 *   CustomDomainCertificateArn: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ModifyCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCustomDomainAssociationResult
 * //   CustomDomainName: "STRING_VALUE",
 * //   CustomDomainCertificateArn: "STRING_VALUE",
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   CustomDomainCertExpiryTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyCustomDomainAssociationCommandInput - {@link ModifyCustomDomainAssociationCommandInput}
 * @returns {@link ModifyCustomDomainAssociationCommandOutput}
 * @see {@link ModifyCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link ModifyCustomDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link CustomCnameAssociationFault} (client fault)
 *  <p>An error occurred when an attempt was made to change the custom domain association.</p>
 *
 * @throws {@link CustomDomainAssociationNotFoundFault} (client fault)
 *  <p>An error occurred. The custom domain name couldn't be found.</p>
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
export class ModifyCustomDomainAssociationCommand extends $Command
  .classBuilder<
    ModifyCustomDomainAssociationCommandInput,
    ModifyCustomDomainAssociationCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "ModifyCustomDomainAssociation", {})
  .n("RedshiftClient", "ModifyCustomDomainAssociationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyCustomDomainAssociationCommand)
  .de(de_ModifyCustomDomainAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyCustomDomainAssociationMessage;
      output: ModifyCustomDomainAssociationResult;
    };
    sdk: {
      input: ModifyCustomDomainAssociationCommandInput;
      output: ModifyCustomDomainAssociationCommandOutput;
    };
  };
}
