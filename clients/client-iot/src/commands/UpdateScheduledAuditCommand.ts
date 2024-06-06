// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateScheduledAuditRequest, UpdateScheduledAuditResponse } from "../models/models_2";
import { de_UpdateScheduledAuditCommand, se_UpdateScheduledAuditCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateScheduledAuditCommand}.
 */
export interface UpdateScheduledAuditCommandInput extends UpdateScheduledAuditRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScheduledAuditCommand}.
 */
export interface UpdateScheduledAuditCommandOutput extends UpdateScheduledAuditResponse, __MetadataBearer {}

/**
 * <p>Updates a scheduled audit, including which checks are performed and
 *           how often the audit takes place.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateScheduledAudit</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateScheduledAuditRequest
 *   frequency: "DAILY" || "WEEKLY" || "BIWEEKLY" || "MONTHLY",
 *   dayOfMonth: "STRING_VALUE",
 *   dayOfWeek: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 *   targetCheckNames: [ // TargetAuditCheckNames
 *     "STRING_VALUE",
 *   ],
 *   scheduledAuditName: "STRING_VALUE", // required
 * };
 * const command = new UpdateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScheduledAuditResponse
 * //   scheduledAuditArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateScheduledAuditCommandInput - {@link UpdateScheduledAuditCommandInput}
 * @returns {@link UpdateScheduledAuditCommandOutput}
 * @see {@link UpdateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link UpdateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class UpdateScheduledAuditCommand extends $Command
  .classBuilder<
    UpdateScheduledAuditCommandInput,
    UpdateScheduledAuditCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateScheduledAudit", {})
  .n("IoTClient", "UpdateScheduledAuditCommand")
  .f(void 0, void 0)
  .ser(se_UpdateScheduledAuditCommand)
  .de(de_UpdateScheduledAuditCommand)
  .build() {}
