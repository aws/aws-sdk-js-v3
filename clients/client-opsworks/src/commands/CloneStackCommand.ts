// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CloneStackRequest, CloneStackResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_CloneStackCommand, se_CloneStackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CloneStackCommand}.
 */
export interface CloneStackCommandInput extends CloneStackRequest {}
/**
 * @public
 *
 * The output of {@link CloneStackCommand}.
 */
export interface CloneStackCommandOutput extends CloneStackResult, __MetadataBearer {}

/**
 * <p>Creates a clone of a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingstacks-cloning.html">Clone a
 *         Stack</a>. By default, all parameters are set to the values used by the parent stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CloneStackCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CloneStackCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // CloneStackRequest
 *   SourceStackId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Region: "STRING_VALUE",
 *   VpcId: "STRING_VALUE",
 *   Attributes: { // StackAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ServiceRoleArn: "STRING_VALUE", // required
 *   DefaultInstanceProfileArn: "STRING_VALUE",
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
 *   ClonePermissions: true || false,
 *   CloneAppIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 *   DefaultRootDeviceType: "ebs" || "instance-store",
 *   AgentVersion: "STRING_VALUE",
 * };
 * const command = new CloneStackCommand(input);
 * const response = await client.send(command);
 * // { // CloneStackResult
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CloneStackCommandInput - {@link CloneStackCommandInput}
 * @returns {@link CloneStackCommandOutput}
 * @see {@link CloneStackCommandInput} for command's `input` shape.
 * @see {@link CloneStackCommandOutput} for command's `response` shape.
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
export class CloneStackCommand extends $Command
  .classBuilder<
    CloneStackCommandInput,
    CloneStackCommandOutput,
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
  .s("OpsWorks_20130218", "CloneStack", {})
  .n("OpsWorksClient", "CloneStackCommand")
  .f(void 0, void 0)
  .ser(se_CloneStackCommand)
  .de(de_CloneStackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CloneStackRequest;
      output: CloneStackResult;
    };
    sdk: {
      input: CloneStackCommandInput;
      output: CloneStackCommandOutput;
    };
  };
}
