// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIdFormatRequest, DescribeIdFormatResult } from "../models/models_4";
import { de_DescribeIdFormatCommand, se_DescribeIdFormatCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdFormatCommand}.
 */
export interface DescribeIdFormatCommandInput extends DescribeIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdFormatCommand}.
 */
export interface DescribeIdFormatCommandOutput extends DescribeIdFormatResult, __MetadataBearer {}

/**
 * <p>Describes the ID format settings for your resources on a per-Region basis, for example, to view which resource types are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *            <code>network-acl</code> | <code>network-acl-association</code> |
 *            <code>network-interface</code> | <code>network-interface-attachment</code> |
 *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *            <code>route-table-association</code> | <code>security-group</code> |
 *            <code>snapshot</code> | <code>subnet</code> |
 *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>These settings apply to the IAM user who makes the request; they do not apply to the entire
 *       Amazon Web Services account. By default, an IAM user defaults to the same settings as the root user, unless
 *       they explicitly override the settings by running the <a>ModifyIdFormat</a> command. Resources
 *       created with longer IDs are visible to all IAM users, regardless of these settings and
 *       provided that they have permission to use the relevant <code>Describe</code> command for the
 *       resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIdFormatRequest
 *   Resource: "STRING_VALUE",
 * };
 * const command = new DescribeIdFormatCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdFormatResult
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
 * @param DescribeIdFormatCommandInput - {@link DescribeIdFormatCommandInput}
 * @returns {@link DescribeIdFormatCommandOutput}
 * @see {@link DescribeIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribeIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIdFormatCommand extends $Command
  .classBuilder<
    DescribeIdFormatCommandInput,
    DescribeIdFormatCommandOutput,
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
  .s("AmazonEC2", "DescribeIdFormat", {})
  .n("EC2Client", "DescribeIdFormatCommand")
  .f(void 0, void 0)
  .ser(se_DescribeIdFormatCommand)
  .de(de_DescribeIdFormatCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIdFormatRequest;
      output: DescribeIdFormatResult;
    };
    sdk: {
      input: DescribeIdFormatCommandInput;
      output: DescribeIdFormatCommandOutput;
    };
  };
}
