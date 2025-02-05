// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SwapEnvironmentCNAMEsMessage } from "../models/models_0";
import { de_SwapEnvironmentCNAMEsCommand, se_SwapEnvironmentCNAMEsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SwapEnvironmentCNAMEsCommand}.
 */
export interface SwapEnvironmentCNAMEsCommandInput extends SwapEnvironmentCNAMEsMessage {}
/**
 * @public
 *
 * The output of {@link SwapEnvironmentCNAMEsCommand}.
 */
export interface SwapEnvironmentCNAMEsCommandOutput extends __MetadataBearer {}

/**
 * <p>Swaps the CNAMEs of two environments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, SwapEnvironmentCNAMEsCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, SwapEnvironmentCNAMEsCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // SwapEnvironmentCNAMEsMessage
 *   SourceEnvironmentId: "STRING_VALUE",
 *   SourceEnvironmentName: "STRING_VALUE",
 *   DestinationEnvironmentId: "STRING_VALUE",
 *   DestinationEnvironmentName: "STRING_VALUE",
 * };
 * const command = new SwapEnvironmentCNAMEsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SwapEnvironmentCNAMEsCommandInput - {@link SwapEnvironmentCNAMEsCommandInput}
 * @returns {@link SwapEnvironmentCNAMEsCommandOutput}
 * @see {@link SwapEnvironmentCNAMEsCommandInput} for command's `input` shape.
 * @see {@link SwapEnvironmentCNAMEsCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To swap environment CNAMES
 * ```javascript
 * // The following operation swaps the assigned subdomains of two environments:
 * const input = {
 *   "DestinationEnvironmentName": "my-env-green",
 *   "SourceEnvironmentName": "my-env-blue"
 * };
 * const command = new SwapEnvironmentCNAMEsCommand(input);
 * await client.send(command);
 * // example id: to-swap-environment-cnames-1456277839438
 * ```
 *
 */
export class SwapEnvironmentCNAMEsCommand extends $Command
  .classBuilder<
    SwapEnvironmentCNAMEsCommandInput,
    SwapEnvironmentCNAMEsCommandOutput,
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
  .s("AWSElasticBeanstalkService", "SwapEnvironmentCNAMEs", {})
  .n("ElasticBeanstalkClient", "SwapEnvironmentCNAMEsCommand")
  .f(void 0, void 0)
  .ser(se_SwapEnvironmentCNAMEsCommand)
  .de(de_SwapEnvironmentCNAMEsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SwapEnvironmentCNAMEsMessage;
      output: {};
    };
    sdk: {
      input: SwapEnvironmentCNAMEsCommandInput;
      output: SwapEnvironmentCNAMEsCommandOutput;
    };
  };
}
