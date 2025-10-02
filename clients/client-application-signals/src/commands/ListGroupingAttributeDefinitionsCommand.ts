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
import { ListGroupingAttributeDefinitionsInput, ListGroupingAttributeDefinitionsOutput } from "../models/models_0";
import {
  de_ListGroupingAttributeDefinitionsCommand,
  se_ListGroupingAttributeDefinitionsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupingAttributeDefinitionsCommand}.
 */
export interface ListGroupingAttributeDefinitionsCommandInput extends ListGroupingAttributeDefinitionsInput {}
/**
 * @public
 *
 * The output of {@link ListGroupingAttributeDefinitionsCommand}.
 */
export interface ListGroupingAttributeDefinitionsCommandOutput
  extends ListGroupingAttributeDefinitionsOutput,
    __MetadataBearer {}

/**
 * <p>Returns the current grouping configuration for this account, including all custom grouping attribute definitions that have been configured. These definitions determine how services are logically grouped based on telemetry attributes, Amazon Web Services tags, or predefined mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, ListGroupingAttributeDefinitionsCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, ListGroupingAttributeDefinitionsCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = { // ListGroupingAttributeDefinitionsInput
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGroupingAttributeDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupingAttributeDefinitionsOutput
 * //   GroupingAttributeDefinitions: [ // GroupingAttributeDefinitions // required
 * //     { // GroupingAttributeDefinition
 * //       GroupingName: "STRING_VALUE", // required
 * //       GroupingSourceKeys: [ // GroupingSourceKeyStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       DefaultGroupingValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupingAttributeDefinitionsCommandInput - {@link ListGroupingAttributeDefinitionsCommandInput}
 * @returns {@link ListGroupingAttributeDefinitionsCommandOutput}
 * @see {@link ListGroupingAttributeDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListGroupingAttributeDefinitionsCommandOutput} for command's `response` shape.
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
export class ListGroupingAttributeDefinitionsCommand extends $Command
  .classBuilder<
    ListGroupingAttributeDefinitionsCommandInput,
    ListGroupingAttributeDefinitionsCommandOutput,
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
  .s("ApplicationSignals", "ListGroupingAttributeDefinitions", {})
  .n("ApplicationSignalsClient", "ListGroupingAttributeDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListGroupingAttributeDefinitionsCommand)
  .de(de_ListGroupingAttributeDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupingAttributeDefinitionsInput;
      output: ListGroupingAttributeDefinitionsOutput;
    };
    sdk: {
      input: ListGroupingAttributeDefinitionsCommandInput;
      output: ListGroupingAttributeDefinitionsCommandOutput;
    };
  };
}
