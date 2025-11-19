// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFleetInstancesRequest, DescribeFleetInstancesResult } from "../models/models_3";
import { DescribeFleetInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetInstancesCommand}.
 */
export interface DescribeFleetInstancesCommandInput extends DescribeFleetInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFleetInstancesCommand}.
 */
export interface DescribeFleetInstancesCommandOutput extends DescribeFleetInstancesResult, __MetadataBearer {}

/**
 * <p>Describes the running instances for the specified EC2 Fleet.</p>
 *          <note>
 *             <p>Currently, <code>DescribeFleetInstances</code> does not support fleets of type
 *                <code>instant</code>. Instead, use <code>DescribeFleets</code>, specifying the
 *                <code>instant</code> fleet ID in the request.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-ec2-fleet.html#monitor-ec2-fleet">Describe your
 *             EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeFleetInstancesRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   FleetId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeFleetInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetInstancesResult
 * //   ActiveInstances: [ // ActiveInstanceSet
 * //     { // ActiveInstance
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       SpotInstanceRequestId: "STRING_VALUE",
 * //       InstanceHealth: "healthy" || "unhealthy",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   FleetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetInstancesCommandInput - {@link DescribeFleetInstancesCommandInput}
 * @returns {@link DescribeFleetInstancesCommandOutput}
 * @see {@link DescribeFleetInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeFleetInstancesCommand extends $Command
  .classBuilder<
    DescribeFleetInstancesCommandInput,
    DescribeFleetInstancesCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeFleetInstances", {})
  .n("EC2Client", "DescribeFleetInstancesCommand")
  .sc(DescribeFleetInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFleetInstancesRequest;
      output: DescribeFleetInstancesResult;
    };
    sdk: {
      input: DescribeFleetInstancesCommandInput;
      output: DescribeFleetInstancesCommandOutput;
    };
  };
}
