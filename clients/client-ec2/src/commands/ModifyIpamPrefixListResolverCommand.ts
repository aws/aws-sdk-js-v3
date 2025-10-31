// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIpamPrefixListResolverRequest, ModifyIpamPrefixListResolverResult } from "../models/models_7";
import { de_ModifyIpamPrefixListResolverCommand, se_ModifyIpamPrefixListResolverCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIpamPrefixListResolverCommand}.
 */
export interface ModifyIpamPrefixListResolverCommandInput extends ModifyIpamPrefixListResolverRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIpamPrefixListResolverCommand}.
 */
export interface ModifyIpamPrefixListResolverCommandOutput
  extends ModifyIpamPrefixListResolverResult,
    __MetadataBearer {}

/**
 * <p>Modifies an IPAM prefix list resolver. You can update the description and CIDR selection rules. Changes to rules will trigger re-evaluation and potential updates to associated prefix lists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIpamPrefixListResolverCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIpamPrefixListResolverCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIpamPrefixListResolverRequest
 *   DryRun: true || false,
 *   IpamPrefixListResolverId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Rules: [ // IpamPrefixListResolverRuleRequestSet
 *     { // IpamPrefixListResolverRuleRequest
 *       RuleType: "static-cidr" || "ipam-resource-cidr" || "ipam-pool-cidr", // required
 *       StaticCidr: "STRING_VALUE",
 *       IpamScopeId: "STRING_VALUE",
 *       ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool" || "eni",
 *       Conditions: [ // IpamPrefixListResolverRuleConditionRequestSet
 *         { // IpamPrefixListResolverRuleConditionRequest
 *           Operation: "equals" || "not-equals" || "subnet-of", // required
 *           IpamPoolId: "STRING_VALUE",
 *           ResourceId: "STRING_VALUE",
 *           ResourceOwner: "STRING_VALUE",
 *           ResourceRegion: "STRING_VALUE",
 *           ResourceTag: { // RequestIpamResourceTag
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *           },
 *           Cidr: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new ModifyIpamPrefixListResolverCommand(input);
 * const response = await client.send(command);
 * // { // ModifyIpamPrefixListResolverResult
 * //   IpamPrefixListResolver: { // IpamPrefixListResolver
 * //     OwnerId: "STRING_VALUE",
 * //     IpamPrefixListResolverId: "STRING_VALUE",
 * //     IpamPrefixListResolverArn: "STRING_VALUE",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AddressFamily: "ipv4" || "ipv6",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastVersionCreationStatus: "pending" || "success" || "failure",
 * //     LastVersionCreationStatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyIpamPrefixListResolverCommandInput - {@link ModifyIpamPrefixListResolverCommandInput}
 * @returns {@link ModifyIpamPrefixListResolverCommandOutput}
 * @see {@link ModifyIpamPrefixListResolverCommandInput} for command's `input` shape.
 * @see {@link ModifyIpamPrefixListResolverCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIpamPrefixListResolverCommand extends $Command
  .classBuilder<
    ModifyIpamPrefixListResolverCommandInput,
    ModifyIpamPrefixListResolverCommandOutput,
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
  .s("AmazonEC2", "ModifyIpamPrefixListResolver", {})
  .n("EC2Client", "ModifyIpamPrefixListResolverCommand")
  .f(void 0, void 0)
  .ser(se_ModifyIpamPrefixListResolverCommand)
  .de(de_ModifyIpamPrefixListResolverCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIpamPrefixListResolverRequest;
      output: ModifyIpamPrefixListResolverResult;
    };
    sdk: {
      input: ModifyIpamPrefixListResolverCommandInput;
      output: ModifyIpamPrefixListResolverCommandOutput;
    };
  };
}
