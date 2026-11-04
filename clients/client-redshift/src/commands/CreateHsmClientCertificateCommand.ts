// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateHsmClientCertificateMessage, CreateHsmClientCertificateResult } from "../models/models_0";
import { CreateHsmClientCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an HSM client certificate that an Amazon Redshift cluster will use to connect to the client's HSM in order to store and retrieve the keys used to encrypt the cluster databases.
 *
 * The command returns a public key, which you must store in the HSM. In addition to creating the HSM certificate, you must create an Amazon Redshift HSM configuration that provides a cluster the information needed to store and use encryption keys in the HSM. For more information, go to [Hardware Security Modules](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html#working-with-HSM) in the *Amazon Redshift Cluster Management Guide*.
 *
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
 *
 * There is already an existing Amazon Redshift HSM client certificate with the specified identifier.
 *
 * @throws {@link HsmClientCertificateQuotaExceededFault} (client fault)
 *
 * The quota for HSM client certificates has been reached. For information about increasing your quota, go to [Limits in Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html) in the *Amazon Redshift Cluster Management Guide*.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *
 * The tag is invalid.
 *
 * @throws {@link TagLimitExceededFault} (client fault)
 *
 * You have exceeded the number of tags allowed.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class CreateHsmClientCertificateCommand extends command<CreateHsmClientCertificateCommandInput, CreateHsmClientCertificateCommandOutput>(
  _ep0,
  _mw0,
  "CreateHsmClientCertificate",
  CreateHsmClientCertificate$
) {
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
