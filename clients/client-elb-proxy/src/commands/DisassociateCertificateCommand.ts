// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateCertificateRequest, DisassociateCertificateResponse } from "../models/models_0";
import { DisassociateCertificate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateCertificateCommand}.
 */
export interface DisassociateCertificateCommandInput extends DisassociateCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateCertificateCommand}.
 */
export interface DisassociateCertificateCommandOutput extends DisassociateCertificateResponse, __MetadataBearer {}

/**
 * Disassociates an ACM certificate from the specified proxy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, DisassociateCertificateCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, DisassociateCertificateCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // DisassociateCertificateRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   certificateIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DisassociateCertificateCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateCertificateResponse
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
 * @param DisassociateCertificateCommandInput - {@link DisassociateCertificateCommandInput}
 * @returns {@link DisassociateCertificateCommandOutput}
 * @see {@link DisassociateCertificateCommandInput} for command's `input` shape.
 * @see {@link DisassociateCertificateCommandOutput} for command's `response` shape.
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
 * @example To disassociate a certificate from a proxy
 * ```javascript
 * // The following example disassociates the specified ACM certificate from the specified proxy.
 * const input = {
 *   certificateIdentifier: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new DisassociateCertificateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   certificateAssociation: {
 *     certificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *     createdAt: 1795195800,
 *     status: {
 *       code: "disassociate-in-progress",
 *       reasons:       []
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateCertificateCommand extends command<DisassociateCertificateCommandInput, DisassociateCertificateCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateCertificate",
  DisassociateCertificate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateCertificateRequest;
      output: DisassociateCertificateResponse;
    };
    sdk: {
      input: DisassociateCertificateCommandInput;
      output: DisassociateCertificateCommandOutput;
    };
  };
}
