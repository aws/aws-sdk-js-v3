// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartOnDemandAuditTaskRequest, StartOnDemandAuditTaskResponse } from "../models/models_2";
import { StartOnDemandAuditTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts an on-demand Device Defender audit.
 *
 * Requires permission to access the [StartOnDemandAuditTask](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartOnDemandAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartOnDemandAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
export class StartOnDemandAuditTaskCommand extends command<StartOnDemandAuditTaskCommandInput, StartOnDemandAuditTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartOnDemandAuditTask",
  StartOnDemandAuditTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartOnDemandAuditTaskRequest;
      output: StartOnDemandAuditTaskResponse;
    };
    sdk: {
      input: StartOnDemandAuditTaskCommandInput;
      output: StartOnDemandAuditTaskCommandOutput;
    };
  };
}
