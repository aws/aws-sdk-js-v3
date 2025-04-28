// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetManagedCertificateDetailsRequest, GetManagedCertificateDetailsResult } from "../models/models_1";
import {
  de_GetManagedCertificateDetailsCommand,
  se_GetManagedCertificateDetailsCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetManagedCertificateDetailsCommandOutput
  extends GetManagedCertificateDetailsResult,
    __MetadataBearer {}

/**
 * <p>Gets details about the CloudFront managed ACM certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetManagedCertificateDetailsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetManagedCertificateDetailsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
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
export class GetManagedCertificateDetailsCommand extends $Command
  .classBuilder<
    GetManagedCertificateDetailsCommandInput,
    GetManagedCertificateDetailsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetManagedCertificateDetails", {})
  .n("CloudFrontClient", "GetManagedCertificateDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetManagedCertificateDetailsCommand)
  .de(de_GetManagedCertificateDetailsCommand)
  .build() {
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
