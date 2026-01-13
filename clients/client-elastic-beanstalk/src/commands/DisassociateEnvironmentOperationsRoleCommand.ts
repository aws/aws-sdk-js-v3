// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticBeanstalkClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateEnvironmentOperationsRoleMessage } from "../models/models_0";
import { DisassociateEnvironmentOperationsRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateEnvironmentOperationsRoleCommand}.
 */
export interface DisassociateEnvironmentOperationsRoleCommandInput extends DisassociateEnvironmentOperationsRoleMessage {}
/**
 * @public
 *
 * The output of {@link DisassociateEnvironmentOperationsRoleCommand}.
 */
export interface DisassociateEnvironmentOperationsRoleCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociate the operations role from an environment. After this call is made, Elastic Beanstalk uses
 *       the caller's permissions for permissions to downstream services during subsequent calls acting
 *       on this environment. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
 *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DisassociateEnvironmentOperationsRoleCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DisassociateEnvironmentOperationsRoleCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DisassociateEnvironmentOperationsRoleMessage
 *   EnvironmentName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateEnvironmentOperationsRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateEnvironmentOperationsRoleCommandInput - {@link DisassociateEnvironmentOperationsRoleCommandInput}
 * @returns {@link DisassociateEnvironmentOperationsRoleCommandOutput}
 * @see {@link DisassociateEnvironmentOperationsRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateEnvironmentOperationsRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @public
 */
export class DisassociateEnvironmentOperationsRoleCommand extends $Command
  .classBuilder<
    DisassociateEnvironmentOperationsRoleCommandInput,
    DisassociateEnvironmentOperationsRoleCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "DisassociateEnvironmentOperationsRole", {})
  .n("ElasticBeanstalkClient", "DisassociateEnvironmentOperationsRoleCommand")
  .sc(DisassociateEnvironmentOperationsRole$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateEnvironmentOperationsRoleMessage;
      output: {};
    };
    sdk: {
      input: DisassociateEnvironmentOperationsRoleCommandInput;
      output: DisassociateEnvironmentOperationsRoleCommandOutput;
    };
  };
}
