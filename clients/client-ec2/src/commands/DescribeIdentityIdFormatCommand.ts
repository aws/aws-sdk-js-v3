// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeIdentityIdFormatRequest, DescribeIdentityIdFormatResult } from "../models/models_4";
import { DescribeIdentityIdFormat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the ID format settings for resources for the specified IAM user, IAM role, or root user. For example, you can view the resource types that are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types. For more information, see [Resource IDs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * The following resource types support longer IDs: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `instance` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `reservation` | `route-table` | `route-table-association` | `security-group` | `snapshot` | `subnet` | `subnet-cidr-block-association` | `volume` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`.
 *
 * These settings apply to the principal specified in the request. They do not apply to the principal that makes the request.
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DescribeIdentityIdFormatCommand extends command<DescribeIdentityIdFormatCommandInput, DescribeIdentityIdFormatCommandOutput>(
  _ep0,
  _mw0,
  "DescribeIdentityIdFormat",
  DescribeIdentityIdFormat$
) {
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
