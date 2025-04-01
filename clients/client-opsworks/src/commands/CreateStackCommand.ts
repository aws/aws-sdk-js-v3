// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStackRequest, CreateStackResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_CreateStackCommand, se_CreateStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStackCommand}.
 */
export interface CreateStackCommandInput extends CreateStackRequest {}
/**
 * @public
 *
 * The output of {@link CreateStackCommand}.
 */
export interface CreateStackCommandOutput extends CreateStackResult, __MetadataBearer {}

/**
 * <p>Creates a new stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-edit.html">Create a New
 *         Stack</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateStackCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // CreateStackRequest
 *   Name: "STRING_VALUE", // required
 *   Region: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE",
 *   Attributes: { // StackAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ServiceRoleArn: "STRING_VALUE", // required
 *   DefaultInstanceProfileArn: "STRING_VALUE", // required
 *   DefaultOs: "STRING_VALUE",
 *   HostnameTheme: "STRING_VALUE",
 *   DefaultAvailabilityZone: "STRING_VALUE",
 *   DefaultSubnetId: "STRING_VALUE",
 *   CustomJson: "STRING_VALUE",
 *   ConfigurationManager: { // StackConfigurationManager
 *     Name: "STRING_VALUE",
 *     Version: "STRING_VALUE",
 *   },
 *   ChefConfiguration: { // ChefConfiguration
 *     ManageBerkshelf: true || false,
 *     BerkshelfVersion: "STRING_VALUE",
 *   },
 *   UseCustomCookbooks: true || false,
 *   UseOpsworksSecurityGroups: true || false,
 *   CustomCookbooksSource: { // Source
 *     Type: "git" || "svn" || "archive" || "s3",
 *     Url: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     SshKey: "STRING_VALUE",
 *     Revision: "STRING_VALUE",
 *   },
 *   DefaultSshKeyName: "STRING_VALUE",
 *   DefaultRootDeviceType: "ebs" || "instance-store",
 *   AgentVersion: "STRING_VALUE",
 * };
 * const command = new CreateStackCommand(input);
 * const response = await client.send(command);
 * // { // CreateStackResult
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStackCommandInput - {@link CreateStackCommandInput}
 * @returns {@link CreateStackCommandOutput}
 * @see {@link CreateStackCommandInput} for command's `input` shape.
 * @see {@link CreateStackCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
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
export class CreateStackCommand extends $Command
  .classBuilder<
    CreateStackCommandInput,
    CreateStackCommandOutput,
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
  .s("OpsWorks_20130218", "CreateStack", {})
  .n("OpsWorksClient", "CreateStackCommand")
  .f(void 0, void 0)
  .ser(se_CreateStackCommand)
  .de(de_CreateStackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStackRequest;
      output: CreateStackResult;
    };
    sdk: {
      input: CreateStackCommandInput;
      output: CreateStackCommandOutput;
    };
  };
}
