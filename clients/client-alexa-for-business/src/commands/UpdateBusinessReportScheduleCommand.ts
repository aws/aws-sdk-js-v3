// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBusinessReportScheduleRequest, UpdateBusinessReportScheduleResponse } from "../models/models_0";
import {
  de_UpdateBusinessReportScheduleCommand,
  se_UpdateBusinessReportScheduleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBusinessReportScheduleCommand}.
 */
export interface UpdateBusinessReportScheduleCommandInput extends UpdateBusinessReportScheduleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBusinessReportScheduleCommand}.
 */
export interface UpdateBusinessReportScheduleCommandOutput
  extends UpdateBusinessReportScheduleResponse,
    __MetadataBearer {}

/**
 * <p>Updates the configuration of the report delivery schedule with the specified schedule
 *          ARN.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateBusinessReportScheduleRequest
 *   ScheduleArn: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE",
 *   S3KeyPrefix: "STRING_VALUE",
 *   Format: "CSV" || "CSV_ZIP",
 *   ScheduleName: "STRING_VALUE",
 *   Recurrence: { // BusinessReportRecurrence
 *     StartDate: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateBusinessReportScheduleCommandInput - {@link UpdateBusinessReportScheduleCommandInput}
 * @returns {@link UpdateBusinessReportScheduleCommandOutput}
 * @see {@link UpdateBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateBusinessReportScheduleCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class UpdateBusinessReportScheduleCommand extends $Command
  .classBuilder<
    UpdateBusinessReportScheduleCommandInput,
    UpdateBusinessReportScheduleCommandOutput,
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
  .s("AlexaForBusiness", "UpdateBusinessReportSchedule", {})
  .n("AlexaForBusinessClient", "UpdateBusinessReportScheduleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateBusinessReportScheduleCommand)
  .de(de_UpdateBusinessReportScheduleCommand)
  .build() {}
