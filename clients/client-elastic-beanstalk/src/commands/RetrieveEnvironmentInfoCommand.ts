// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RetrieveEnvironmentInfoMessage, RetrieveEnvironmentInfoResultMessage } from "../models/models_0";
import { de_RetrieveEnvironmentInfoCommand, se_RetrieveEnvironmentInfoCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RetrieveEnvironmentInfoCommand}.
 */
export interface RetrieveEnvironmentInfoCommandInput extends RetrieveEnvironmentInfoMessage {}
/**
 * @public
 *
 * The output of {@link RetrieveEnvironmentInfoCommand}.
 */
export interface RetrieveEnvironmentInfoCommandOutput extends RetrieveEnvironmentInfoResultMessage, __MetadataBearer {}

/**
 * <p>Retrieves the compiled information from a <a>RequestEnvironmentInfo</a>
 *       request.</p>
 *          <p>Related Topics</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>RequestEnvironmentInfo</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RetrieveEnvironmentInfoCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RetrieveEnvironmentInfoCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // RetrieveEnvironmentInfoMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 *   InfoType: "tail" || "bundle", // required
 * };
 * const command = new RetrieveEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveEnvironmentInfoResultMessage
 * //   EnvironmentInfo: [ // EnvironmentInfoDescriptionList
 * //     { // EnvironmentInfoDescription
 * //       InfoType: "tail" || "bundle",
 * //       Ec2InstanceId: "STRING_VALUE",
 * //       SampleTimestamp: new Date("TIMESTAMP"),
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RetrieveEnvironmentInfoCommandInput - {@link RetrieveEnvironmentInfoCommandInput}
 * @returns {@link RetrieveEnvironmentInfoCommandOutput}
 * @see {@link RetrieveEnvironmentInfoCommandInput} for command's `input` shape.
 * @see {@link RetrieveEnvironmentInfoCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To retrieve tailed logs
 * ```javascript
 * // The following operation retrieves a link to logs from an environment named my-env:
 * const input = {
 *   "EnvironmentName": "my-env",
 *   "InfoType": "tail"
 * };
 * const command = new RetrieveEnvironmentInfoCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnvironmentInfo": [
 *     {
 *       "Ec2InstanceId": "i-09c1c867",
 *       "InfoType": "tail",
 *       "Message": "https://elasticbeanstalk-us-west-2-0123456789012.s3.amazonaws.com/resources/environments/logs/tail/e-fyqyju3yjs/i-09c1c867/TailLogs-1440109397703.out?AWSAccessKeyId=AKGPT4J56IAJ2EUBL5CQ&Expires=1440195891&Signature=n%2BEalOV6A2HIOx4Rcfb7LT16bBM%3D",
 *       "SampleTimestamp": "2015-08-20T22:23:17.703Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-retrieve-tailed-logs-1456277792734
 * ```
 *
 */
export class RetrieveEnvironmentInfoCommand extends $Command
  .classBuilder<
    RetrieveEnvironmentInfoCommandInput,
    RetrieveEnvironmentInfoCommandOutput,
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
  .s("AWSElasticBeanstalkService", "RetrieveEnvironmentInfo", {})
  .n("ElasticBeanstalkClient", "RetrieveEnvironmentInfoCommand")
  .f(void 0, void 0)
  .ser(se_RetrieveEnvironmentInfoCommand)
  .de(de_RetrieveEnvironmentInfoCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetrieveEnvironmentInfoMessage;
      output: RetrieveEnvironmentInfoResultMessage;
    };
    sdk: {
      input: RetrieveEnvironmentInfoCommandInput;
      output: RetrieveEnvironmentInfoCommandOutput;
    };
  };
}
