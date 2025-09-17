// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AbortEnvironmentUpdateMessage } from "../models/models_0";
import { de_AbortEnvironmentUpdateCommand, se_AbortEnvironmentUpdateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AbortEnvironmentUpdateCommand}.
 */
export interface AbortEnvironmentUpdateCommandInput extends AbortEnvironmentUpdateMessage {}
/**
 * @public
 *
 * The output of {@link AbortEnvironmentUpdateCommand}.
 */
export interface AbortEnvironmentUpdateCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels in-progress environment configuration update or application version
 *       deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, AbortEnvironmentUpdateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // AbortEnvironmentUpdateMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 * };
 * const command = new AbortEnvironmentUpdateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AbortEnvironmentUpdateCommandInput - {@link AbortEnvironmentUpdateCommandInput}
 * @returns {@link AbortEnvironmentUpdateCommandOutput}
 * @see {@link AbortEnvironmentUpdateCommandInput} for command's `input` shape.
 * @see {@link AbortEnvironmentUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To abort a deployment
 * ```javascript
 * // The following code aborts a running application version deployment for an environment named my-env:
 * const input = {
 *   EnvironmentName: "my-env"
 * };
 * const command = new AbortEnvironmentUpdateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AbortEnvironmentUpdateCommand extends $Command
  .classBuilder<
    AbortEnvironmentUpdateCommandInput,
    AbortEnvironmentUpdateCommandOutput,
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
  .s("AWSElasticBeanstalkService", "AbortEnvironmentUpdate", {})
  .n("ElasticBeanstalkClient", "AbortEnvironmentUpdateCommand")
  .f(void 0, void 0)
  .ser(se_AbortEnvironmentUpdateCommand)
  .de(de_AbortEnvironmentUpdateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AbortEnvironmentUpdateMessage;
      output: {};
    };
    sdk: {
      input: AbortEnvironmentUpdateCommandInput;
      output: AbortEnvironmentUpdateCommandOutput;
    };
  };
}
