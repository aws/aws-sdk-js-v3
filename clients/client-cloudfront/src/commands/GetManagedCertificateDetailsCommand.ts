// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedCertificateDetailsRequest, GetManagedCertificateDetailsResult } from "../models/models_1";
import { GetManagedCertificateDetails$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetManagedCertificateDetailsCommand}.
 */
export interface GetManagedCertificateDetailsCommandInput extends GetManagedCertificateDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedCertificateDetailsCommand}.
 */
export interface GetManagedCertificateDetailsCommandOutput extends GetManagedCertificateDetailsResult, __MetadataBearer {}

/**
 * <p>Gets details about the CloudFront managed ACM certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetManagedCertificateDetailsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetManagedCertificateDetailsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetManagedCertificateDetailsRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetManagedCertificateDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedCertificateDetailsResult
 * //   ManagedCertificateDetails: { // ManagedCertificateDetails
 * //     CertificateArn: "STRING_VALUE",
 * //     CertificateStatus: "pending-validation" || "issued" || "inactive" || "expired" || "validation-timed-out" || "revoked" || "failed",
 * //     ValidationTokenHost: "cloudfront" || "self-hosted",
 * //     ValidationTokenDetails: [ // ValidationTokenDetailList
 * //       { // ValidationTokenDetail
 * //         Domain: "STRING_VALUE", // required
 * //         RedirectTo: "STRING_VALUE",
 * //         RedirectFrom: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedCertificateDetailsCommandInput - {@link GetManagedCertificateDetailsCommandInput}
 * @returns {@link GetManagedCertificateDetailsCommandOutput}
 * @see {@link GetManagedCertificateDetailsCommandInput} for command's `input` shape.
 * @see {@link GetManagedCertificateDetailsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetManagedCertificateDetailsCommand extends command<GetManagedCertificateDetailsCommandInput, GetManagedCertificateDetailsCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedCertificateDetails",
  GetManagedCertificateDetails$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedCertificateDetailsRequest;
      output: GetManagedCertificateDetailsResult;
    };
    sdk: {
      input: GetManagedCertificateDetailsCommandInput;
      output: GetManagedCertificateDetailsCommandOutput;
    };
  };
}
