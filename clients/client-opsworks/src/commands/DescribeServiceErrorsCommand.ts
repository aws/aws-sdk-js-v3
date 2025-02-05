// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeServiceErrorsRequest, DescribeServiceErrorsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeServiceErrorsCommand, se_DescribeServiceErrorsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeServiceErrorsCommand}.
 */
export interface DescribeServiceErrorsCommandInput extends DescribeServiceErrorsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServiceErrorsCommand}.
 */
export interface DescribeServiceErrorsCommandOutput extends DescribeServiceErrorsResult, __MetadataBearer {}

/**
 * <p>Describes OpsWorks Stacks service errors.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeServiceErrorsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeServiceErrorsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeServiceErrorsRequest
 *   StackId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   ServiceErrorIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeServiceErrorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServiceErrorsResult
 * //   ServiceErrors: [ // ServiceErrors
 * //     { // ServiceError
 * //       ServiceErrorId: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServiceErrorsCommandInput - {@link DescribeServiceErrorsCommandInput}
 * @returns {@link DescribeServiceErrorsCommandOutput}
 * @see {@link DescribeServiceErrorsCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceErrorsCommandOutput} for command's `response` shape.
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
export class DescribeServiceErrorsCommand extends $Command
  .classBuilder<
    DescribeServiceErrorsCommandInput,
    DescribeServiceErrorsCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeServiceErrors", {})
  .n("OpsWorksClient", "DescribeServiceErrorsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeServiceErrorsCommand)
  .de(de_DescribeServiceErrorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServiceErrorsRequest;
      output: DescribeServiceErrorsResult;
    };
    sdk: {
      input: DescribeServiceErrorsCommandInput;
      output: DescribeServiceErrorsCommandOutput;
    };
  };
}
