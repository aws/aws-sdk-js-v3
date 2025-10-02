// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteGroupingConfigurationOutput } from "../models/models_0";
import {
  de_DeleteGroupingConfigurationCommand,
  se_DeleteGroupingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteGroupingConfigurationCommand}.
 */
export interface DeleteGroupingConfigurationCommandInput {}
/**
 * @public
 *
 * The output of {@link DeleteGroupingConfigurationCommand}.
 */
export interface DeleteGroupingConfigurationCommandOutput extends DeleteGroupingConfigurationOutput, __MetadataBearer {}

/**
 * <p>Deletes the grouping configuration for this account. This removes all custom grouping attribute definitions that were previously configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, DeleteGroupingConfigurationCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, DeleteGroupingConfigurationCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = {};
 * const command = new DeleteGroupingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGroupingConfigurationCommandInput - {@link DeleteGroupingConfigurationCommandInput}
 * @returns {@link DeleteGroupingConfigurationCommandOutput}
 * @see {@link DeleteGroupingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 *
 * @public
 */
export class DeleteGroupingConfigurationCommand extends $Command
  .classBuilder<
    DeleteGroupingConfigurationCommandInput,
    DeleteGroupingConfigurationCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationSignals", "DeleteGroupingConfiguration", {})
  .n("ApplicationSignalsClient", "DeleteGroupingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteGroupingConfigurationCommand)
  .de(de_DeleteGroupingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeleteGroupingConfigurationCommandInput;
      output: DeleteGroupingConfigurationCommandOutput;
    };
  };
}
