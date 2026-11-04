// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartAuditMitigationActionsTaskRequest,
  StartAuditMitigationActionsTaskResponse,
} from "../models/models_2";
import { StartAuditMitigationActionsTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAuditMitigationActionsTaskCommand}.
 */
export interface StartAuditMitigationActionsTaskCommandInput extends StartAuditMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartAuditMitigationActionsTaskCommand}.
 */
export interface StartAuditMitigationActionsTaskCommandOutput extends StartAuditMitigationActionsTaskResponse, __MetadataBearer {}

/**
 * Starts a task that applies a set of mitigation actions to the specified target.
 *
 * Requires permission to access the [StartAuditMitigationActionsTask](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // StartAuditMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 *   target: { // AuditMitigationActionsTaskTarget
 *     auditTaskId: "STRING_VALUE",
 *     findingIds: [ // FindingIds
 *       "STRING_VALUE",
 *     ],
 *     auditCheckToReasonCodeFilter: { // AuditCheckToReasonCodeFilter
 *       "<keys>": [ // ReasonForNonComplianceCodes
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   auditCheckToActionsMapping: { // AuditCheckToActionsMapping // required
 *     "<keys>": [ // MitigationActionNameList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new StartAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartAuditMitigationActionsTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAuditMitigationActionsTaskCommandInput - {@link StartAuditMitigationActionsTaskCommandInput}
 * @returns {@link StartAuditMitigationActionsTaskCommandOutput}
 * @see {@link StartAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link StartAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link TaskAlreadyExistsException} (client fault)
 *
 * This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
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
export class StartAuditMitigationActionsTaskCommand extends command<StartAuditMitigationActionsTaskCommandInput, StartAuditMitigationActionsTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartAuditMitigationActionsTask",
  StartAuditMitigationActionsTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAuditMitigationActionsTaskRequest;
      output: StartAuditMitigationActionsTaskResponse;
    };
    sdk: {
      input: StartAuditMitigationActionsTaskCommandInput;
      output: StartAuditMitigationActionsTaskCommandOutput;
    };
  };
}
