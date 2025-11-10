// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGroupingAttributeDefinitionsInput, ListGroupingAttributeDefinitionsOutput } from "../models/models_0";
import { ListGroupingAttributeDefinitions } from "../schemas/schemas_0";

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
 * <p>Retrieves the available grouping attribute definitions that can be used to create grouping configurations. These definitions specify the attributes and rules available for organizing services.</p> <p>Use this operation to discover what grouping options are available before creating or updating grouping configurations.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "ListGroupingAttributeDefinitions", {})
  .n("ApplicationSignalsClient", "ListGroupingAttributeDefinitionsCommand")
  .sc(ListGroupingAttributeDefinitions)
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
