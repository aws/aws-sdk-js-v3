// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteScheduledAuditRequest, DeleteScheduledAuditResponse } from "../models/models_1";
import { de_DeleteScheduledAuditCommand, se_DeleteScheduledAuditCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteScheduledAuditCommand}.
 */
export interface DeleteScheduledAuditCommandInput extends DeleteScheduledAuditRequest {}
/**
 * @public
 *
 * The output of {@link DeleteScheduledAuditCommand}.
 */
export interface DeleteScheduledAuditCommandOutput extends DeleteScheduledAuditResponse, __MetadataBearer {}

/**
 * <p>Deletes a scheduled audit.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteScheduledAudit</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteScheduledAuditCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteScheduledAuditCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteScheduledAuditRequest
 *   scheduledAuditName: "STRING_VALUE", // required
 * };
 * const command = new DeleteScheduledAuditCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScheduledAuditCommandInput - {@link DeleteScheduledAuditCommandInput}
 * @returns {@link DeleteScheduledAuditCommandOutput}
 * @see {@link DeleteScheduledAuditCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduledAuditCommandOutput} for command's `response` shape.
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
export class DeleteScheduledAuditCommand extends $Command
  .classBuilder<
    DeleteScheduledAuditCommandInput,
    DeleteScheduledAuditCommandOutput,
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
  .s("AWSIotService", "DeleteScheduledAudit", {})
  .n("IoTClient", "DeleteScheduledAuditCommand")
  .f(void 0, void 0)
  .ser(se_DeleteScheduledAuditCommand)
  .de(de_DeleteScheduledAuditCommand)
  .build() {}
