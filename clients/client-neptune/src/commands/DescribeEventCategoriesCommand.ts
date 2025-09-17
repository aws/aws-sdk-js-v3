// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventCategoriesMessage, EventCategoriesMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_DescribeEventCategoriesCommand, se_DescribeEventCategoriesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventCategoriesCommand}.
 */
export interface DescribeEventCategoriesCommandInput extends DescribeEventCategoriesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEventCategoriesCommand}.
 */
export interface DescribeEventCategoriesCommandOutput extends EventCategoriesMessage, __MetadataBearer {}

/**
 * <p>Displays a list of categories for all event source types, or, if specified, for a
 *       specified source type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeEventCategoriesCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeEventCategoriesCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DescribeEventCategoriesMessage
 *   SourceType: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * // { // EventCategoriesMessage
 * //   EventCategoriesMapList: [ // EventCategoriesMapList
 * //     { // EventCategoriesMap
 * //       SourceType: "STRING_VALUE",
 * //       EventCategories: [ // EventCategoriesList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventCategoriesCommandInput - {@link DescribeEventCategoriesCommandInput}
 * @returns {@link DescribeEventCategoriesCommandOutput}
 * @see {@link DescribeEventCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventCategoriesCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribeEventCategoriesCommand extends $Command
  .classBuilder<
    DescribeEventCategoriesCommandInput,
    DescribeEventCategoriesCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeEventCategories", {})
  .n("NeptuneClient", "DescribeEventCategoriesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventCategoriesCommand)
  .de(de_DescribeEventCategoriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventCategoriesMessage;
      output: EventCategoriesMessage;
    };
    sdk: {
      input: DescribeEventCategoriesCommandInput;
      output: DescribeEventCategoriesCommandOutput;
    };
  };
}
