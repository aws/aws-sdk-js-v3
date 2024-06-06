// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditTasksRequest, ListAuditTasksResponse } from "../models/models_1";
import { de_ListAuditTasksCommand, se_ListAuditTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAuditTasksCommand}.
 */
export interface ListAuditTasksCommandInput extends ListAuditTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListAuditTasksCommand}.
 */
export interface ListAuditTasksCommandOutput extends ListAuditTasksResponse, __MetadataBearer {}

/**
 * <p>Lists the Device Defender audits that have been performed during a given
 *           time period.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditTasks</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListAuditTasksRequest
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   taskType: "ON_DEMAND_AUDIT_TASK" || "SCHEDULED_AUDIT_TASK",
 *   taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAuditTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListAuditTasksResponse
 * //   tasks: [ // AuditTaskMetadataList
 * //     { // AuditTaskMetadata
 * //       taskId: "STRING_VALUE",
 * //       taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 * //       taskType: "ON_DEMAND_AUDIT_TASK" || "SCHEDULED_AUDIT_TASK",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuditTasksCommandInput - {@link ListAuditTasksCommandInput}
 * @returns {@link ListAuditTasksCommandOutput}
 * @see {@link ListAuditTasksCommandInput} for command's `input` shape.
 * @see {@link ListAuditTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class ListAuditTasksCommand extends $Command
  .classBuilder<
    ListAuditTasksCommandInput,
    ListAuditTasksCommandOutput,
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
  .s("AWSIotService", "ListAuditTasks", {})
  .n("IoTClient", "ListAuditTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListAuditTasksCommand)
  .de(de_ListAuditTasksCommand)
  .build() {}
