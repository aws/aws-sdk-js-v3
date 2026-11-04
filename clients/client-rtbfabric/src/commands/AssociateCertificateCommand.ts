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
 * Associates an ACM certificate with a responder gateway.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RTBFabricClient, AssociateCertificateCommand } from "@aws-sdk/client-rtbfabric"; // ES Modules import
 * // const { RTBFabricClient, AssociateCertificateCommand } = require("@aws-sdk/client-rtbfabric"); // CommonJS import
 * // import type { RTBFabricClientConfig } from "@aws-sdk/client-rtbfabric";
 * const config = {}; // type is RTBFabricClientConfig
 * const client = new RTBFabricClient(config);
 * const input = { // AssociateCertificateRequest
 *   gatewayId: "STRING_VALUE", // required
 *   acmCertificateArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new AssociateCertificateCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCertificateResponse
 * //   gatewayId: "STRING_VALUE", // required
 * //   acmCertificateArn: "STRING_VALUE", // required
 * //   status: "PENDING_ASSOCIATION" || "ASSOCIATED" || "PENDING_DISASSOCIATION" || "DISASSOCIATED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param AssociateCertificateCommandInput - {@link AssociateCertificateCommandInput}
 * @returns {@link AssociateCertificateCommandOutput}
 * @see {@link AssociateCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateCertificateCommandOutput} for command's `response` shape.
 * @see {@link RTBFabricClientResolvedConfig | config} for RTBFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request could not be completed because you do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed because of a conflict in the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request could not be completed because of an internal server error. Try your call again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request could not be completed because the resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request could not be completed because you exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request could not be completed because it fails satisfy the constraints specified by the service.
 *
 * @throws {@link RTBFabricServiceException}
 *
 * Base exception class for all service exceptions from RTBFabric service.
 *
 * @example Associate a certificate with a responder gateway
 * ```javascript
 * // Associate an ACM certificate with a responder gateway
 * const input = {
 *   acmCertificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *   clientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   gatewayId: "rtb-gw-12345678"
 * };
 * const command = new AssociateCertificateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   acmCertificateArn: "arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012",
 *   gatewayId: "rtb-gw-12345678",
 *   status: "PENDING_ASSOCIATION"
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
