// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyIdentityIdFormatRequest } from "../models/models_7";
import { ModifyIdentityIdFormat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the ID format of a resource for a specified IAM user, IAM role, or the root user for an account; or all IAM users, IAM roles, and the root user for an account. You can specify that resources should receive longer IDs (17-character IDs) when they are created.
 *
 * This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `route-table` | `route-table-association` | `security-group` | `subnet` | `subnet-cidr-block-association` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`.
 *
 * For more information, see [Resource IDs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * This setting applies to the principal specified in the request; it does not apply to the principal that makes the request.
 *
 * Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant `Describe` command for the resource type.
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class ModifyIdentityIdFormatCommand extends command<ModifyIdentityIdFormatCommandInput, ModifyIdentityIdFormatCommandOutput>(
  _ep0,
  _mw0,
  "ModifyIdentityIdFormat",
  ModifyIdentityIdFormat$
) {
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
