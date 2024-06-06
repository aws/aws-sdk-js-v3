// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSchedulesRequest, ListSchedulesResponse } from "../models/models_0";
import { de_ListSchedulesCommand, se_ListSchedulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSchedulesCommand}.
 */
export interface ListSchedulesCommandInput extends ListSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListSchedulesCommand}.
 */
export interface ListSchedulesCommandOutput extends ListSchedulesResponse, __MetadataBearer {}

/**
 * <p>Lists the DataBrew schedules that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListSchedulesCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListSchedulesCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // ListSchedulesRequest
 *   JobName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListSchedulesResponse
 * //   Schedules: [ // ScheduleList // required
 * //     { // Schedule
 * //       AccountId: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       JobNames: [ // JobNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       ResourceArn: "STRING_VALUE",
 * //       CronExpression: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchedulesCommandInput - {@link ListSchedulesCommandInput}
 * @returns {@link ListSchedulesCommandOutput}
 * @see {@link ListSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListSchedulesCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 * @public
 */
export class ListSchedulesCommand extends $Command
  .classBuilder<
    ListSchedulesCommandInput,
    ListSchedulesCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "ListSchedules", {})
  .n("DataBrewClient", "ListSchedulesCommand")
  .f(void 0, void 0)
  .ser(se_ListSchedulesCommand)
  .de(de_ListSchedulesCommand)
  .build() {}
