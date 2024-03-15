// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBusinessReportScheduleRequest, CreateBusinessReportScheduleResponse } from "../models/models_0";
import {
  de_CreateBusinessReportScheduleCommand,
  se_CreateBusinessReportScheduleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBusinessReportScheduleCommand}.
 */
export interface CreateBusinessReportScheduleCommandInput extends CreateBusinessReportScheduleRequest {}
/**
 * @public
 *
 * The output of {@link CreateBusinessReportScheduleCommand}.
 */
export interface CreateBusinessReportScheduleCommandOutput
  extends CreateBusinessReportScheduleResponse,
    __MetadataBearer {}

/**
 * <p>Creates a recurring schedule for usage reports to deliver to the specified S3
 *          location with a specified daily or weekly interval.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateBusinessReportScheduleRequest
 *   ScheduleName: "STRING_VALUE",
 *   S3BucketName: "STRING_VALUE",
 *   S3KeyPrefix: "STRING_VALUE",
 *   Format: "CSV" || "CSV_ZIP", // required
 *   ContentRange: { // BusinessReportContentRange
 *     Interval: "ONE_DAY" || "ONE_WEEK" || "THIRTY_DAYS", // required
 *   },
 *   Recurrence: { // BusinessReportRecurrence
 *     StartDate: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * // { // CreateBusinessReportScheduleResponse
 * //   ScheduleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBusinessReportScheduleCommandInput - {@link CreateBusinessReportScheduleCommandInput}
 * @returns {@link CreateBusinessReportScheduleCommandOutput}
 * @see {@link CreateBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class CreateBusinessReportScheduleCommand extends $Command
  .classBuilder<
    CreateBusinessReportScheduleCommandInput,
    CreateBusinessReportScheduleCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "CreateBusinessReportSchedule", {})
  .n("AlexaForBusinessClient", "CreateBusinessReportScheduleCommand")
  .f(void 0, void 0)
  .ser(se_CreateBusinessReportScheduleCommand)
  .de(de_CreateBusinessReportScheduleCommand)
  .build() {}
