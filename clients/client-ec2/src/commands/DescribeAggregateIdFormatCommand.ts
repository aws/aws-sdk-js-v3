// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAggregateIdFormatRequest, DescribeAggregateIdFormatResult } from "../models/models_3";
import { de_DescribeAggregateIdFormatCommand, se_DescribeAggregateIdFormatCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes the longer ID format settings for all resource types in a specific
 *          Region. This request is useful for performing a quick audit to determine whether a
 *          specific Region is fully opted in for longer IDs (17-character IDs).</p>
 *          <p>This request only returns information about resource types that support longer IDs.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *         <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *         <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *         <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *         <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *         <code>network-acl</code> | <code>network-acl-association</code> |
 *         <code>network-interface</code> | <code>network-interface-attachment</code> |
 *         <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *         <code>route-table-association</code> | <code>security-group</code> |
 *         <code>snapshot</code> | <code>subnet</code> |
 *         <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> |
 *         <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *         <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAggregateIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAggregateIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeAggregateIdFormatCommand extends $Command
  .classBuilder<
    DescribeAggregateIdFormatCommandInput,
    DescribeAggregateIdFormatCommandOutput,
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
  .s("AmazonEC2", "DescribeAggregateIdFormat", {})
  .n("EC2Client", "DescribeAggregateIdFormatCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAggregateIdFormatCommand)
  .de(de_DescribeAggregateIdFormatCommand)
  .build() {
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
