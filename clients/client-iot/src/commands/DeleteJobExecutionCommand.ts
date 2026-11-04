// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteJobExecutionRequest } from "../models/models_0";
import { DeleteJobExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteJobExecutionCommand}.
 */
export interface DeleteJobExecutionCommandInput extends DeleteJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobExecutionCommand}.
 */
export interface DeleteJobExecutionCommandOutput extends __MetadataBearer {}

/**
 * Deletes a job execution.
 *
 * Requires permission to access the [DeleteJobExecution](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteJobExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteJobExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteJobExecutionRequest
 *   jobId: "STRING_VALUE", // required
 *   thingName: "STRING_VALUE", // required
 *   executionNumber: Number("long"), // required
 *   force: true || false,
 *   namespaceId: "STRING_VALUE",
 * };
 * const command = new DeleteJobExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteJobExecutionCommandInput - {@link DeleteJobExecutionCommandInput}
 * @returns {@link DeleteJobExecutionCommandOutput}
 * @see {@link DeleteJobExecutionCommandInput} for command's `input` shape.
 * @see {@link DeleteJobExecutionCommandOutput} for command's `response` shape.
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
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DeleteJobExecutionCommand extends command<DeleteJobExecutionCommandInput, DeleteJobExecutionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteJobExecution",
  DeleteJobExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobExecutionRequest;
      output: {};
    };
    sdk: {
      input: DeleteJobExecutionCommandInput;
      output: DeleteJobExecutionCommandOutput;
    };
  };
}
