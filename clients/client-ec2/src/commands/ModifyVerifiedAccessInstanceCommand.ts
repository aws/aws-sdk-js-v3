// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVerifiedAccessInstanceRequest, ModifyVerifiedAccessInstanceResult } from "../models/models_6";
import { ModifyVerifiedAccessInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessInstanceCommand}.
 */
export interface ModifyVerifiedAccessInstanceCommandInput extends ModifyVerifiedAccessInstanceRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessInstanceCommand}.
 */
export interface ModifyVerifiedAccessInstanceCommandOutput
  extends ModifyVerifiedAccessInstanceResult,
    __MetadataBearer {}

/**
 * <p>Modifies the configuration of the specified Amazon Web Services Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessInstanceRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   CidrEndpointsCustomSubDomain: "STRING_VALUE",
 * };
 * const command = new ModifyVerifiedAccessInstanceCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessInstanceResult
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
 * //     Tags: [ // TagList
 * //       { // Tag
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
 * @param ModifyVerifiedAccessInstanceCommandInput - {@link ModifyVerifiedAccessInstanceCommandInput}
 * @returns {@link ModifyVerifiedAccessInstanceCommandOutput}
 * @see {@link ModifyVerifiedAccessInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVerifiedAccessInstanceCommand extends $Command
  .classBuilder<
    ModifyVerifiedAccessInstanceCommandInput,
    ModifyVerifiedAccessInstanceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVerifiedAccessInstance", {})
  .n("EC2Client", "ModifyVerifiedAccessInstanceCommand")
  .sc(ModifyVerifiedAccessInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVerifiedAccessInstanceRequest;
      output: ModifyVerifiedAccessInstanceResult;
    };
    sdk: {
      input: ModifyVerifiedAccessInstanceCommandInput;
      output: ModifyVerifiedAccessInstanceCommandOutput;
    };
  };
}
