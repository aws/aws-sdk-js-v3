// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AttachVerifiedAccessTrustProviderRequest,
  AttachVerifiedAccessTrustProviderResult,
  AttachVerifiedAccessTrustProviderResultFilterSensitiveLog,
} from "../models/models_0";
import {
  de_AttachVerifiedAccessTrustProviderCommand,
  se_AttachVerifiedAccessTrustProviderCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachVerifiedAccessTrustProviderCommand}.
 */
export interface AttachVerifiedAccessTrustProviderCommandInput extends AttachVerifiedAccessTrustProviderRequest {}
/**
 * @public
 *
 * The output of {@link AttachVerifiedAccessTrustProviderCommand}.
 */
export interface AttachVerifiedAccessTrustProviderCommandOutput
  extends AttachVerifiedAccessTrustProviderResult,
    __MetadataBearer {}

/**
 * <p>Attaches the specified Amazon Web Services Verified Access trust provider to the specified Amazon Web Services Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachVerifiedAccessTrustProviderCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachVerifiedAccessTrustProviderCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AttachVerifiedAccessTrustProviderRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   VerifiedAccessTrustProviderId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new AttachVerifiedAccessTrustProviderCommand(input);
 * const response = await client.send(command);
 * // { // AttachVerifiedAccessTrustProviderResult
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
 * //   },
 * // };
 *
 * ```
 *
 * @param AttachVerifiedAccessTrustProviderCommandInput - {@link AttachVerifiedAccessTrustProviderCommandInput}
 * @returns {@link AttachVerifiedAccessTrustProviderCommandOutput}
 * @see {@link AttachVerifiedAccessTrustProviderCommandInput} for command's `input` shape.
 * @see {@link AttachVerifiedAccessTrustProviderCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AttachVerifiedAccessTrustProviderCommand extends $Command
  .classBuilder<
    AttachVerifiedAccessTrustProviderCommandInput,
    AttachVerifiedAccessTrustProviderCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AttachVerifiedAccessTrustProvider", {})
  .n("EC2Client", "AttachVerifiedAccessTrustProviderCommand")
  .f(void 0, AttachVerifiedAccessTrustProviderResultFilterSensitiveLog)
  .ser(se_AttachVerifiedAccessTrustProviderCommand)
  .de(de_AttachVerifiedAccessTrustProviderCommand)
  .build() {}
