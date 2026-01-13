// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DetachVerifiedAccessTrustProviderRequest,
  DetachVerifiedAccessTrustProviderResult,
} from "../models/models_5";
import { DetachVerifiedAccessTrustProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachVerifiedAccessTrustProviderCommand}.
 */
export interface DetachVerifiedAccessTrustProviderCommandInput extends DetachVerifiedAccessTrustProviderRequest {}
/**
 * @public
 *
 * The output of {@link DetachVerifiedAccessTrustProviderCommand}.
 */
export interface DetachVerifiedAccessTrustProviderCommandOutput extends DetachVerifiedAccessTrustProviderResult, __MetadataBearer {}

/**
 * <p>Detaches the specified Amazon Web Services Verified Access trust provider from the specified Amazon Web Services Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachVerifiedAccessTrustProviderCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachVerifiedAccessTrustProviderCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DetachVerifiedAccessTrustProviderRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   VerifiedAccessTrustProviderId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DetachVerifiedAccessTrustProviderCommand(input);
 * const response = await client.send(command);
 * // { // DetachVerifiedAccessTrustProviderResult
 * //   VerifiedAccessTrustProvider: { // VerifiedAccessTrustProvider
 * //     VerifiedAccessTrustProviderId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     TrustProviderType: "user" || "device",
 * //     UserTrustProviderType: "iam-identity-center" || "oidc",
 * //     DeviceTrustProviderType: "jamf" || "crowdstrike" || "jumpcloud",
 * //     OidcOptions: { // OidcOptions
 * //       Issuer: "STRING_VALUE",
 * //       AuthorizationEndpoint: "STRING_VALUE",
 * //       TokenEndpoint: "STRING_VALUE",
 * //       UserInfoEndpoint: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //       ClientSecret: "STRING_VALUE",
 * //       Scope: "STRING_VALUE",
 * //     },
 * //     DeviceOptions: { // DeviceOptions
 * //       TenantId: "STRING_VALUE",
 * //       PublicSigningKeyUrl: "STRING_VALUE",
 * //     },
 * //     PolicyReferenceName: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     LastUpdatedTime: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //       CustomerManagedKeyEnabled: true || false,
 * //       KmsKeyArn: "STRING_VALUE",
 * //     },
 * //     NativeApplicationOidcOptions: { // NativeApplicationOidcOptions
 * //       PublicSigningKeyEndpoint: "STRING_VALUE",
 * //       Issuer: "STRING_VALUE",
 * //       AuthorizationEndpoint: "STRING_VALUE",
 * //       TokenEndpoint: "STRING_VALUE",
 * //       UserInfoEndpoint: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //       Scope: "STRING_VALUE",
 * //     },
 * //   },
 * //   VerifiedAccessInstance: { // VerifiedAccessInstance
 * //     VerifiedAccessInstanceId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VerifiedAccessTrustProviders: [ // VerifiedAccessTrustProviderCondensedList
 * //       { // VerifiedAccessTrustProviderCondensed
 * //         VerifiedAccessTrustProviderId: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         TrustProviderType: "user" || "device",
 * //         UserTrustProviderType: "iam-identity-center" || "oidc",
 * //         DeviceTrustProviderType: "jamf" || "crowdstrike" || "jumpcloud",
 * //       },
 * //     ],
 * //     CreationTime: "STRING_VALUE",
 * //     LastUpdatedTime: "STRING_VALUE",
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FipsEnabled: true || false,
 * //     CidrEndpointsCustomSubDomain: { // VerifiedAccessInstanceCustomSubDomain
 * //       SubDomain: "STRING_VALUE",
 * //       Nameservers: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DetachVerifiedAccessTrustProviderCommandInput - {@link DetachVerifiedAccessTrustProviderCommandInput}
 * @returns {@link DetachVerifiedAccessTrustProviderCommandOutput}
 * @see {@link DetachVerifiedAccessTrustProviderCommandInput} for command's `input` shape.
 * @see {@link DetachVerifiedAccessTrustProviderCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DetachVerifiedAccessTrustProviderCommand extends $Command
  .classBuilder<
    DetachVerifiedAccessTrustProviderCommandInput,
    DetachVerifiedAccessTrustProviderCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DetachVerifiedAccessTrustProvider", {})
  .n("EC2Client", "DetachVerifiedAccessTrustProviderCommand")
  .sc(DetachVerifiedAccessTrustProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachVerifiedAccessTrustProviderRequest;
      output: DetachVerifiedAccessTrustProviderResult;
    };
    sdk: {
      input: DetachVerifiedAccessTrustProviderCommandInput;
      output: DetachVerifiedAccessTrustProviderCommandOutput;
    };
  };
}
