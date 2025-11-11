// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SwapEnvironmentCNAMEsMessage } from "../models/models_0";
import { SwapEnvironmentCNAMEs } from "../schemas/schemas_0";

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
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
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
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To swap environment CNAMES
 * ```javascript
 * // The following operation swaps the assigned subdomains of two environments:
 * const input = {
 *   DestinationEnvironmentName: "my-env-green",
 *   SourceEnvironmentName: "my-env-blue"
 * };
 * const command = new SwapEnvironmentCNAMEsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSElasticBeanstalkService", "SwapEnvironmentCNAMEs", {})
  .n("ElasticBeanstalkClient", "SwapEnvironmentCNAMEsCommand")
  .sc(SwapEnvironmentCNAMEs)
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
