// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCustomDomainAssociationMessage, CreateCustomDomainAssociationResult } from "../models/models_0";
import {
  de_CreateCustomDomainAssociationCommand,
  se_CreateCustomDomainAssociationCommand,
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
 * The input for {@link CreateCustomDomainAssociationCommand}.
 */
export interface CreateCustomDomainAssociationCommandInput extends CreateCustomDomainAssociationMessage {}
/**
 * @public
 *
 * The output of {@link CreateCustomDomainAssociationCommand}.
 */
export interface CreateCustomDomainAssociationCommandOutput
  extends CreateCustomDomainAssociationResult,
    __MetadataBearer {}

/**
 * <p>Used to create a custom domain name for a cluster. Properties include the custom domain name, the
 *             cluster the custom domain is associated with, and the certificate Amazon Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateCustomDomainAssociationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // CreateCustomDomainAssociationMessage
 *   CustomDomainName: "STRING_VALUE", // required
 *   CustomDomainCertificateArn: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomDomainAssociationResult
 * //   CustomDomainName: "STRING_VALUE",
 * //   CustomDomainCertificateArn: "STRING_VALUE",
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   CustomDomainCertExpiryTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomDomainAssociationCommandInput - {@link CreateCustomDomainAssociationCommandInput}
 * @returns {@link CreateCustomDomainAssociationCommandOutput}
 * @see {@link CreateCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateCustomDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link CustomCnameAssociationFault} (client fault)
 *  <p>An error occurred when an attempt was made to change the custom domain association.</p>
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
export class CreateCustomDomainAssociationCommand extends $Command
  .classBuilder<
    CreateCustomDomainAssociationCommandInput,
    CreateCustomDomainAssociationCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "CreateCustomDomainAssociation", {})
  .n("RedshiftClient", "CreateCustomDomainAssociationCommand")
  .f(void 0, void 0)
  .ser(se_CreateCustomDomainAssociationCommand)
  .de(de_CreateCustomDomainAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomDomainAssociationMessage;
      output: CreateCustomDomainAssociationResult;
    };
    sdk: {
      input: CreateCustomDomainAssociationCommandInput;
      output: CreateCustomDomainAssociationCommandOutput;
    };
  };
}
