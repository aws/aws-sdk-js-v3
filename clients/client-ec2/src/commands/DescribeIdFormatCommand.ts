// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeIdFormatRequest, DescribeIdFormatResult } from "../models/models_4";
import { DescribeIdFormat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the ID format settings for your resources on a per-Region basis, for example, to view which resource types are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types.
 *
 * The following resource types support longer IDs: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `instance` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `reservation` | `route-table` | `route-table-association` | `security-group` | `snapshot` | `subnet` | `subnet-cidr-block-association` | `volume` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`.
 *
 * These settings apply to the IAM user who makes the request; they do not apply to the entire Amazon Web Services account. By default, an IAM user defaults to the same settings as the root user, unless they explicitly override the settings by running the ModifyIdFormat command. Resources created with longer IDs are visible to all IAM users, regardless of these settings and provided that they have permission to use the relevant `Describe` command for the resource type.
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DescribeIdFormatCommand extends command<DescribeIdFormatCommandInput, DescribeIdFormatCommandOutput>(
  _ep0,
  _mw0,
  "DescribeIdFormat",
  DescribeIdFormat$
) {
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
