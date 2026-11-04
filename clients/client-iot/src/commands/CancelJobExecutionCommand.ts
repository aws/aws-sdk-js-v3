// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelJobExecutionRequest } from "../models/models_0";
import { CancelJobExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelJobExecutionCommand}.
 */
export interface CancelJobExecutionCommandInput extends CancelJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobExecutionCommand}.
 */
export interface CancelJobExecutionCommandOutput extends __MetadataBearer {}

/**
 * Cancels the execution of a job for a given thing.
 *
 * Requires permission to access the [CancelJobExecution](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelJobExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelJobExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CancelJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   force: true || false,
 *   expectedVersion: Number("long"),
 *   statusDetails: { // DetailsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CancelJobExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelJobExecutionCommandInput - {@link CancelJobExecutionCommandInput}
 * @returns {@link CancelJobExecutionCommandOutput}
 * @see {@link CancelJobExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link InvalidStateTransitionException} (client fault)
 *
 * An attempt was made to change to an invalid state, for example by deleting a job or a job execution which is "IN_PROGRESS" without setting the `force` parameter.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link VersionConflictException} (client fault)
 *
 * An exception thrown when the version of an entity specified with the `expectedVersion` parameter does not match the latest version in the system.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class CancelJobExecutionCommand extends command<CancelJobExecutionCommandInput, CancelJobExecutionCommandOutput>(
  _ep0,
  _mw0,
  "CancelJobExecution",
  CancelJobExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelJobExecutionRequest;
      output: {};
    };
    sdk: {
      input: CancelJobExecutionCommandInput;
      output: CancelJobExecutionCommandOutput;
    };
  };
}
