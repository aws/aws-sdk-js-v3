// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateEnvironmentOperationsRoleMessage } from "../models/models_0";
import {
  de_AssociateEnvironmentOperationsRoleCommand,
  se_AssociateEnvironmentOperationsRoleCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateEnvironmentOperationsRoleCommand}.
 */
export interface AssociateEnvironmentOperationsRoleCommandInput extends AssociateEnvironmentOperationsRoleMessage {}
/**
 * @public
 *
 * The output of {@link AssociateEnvironmentOperationsRoleCommand}.
 */
export interface AssociateEnvironmentOperationsRoleCommandOutput extends __MetadataBearer {}

/**
 * <p>Add or change the operations role used by an environment. After this call is made, Elastic Beanstalk
 *       uses the associated operations role for permissions to downstream services during subsequent
 *       calls acting on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AssociateEnvironmentOperationsRoleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // AssociateEnvironmentOperationsRoleMessage
 *   EnvironmentName: "STRING_VALUE", // required
 *   OperationsRole: "STRING_VALUE", // required
 * };
 * const command = new AssociateEnvironmentOperationsRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateEnvironmentOperationsRoleCommandInput - {@link AssociateEnvironmentOperationsRoleCommandInput}
 * @returns {@link AssociateEnvironmentOperationsRoleCommandOutput}
 * @see {@link AssociateEnvironmentOperationsRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateEnvironmentOperationsRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 */
export class AssociateEnvironmentOperationsRoleCommand extends $Command
  .classBuilder<
    AssociateEnvironmentOperationsRoleCommandInput,
    AssociateEnvironmentOperationsRoleCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "AssociateEnvironmentOperationsRole", {})
  .n("ElasticBeanstalkClient", "AssociateEnvironmentOperationsRoleCommand")
  .f(void 0, void 0)
  .ser(se_AssociateEnvironmentOperationsRoleCommand)
  .de(de_AssociateEnvironmentOperationsRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateEnvironmentOperationsRoleMessage;
      output: {};
    };
    sdk: {
      input: AssociateEnvironmentOperationsRoleCommandInput;
      output: AssociateEnvironmentOperationsRoleCommandOutput;
    };
  };
}
