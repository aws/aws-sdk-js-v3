// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateScheduledAuditRequest, CreateScheduledAuditResponse } from "../models/models_0";
import { de_CreateScheduledAuditCommand, se_CreateScheduledAuditCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScheduledAuditCommand}.
 */
export interface CreateScheduledAuditCommandInput extends CreateScheduledAuditRequest {}
/**
 * @public
 *
 * The output of {@link CreateScheduledAuditCommand}.
 */
export interface CreateScheduledAuditCommandOutput extends CreateScheduledAuditResponse, __MetadataBearer {}

/**
 * <p>Creates a scheduled audit that is run at a specified
 *           time interval.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateScheduledAudit</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateScheduledAuditRequest
 *   frequency: "DAILY" || "WEEKLY" || "BIWEEKLY" || "MONTHLY", // required
 *   dayOfMonth: "STRING_VALUE",
 *   dayOfWeek: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 *   targetCheckNames: [ // TargetAuditCheckNames // required
 *     "STRING_VALUE",
 *   ],
 *   scheduledAuditName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateScheduledAuditCommand(input);
 * const response = await client.send(command);
 * // { // CreateScheduledAuditResponse
 * //   scheduledAuditArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateScheduledAuditCommandInput - {@link CreateScheduledAuditCommandInput}
 * @returns {@link CreateScheduledAuditCommandOutput}
 * @see {@link CreateScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link CreateScheduledAuditCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class CreateScheduledAuditCommand extends $Command
  .classBuilder<
    CreateScheduledAuditCommandInput,
    CreateScheduledAuditCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "CreateScheduledAudit", {})
  .n("IoTClient", "CreateScheduledAuditCommand")
  .f(void 0, void 0)
  .ser(se_CreateScheduledAuditCommand)
  .de(de_CreateScheduledAuditCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScheduledAuditRequest;
      output: CreateScheduledAuditResponse;
    };
    sdk: {
      input: CreateScheduledAuditCommandInput;
      output: CreateScheduledAuditCommandOutput;
    };
  };
}
