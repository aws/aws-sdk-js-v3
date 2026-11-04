// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTrustStoreCertificatesRequest, ListTrustStoreCertificatesResponse } from "../models/models_0";
import { ListTrustStoreCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrustStoreCertificatesCommand}.
 */
export interface ListTrustStoreCertificatesCommandInput extends ListTrustStoreCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustStoreCertificatesCommand}.
 */
export interface ListTrustStoreCertificatesCommandOutput extends ListTrustStoreCertificatesResponse, __MetadataBearer {}

/**
 * Retrieves a list of trust store certificates.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListTrustStoreCertificatesCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListTrustStoreCertificatesCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListTrustStoreCertificatesRequest
 *   trustStoreArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTrustStoreCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustStoreCertificatesResponse
 * //   certificateList: [ // CertificateSummaryList
 * //     { // CertificateSummary
 * //       thumbprint: "STRING_VALUE",
 * //       subject: "STRING_VALUE",
 * //       issuer: "STRING_VALUE",
 * //       notValidBefore: new Date("TIMESTAMP"),
 * //       notValidAfter: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   trustStoreArn: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrustStoreCertificatesCommandInput - {@link ListTrustStoreCertificatesCommandInput}
 * @returns {@link ListTrustStoreCertificatesCommandOutput}
 * @see {@link ListTrustStoreCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListTrustStoreCertificatesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class ListTrustStoreCertificatesCommand extends command<ListTrustStoreCertificatesCommandInput, ListTrustStoreCertificatesCommandOutput>(
  _ep0,
  _mw0,
  "ListTrustStoreCertificates",
  ListTrustStoreCertificates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrustStoreCertificatesRequest;
      output: ListTrustStoreCertificatesResponse;
    };
    sdk: {
      input: ListTrustStoreCertificatesCommandInput;
      output: ListTrustStoreCertificatesCommandOutput;
    };
  };
}
