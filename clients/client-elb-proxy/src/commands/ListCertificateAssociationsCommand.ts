// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCertificateAssociationsRequest, ListCertificateAssociationsResponse } from "../models/models_0";
import { ListCertificateAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCertificateAssociationsCommand}.
 */
export interface ListCertificateAssociationsCommandInput extends ListCertificateAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificateAssociationsCommand}.
 */
export interface ListCertificateAssociationsCommandOutput extends ListCertificateAssociationsResponse, __MetadataBearer {}

/**
 * Lists the ACM certificate associations for the specified proxy.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ELBProxyClient, ListCertificateAssociationsCommand } from "@aws-sdk/client-elb-proxy"; // ES Modules import
 * // const { ELBProxyClient, ListCertificateAssociationsCommand } = require("@aws-sdk/client-elb-proxy"); // CommonJS import
 * // import type { ELBProxyClientConfig } from "@aws-sdk/client-elb-proxy";
 * const config = {}; // type is ELBProxyClientConfig
 * const client = new ELBProxyClient(config);
 * const input = { // ListCertificateAssociationsRequest
 *   proxyIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCertificateAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificateAssociationsResponse
 * //   items: [ // CertificateAssociationList // required
 * //     { // CertificateAssociation
 * //       certificateArn: "STRING_VALUE", // required
 * //       status: { // CertificateAssociationStatus
 * //         code: "associate-in-progress" || "active" || "associate-failed" || "disassociate-in-progress" || "disassociated", // required
 * //         reasons: [ // CertificateAssociationStatusReasonList // required
 * //           { // CertificateAssociationStatusReason
 * //             code: "STRING_VALUE", // required
 * //             message: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCertificateAssociationsCommandInput - {@link ListCertificateAssociationsCommandInput}
 * @returns {@link ListCertificateAssociationsCommandOutput}
 * @see {@link ListCertificateAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListCertificateAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ELBProxyClientResolvedConfig | config} for ELBProxyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The user does not have sufficient access to perform this action.
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
 * @example To list the certificate associations for a proxy
 * ```javascript
 * // The following example lists the ACM certificates associated with the specified proxy.
 * const input = {
 *   proxyIdentifier: "arn:aws:elasticloadbalancing:us-east-1:123456789012:proxy/my-proxy:0123456789abcdef"
 * };
 * const command = new ListCertificateAssociationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       certificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *       createdAt: 1795195800,
 *       status: {
 *         code: "active",
 *         reasons:         []
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCertificateAssociationsCommand extends command<ListCertificateAssociationsCommandInput, ListCertificateAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListCertificateAssociations",
  ListCertificateAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificateAssociationsRequest;
      output: ListCertificateAssociationsResponse;
    };
    sdk: {
      input: ListCertificateAssociationsCommandInput;
      output: ListCertificateAssociationsCommandOutput;
    };
  };
}
