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
 */
export class RetrieveEnvironmentInfoCommand extends $Command
  .classBuilder<
    RetrieveEnvironmentInfoCommandInput,
    RetrieveEnvironmentInfoCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
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
  .build() {}
