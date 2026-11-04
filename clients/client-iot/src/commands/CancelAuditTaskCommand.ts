// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelAuditTaskRequest, CancelAuditTaskResponse } from "../models/models_0";
import { CancelAuditTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelAuditTaskCommand}.
 */
export interface CancelAuditTaskCommandInput extends CancelAuditTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelAuditTaskCommand}.
 */
export interface CancelAuditTaskCommandOutput extends CancelAuditTaskResponse, __MetadataBearer {}

/**
 * Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.
 *
 * Requires permission to access the [CancelAuditTask](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CancelAuditTaskRequest
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new CancelAuditTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelAuditTaskCommandInput - {@link CancelAuditTaskCommandInput}
 * @returns {@link CancelAuditTaskCommandOutput}
 * @see {@link CancelAuditTaskCommandInput} for command's `input` shape.
 * @see {@link CancelAuditTaskCommandOutput} for command's `response` shape.
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
export class CancelAuditTaskCommand extends command<CancelAuditTaskCommandInput, CancelAuditTaskCommandOutput>(
  _ep0,
  _mw0,
  "CancelAuditTask",
  CancelAuditTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAuditTaskRequest;
      output: {};
    };
    sdk: {
      input: CancelAuditTaskCommandInput;
      output: CancelAuditTaskCommandOutput;
    };
  };
}
