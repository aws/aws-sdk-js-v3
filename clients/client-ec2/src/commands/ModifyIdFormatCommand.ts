// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIdFormatRequest } from "../models/models_6";
import { de_ModifyIdFormatCommand, se_ModifyIdFormatCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIdFormatCommand}.
 */
export interface ModifyIdFormatCommandInput extends ModifyIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIdFormatCommand}.
 */
export interface ModifyIdFormatCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the ID format for the specified resource on a per-Region basis. You can
 *             specify that resources should receive longer IDs (17-character IDs) when they are
 *             created.</p>
 *          <p>This request can only be used to modify longer ID settings for resource types that
 *             are within the opt-in period. Resources currently in their opt-in period include:
 *             <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *             <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *             <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *             <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
 *             | <code>network-acl-association</code> | <code>network-interface</code> |
 *             <code>network-interface-attachment</code> | <code>prefix-list</code> |
 *             <code>route-table</code> | <code>route-table-association</code> |
 *             <code>security-group</code> | <code>subnet</code> |
 *             <code>subnet-cidr-block-association</code> | <code>vpc</code> |
 *             <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
 *          <p>This setting applies to the IAM user who makes the request; it does not apply to the
 *         entire Amazon Web Services account. By default, an IAM user defaults to the same settings as the root user. If
 *         you're using this action as the root user, then these settings apply to the entire account,
 *         unless an IAM user explicitly overrides these settings for themselves. For more information,
 *         see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a>
 *         in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>Resources created with longer IDs are visible to all IAM roles and users, regardless
 *         of these settings and provided that they have permission to use the relevant
 *         <code>Describe</code> command for the resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyIdFormatRequest
 *   Resource: "STRING_VALUE", // required
 *   UseLongIds: true || false, // required
 * };
 * const command = new ModifyIdFormatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyIdFormatCommandInput - {@link ModifyIdFormatCommandInput}
 * @returns {@link ModifyIdFormatCommandOutput}
 * @see {@link ModifyIdFormatCommandInput} for command's `input` shape.
 * @see {@link ModifyIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIdFormatCommand extends $Command
  .classBuilder<
    ModifyIdFormatCommandInput,
    ModifyIdFormatCommandOutput,
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
  .s("AmazonEC2", "ModifyIdFormat", {})
  .n("EC2Client", "ModifyIdFormatCommand")
  .f(void 0, void 0)
  .ser(se_ModifyIdFormatCommand)
  .de(de_ModifyIdFormatCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIdFormatRequest;
      output: {};
    };
    sdk: {
      input: ModifyIdFormatCommandInput;
      output: ModifyIdFormatCommandOutput;
    };
  };
}
