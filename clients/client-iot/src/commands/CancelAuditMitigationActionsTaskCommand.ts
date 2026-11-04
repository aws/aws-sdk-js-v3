// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CancelAuditMitigationActionsTaskRequest,
  CancelAuditMitigationActionsTaskResponse,
} from "../models/models_0";
import { CancelAuditMitigationActionsTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelAuditMitigationActionsTaskCommand}.
 */
export interface CancelAuditMitigationActionsTaskCommandInput extends CancelAuditMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelAuditMitigationActionsTaskCommand}.
 */
export interface CancelAuditMitigationActionsTaskCommandOutput extends CancelAuditMitigationActionsTaskResponse, __MetadataBearer {}

/**
 * Cancels a mitigation action task that is in progress. If the task is not in progress, an InvalidRequestException occurs.
 *
 * Requires permission to access the [CancelAuditMitigationActionsTask](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CancelAuditMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new CancelAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelAuditMitigationActionsTaskCommandInput - {@link CancelAuditMitigationActionsTaskCommandInput}
 * @returns {@link CancelAuditMitigationActionsTaskCommandOutput}
 * @see {@link CancelAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link CancelAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
export class CancelAuditMitigationActionsTaskCommand extends command<CancelAuditMitigationActionsTaskCommandInput, CancelAuditMitigationActionsTaskCommandOutput>(
  _ep0,
  _mw0,
  "CancelAuditMitigationActionsTask",
  CancelAuditMitigationActionsTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAuditMitigationActionsTaskRequest;
      output: {};
    };
    sdk: {
      input: CancelAuditMitigationActionsTaskCommandInput;
      output: CancelAuditMitigationActionsTaskCommandOutput;
    };
  };
}
