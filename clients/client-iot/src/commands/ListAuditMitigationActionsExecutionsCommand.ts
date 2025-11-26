// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type {
  ListAuditMitigationActionsExecutionsRequest,
  ListAuditMitigationActionsExecutionsResponse,
} from "../models/models_1";
import { ListAuditMitigationActionsExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAuditMitigationActionsExecutionsCommand}.
 */
export interface ListAuditMitigationActionsExecutionsCommandInput extends ListAuditMitigationActionsExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAuditMitigationActionsExecutionsCommand}.
 */
export interface ListAuditMitigationActionsExecutionsCommandOutput
  extends ListAuditMitigationActionsExecutionsResponse,
    __MetadataBearer {}

/**
 * <p>Gets the status of audit mitigation action tasks that were
 *       executed.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditMitigationActionsExecutions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditMitigationActionsExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditMitigationActionsExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListAuditMitigationActionsExecutionsRequest
 *   taskId: "STRING_VALUE", // required
 *   actionStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED" || "SKIPPED" || "PENDING",
 *   findingId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAuditMitigationActionsExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAuditMitigationActionsExecutionsResponse
 * //   actionsExecutions: [ // AuditMitigationActionExecutionMetadataList
 * //     { // AuditMitigationActionExecutionMetadata
 * //       taskId: "STRING_VALUE",
 * //       findingId: "STRING_VALUE",
 * //       actionName: "STRING_VALUE",
 * //       actionId: "STRING_VALUE",
 * //       status: "IN_PROGRESS" || "COMPLETED" || "FAILED" || "CANCELED" || "SKIPPED" || "PENDING",
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       errorCode: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuditMitigationActionsExecutionsCommandInput - {@link ListAuditMitigationActionsExecutionsCommandInput}
 * @returns {@link ListAuditMitigationActionsExecutionsCommandOutput}
 * @see {@link ListAuditMitigationActionsExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListAuditMitigationActionsExecutionsCommandOutput} for command's `response` shape.
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
export class ListAuditMitigationActionsExecutionsCommand extends $Command
  .classBuilder<
    ListAuditMitigationActionsExecutionsCommandInput,
    ListAuditMitigationActionsExecutionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListAuditMitigationActionsExecutions", {})
  .n("IoTClient", "ListAuditMitigationActionsExecutionsCommand")
  .sc(ListAuditMitigationActionsExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAuditMitigationActionsExecutionsRequest;
      output: ListAuditMitigationActionsExecutionsResponse;
    };
    sdk: {
      input: ListAuditMitigationActionsExecutionsCommandInput;
      output: ListAuditMitigationActionsExecutionsCommandOutput;
    };
  };
}
