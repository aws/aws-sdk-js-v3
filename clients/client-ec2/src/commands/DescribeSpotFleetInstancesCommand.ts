// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSpotFleetInstancesRequest, DescribeSpotFleetInstancesResponse } from "../models/models_5";
import { de_DescribeSpotFleetInstancesCommand, se_DescribeSpotFleetInstancesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSpotFleetInstancesCommand}.
 */
export interface DescribeSpotFleetInstancesCommandInput extends DescribeSpotFleetInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSpotFleetInstancesCommand}.
 */
export interface DescribeSpotFleetInstancesCommandOutput extends DescribeSpotFleetInstancesResponse, __MetadataBearer {}

/**
 * <p>Describes the running instances for the specified Spot Fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotFleetInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotFleetInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSpotFleetInstancesRequest
 *   DryRun: true || false,
 *   SpotFleetRequestId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSpotFleetInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSpotFleetInstancesResponse
 * //   ActiveInstances: [ // ActiveInstanceSet
 * //     { // ActiveInstance
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       SpotInstanceRequestId: "STRING_VALUE",
 * //       InstanceHealth: "healthy" || "unhealthy",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   SpotFleetRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSpotFleetInstancesCommandInput - {@link DescribeSpotFleetInstancesCommandInput}
 * @returns {@link DescribeSpotFleetInstancesCommandOutput}
 * @see {@link DescribeSpotFleetInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotFleetInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe the Spot Instances associated with a Spot fleet
 * ```javascript
 * // This example lists the Spot Instances associated with the specified Spot fleet.
 * const input = {
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * };
 * const command = new DescribeSpotFleetInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ActiveInstances": [
 *     {
 *       "InstanceId": "i-1234567890abcdef0",
 *       "InstanceType": "m3.medium",
 *       "SpotInstanceRequestId": "sir-08b93456"
 *     }
 *   ],
 *   "SpotFleetRequestId": "sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE"
 * }
 * *\/
 * // example id: ec2-describe-spot-fleet-instances-1
 * ```
 *
 */
export class DescribeSpotFleetInstancesCommand extends $Command
  .classBuilder<
    DescribeSpotFleetInstancesCommandInput,
    DescribeSpotFleetInstancesCommandOutput,
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
  .s("AmazonEC2", "DescribeSpotFleetInstances", {})
  .n("EC2Client", "DescribeSpotFleetInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSpotFleetInstancesCommand)
  .de(de_DescribeSpotFleetInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSpotFleetInstancesRequest;
      output: DescribeSpotFleetInstancesResponse;
    };
    sdk: {
      input: DescribeSpotFleetInstancesCommandInput;
      output: DescribeSpotFleetInstancesCommandOutput;
    };
  };
}
