// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeProtectionGroupRequest, DescribeProtectionGroupResponse } from "../models/models_0";
import { de_DescribeProtectionGroupCommand, se_DescribeProtectionGroupCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProtectionGroupCommand}.
 */
export interface DescribeProtectionGroupCommandInput extends DescribeProtectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProtectionGroupCommand}.
 */
export interface DescribeProtectionGroupCommandOutput extends DescribeProtectionGroupResponse, __MetadataBearer {}

/**
 * <p>Returns the specification for the specified protection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeProtectionGroupCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeProtectionGroupCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ShieldClient(config);
 * const input = { // DescribeProtectionGroupRequest
 *   ProtectionGroupId: "STRING_VALUE", // required
 * };
 * const command = new DescribeProtectionGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProtectionGroupResponse
 * //   ProtectionGroup: { // ProtectionGroup
 * //     ProtectionGroupId: "STRING_VALUE", // required
 * //     Aggregation: "SUM" || "MEAN" || "MAX", // required
 * //     Pattern: "ALL" || "ARBITRARY" || "BY_RESOURCE_TYPE", // required
 * //     ResourceType: "CLOUDFRONT_DISTRIBUTION" || "ROUTE_53_HOSTED_ZONE" || "ELASTIC_IP_ALLOCATION" || "CLASSIC_LOAD_BALANCER" || "APPLICATION_LOAD_BALANCER" || "GLOBAL_ACCELERATOR",
 * //     Members: [ // ProtectionGroupMembers // required
 * //       "STRING_VALUE",
 * //     ],
 * //     ProtectionGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProtectionGroupCommandInput - {@link DescribeProtectionGroupCommandInput}
 * @returns {@link DescribeProtectionGroupCommandOutput}
 * @see {@link DescribeProtectionGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectionGroupCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 * @public
 */
export class DescribeProtectionGroupCommand extends $Command
  .classBuilder<
    DescribeProtectionGroupCommandInput,
    DescribeProtectionGroupCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "DescribeProtectionGroup", {})
  .n("ShieldClient", "DescribeProtectionGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeProtectionGroupCommand)
  .de(de_DescribeProtectionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProtectionGroupRequest;
      output: DescribeProtectionGroupResponse;
    };
    sdk: {
      input: DescribeProtectionGroupCommandInput;
      output: DescribeProtectionGroupCommandOutput;
    };
  };
}
