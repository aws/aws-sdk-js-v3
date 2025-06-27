// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEntityAggregatesRequest, DescribeEntityAggregatesResponse } from "../models/models_0";
import { de_DescribeEntityAggregatesCommand, se_DescribeEntityAggregatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntityAggregatesCommand}.
 */
export interface DescribeEntityAggregatesCommandInput extends DescribeEntityAggregatesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntityAggregatesCommand}.
 */
export interface DescribeEntityAggregatesCommandOutput extends DescribeEntityAggregatesResponse, __MetadataBearer {}

/**
 * <p>Returns the number of entities that are affected by each of the specified events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEntityAggregatesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEntityAggregatesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeEntityAggregatesRequest
 *   eventArns: [ // EventArnsList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeEntityAggregatesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntityAggregatesResponse
 * //   entityAggregates: [ // EntityAggregateList
 * //     { // EntityAggregate
 * //       eventArn: "STRING_VALUE",
 * //       count: Number("int"),
 * //       statuses: { // entityStatuses
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEntityAggregatesCommandInput - {@link DescribeEntityAggregatesCommandInput}
 * @returns {@link DescribeEntityAggregatesCommandOutput}
 * @see {@link DescribeEntityAggregatesCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityAggregatesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 *
 * @public
 */
export class DescribeEntityAggregatesCommand extends $Command
  .classBuilder<
    DescribeEntityAggregatesCommandInput,
    DescribeEntityAggregatesCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHealth_20160804", "DescribeEntityAggregates", {})
  .n("HealthClient", "DescribeEntityAggregatesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEntityAggregatesCommand)
  .de(de_DescribeEntityAggregatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEntityAggregatesRequest;
      output: DescribeEntityAggregatesResponse;
    };
    sdk: {
      input: DescribeEntityAggregatesCommandInput;
      output: DescribeEntityAggregatesCommandOutput;
    };
  };
}
