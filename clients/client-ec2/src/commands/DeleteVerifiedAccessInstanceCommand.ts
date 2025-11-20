// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVerifiedAccessInstanceRequest, DeleteVerifiedAccessInstanceResult } from "../models/models_3";
import { DeleteVerifiedAccessInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVerifiedAccessInstanceCommand}.
 */
export interface DeleteVerifiedAccessInstanceCommandInput extends DeleteVerifiedAccessInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVerifiedAccessInstanceCommand}.
 */
export interface DeleteVerifiedAccessInstanceCommandOutput
  extends DeleteVerifiedAccessInstanceResult,
    __MetadataBearer {}

/**
 * <p>Delete an Amazon Web Services Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVerifiedAccessInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVerifiedAccessInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteVerifiedAccessInstanceRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteVerifiedAccessInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVerifiedAccessInstanceResult
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
 * @param DeleteVerifiedAccessInstanceCommandInput - {@link DeleteVerifiedAccessInstanceCommandInput}
 * @returns {@link DeleteVerifiedAccessInstanceCommandOutput}
 * @see {@link DeleteVerifiedAccessInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteVerifiedAccessInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteVerifiedAccessInstanceCommand extends $Command
  .classBuilder<
    DeleteVerifiedAccessInstanceCommandInput,
    DeleteVerifiedAccessInstanceCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteVerifiedAccessInstance", {})
  .n("EC2Client", "DeleteVerifiedAccessInstanceCommand")
  .sc(DeleteVerifiedAccessInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVerifiedAccessInstanceRequest;
      output: DeleteVerifiedAccessInstanceResult;
    };
    sdk: {
      input: DeleteVerifiedAccessInstanceCommandInput;
      output: DeleteVerifiedAccessInstanceCommandOutput;
    };
  };
}
