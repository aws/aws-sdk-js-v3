// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAggregateIdFormatRequest, DescribeAggregateIdFormatResult } from "../models/models_3";
import { DescribeAggregateIdFormat$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAggregateIdFormatCommand}.
 */
export interface DescribeAggregateIdFormatCommandInput extends DescribeAggregateIdFormatRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAggregateIdFormatCommand}.
 */
export interface DescribeAggregateIdFormatCommandOutput extends DescribeAggregateIdFormatResult, __MetadataBearer {}

/**
 * Describes the longer ID format settings for all resource types in a specific Region. This request is useful for performing a quick audit to determine whether a specific Region is fully opted in for longer IDs (17-character IDs).
 *
 * This request only returns information about resource types that support longer IDs.
 *
 * The following resource types support longer IDs: `bundle` | `conversion-task` | `customer-gateway` | `dhcp-options` | `elastic-ip-allocation` | `elastic-ip-association` | `export-task` | `flow-log` | `image` | `import-task` | `instance` | `internet-gateway` | `network-acl` | `network-acl-association` | `network-interface` | `network-interface-attachment` | `prefix-list` | `reservation` | `route-table` | `route-table-association` | `security-group` | `snapshot` | `subnet` | `subnet-cidr-block-association` | `volume` | `vpc` | `vpc-cidr-block-association` | `vpc-endpoint` | `vpc-peering-connection` | `vpn-connection` | `vpn-gateway`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAggregateIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAggregateIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeAggregateIdFormatRequest
 *   DryRun: true || false,
 * };
 * const command = new DescribeAggregateIdFormatCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAggregateIdFormatResult
 * //   UseLongIdsAggregated: true || false,
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
 * @param DescribeAggregateIdFormatCommandInput - {@link DescribeAggregateIdFormatCommandInput}
 * @returns {@link DescribeAggregateIdFormatCommandOutput}
 * @see {@link DescribeAggregateIdFormatCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DescribeAggregateIdFormatCommand extends command<DescribeAggregateIdFormatCommandInput, DescribeAggregateIdFormatCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAggregateIdFormat",
  DescribeAggregateIdFormat$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAggregateIdFormatRequest;
      output: DescribeAggregateIdFormatResult;
    };
    sdk: {
      input: DescribeAggregateIdFormatCommandInput;
      output: DescribeAggregateIdFormatCommandOutput;
    };
  };
}
