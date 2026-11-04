// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateServerCertificateRequest } from "../models/models_1";
import { UpdateServerCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the name and/or the path of the specified server certificate stored in IAM.
 *
 * For more information about working with server certificates, see [Working with server certificates](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html) in the *IAM User Guide*. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.
 *
 * > **Important:** You should understand the implications of changing a server certificate's path or name. For more information, see [Renaming a server certificate](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs_manage.html#RenamingServerCerts) in the *IAM User Guide*.
 *
 * > **Note:** The person making the request (the principal), must have permission to change the server certificate with the old name and the new name. For example, to change the certificate named `ProductionCert` to `ProdCert`, the principal must have a policy that allows them to update both certificates. If the principal has permission to update the `ProductionCert` group, but not the `ProdCert` certificate, then the update fails. For more information about permissions, see [Access management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
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
 *
 * The request was rejected because it attempted to create a resource that already exists.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class UpdateServerCertificateCommand extends command<UpdateServerCertificateCommandInput, UpdateServerCertificateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateServerCertificate",
  UpdateServerCertificate$
) {
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
