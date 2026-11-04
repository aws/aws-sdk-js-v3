// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCertificatesRequest, ListCertificatesResult } from "../models/models_0";
import { ListCertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandInput extends ListCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificatesCommand}.
 */
export interface ListCertificatesCommandOutput extends ListCertificatesResult, __MetadataBearer {}

/**
 * For the specified directory, lists all the certificates registered for a secure LDAP or client certificate authentication.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, ListCertificatesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, ListCertificatesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // ListCertificatesRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificatesResult
 * //   NextToken: "STRING_VALUE",
 * //   CertificatesInfo: [ // CertificatesInfo
 * //     { // CertificateInfo
 * //       CertificateId: "STRING_VALUE",
 * //       CommonName: "STRING_VALUE",
 * //       State: "Registering" || "Registered" || "RegisterFailed" || "Deregistering" || "Deregistered" || "DeregisterFailed",
 * //       ExpiryDateTime: new Date("TIMESTAMP"),
 * //       Type: "ClientCertAuth" || "ClientLDAPS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCertificatesCommandInput - {@link ListCertificatesCommandInput}
 * @returns {@link ListCertificatesCommandOutput}
 * @see {@link ListCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCertificatesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value is not valid.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class ListCertificatesCommand extends command<ListCertificatesCommandInput, ListCertificatesCommandOutput>(
  _ep0,
  _mw0,
  "ListCertificates",
  ListCertificates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificatesRequest;
      output: ListCertificatesResult;
    };
    sdk: {
      input: ListCertificatesCommandInput;
      output: ListCertificatesCommandOutput;
    };
  };
}
