// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeStackProvisioningParametersRequest,
  DescribeStackProvisioningParametersResult,
} from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  de_DescribeStackProvisioningParametersCommand,
  se_DescribeStackProvisioningParametersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackProvisioningParametersCommand}.
 */
export interface DescribeStackProvisioningParametersCommandInput extends DescribeStackProvisioningParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStackProvisioningParametersCommand}.
 */
export interface DescribeStackProvisioningParametersCommandOutput
  extends DescribeStackProvisioningParametersResult,
    __MetadataBearer {}

/**
 * <p>Requests a description of a stack's provisioning parameters.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStackProvisioningParametersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStackProvisioningParametersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeStackProvisioningParametersRequest
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackProvisioningParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackProvisioningParametersResult
 * //   AgentInstallerUrl: "STRING_VALUE",
 * //   Parameters: { // Parameters
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackProvisioningParametersCommandInput - {@link DescribeStackProvisioningParametersCommandInput}
 * @returns {@link DescribeStackProvisioningParametersCommandOutput}
 * @see {@link DescribeStackProvisioningParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeStackProvisioningParametersCommandOutput} for command's `response` shape.
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
export class DescribeStackProvisioningParametersCommand extends $Command
  .classBuilder<
    DescribeStackProvisioningParametersCommandInput,
    DescribeStackProvisioningParametersCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeStackProvisioningParameters", {})
  .n("OpsWorksClient", "DescribeStackProvisioningParametersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStackProvisioningParametersCommand)
  .de(de_DescribeStackProvisioningParametersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackProvisioningParametersRequest;
      output: DescribeStackProvisioningParametersResult;
    };
    sdk: {
      input: DescribeStackProvisioningParametersCommandInput;
      output: DescribeStackProvisioningParametersCommandOutput;
    };
  };
}
