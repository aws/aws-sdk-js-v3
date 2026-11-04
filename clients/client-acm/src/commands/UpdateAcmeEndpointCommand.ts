// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { UpdateAcmeEndpointRequest } from "../models/models_0";
import { UpdateAcmeEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAcmeEndpointCommand}.
 */
export interface UpdateAcmeEndpointCommandInput extends UpdateAcmeEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAcmeEndpointCommand}.
 */
export interface UpdateAcmeEndpointCommandOutput extends __MetadataBearer {}

/**
 * Updates the configuration of an existing ACME endpoint. You can change the authorization behavior, contact requirement, or certificate authority settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, UpdateAcmeEndpointCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, UpdateAcmeEndpointCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // UpdateAcmeEndpointRequest
 *   AcmeEndpointArn: "STRING_VALUE", // required
 *   AuthorizationBehavior: "PRE_APPROVED",
 *   Contact: "REQUIRED" || "NOT_REQUIRED",
 *   CertificateAuthority: { // CertificateAuthority Union: only one key present
 *     PublicCertificateAuthority: { // PublicCertificateAuthority
 *       AllowedKeyAlgorithms: [ // PublicKeyAlgorithmList
 *         "RSA_2048" || "EC_prime256v1" || "EC_secp384r1",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateAcmeEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAcmeEndpointCommandInput - {@link UpdateAcmeEndpointCommandInput}
 * @returns {@link UpdateAcmeEndpointCommandOutput}
 * @see {@link UpdateAcmeEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateAcmeEndpointCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have access required to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You are trying to update a resource or configuration that is already being created or updated. Wait for the previous operation to finish and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified certificate cannot be found in the caller's account or the caller's account cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded a quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The supplied input failed to satisfy constraints of an Amazon Web Services service.
 *
 * @throws {@link ACMServiceException}
 *
 * Base exception class for all service exceptions from ACM service.
 *
 * @public
 */
export class UpdateAcmeEndpointCommand extends command<UpdateAcmeEndpointCommandInput, UpdateAcmeEndpointCommandOutput>(
  _ep1,
  _mw0,
  "UpdateAcmeEndpoint",
  UpdateAcmeEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAcmeEndpointRequest;
      output: {};
    };
    sdk: {
      input: UpdateAcmeEndpointCommandInput;
      output: UpdateAcmeEndpointCommandOutput;
    };
  };
}
