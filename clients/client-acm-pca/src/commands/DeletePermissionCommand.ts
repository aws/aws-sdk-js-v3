// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePermissionRequest } from "../models/models_0";
import { de_DeletePermissionCommand, se_DeletePermissionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePermissionCommand}.
 */
export interface DeletePermissionCommandInput extends DeletePermissionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePermissionCommand}.
 */
export interface DeletePermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Revokes permissions on a private CA granted to the Certificate Manager (ACM) service principal
 * 			(acm.amazonaws.com). </p>
 *          <p>These permissions allow ACM to issue and renew ACM certificates that reside in the
 * 			same Amazon Web Services account as the CA. If you revoke these permissions, ACM will no longer
 * 			renew the affected certificates automatically.</p>
 *          <p>Permissions can be granted with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html">CreatePermission</a> action and
 * 			listed with the <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html">ListPermissions</a> action. </p>
 *          <p class="title">
 *             <b>About Permissions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>If the private CA and the certificates it issues reside in the same
 * 			account, you can use <code>CreatePermission</code> to grant permissions for ACM to
 * 			carry out automatic certificate renewals.</p>
 *             </li>
 *             <li>
 *                <p>For automatic certificate renewal to succeed, the ACM service principal
 * 			needs permissions to create, retrieve, and list certificates.</p>
 *             </li>
 *             <li>
 *                <p>If the private CA and the ACM certificates reside in different accounts,
 * 			then permissions cannot be used to enable automatic renewals. Instead,
 * 			the ACM certificate owner must set up a resource-based policy to enable
 * 			cross-account issuance and renewals. For more information, see
 * 			<a href="https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html">Using a Resource
 * 			Based Policy with Amazon Web Services Private CA</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, DeletePermissionCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, DeletePermissionCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * const client = new ACMPCAClient(config);
 * const input = { // DeletePermissionRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   Principal: "STRING_VALUE", // required
 *   SourceAccount: "STRING_VALUE",
 * };
 * const command = new DeletePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePermissionCommandInput - {@link DeletePermissionCommandInput}
 * @returns {@link DeletePermissionCommandOutput}
 * @see {@link DeletePermissionCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing
 * 			resource.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The state of the private CA does not allow this action to occur.</p>
 *
 * @throws {@link RequestFailedException} (client fault)
 *  <p>The request has failed for an unspecified reason.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource such as a private CA, S3 bucket, certificate, audit report, or policy
 * 			cannot be found.</p>
 *
 * @throws {@link ACMPCAServiceException}
 * <p>Base exception class for all service exceptions from ACMPCA service.</p>
 *
 * @public
 */
export class DeletePermissionCommand extends $Command
  .classBuilder<
    DeletePermissionCommandInput,
    DeletePermissionCommandOutput,
    ACMPCAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ACMPCAClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ACMPrivateCA", "DeletePermission", {})
  .n("ACMPCAClient", "DeletePermissionCommand")
  .f(void 0, void 0)
  .ser(se_DeletePermissionCommand)
  .de(de_DeletePermissionCommand)
  .build() {}
