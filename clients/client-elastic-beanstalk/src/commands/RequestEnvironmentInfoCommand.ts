// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RequestEnvironmentInfoMessage } from "../models/models_0";
import { de_RequestEnvironmentInfoCommand, se_RequestEnvironmentInfoCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RequestEnvironmentInfoCommand}.
 */
export interface RequestEnvironmentInfoCommandInput extends RequestEnvironmentInfoMessage {}
/**
 * @public
 *
 * The output of {@link RequestEnvironmentInfoCommand}.
 */
export interface RequestEnvironmentInfoCommandOutput extends __MetadataBearer {}

/**
 * <p>Initiates a request to compile the specified type of information of the deployed
 *       environment.</p>
 *          <p> Setting the <code>InfoType</code> to <code>tail</code> compiles the last lines from
 *       the application server log files of every Amazon EC2 instance in your environment. </p>
 *          <p> Setting the <code>InfoType</code> to <code>bundle</code> compresses the application
 *       server log files for every Amazon EC2 instance into a <code>.zip</code> file. Legacy and .NET
 *       containers do not support bundle logs. </p>
 *          <p> Use <a>RetrieveEnvironmentInfo</a> to obtain the set of logs. </p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RetrieveEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RequestEnvironmentInfoCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RequestEnvironmentInfoCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // RequestEnvironmentInfoMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   InfoType: "tail" || "bundle", // required
 * };
 * const command = new RequestEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RequestEnvironmentInfoCommandInput - {@link RequestEnvironmentInfoCommandInput}
 * @returns {@link RequestEnvironmentInfoCommandOutput}
 * @see {@link RequestEnvironmentInfoCommandInput} for command's `input` shape.
 * @see {@link RequestEnvironmentInfoCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To request tailed logs
 * ```javascript
 * // The following operation requests logs from an environment named my-env:
 * const input = {
 *   "EnvironmentName": "my-env",
 *   "InfoType": "tail"
 * };
 * const command = new RequestEnvironmentInfoCommand(input);
 * await client.send(command);
 * // example id: to-request-tailed-logs-1456277657045
 * ```
 *
 */
export class RequestEnvironmentInfoCommand extends $Command
  .classBuilder<
    RequestEnvironmentInfoCommandInput,
    RequestEnvironmentInfoCommandOutput,
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
  .s("AWSElasticBeanstalkService", "RequestEnvironmentInfo", {})
  .n("ElasticBeanstalkClient", "RequestEnvironmentInfoCommand")
  .f(void 0, void 0)
  .ser(se_RequestEnvironmentInfoCommand)
  .de(de_RequestEnvironmentInfoCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RequestEnvironmentInfoMessage;
      output: {};
    };
    sdk: {
      input: RequestEnvironmentInfoCommandInput;
      output: RequestEnvironmentInfoCommandOutput;
    };
  };
}
