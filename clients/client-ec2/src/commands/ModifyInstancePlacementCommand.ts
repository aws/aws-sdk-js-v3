// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstancePlacementRequest, ModifyInstancePlacementResult } from "../models/models_7";
import { de_ModifyInstancePlacementCommand, se_ModifyInstancePlacementCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstancePlacementCommand}.
 */
export interface ModifyInstancePlacementCommandInput extends ModifyInstancePlacementRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstancePlacementCommand}.
 */
export interface ModifyInstancePlacementCommandOutput extends ModifyInstancePlacementResult, __MetadataBearer {}

/**
 * <p>Modifies the placement attributes for a specified instance. You can do the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>Modify the affinity between an instance and a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html">Dedicated
 *                         Host</a>. When affinity is set to <code>host</code> and the instance is
 *                     not associated with a specific Dedicated Host, the next time the instance is
 *                     started, it is automatically associated with the host on which it lands. If the
 *                     instance is restarted or rebooted, this relationship persists.</p>
 *             </li>
 *             <li>
 *                <p>Change the Dedicated Host with which an instance is associated.</p>
 *             </li>
 *             <li>
 *                <p>Change the instance tenancy of an instance.</p>
 *             </li>
 *             <li>
 *                <p>Move an instance to or from a <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">placement
 *                     group</a>.</p>
 *             </li>
 *          </ul>
 *          <p>At least one attribute for affinity, host ID, tenancy, or placement group name must be
 *             specified in the request. Affinity and tenancy can be modified in the same
 *             request.</p>
 *          <p>To modify the host ID, tenancy, placement group, or partition for an instance, the
 *             instance must be in the <code>stopped</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstancePlacementCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstancePlacementCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ModifyInstancePlacementRequest
 *   GroupName: "STRING_VALUE",
 *   PartitionNumber: Number("int"),
 *   HostResourceGroupArn: "STRING_VALUE",
 *   GroupId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   Tenancy: "default" || "dedicated" || "host",
 *   Affinity: "default" || "host",
 *   HostId: "STRING_VALUE",
 * };
 * const command = new ModifyInstancePlacementCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstancePlacementResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyInstancePlacementCommandInput - {@link ModifyInstancePlacementCommandInput}
 * @returns {@link ModifyInstancePlacementCommandOutput}
 * @see {@link ModifyInstancePlacementCommandInput} for command's `input` shape.
 * @see {@link ModifyInstancePlacementCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyInstancePlacementCommand extends $Command
  .classBuilder<
    ModifyInstancePlacementCommandInput,
    ModifyInstancePlacementCommandOutput,
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
  .s("AmazonEC2", "ModifyInstancePlacement", {})
  .n("EC2Client", "ModifyInstancePlacementCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstancePlacementCommand)
  .de(de_ModifyInstancePlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstancePlacementRequest;
      output: ModifyInstancePlacementResult;
    };
    sdk: {
      input: ModifyInstancePlacementCommandInput;
      output: ModifyInstancePlacementCommandOutput;
    };
  };
}
