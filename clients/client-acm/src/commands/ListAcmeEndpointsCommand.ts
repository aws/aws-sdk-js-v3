// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ListAcmeEndpointsRequest, ListAcmeEndpointsResponse } from "../models/models_0";
import { ListAcmeEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAcmeEndpointsCommand}.
 */
export interface ListAcmeEndpointsCommandInput extends ListAcmeEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListAcmeEndpointsCommand}.
 */
export interface ListAcmeEndpointsCommandOutput extends ListAcmeEndpointsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of ACME endpoints in your account. Use this operation to view all configured ACME endpoints and their current status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ListAcmeEndpointsCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ListAcmeEndpointsCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ListAcmeEndpointsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAcmeEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListAcmeEndpointsResponse
 * //   AcmeEndpoints: [ // AcmeEndpointList
 * //     { // AcmeEndpointSummary
 * //       AcmeEndpointArn: "STRING_VALUE",
 * //       EndpointUrl: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //       FailureReason: "STRING_VALUE",
 * //       AuthorizationBehavior: "PRE_APPROVED",
 * //       Contact: "REQUIRED" || "NOT_REQUIRED",
 * //       CertificateAuthority: { // CertificateAuthority Union: only one key present
 * //         PublicCertificateAuthority: { // PublicCertificateAuthority
 * //           AllowedKeyAlgorithms: [ // PublicKeyAlgorithmList
 * //             "RSA_2048" || "EC_prime256v1" || "EC_secp384r1",
 * //           ],
 * //         },
 * //       },
 * //       CertificateTags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAcmeEndpointsCommandInput - {@link ListAcmeEndpointsCommandInput}
 * @returns {@link ListAcmeEndpointsCommandOutput}
 * @see {@link ListAcmeEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListAcmeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have access required to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
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
export class ListAcmeEndpointsCommand extends command<ListAcmeEndpointsCommandInput, ListAcmeEndpointsCommandOutput>(
  _ep1,
  _mw0,
  "ListAcmeEndpoints",
  ListAcmeEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAcmeEndpointsRequest;
      output: ListAcmeEndpointsResponse;
    };
    sdk: {
      input: ListAcmeEndpointsCommandInput;
      output: ListAcmeEndpointsCommandOutput;
    };
  };
}
