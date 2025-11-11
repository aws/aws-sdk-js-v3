// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyIdentityIdFormatRequest } from "../models/models_7";
import { ModifyIdentityIdFormat } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyIdentityIdFormatCommand}.
 */
export interface ModifyIdentityIdFormatCommandInput extends ModifyIdentityIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link ModifyIdentityIdFormatCommand}.
 */
export interface ModifyIdentityIdFormatCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the ID format of a resource for a specified IAM user, IAM role, or the root
 *        user for an account; or all IAM users, IAM roles, and the root user for an account. You can
 *        specify that resources should receive longer IDs (17-character IDs) when they are created. </p>
 *          <p>This request can only be used to modify longer ID settings for resource types that are
 *        within the opt-in period. Resources currently in their opt-in period include:
 *                 <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *                 <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *                 <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *                 <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
 *             | <code>network-acl-association</code> | <code>network-interface</code> |
 *                 <code>network-interface-attachment</code> | <code>prefix-list</code> |
 *                 <code>route-table</code> | <code>route-table-association</code> |
 *                 <code>security-group</code> | <code>subnet</code> |
 *                 <code>subnet-cidr-block-association</code> | <code>vpc</code> |
 *         <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 *          <p>This setting applies to the principal specified in the request; it does not apply to the
 *       principal that makes the request. </p>
 *          <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these
 *       settings and provided that they have permission to use the relevant <code>Describe</code>
 *       command for the resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIdentityIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIdentityIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyIdentityIdFormatRequest
 *   Resource: "STRING_VALUE", // required
 *   UseLongIds: true || false, // required
 *   PrincipalArn: "STRING_VALUE", // required
 * };
 * const command = new ModifyIdentityIdFormatCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyIdentityIdFormatCommandInput - {@link ModifyIdentityIdFormatCommandInput}
 * @returns {@link ModifyIdentityIdFormatCommandOutput}
 * @see {@link ModifyIdentityIdFormatCommandInput} for command's `input` shape.
 * @see {@link ModifyIdentityIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyIdentityIdFormatCommand extends $Command
  .classBuilder<
    ModifyIdentityIdFormatCommandInput,
    ModifyIdentityIdFormatCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyIdentityIdFormat", {})
  .n("EC2Client", "ModifyIdentityIdFormatCommand")
  .sc(ModifyIdentityIdFormat)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyIdentityIdFormatRequest;
      output: {};
    };
    sdk: {
      input: ModifyIdentityIdFormatCommandInput;
      output: ModifyIdentityIdFormatCommandOutput;
    };
  };
}
