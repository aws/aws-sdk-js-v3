// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIpamPolicyRequest, DeleteIpamPolicyResult } from "../models/models_2";
import { DeleteIpamPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIpamPolicyCommand}.
 */
export interface DeleteIpamPolicyCommandInput extends DeleteIpamPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpamPolicyCommand}.
 */
export interface DeleteIpamPolicyCommandOutput extends DeleteIpamPolicyResult, __MetadataBearer {}

/**
 * <p>Deletes an IPAM policy.</p>
 *          <p>An IPAM policy is a set of rules that define how public IPv4 addresses from IPAM pools are allocated to Amazon Web Services resources. Each rule maps an Amazon Web Services service to IPAM pools that the service will use to get IP addresses. A single policy can have multiple rules and be applied to multiple Amazon Web Services Regions. If the IPAM pool run out of addresses then the services fallback to Amazon-provided IP addresses. A policy can be applied to an individual Amazon Web Services account or an entity within Amazon Web Services Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteIpamPolicyRequest
 *   DryRun: true || false,
 *   IpamPolicyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpamPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIpamPolicyResult
 * //   IpamPolicy: { // IpamPolicy
 * //     OwnerId: "STRING_VALUE",
 * //     IpamPolicyId: "STRING_VALUE",
 * //     IpamPolicyArn: "STRING_VALUE",
 * //     IpamPolicyRegion: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     StateMessage: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IpamId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteIpamPolicyCommandInput - {@link DeleteIpamPolicyCommandInput}
 * @returns {@link DeleteIpamPolicyCommandOutput}
 * @see {@link DeleteIpamPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteIpamPolicyCommand extends $Command
  .classBuilder<
    DeleteIpamPolicyCommandInput,
    DeleteIpamPolicyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteIpamPolicy", {})
  .n("EC2Client", "DeleteIpamPolicyCommand")
  .sc(DeleteIpamPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpamPolicyRequest;
      output: DeleteIpamPolicyResult;
    };
    sdk: {
      input: DeleteIpamPolicyCommandInput;
      output: DeleteIpamPolicyCommandOutput;
    };
  };
}
