// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPermissionsRequest, ListPermissionsResponse } from "../models/models_0";
import { ListPermissions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPermissionsCommand}.
 */
export interface ListPermissionsCommandInput extends ListPermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionsCommand}.
 */
export interface ListPermissionsCommandOutput extends ListPermissionsResponse, __MetadataBearer {}

/**
 * List all permissions on a private CA, if any, granted to the Certificate Manager (ACM) service principal (acm.amazonaws.com).
 *
 * These permissions allow ACM to issue and renew ACM certificates that reside in the same Amazon Web Services account as the CA.
 *
 * Permissions can be granted with the [CreatePermission](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreatePermission.html) action and revoked with the [DeletePermission](https://docs.aws.amazon.com/privateca/latest/APIReference/API_DeletePermission.html) action.
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
 * import { ACMPCAClient, ListPermissionsCommand } from "@aws-sdk/client-acm-pca"; // ES Modules import
 * // const { ACMPCAClient, ListPermissionsCommand } = require("@aws-sdk/client-acm-pca"); // CommonJS import
 * // import type { ACMPCAClientConfig } from "@aws-sdk/client-acm-pca";
 * const config = {}; // type is ACMPCAClientConfig
 * const client = new ACMPCAClient(config);
 * const input = { // ListPermissionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   CertificateAuthorityArn: "STRING_VALUE", // required
 * };
 * const command = new ListPermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Permissions: [ // PermissionList
 * //     { // Permission
 * //       CertificateAuthorityArn: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       Principal: "STRING_VALUE",
 * //       SourceAccount: "STRING_VALUE",
 * //       Actions: [ // ActionList
 * //         "IssueCertificate" || "GetCertificate" || "ListPermissions",
 * //       ],
 * //       Policy: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPermissionsCommandInput - {@link ListPermissionsCommandInput}
 * @returns {@link ListPermissionsCommandOutput}
 * @see {@link ListPermissionsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionsCommandOutput} for command's `response` shape.
 * @see {@link ACMPCAClientResolvedConfig | config} for ACMPCAClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The requested Amazon Resource Name (ARN) does not refer to an existing resource.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The token specified in the `NextToken` argument is not valid. Use the token returned from your previous call to [ListCertificateAuthorities](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListCertificateAuthorities.html).
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The state of the private CA does not allow this action to occur.
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
export class ListPermissionsCommand extends command<ListPermissionsCommandInput, ListPermissionsCommandOutput>(
  _ep0,
  _mw0,
  "ListPermissions",
  ListPermissions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionsRequest;
      output: ListPermissionsResponse;
    };
    sdk: {
      input: ListPermissionsCommandInput;
      output: ListPermissionsCommandOutput;
    };
  };
}
