// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHsmClientCertificateMessage, CreateHsmClientCertificateResult } from "../models/models_0";
import { de_CreateHsmClientCertificateCommand, se_CreateHsmClientCertificateCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHsmClientCertificateCommand}.
 */
export interface CreateHsmClientCertificateCommandInput extends CreateHsmClientCertificateMessage {}
/**
 * @public
 *
 * The output of {@link CreateHsmClientCertificateCommand}.
 */
export interface CreateHsmClientCertificateCommandOutput extends CreateHsmClientCertificateResult, __MetadataBearer {}

/**
 * <p>Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to
 *             the client's HSM in order to store and retrieve the keys used to encrypt the cluster
 *             databases.</p>
 *          <p>The command returns a public key, which you must store in the HSM. In addition to
 *             creating the HSM certificate, you must create an Amazon Redshift HSM configuration that
 *             provides a cluster the information needed to store and use encryption keys in the HSM.
 *             For more information, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM">Hardware Security Modules</a>
 *             in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, CreateHsmClientCertificateCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, CreateHsmClientCertificateCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // CreateHsmClientCertificateMessage
 *   HsmClientCertificateIdentifier: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateHsmClientCertificateCommand(input);
 * const response = await client.send(command);
 * // { // CreateHsmClientCertificateResult
 * //   HsmClientCertificate: { // HsmClientCertificate
 * //     HsmClientCertificateIdentifier: "STRING_VALUE",
 * //     HsmClientCertificatePublicKey: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateHsmClientCertificateCommandInput - {@link CreateHsmClientCertificateCommandInput}
 * @returns {@link CreateHsmClientCertificateCommandOutput}
 * @see {@link CreateHsmClientCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateHsmClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmClientCertificateAlreadyExistsFault} (client fault)
 *  <p>There is already an existing Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 *
 * @throws {@link HsmClientCertificateQuotaExceededFault} (client fault)
 *  <p>The quota for HSM client certificates has been reached.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *  <p>You have exceeded the number of tags allowed.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class CreateHsmClientCertificateCommand extends $Command
  .classBuilder<
    CreateHsmClientCertificateCommandInput,
    CreateHsmClientCertificateCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "CreateHsmClientCertificate", {})
  .n("RedshiftClient", "CreateHsmClientCertificateCommand")
  .f(void 0, void 0)
  .ser(se_CreateHsmClientCertificateCommand)
  .de(de_CreateHsmClientCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHsmClientCertificateMessage;
      output: CreateHsmClientCertificateResult;
    };
    sdk: {
      input: CreateHsmClientCertificateCommandInput;
      output: CreateHsmClientCertificateCommandOutput;
    };
  };
}
