// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRdsDbInstancesRequest, DescribeRdsDbInstancesResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeRdsDbInstancesCommand, se_DescribeRdsDbInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRdsDbInstancesCommand}.
 */
export interface DescribeRdsDbInstancesCommandInput extends DescribeRdsDbInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRdsDbInstancesCommand}.
 */
export interface DescribeRdsDbInstancesCommandOutput extends DescribeRdsDbInstancesResult, __MetadataBearer {}

/**
 * <p>Describes Amazon RDS instances.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeRdsDbInstancesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeRdsDbInstancesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeRdsDbInstancesRequest
 *   StackId: "STRING_VALUE", // required
 *   RdsDbInstanceArns: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeRdsDbInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRdsDbInstancesResult
 * //   RdsDbInstances: [ // RdsDbInstances
 * //     { // RdsDbInstance
 * //       RdsDbInstanceArn: "STRING_VALUE",
 * //       DbInstanceIdentifier: "STRING_VALUE",
 * //       DbUser: "STRING_VALUE",
 * //       DbPassword: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Address: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       MissingOnRds: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRdsDbInstancesCommandInput - {@link DescribeRdsDbInstancesCommandInput}
 * @returns {@link DescribeRdsDbInstancesCommandOutput}
 * @see {@link DescribeRdsDbInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeRdsDbInstancesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeRdsDbInstancesCommand extends $Command
  .classBuilder<
    DescribeRdsDbInstancesCommandInput,
    DescribeRdsDbInstancesCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeRdsDbInstances", {})
  .n("OpsWorksClient", "DescribeRdsDbInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRdsDbInstancesCommand)
  .de(de_DescribeRdsDbInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRdsDbInstancesRequest;
      output: DescribeRdsDbInstancesResult;
    };
    sdk: {
      input: DescribeRdsDbInstancesCommandInput;
      output: DescribeRdsDbInstancesCommandOutput;
    };
  };
}
