// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeScheduleRequest, DescribeScheduleResponse } from "../models/models_0";
import { DescribeSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduleCommand}.
 */
export interface DescribeScheduleCommandInput extends DescribeScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduleCommand}.
 */
export interface DescribeScheduleCommandOutput extends DescribeScheduleResponse, __MetadataBearer {}

/**
 * <p>Returns the definition of a specific DataBrew schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeScheduleCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeScheduleCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DescribeScheduleRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduleResponse
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   CreatedBy: "STRING_VALUE",
 * //   JobNames: [ // JobNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   LastModifiedBy: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   ResourceArn: "STRING_VALUE",
 * //   CronExpression: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeScheduleCommandInput - {@link DescribeScheduleCommandInput}
 * @returns {@link DescribeScheduleCommandOutput}
 * @see {@link DescribeScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduleCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class DescribeScheduleCommand extends $Command
  .classBuilder<
    DescribeScheduleCommandInput,
    DescribeScheduleCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "DescribeSchedule", {})
  .n("DataBrewClient", "DescribeScheduleCommand")
  .sc(DescribeSchedule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScheduleRequest;
      output: DescribeScheduleResponse;
    };
    sdk: {
      input: DescribeScheduleCommandInput;
      output: DescribeScheduleCommandOutput;
    };
  };
}
