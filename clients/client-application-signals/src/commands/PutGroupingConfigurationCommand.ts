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
import { PutGroupingConfigurationInput, PutGroupingConfigurationOutput } from "../models/models_0";
import { de_PutGroupingConfigurationCommand, se_PutGroupingConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutGroupingConfigurationCommand}.
 */
export interface PutGroupingConfigurationCommandInput extends PutGroupingConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutGroupingConfigurationCommand}.
 */
export interface PutGroupingConfigurationCommandOutput extends PutGroupingConfigurationOutput, __MetadataBearer {}

/**
 * <p>Creates or updates the grouping configuration for this account. This operation allows you to define custom grouping attributes that determine how services are logically grouped based on telemetry attributes, Amazon Web Services tags, or predefined mappings. These grouping attributes can then be used to organize and filter services in the Application Signals console and APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, PutGroupingConfigurationCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, PutGroupingConfigurationCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // PutGroupingConfigurationInput
 *   GroupingAttributeDefinitions: [ // GroupingAttributeDefinitions // required
 *     { // GroupingAttributeDefinition
 *       GroupingName: "STRING_VALUE", // required
 *       GroupingSourceKeys: [ // GroupingSourceKeyStringList
 *         "STRING_VALUE",
 *       ],
 *       DefaultGroupingValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutGroupingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // PutGroupingConfigurationOutput
 * //   GroupingConfiguration: { // GroupingConfiguration
 * //     GroupingAttributeDefinitions: [ // GroupingAttributeDefinitions // required
 * //       { // GroupingAttributeDefinition
 * //         GroupingName: "STRING_VALUE", // required
 * //         GroupingSourceKeys: [ // GroupingSourceKeyStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         DefaultGroupingValue: "STRING_VALUE",
 * //       },
 * //     ],
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutGroupingConfigurationCommandInput - {@link PutGroupingConfigurationCommandInput}
 * @returns {@link PutGroupingConfigurationCommandOutput}
 * @see {@link PutGroupingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutGroupingConfigurationCommandOutput} for command's `response` shape.
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
export class PutGroupingConfigurationCommand extends $Command
  .classBuilder<
    PutGroupingConfigurationCommandInput,
    PutGroupingConfigurationCommandOutput,
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
  .s("ApplicationSignals", "PutGroupingConfiguration", {})
  .n("ApplicationSignalsClient", "PutGroupingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutGroupingConfigurationCommand)
  .de(de_PutGroupingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutGroupingConfigurationInput;
      output: PutGroupingConfigurationOutput;
    };
    sdk: {
      input: PutGroupingConfigurationCommandInput;
      output: PutGroupingConfigurationCommandOutput;
    };
  };
}
