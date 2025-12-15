// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ModifyVerifiedAccessTrustProviderRequest,
  ModifyVerifiedAccessTrustProviderResult,
} from "../models/models_7";
import { ModifyVerifiedAccessTrustProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessTrustProviderCommand}.
 */
export interface ModifyVerifiedAccessTrustProviderCommandInput extends ModifyVerifiedAccessTrustProviderRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessTrustProviderCommand}.
 */
export interface ModifyVerifiedAccessTrustProviderCommandOutput
  extends ModifyVerifiedAccessTrustProviderResult,
    __MetadataBearer {}

/**
 * <p>Modifies the configuration of the specified Amazon Web Services Verified Access trust provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessTrustProviderCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessTrustProviderCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessTrustProviderRequest
 *   VerifiedAccessTrustProviderId: "STRING_VALUE", // required
 *   OidcOptions: { // ModifyVerifiedAccessTrustProviderOidcOptions
 *     Issuer: "STRING_VALUE",
 *     AuthorizationEndpoint: "STRING_VALUE",
 *     TokenEndpoint: "STRING_VALUE",
 *     UserInfoEndpoint: "STRING_VALUE",
 *     ClientId: "STRING_VALUE",
 *     ClientSecret: "STRING_VALUE",
 *     Scope: "STRING_VALUE",
 *   },
 *   DeviceOptions: { // ModifyVerifiedAccessTrustProviderDeviceOptions
 *     PublicSigningKeyUrl: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   SseSpecification: { // VerifiedAccessSseSpecificationRequest
 *     CustomerManagedKeyEnabled: true || false,
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 *   NativeApplicationOidcOptions: { // ModifyVerifiedAccessNativeApplicationOidcOptions
 *     PublicSigningKeyEndpoint: "STRING_VALUE",
 *     Issuer: "STRING_VALUE",
 *     AuthorizationEndpoint: "STRING_VALUE",
 *     TokenEndpoint: "STRING_VALUE",
 *     UserInfoEndpoint: "STRING_VALUE",
 *     ClientId: "STRING_VALUE",
 *     ClientSecret: "STRING_VALUE",
 *     Scope: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyVerifiedAccessTrustProviderCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessTrustProviderResult
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
 * // };
 *
 * ```
 *
 * @param ModifyVerifiedAccessTrustProviderCommandInput - {@link ModifyVerifiedAccessTrustProviderCommandInput}
 * @returns {@link ModifyVerifiedAccessTrustProviderCommandOutput}
 * @see {@link ModifyVerifiedAccessTrustProviderCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessTrustProviderCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVerifiedAccessTrustProviderCommand extends $Command
  .classBuilder<
    ModifyVerifiedAccessTrustProviderCommandInput,
    ModifyVerifiedAccessTrustProviderCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVerifiedAccessTrustProvider", {})
  .n("EC2Client", "ModifyVerifiedAccessTrustProviderCommand")
  .sc(ModifyVerifiedAccessTrustProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVerifiedAccessTrustProviderRequest;
      output: ModifyVerifiedAccessTrustProviderResult;
    };
    sdk: {
      input: ModifyVerifiedAccessTrustProviderCommandInput;
      output: ModifyVerifiedAccessTrustProviderCommandOutput;
    };
  };
}
