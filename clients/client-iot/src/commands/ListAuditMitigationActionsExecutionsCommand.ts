// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAuditMitigationActionsExecutionsRequest,
  ListAuditMitigationActionsExecutionsResponse,
} from "../models/models_1";
import { ListAuditMitigationActionsExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListAuditMitigationActionsExecutionsCommandOutput extends ListAuditMitigationActionsExecutionsResponse, __MetadataBearer {}

/**
 * Gets the status of audit mitigation action tasks that were executed.
 *
 * Requires permission to access the [ListAuditMitigationActionsExecutions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListAuditMitigationActionsExecutionsCommand extends command<ListAuditMitigationActionsExecutionsCommandInput, ListAuditMitigationActionsExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAuditMitigationActionsExecutions",
  ListAuditMitigationActionsExecutions$
) {
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
