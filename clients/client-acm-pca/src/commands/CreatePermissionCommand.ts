// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePermissionRequest } from "../models/models_0";
import { CreatePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePermissionCommand}.
 */
export interface CreatePermissionCommandInput extends CreatePermissionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePermissionCommand}.
 */
export interface CreatePermissionCommandOutput extends __MetadataBearer {}

/**
 * Grants one or more permissions on a private CA to the Certificate Manager (ACM) service principal (`acm.amazonaws.com`). These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.
 *
 * You can list current permissions with the [ListPermissions](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html) action and revoke them with the [DeletePermission](https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html) action.
 *
 * **About Permissions**
 *
 * - If the private CA and the certificates it issues reside in the same account, you can use `CreatePermission` to grant permissions for ACM to carry out automatic certificate renewals.
 * - For automatic certificate renewal to succeed, the ACM service principal needs permissions to create, retrieve, and list certificates.
 * - If the private CA and the ACM certificates reside in different accounts, then permissions cannot be used to enable automatic renewals. Instead, the ACM certificate owner must set up a resource-based policy to enable cross-account issuance and renewals. For more information, see [Using a Resource Based Policy with Amazon Web Services Private CA](https://docs.aws.amazon.com/privateca/latest/userguide/pca-rbp.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMPCAClient, CreatePermissionCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, CreatePermissionCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // CreatePermissionRequest
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 *   Principal: "STRING_VALUE", // required
 *   SourceAccount: "STRING_VALUE",
 *   Actions: [ // ActionList // required
 *     "IssueCertificate" || "GetCertificate" || "ListPermissions",
 *   ],
 * };
 * const command = new CreatePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreatePermissionCommandInput - {@link CreatePermissionCommandInput}
 * @returns {@link CreatePermissionCommandOutput}
 * @see {@link CreatePermissionCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The state of the private CA does not allow this action to occur.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Web Services Private CA quota has been exceeded. See the exception message returned to determine the quota that was exceeded.
 *
 * @throws {@link PermissionAlreadyExistsException} (client fault)
 *
 * The designated permission has already been given to the user.
 *
 * @throws {@link RequestFailedException} (client fault)
 *
 * The request has failed for an unspecified reason.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource such as a private CA, S3 bucket, certificate, audit report, or policy cannot be found.
 *
 * @throws {@link ACMPCAServiceException}
 *
 * Base exception class for all service exceptions from ACMPCA service.
 *
 * @public
 */
export class CreatePermissionCommand extends command<CreatePermissionCommandInput, CreatePermissionCommandOutput>(
  _ep0,
  _mw0,
  "CreatePermission",
  CreatePermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePermissionRequest;
      output: {};
    };
    sdk: {
      input: CreatePermissionCommandInput;
      output: CreatePermissionCommandOutput;
    };
  };
}
