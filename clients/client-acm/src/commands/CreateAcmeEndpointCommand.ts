// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { CreateAcmeEndpointRequest, CreateAcmeEndpointResponse } from "../models/models_0";
import { CreateAcmeEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAcmeEndpointCommand}.
 */
export interface CreateAcmeEndpointCommandInput extends CreateAcmeEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateAcmeEndpointCommand}.
 */
export interface CreateAcmeEndpointCommandOutput extends CreateAcmeEndpointResponse, __MetadataBearer {}

/**
 * Creates an ACME endpoint, which is a managed ACME server with a unique endpoint URL. After creation, ACME clients can use the endpoint URL to automate certificate issuance using the ACME protocol.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, CreateAcmeEndpointCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, CreateAcmeEndpointCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // CreateAcmeEndpointRequest
 *   IdempotencyToken: "STRING_VALUE",
 *   AuthorizationBehavior: "PRE_APPROVED", // required
 *   Contact: "REQUIRED" || "NOT_REQUIRED",
 *   CertificateAuthority: { // CertificateAuthority Union: only one key present
 *     PublicCertificateAuthority: { // PublicCertificateAuthority
 *       AllowedKeyAlgorithms: [ // PublicKeyAlgorithmList
 *         "RSA_2048" || "EC_prime256v1" || "EC_secp384r1",
 *       ],
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   CertificateTags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateAcmeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateAcmeEndpointResponse
 * //   AcmeEndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAcmeEndpointCommandInput - {@link CreateAcmeEndpointCommandInput}
 * @returns {@link CreateAcmeEndpointCommandOutput}
 * @see {@link CreateAcmeEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateAcmeEndpointCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service quota has been exceeded.
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
export class CreateAcmeEndpointCommand extends command<CreateAcmeEndpointCommandInput, CreateAcmeEndpointCommandOutput>(
  _ep1,
  _mw0,
  "CreateAcmeEndpoint",
  CreateAcmeEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAcmeEndpointRequest;
      output: CreateAcmeEndpointResponse;
    };
    sdk: {
      input: CreateAcmeEndpointCommandInput;
      output: CreateAcmeEndpointCommandOutput;
    };
  };
}
