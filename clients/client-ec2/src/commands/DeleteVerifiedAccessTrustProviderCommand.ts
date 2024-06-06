// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteVerifiedAccessTrustProviderRequest,
  DeleteVerifiedAccessTrustProviderResult,
  DeleteVerifiedAccessTrustProviderResultFilterSensitiveLog,
} from "../models/models_3";
import {
  de_DeleteVerifiedAccessTrustProviderCommand,
  se_DeleteVerifiedAccessTrustProviderCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVerifiedAccessTrustProviderCommand}.
 */
export interface DeleteVerifiedAccessTrustProviderCommandInput extends DeleteVerifiedAccessTrustProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedAccessTrustProviderCommand}.
 */
export interface DeleteVerifiedAccessTrustProviderCommandOutput
  extends DeleteVerifiedAccessTrustProviderResult,
    __MetadataBearer {}

/**
 * <p>Delete an Amazon Web Services Verified Access trust provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVerifiedAccessTrustProviderCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVerifiedAccessTrustProviderCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteVerifiedAccessTrustProviderRequest
 *   VerifiedAccessTrustProviderId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteVerifiedAccessTrustProviderCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVerifiedAccessTrustProviderResult
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
 * // };
 *
 * ```
 *
 * @param DeleteVerifiedAccessTrustProviderCommandInput - {@link DeleteVerifiedAccessTrustProviderCommandInput}
 * @returns {@link DeleteVerifiedAccessTrustProviderCommandOutput}
 * @see {@link DeleteVerifiedAccessTrustProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedAccessTrustProviderCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteVerifiedAccessTrustProviderCommand extends $Command
  .classBuilder<
    DeleteVerifiedAccessTrustProviderCommandInput,
    DeleteVerifiedAccessTrustProviderCommandOutput,
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
  .s("AmazonEC2", "DeleteVerifiedAccessTrustProvider", {})
  .n("EC2Client", "DeleteVerifiedAccessTrustProviderCommand")
  .f(void 0, DeleteVerifiedAccessTrustProviderResultFilterSensitiveLog)
  .ser(se_DeleteVerifiedAccessTrustProviderCommand)
  .de(de_DeleteVerifiedAccessTrustProviderCommand)
  .build() {}
