// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHsmClientCertificateMessage } from "../models/models_0";
import { de_DeleteHsmClientCertificateCommand, se_DeleteHsmClientCertificateCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the specified HSM client certificate.</p>
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
 *  <p>There is no Amazon Redshift HSM client certificate with the specified
 *             identifier.</p>
 *
 * @throws {@link InvalidHsmClientCertificateStateFault} (client fault)
 *  <p>The specified HSM client certificate is not in the <code>available</code> state, or
 *             it is still in use by one or more Amazon Redshift clusters.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteHsmClientCertificateCommand extends $Command
  .classBuilder<
    DeleteHsmClientCertificateCommandInput,
    DeleteHsmClientCertificateCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DeleteHsmClientCertificate", {})
  .n("RedshiftClient", "DeleteHsmClientCertificateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteHsmClientCertificateCommand)
  .de(de_DeleteHsmClientCertificateCommand)
  .build() {
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
