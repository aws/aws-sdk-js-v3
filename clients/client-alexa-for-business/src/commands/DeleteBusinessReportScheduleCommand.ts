// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBusinessReportScheduleRequest, DeleteBusinessReportScheduleResponse } from "../models/models_0";
import {
  de_DeleteBusinessReportScheduleCommand,
  se_DeleteBusinessReportScheduleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBusinessReportScheduleCommand}.
 */
export interface DeleteBusinessReportScheduleCommandInput extends DeleteBusinessReportScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBusinessReportScheduleCommand}.
 */
export interface DeleteBusinessReportScheduleCommandOutput
  extends DeleteBusinessReportScheduleResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the recurring report delivery schedule with the specified schedule
 *          ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteBusinessReportScheduleCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteBusinessReportScheduleCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteBusinessReportScheduleRequest
 *   ScheduleArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteBusinessReportScheduleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBusinessReportScheduleCommandInput - {@link DeleteBusinessReportScheduleCommandInput}
 * @returns {@link DeleteBusinessReportScheduleCommandOutput}
 * @see {@link DeleteBusinessReportScheduleCommandInput} for command's `input` shape.
 * @see {@link DeleteBusinessReportScheduleCommandOutput} for command's `response` shape.
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
 * @deprecated Alexa For Business is no longer supported
 */
export class DeleteBusinessReportScheduleCommand extends $Command
  .classBuilder<
    DeleteBusinessReportScheduleCommandInput,
    DeleteBusinessReportScheduleCommandOutput,
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
  .s("AlexaForBusiness", "DeleteBusinessReportSchedule", {})
  .n("AlexaForBusinessClient", "DeleteBusinessReportScheduleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBusinessReportScheduleCommand)
  .de(de_DeleteBusinessReportScheduleCommand)
  .build() {}
