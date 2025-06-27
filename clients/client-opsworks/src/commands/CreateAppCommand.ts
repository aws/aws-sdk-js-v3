// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppRequest, CreateAppResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_CreateAppCommand, se_CreateAppCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppCommand}.
 */
export interface CreateAppCommandInput extends CreateAppRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppCommand}.
 */
export interface CreateAppCommandOutput extends CreateAppResult, __MetadataBearer {}

/**
 * <p>Creates an app for a specified stack. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/workingapps-creating.html">Creating
 *       Apps</a>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, CreateAppCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, CreateAppCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // CreateAppRequest
 *   StackId: "STRING_VALUE", // required
 *   Shortname: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DataSources: [ // DataSources
 *     { // DataSource
 *       Type: "STRING_VALUE",
 *       Arn: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *     },
 *   ],
 *   Type: "aws-flow-ruby" || "java" || "rails" || "php" || "nodejs" || "static" || "other", // required
 *   AppSource: { // Source
 *     Type: "git" || "svn" || "archive" || "s3",
 *     Url: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     SshKey: "STRING_VALUE",
 *     Revision: "STRING_VALUE",
 *   },
 *   Domains: [ // Strings
 *     "STRING_VALUE",
 *   ],
 *   EnableSsl: true || false,
 *   SslConfiguration: { // SslConfiguration
 *     Certificate: "STRING_VALUE", // required
 *     PrivateKey: "STRING_VALUE", // required
 *     Chain: "STRING_VALUE",
 *   },
 *   Attributes: { // AppAttributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Environment: [ // EnvironmentVariables
 *     { // EnvironmentVariable
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Secure: true || false,
 *     },
 *   ],
 * };
 * const command = new CreateAppCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppResult
 * //   AppId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppCommandInput - {@link CreateAppCommandInput}
 * @returns {@link CreateAppCommandOutput}
 * @see {@link CreateAppCommandInput} for command's `input` shape.
 * @see {@link CreateAppCommandOutput} for command's `response` shape.
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
export class CreateAppCommand extends $Command
  .classBuilder<
    CreateAppCommandInput,
    CreateAppCommandOutput,
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
  .s("OpsWorks_20130218", "CreateApp", {})
  .n("OpsWorksClient", "CreateAppCommand")
  .f(void 0, void 0)
  .ser(se_CreateAppCommand)
  .de(de_CreateAppCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppRequest;
      output: CreateAppResult;
    };
    sdk: {
      input: CreateAppCommandInput;
      output: CreateAppCommandOutput;
    };
  };
}
