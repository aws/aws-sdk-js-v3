// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServerCertificateRequest, GetServerCertificateResponse } from "../models/models_0";
import { GetServerCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetServerCertificateCommand}.
 */
export interface GetServerCertificateCommandInput extends GetServerCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetServerCertificateCommand}.
 */
export interface GetServerCertificateCommandOutput extends GetServerCertificateResponse, __MetadataBearer {}

/**
 * Retrieves information about the specified server certificate stored in IAM.
 *
 * For more information about working with server certificates, see [Working with server certificates](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html) in the *IAM User Guide*. This topic includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServerCertificateCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServerCertificateCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetServerCertificateRequest
 *   ServerCertificateName: "STRING_VALUE", // required
 * };
 * const command = new GetServerCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetServerCertificateResponse
 * //   ServerCertificate: { // ServerCertificate
 * //     ServerCertificateMetadata: { // ServerCertificateMetadata
 * //       Path: "STRING_VALUE", // required
 * //       ServerCertificateName: "STRING_VALUE", // required
 * //       ServerCertificateId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       UploadDate: new Date("TIMESTAMP"),
 * //       Expiration: new Date("TIMESTAMP"),
 * //     },
 * //     CertificateBody: "STRING_VALUE", // required
 * //     CertificateChain: "STRING_VALUE",
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServerCertificateCommandInput - {@link GetServerCertificateCommandInput}
 * @returns {@link GetServerCertificateCommandOutput}
 * @see {@link GetServerCertificateCommandInput} for command's `input` shape.
 * @see {@link GetServerCertificateCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
export class GetServerCertificateCommand extends command<GetServerCertificateCommandInput, GetServerCertificateCommandOutput>(
  _ep0,
  _mw0,
  "GetServerCertificate",
  GetServerCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServerCertificateRequest;
      output: GetServerCertificateResponse;
    };
    sdk: {
      input: GetServerCertificateCommandInput;
      output: GetServerCertificateCommandOutput;
    };
  };
}
