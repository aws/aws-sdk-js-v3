// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  GetAcmeExternalAccountBindingCredentialsRequest,
  GetAcmeExternalAccountBindingCredentialsResponse,
} from "../models/models_0";
import { GetAcmeExternalAccountBindingCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAcmeExternalAccountBindingCredentialsCommand}.
 */
export interface GetAcmeExternalAccountBindingCredentialsCommandInput extends GetAcmeExternalAccountBindingCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link GetAcmeExternalAccountBindingCredentialsCommand}.
 */
export interface GetAcmeExternalAccountBindingCredentialsCommandOutput extends GetAcmeExternalAccountBindingCredentialsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by ACME clients during account registration to bind to the endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, GetAcmeExternalAccountBindingCredentialsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, GetAcmeExternalAccountBindingCredentialsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // GetAcmeExternalAccountBindingCredentialsRequest
 *   AcmeExternalAccountBindingArn: "STRING_VALUE", // required
 * };
 * const command = new GetAcmeExternalAccountBindingCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetAcmeExternalAccountBindingCredentialsResponse
 * //   KeyId: "STRING_VALUE",
 * //   MacKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAcmeExternalAccountBindingCredentialsCommandInput - {@link GetAcmeExternalAccountBindingCredentialsCommandInput}
 * @returns {@link GetAcmeExternalAccountBindingCredentialsCommandOutput}
 * @see {@link GetAcmeExternalAccountBindingCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetAcmeExternalAccountBindingCredentialsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded a quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The supplied input failed to satisfy constraints of an Amazon Web Services service.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class GetAcmeExternalAccountBindingCredentialsCommand extends command<GetAcmeExternalAccountBindingCredentialsCommandInput, GetAcmeExternalAccountBindingCredentialsCommandOutput>(
  _ep1,
  _mw0,
  "GetAcmeExternalAccountBindingCredentials",
  GetAcmeExternalAccountBindingCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAcmeExternalAccountBindingCredentialsRequest;
      output: GetAcmeExternalAccountBindingCredentialsResponse;
    };
    sdk: {
      input: GetAcmeExternalAccountBindingCredentialsCommandInput;
      output: GetAcmeExternalAccountBindingCredentialsCommandOutput;
    };
  };
}
