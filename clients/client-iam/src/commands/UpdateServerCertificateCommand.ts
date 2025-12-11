// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { UpdateServerCertificateRequest } from "../models/models_1";
import { UpdateServerCertificate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServerCertificateCommand}.
 */
export interface UpdateServerCertificateCommandInput extends UpdateServerCertificateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServerCertificateCommand}.
 */
export interface UpdateServerCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the name and/or the path of the specified server certificate stored in
 *             IAM.</p>
 *          <p>For more information about working with server certificates, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">Working
 *                 with server certificates</a> in the <i>IAM User Guide</i>. This
 *             topic also includes a list of Amazon Web Services services that can use the server certificates that
 *             you manage with IAM.</p>
 *          <important>
 *             <p>You should understand the implications of changing a server certificate's path or
 *                 name. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts">Renaming a server certificate</a> in the
 *                     <i>IAM User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>The person making the request (the principal), must have permission to change the
 *                 server certificate with the old name and the new name. For example, to change the
 *                 certificate named <code>ProductionCert</code> to <code>ProdCert</code>, the
 *                 principal must have a policy that allows them to update both certificates. If the
 *                 principal has permission to update the <code>ProductionCert</code> group, but not
 *                 the <code>ProdCert</code> certificate, then the update fails. For more information
 *                 about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a> in the <i>IAM User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateServerCertificateRequest
 *   ServerCertificateName: "STRING_VALUE", // required
 *   NewPath: "STRING_VALUE",
 *   NewServerCertificateName: "STRING_VALUE",
 * };
 * const command = new UpdateServerCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateServerCertificateCommandInput - {@link UpdateServerCertificateCommandInput}
 * @returns {@link UpdateServerCertificateCommandOutput}
 * @see {@link UpdateServerCertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class UpdateServerCertificateCommand extends $Command
  .classBuilder<
    UpdateServerCertificateCommandInput,
    UpdateServerCertificateCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UpdateServerCertificate", {})
  .n("IAMClient", "UpdateServerCertificateCommand")
  .sc(UpdateServerCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServerCertificateRequest;
      output: {};
    };
    sdk: {
      input: UpdateServerCertificateCommandInput;
      output: UpdateServerCertificateCommandOutput;
    };
  };
}
