// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeScheduledAuditRequest, DescribeScheduledAuditResponse } from "../models/models_1";
import { de_DescribeScheduledAuditCommand, se_DescribeScheduledAuditCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledAuditCommand}.
 */
export interface DescribeScheduledAuditCommandInput extends DescribeScheduledAuditRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledAuditCommand}.
 */
export interface DescribeScheduledAuditCommandOutput extends DescribeScheduledAuditResponse, __MetadataBearer {}

/**
 * <p>Gets information about a scheduled audit.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeScheduledAudit</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeScheduledAuditRequest
 *   scheduledAuditName: "STRING_VALUE", // required
 * };
 * const command = new DescribeScheduledAuditCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduledAuditResponse
 * //   frequency: "DAILY" || "WEEKLY" || "BIWEEKLY" || "MONTHLY",
 * //   dayOfMonth: "STRING_VALUE",
 * //   dayOfWeek: "SUN" || "MON" || "TUE" || "WED" || "THU" || "FRI" || "SAT",
 * //   targetCheckNames: [ // TargetAuditCheckNames
 * //     "STRING_VALUE",
 * //   ],
 * //   scheduledAuditName: "STRING_VALUE",
 * //   scheduledAuditArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScheduledAuditCommandInput - {@link DescribeScheduledAuditCommandInput}
 * @returns {@link DescribeScheduledAuditCommandOutput}
 * @see {@link DescribeScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledAuditCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeScheduledAuditCommand extends $Command
  .classBuilder<
    DescribeScheduledAuditCommandInput,
    DescribeScheduledAuditCommandOutput,
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
  .s("AWSIotService", "DescribeScheduledAudit", {})
  .n("IoTClient", "DescribeScheduledAuditCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScheduledAuditCommand)
  .de(de_DescribeScheduledAuditCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScheduledAuditRequest;
      output: DescribeScheduledAuditResponse;
    };
    sdk: {
      input: DescribeScheduledAuditCommandInput;
      output: DescribeScheduledAuditCommandOutput;
    };
  };
}
