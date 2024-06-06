// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfigurationAggregatorRequest } from "../models/models_0";
import {
  de_DeleteConfigurationAggregatorCommand,
  se_DeleteConfigurationAggregatorCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationAggregatorCommand}.
 */
export interface DeleteConfigurationAggregatorCommandInput extends DeleteConfigurationAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationAggregatorCommand}.
 */
export interface DeleteConfigurationAggregatorCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified configuration aggregator and the
 * 			aggregated data associated with the aggregator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigurationAggregatorCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigurationAggregatorCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteConfigurationAggregatorRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationAggregatorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationAggregatorCommandInput - {@link DeleteConfigurationAggregatorCommandInput}
 * @returns {@link DeleteConfigurationAggregatorCommandOutput}
 * @see {@link DeleteConfigurationAggregatorCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationAggregatorCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigurationAggregatorException} (client fault)
 *  <p>You have specified a configuration aggregator that does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DeleteConfigurationAggregatorCommand extends $Command
  .classBuilder<
    DeleteConfigurationAggregatorCommandInput,
    DeleteConfigurationAggregatorCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DeleteConfigurationAggregator", {})
  .n("ConfigServiceClient", "DeleteConfigurationAggregatorCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigurationAggregatorCommand)
  .de(de_DeleteConfigurationAggregatorCommand)
  .build() {}
