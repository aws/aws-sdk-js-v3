// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServerCertificatesRequest, ListServerCertificatesResponse } from "../models/models_0";
import { ListServerCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServerCertificatesCommand}.
 */
export interface ListServerCertificatesCommandInput extends ListServerCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListServerCertificatesCommand}.
 */
export interface ListServerCertificatesCommandOutput extends ListServerCertificatesResponse, __MetadataBearer {}

/**
 * Lists the server certificates stored in IAM that have the specified path prefix. If none exist, the operation returns an empty list.
 *
 * You can paginate the results using the `MaxItems` and `Marker` parameters.
 *
 * For more information about working with server certificates, see [Working with server certificates](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html) in the *IAM User Guide*. This topic also includes a list of Amazon Web Services services that can use the server certificates that you manage with IAM.
 *
 * > **Note:** IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a servercertificate, see [GetServerCertificate](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServerCertificate.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServerCertificatesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServerCertificatesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListServerCertificatesRequest
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListServerCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListServerCertificatesResponse
 * //   ServerCertificateMetadataList: [ // serverCertificateMetadataListType // required
 * //     { // ServerCertificateMetadata
 * //       Path: "STRING_VALUE", // required
 * //       ServerCertificateName: "STRING_VALUE", // required
 * //       ServerCertificateId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       UploadDate: new Date("TIMESTAMP"),
 * //       Expiration: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServerCertificatesCommandInput - {@link ListServerCertificatesCommandInput}
 * @returns {@link ListServerCertificatesCommandOutput}
 * @see {@link ListServerCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListServerCertificatesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
export class ListServerCertificatesCommand extends command<ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput>(
  _ep0,
  _mw0,
  "ListServerCertificates",
  ListServerCertificates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServerCertificatesRequest;
      output: ListServerCertificatesResponse;
    };
    sdk: {
      input: ListServerCertificatesCommandInput;
      output: ListServerCertificatesCommandOutput;
    };
  };
}
