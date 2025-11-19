// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIdentityIdFormatRequest, DescribeIdentityIdFormatResult } from "../models/models_3";
import { DescribeIdentityIdFormat } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityIdFormatCommand}.
 */
export interface DescribeIdentityIdFormatCommandInput extends DescribeIdentityIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityIdFormatCommand}.
 */
export interface DescribeIdentityIdFormatCommandOutput extends DescribeIdentityIdFormatResult, __MetadataBearer {}

/**
 * <p>Describes the ID format settings for resources for the specified IAM user, IAM role, or root
 *       user. For example, you can view the resource types that are enabled for longer IDs. This request only
 *       returns information about resource types whose ID formats can be modified; it does not return
 *       information about other resource types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *           <code>network-acl</code> | <code>network-acl-association</code> |
 *           <code>network-interface</code> | <code>network-interface-attachment</code> |
 *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *           <code>route-table-association</code> | <code>security-group</code> |
 *           <code>snapshot</code> | <code>subnet</code> |
 *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>These settings apply to the principal specified in the request. They do not apply to the
 *       principal that makes the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIdentityIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIdentityIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIdentityIdFormatRequest
 *   Resource: "STRING_VALUE",
 *   PrincipalArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeIdentityIdFormatCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdentityIdFormatResult
 * //   Statuses: [ // IdFormatList
 * //     { // IdFormat
 * //       Deadline: new Date("TIMESTAMP"),
 * //       Resource: "STRING_VALUE",
 * //       UseLongIds: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIdentityIdFormatCommandInput - {@link DescribeIdentityIdFormatCommandInput}
 * @returns {@link DescribeIdentityIdFormatCommandOutput}
 * @see {@link DescribeIdentityIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIdentityIdFormatCommand extends $Command
  .classBuilder<
    DescribeIdentityIdFormatCommandInput,
    DescribeIdentityIdFormatCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeIdentityIdFormat", {})
  .n("EC2Client", "DescribeIdentityIdFormatCommand")
  .sc(DescribeIdentityIdFormat)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIdentityIdFormatRequest;
      output: DescribeIdentityIdFormatResult;
    };
    sdk: {
      input: DescribeIdentityIdFormatCommandInput;
      output: DescribeIdentityIdFormatCommandOutput;
    };
  };
}
