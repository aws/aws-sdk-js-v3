// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartOnDemandAuditTaskRequest, StartOnDemandAuditTaskResponse } from "../models/models_2";
import { de_StartOnDemandAuditTaskCommand, se_StartOnDemandAuditTaskCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartOnDemandAuditTaskCommand}.
 */
export interface StartOnDemandAuditTaskCommandInput extends StartOnDemandAuditTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartOnDemandAuditTaskCommand}.
 */
export interface StartOnDemandAuditTaskCommandOutput extends StartOnDemandAuditTaskResponse, __MetadataBearer {}

/**
 * <p>Starts an on-demand Device Defender audit.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartOnDemandAuditTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartOnDemandAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartOnDemandAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // StartOnDemandAuditTaskRequest
 *   targetCheckNames: [ // TargetAuditCheckNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartOnDemandAuditTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartOnDemandAuditTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartOnDemandAuditTaskCommandInput - {@link StartOnDemandAuditTaskCommandInput}
 * @returns {@link StartOnDemandAuditTaskCommandOutput}
 * @see {@link StartOnDemandAuditTaskCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandAuditTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class StartOnDemandAuditTaskCommand extends $Command
  .classBuilder<
    StartOnDemandAuditTaskCommandInput,
    StartOnDemandAuditTaskCommandOutput,
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
  .s("AWSIotService", "StartOnDemandAuditTask", {})
  .n("IoTClient", "StartOnDemandAuditTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartOnDemandAuditTaskCommand)
  .de(de_StartOnDemandAuditTaskCommand)
  .build() {}
