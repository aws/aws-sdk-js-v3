// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DescribeAcmeEndpointRequest, DescribeAcmeEndpointResponse } from "../models/models_0";
import { DescribeAcmeEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAcmeEndpointCommand}.
 */
export interface DescribeAcmeEndpointCommandInput extends DescribeAcmeEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAcmeEndpointCommand}.
 */
export interface DescribeAcmeEndpointCommandOutput extends DescribeAcmeEndpointResponse, __MetadataBearer {}

/**
 * <p>Returns detailed metadata about the specified ACME endpoint, including its status, URL, authorization behavior, and certificate authority configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, DescribeAcmeEndpointCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, DescribeAcmeEndpointCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // DescribeAcmeEndpointRequest
 *   AcmeEndpointArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAcmeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAcmeEndpointResponse
 * //   AcmeEndpoint: { // AcmeEndpoint
 * //     AcmeEndpointArn: "STRING_VALUE",
 * //     EndpointUrl: "STRING_VALUE",
 * //     Status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     FailureReason: "STRING_VALUE",
 * //     AuthorizationBehavior: "PRE_APPROVED",
 * //     Contact: "REQUIRED" || "NOT_REQUIRED",
 * //     CertificateAuthority: { // CertificateAuthority Union: only one key present
 * //       PublicCertificateAuthority: { // PublicCertificateAuthority
 * //         AllowedKeyAlgorithms: [ // PublicKeyAlgorithmList
 * //           "RSA_2048" || "EC_prime256v1" || "EC_secp384r1",
 * //         ],
 * //       },
 * //     },
 * //     CertificateTags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAcmeEndpointCommandInput - {@link DescribeAcmeEndpointCommandInput}
 * @returns {@link DescribeAcmeEndpointCommandOutput}
 * @see {@link DescribeAcmeEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeAcmeEndpointCommandOutput} for command's `response` shape.
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
export class DescribeAcmeEndpointCommand extends command<DescribeAcmeEndpointCommandInput, DescribeAcmeEndpointCommandOutput>(
  _ep1,
  _mw0,
  "DescribeAcmeEndpoint",
  DescribeAcmeEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAcmeEndpointRequest;
      output: DescribeAcmeEndpointResponse;
    };
    sdk: {
      input: DescribeAcmeEndpointCommandInput;
      output: DescribeAcmeEndpointCommandOutput;
    };
  };
}
