// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTrustStoreCertificateRequest, GetTrustStoreCertificateResponse } from "../models/models_0";
import { GetTrustStoreCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrustStoreCertificateCommand}.
 */
export interface GetTrustStoreCertificateCommandInput extends GetTrustStoreCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreCertificateCommand}.
 */
export interface GetTrustStoreCertificateCommandOutput extends GetTrustStoreCertificateResponse, __MetadataBearer {}

/**
 * Gets the trust store certificate.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetTrustStoreCertificateCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetTrustStoreCertificateCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetTrustStoreCertificateRequest
 *   trustStoreArn: "STRING_VALUE", // required
 *   thumbprint: "STRING_VALUE", // required
 * };
 * const command = new GetTrustStoreCertificateCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreCertificateResponse
 * //   trustStoreArn: "STRING_VALUE", // required
 * //   certificate: { // Certificate
 * //     thumbprint: "STRING_VALUE",
 * //     subject: "STRING_VALUE",
 * //     issuer: "STRING_VALUE",
 * //     notValidBefore: new Date("TIMESTAMP"),
 * //     notValidAfter: new Date("TIMESTAMP"),
 * //     body: new Uint8Array(),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrustStoreCertificateCommandInput - {@link GetTrustStoreCertificateCommandInput}
 * @returns {@link GetTrustStoreCertificateCommandOutput}
 * @see {@link GetTrustStoreCertificateCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreCertificateCommandOutput} for command's `response` shape.
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
export class GetTrustStoreCertificateCommand extends command<GetTrustStoreCertificateCommandInput, GetTrustStoreCertificateCommandOutput>(
  _ep0,
  _mw0,
  "GetTrustStoreCertificate",
  GetTrustStoreCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustStoreCertificateRequest;
      output: GetTrustStoreCertificateResponse;
    };
    sdk: {
      input: GetTrustStoreCertificateCommandInput;
      output: GetTrustStoreCertificateCommandOutput;
    };
  };
}
