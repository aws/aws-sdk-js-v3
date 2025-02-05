// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeElasticIpsRequest, DescribeElasticIpsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeElasticIpsCommand, se_DescribeElasticIpsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeElasticIpsCommand}.
 */
export interface DescribeElasticIpsCommandInput extends DescribeElasticIpsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeElasticIpsCommand}.
 */
export interface DescribeElasticIpsCommandOutput extends DescribeElasticIpsResult, __MetadataBearer {}

/**
 * <p>Describes <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html">Elastic IP addresses</a>.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeElasticIpsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeElasticIpsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeElasticIpsRequest
 *   InstanceId: "STRING_VALUE",
 *   StackId: "STRING_VALUE",
 *   Ips: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeElasticIpsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeElasticIpsResult
 * //   ElasticIps: [ // ElasticIps
 * //     { // ElasticIp
 * //       Ip: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Domain: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeElasticIpsCommandInput - {@link DescribeElasticIpsCommandInput}
 * @returns {@link DescribeElasticIpsCommandOutput}
 * @see {@link DescribeElasticIpsCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticIpsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 * @public
 */
export class DescribeElasticIpsCommand extends $Command
  .classBuilder<
    DescribeElasticIpsCommandInput,
    DescribeElasticIpsCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "DescribeElasticIps", {})
  .n("OpsWorksClient", "DescribeElasticIpsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeElasticIpsCommand)
  .de(de_DescribeElasticIpsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeElasticIpsRequest;
      output: DescribeElasticIpsResult;
    };
    sdk: {
      input: DescribeElasticIpsCommandInput;
      output: DescribeElasticIpsCommandOutput;
    };
  };
}
