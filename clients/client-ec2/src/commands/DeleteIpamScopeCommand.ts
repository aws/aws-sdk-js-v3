// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteIpamScopeRequest, DeleteIpamScopeResult } from "../models/models_2";
import { DeleteIpamScope } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpamScopeCommand}.
 */
export interface DeleteIpamScopeCommandInput extends DeleteIpamScopeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamScopeCommand}.
 */
export interface DeleteIpamScopeCommandOutput extends DeleteIpamScopeResult, __MetadataBearer {}

/**
 * <p>Delete the scope for an IPAM. You cannot delete the default scopes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-scope-ipam.html">Delete a scope</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamScopeRequest
 *   DryRun: true || false,
 *   IpamScopeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamScopeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamScopeResult
 * //   IpamScope: { // IpamScope
 * //     OwnerId: "STRING_VALUE",
 * //     IpamScopeId: "STRING_VALUE",
 * //     IpamScopeArn: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     IpamScopeType: "public" || "private",
 * //     IsDefault: true || false,
 * //     Description: "STRING_VALUE",
 * //     PoolCount: Number("int"),
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ExternalAuthorityConfiguration: { // IpamScopeExternalAuthorityConfiguration
 * //       Type: "infoblox",
 * //       ExternalResourceIdentifier: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteIpamScopeCommandInput - {@link DeleteIpamScopeCommandInput}
 * @returns {@link DeleteIpamScopeCommandOutput}
 * @see {@link DeleteIpamScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteIpamScopeCommand extends $Command
  .classBuilder<
    DeleteIpamScopeCommandInput,
    DeleteIpamScopeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteIpamScope", {})
  .n("EC2Client", "DeleteIpamScopeCommand")
  .sc(DeleteIpamScope)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamScopeRequest;
      output: DeleteIpamScopeResult;
    };
    sdk: {
      input: DeleteIpamScopeCommandInput;
      output: DeleteIpamScopeCommandOutput;
    };
  };
}
