// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateConfigurationSetRequest, CreateConfigurationSetResponse } from "../models/models_0";
import { CreateConfigurationSet } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationSetCommand}.
 */
export interface CreateConfigurationSetCommandInput extends CreateConfigurationSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationSetCommand}.
 */
export interface CreateConfigurationSetCommandOutput extends CreateConfigurationSetResponse, __MetadataBearer {}

/**
 * <p>Creates a configuration set.</p>
 *          <p>Configuration sets enable you to publish email sending events. For information about
 *             using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html">Amazon SES Developer
 *             Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateConfigurationSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateConfigurationSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // CreateConfigurationSetRequest
 *   ConfigurationSet: { // ConfigurationSet
 *     Name: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateConfigurationSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateConfigurationSetCommandInput - {@link CreateConfigurationSetCommandInput}
 * @returns {@link CreateConfigurationSetCommandOutput}
 * @see {@link CreateConfigurationSetCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link ConfigurationSetAlreadyExistsException} (client fault)
 *  <p>Indicates that the configuration set could not be created because of a naming
 *             conflict.</p>
 *
 * @throws {@link InvalidConfigurationSetException} (client fault)
 *  <p>Indicates that the configuration set is invalid. See the error message for
 *             details.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @public
 */
export class CreateConfigurationSetCommand extends $Command
  .classBuilder<
    CreateConfigurationSetCommandInput,
    CreateConfigurationSetCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService", "CreateConfigurationSet", {})
  .n("SESClient", "CreateConfigurationSetCommand")
  .sc(CreateConfigurationSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigurationSetRequest;
      output: {};
    };
    sdk: {
      input: CreateConfigurationSetCommandInput;
      output: CreateConfigurationSetCommandOutput;
    };
  };
}
