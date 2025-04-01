// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ExportVerifiedAccessInstanceClientConfigurationRequest,
  ExportVerifiedAccessInstanceClientConfigurationResult,
  ExportVerifiedAccessInstanceClientConfigurationResultFilterSensitiveLog,
} from "../models/models_6";
import {
  de_ExportVerifiedAccessInstanceClientConfigurationCommand,
  se_ExportVerifiedAccessInstanceClientConfigurationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportVerifiedAccessInstanceClientConfigurationCommand}.
 */
export interface ExportVerifiedAccessInstanceClientConfigurationCommandInput
  extends ExportVerifiedAccessInstanceClientConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ExportVerifiedAccessInstanceClientConfigurationCommand}.
 */
export interface ExportVerifiedAccessInstanceClientConfigurationCommandOutput
  extends ExportVerifiedAccessInstanceClientConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Exports the client configuration for a Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportVerifiedAccessInstanceClientConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportVerifiedAccessInstanceClientConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ExportVerifiedAccessInstanceClientConfigurationRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ExportVerifiedAccessInstanceClientConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ExportVerifiedAccessInstanceClientConfigurationResult
 * //   Version: "STRING_VALUE",
 * //   VerifiedAccessInstanceId: "STRING_VALUE",
 * //   Region: "STRING_VALUE",
 * //   DeviceTrustProviders: [ // DeviceTrustProviderTypeList
 * //     "jamf" || "crowdstrike" || "jumpcloud",
 * //   ],
 * //   UserTrustProvider: { // VerifiedAccessInstanceUserTrustProviderClientConfiguration
 * //     Type: "iam-identity-center" || "oidc",
 * //     Scopes: "STRING_VALUE",
 * //     Issuer: "STRING_VALUE",
 * //     AuthorizationEndpoint: "STRING_VALUE",
 * //     PublicSigningKeyEndpoint: "STRING_VALUE",
 * //     TokenEndpoint: "STRING_VALUE",
 * //     UserInfoEndpoint: "STRING_VALUE",
 * //     ClientId: "STRING_VALUE",
 * //     ClientSecret: "STRING_VALUE",
 * //     PkceEnabled: true || false,
 * //   },
 * //   OpenVpnConfigurations: [ // VerifiedAccessInstanceOpenVpnClientConfigurationList
 * //     { // VerifiedAccessInstanceOpenVpnClientConfiguration
 * //       Config: "STRING_VALUE",
 * //       Routes: [ // VerifiedAccessInstanceOpenVpnClientConfigurationRouteList
 * //         { // VerifiedAccessInstanceOpenVpnClientConfigurationRoute
 * //           Cidr: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ExportVerifiedAccessInstanceClientConfigurationCommandInput - {@link ExportVerifiedAccessInstanceClientConfigurationCommandInput}
 * @returns {@link ExportVerifiedAccessInstanceClientConfigurationCommandOutput}
 * @see {@link ExportVerifiedAccessInstanceClientConfigurationCommandInput} for command's `input` shape.
 * @see {@link ExportVerifiedAccessInstanceClientConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ExportVerifiedAccessInstanceClientConfigurationCommand extends $Command
  .classBuilder<
    ExportVerifiedAccessInstanceClientConfigurationCommandInput,
    ExportVerifiedAccessInstanceClientConfigurationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ExportVerifiedAccessInstanceClientConfiguration", {})
  .n("EC2Client", "ExportVerifiedAccessInstanceClientConfigurationCommand")
  .f(void 0, ExportVerifiedAccessInstanceClientConfigurationResultFilterSensitiveLog)
  .ser(se_ExportVerifiedAccessInstanceClientConfigurationCommand)
  .de(de_ExportVerifiedAccessInstanceClientConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportVerifiedAccessInstanceClientConfigurationRequest;
      output: ExportVerifiedAccessInstanceClientConfigurationResult;
    };
    sdk: {
      input: ExportVerifiedAccessInstanceClientConfigurationCommandInput;
      output: ExportVerifiedAccessInstanceClientConfigurationCommandOutput;
    };
  };
}
