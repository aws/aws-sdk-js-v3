// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateCertificateRequest, AssociateCertificateResponse } from "../models/models_0";
import { AssociateCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateCertificateCommand}.
 */
export interface AssociateCertificateCommandInput extends AssociateCertificateRequest {}
/**
 * @public
 *
 * The output of {@link AssociateCertificateCommand}.
 */
export interface AssociateCertificateCommandOutput extends AssociateCertificateResponse, __MetadataBearer {}

/**
 * Associates an ACM certificate with the specified Proxy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, AssociateCertificateCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, AssociateCertificateCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // AssociateCertificateRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   certificateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new AssociateCertificateCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCertificateResponse
 * //   certificateAssociation: { // CertificateAssociation
 * //     certificateArn: "STRING_VALUE", // required
 * //     status: { // CertificateAssociationStatus
 * //       code: "associate-in-progress" || "active" || "associate-failed" || "disassociate-in-progress" || "disassociated", // required
 * //       reasons: [ // CertificateAssociationStatusReasonList // required
 * //         { // CertificateAssociationStatusReason
 * //           code: "STRING_VALUE", // required
 * //           message: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateCertificateCommandInput - {@link AssociateCertificateCommandInput}
 * @returns {@link AssociateCertificateCommandOutput}
 * @see {@link AssociateCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateCertificateCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The request references a resource that does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input does not satisfy the constraints specified by an AWS service.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ELBProxyServiceException}
 * <p>Base exception class for all service exceptions from ELBProxy service.</p>
 *
 *
 * @example To associate a certificate with a proxy
 * ```javascript
 * // The following example associates the specified ACM certificate with the specified proxy.
 * const input = {
 *   certificateIdentifier: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new AssociateCertificateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   certificateAssociation: {
 *     certificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *     createdAt: 1795195800,
 *     status: {
 *       code: "associate-in-progress",
 *       reasons:       []
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateCertificateCommand extends command<AssociateCertificateCommandInput, AssociateCertificateCommandOutput>(
  _ep0,
  _mw0,
  "AssociateCertificate",
  AssociateCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateCertificateRequest;
      output: AssociateCertificateResponse;
    };
    sdk: {
      input: AssociateCertificateCommandInput;
      output: AssociateCertificateCommandOutput;
    };
  };
}
