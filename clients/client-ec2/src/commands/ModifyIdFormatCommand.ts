// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyIdFormatRequest } from "../models/models_7";
import { ModifyIdFormat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the ID format for the specified resource on a per-Region basis. You can specify that resources should receive longer IDs (17-character IDs) when they are created.
 *
 * This request can only be used to modify longer ID settings for resource types that are within the opt-in period. Resources currently in their opt-in period include: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `route-table` | `route-table-association` | `security-group` | `subnet` | `subnet-cidr-block-association` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`.
 *
 * This setting applies to the IAM user who makes the request; it does not apply to the entire Amazon Web Services account. By default, an IAM user defaults to the same settings as the root user. If you're using this action as the root user, then these settings apply to the entire account, unless an IAM user explicitly overrides these settings for themselves. For more information, see [Resource IDs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * Resources created with longer IDs are visible to all IAM roles and users, regardless of these settings and provided that they have permission to use the relevant `Describe` command for the resource type.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class ModifyIdFormatCommand extends command<ModifyIdFormatCommandInput, ModifyIdFormatCommandOutput>(
  _ep0,
  _mw0,
  "ModifyIdFormat",
  ModifyIdFormat$
) {
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
