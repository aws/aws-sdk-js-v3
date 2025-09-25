// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditMitigationActionsTasksRequest, ListAuditMitigationActionsTasksResponse } from "../models/models_1";
import { ListAuditMitigationActionsTasks } from "../schemas/schemas_19_MitigationActions";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAuditMitigationActionsTasksCommand}.
 */
export interface ListAuditMitigationActionsTasksCommandInput extends ListAuditMitigationActionsTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListAuditMitigationActionsTasksCommand}.
 */
export interface ListAuditMitigationActionsTasksCommandOutput
  extends ListAuditMitigationActionsTasksResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of audit mitigation action tasks that match the specified filters.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsTasks</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditMitigationActionsTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditMitigationActionsTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListAuditMitigationActionsTasksRequest
 *   auditTaskId: "STRING_VALUE",
 *   findingId: "STRING_VALUE",
 *   taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 * };
 * const command = new ListAuditMitigationActionsTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListAuditMitigationActionsTasksResponse
 * //   tasks: [ // AuditMitigationActionsTaskMetadataList
 * //     { // AuditMitigationActionsTaskMetadata
 * //       taskId: "STRING_VALUE",
 * //       startTime: new Date("TIMESTAMP"),
 * //       taskStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuditMitigationActionsTasksCommandInput - {@link ListAuditMitigationActionsTasksCommandInput}
 * @returns {@link ListAuditMitigationActionsTasksCommandOutput}
 * @see {@link ListAuditMitigationActionsTasksCommandInput} for command's `input` shape.
 * @see {@link ListAuditMitigationActionsTasksCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListAuditMitigationActionsTasksCommand extends $Command
  .classBuilder<
    ListAuditMitigationActionsTasksCommandInput,
    ListAuditMitigationActionsTasksCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListAuditMitigationActionsTasks", {})
  .n("IoTClient", "ListAuditMitigationActionsTasksCommand")
  .sc(ListAuditMitigationActionsTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAuditMitigationActionsTasksRequest;
      output: ListAuditMitigationActionsTasksResponse;
    };
    sdk: {
      input: ListAuditMitigationActionsTasksCommandInput;
      output: ListAuditMitigationActionsTasksCommandOutput;
    };
  };
}
