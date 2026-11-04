// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteHsmClientCertificateMessage } from "../models/models_0";
import { DeleteHsmClientCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteHsmClientCertificateCommand}.
 */
export interface DeleteHsmClientCertificateCommandInput extends DeleteHsmClientCertificateMessage {}
/**
 * @public
 *
 * The output of {@link DeleteHsmClientCertificateCommand}.
 */
export interface DeleteHsmClientCertificateCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified HSM client certificate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteHsmClientCertificateCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteHsmClientCertificateCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteHsmClientCertificateMessage
 *   HsmClientCertificateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteHsmClientCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteHsmClientCertificateCommandInput - {@link DeleteHsmClientCertificateCommandInput}
 * @returns {@link DeleteHsmClientCertificateCommandOutput}
 * @see {@link DeleteHsmClientCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteHsmClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link HsmClientCertificateNotFoundFault} (client fault)
 *
 * There is no Amazon Redshift HSM client certificate with the specified identifier.
 *
 * @throws {@link InvalidHsmClientCertificateStateFault} (client fault)
 *
 * The specified HSM client certificate is not in the `available` state, or it is still in use by one or more Amazon Redshift clusters.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class DeleteHsmClientCertificateCommand extends command<DeleteHsmClientCertificateCommandInput, DeleteHsmClientCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteHsmClientCertificate",
  DeleteHsmClientCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHsmClientCertificateMessage;
      output: {};
    };
    sdk: {
      input: DeleteHsmClientCertificateCommandInput;
      output: DeleteHsmClientCertificateCommandOutput;
    };
  };
}
