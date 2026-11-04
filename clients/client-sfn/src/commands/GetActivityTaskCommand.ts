// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { GetActivityTaskInput, GetActivityTaskOutput } from "../models/models_0";
import { GetActivityTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetActivityTaskCommand}.
 */
export interface GetActivityTaskCommandInput extends GetActivityTaskInput {}
/**
 * @public
 *
 * The output of {@link GetActivityTaskCommand}.
 */
export interface GetActivityTaskCommandOutput extends GetActivityTaskOutput, __MetadataBearer {}

/**
 * Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a `taskToken` with a null string.
 *
 * > **Important:**
 * >
 * > Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).
 * >
 * > Polling with `GetActivityTask` can cause latency in some implementations. See [Avoid Latency When Polling for Activity Tasks](https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html) in the Step Functions Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, GetActivityTaskCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, GetActivityTaskCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // GetActivityTaskInput
 *   activityArn: "STRING_VALUE", // required
 *   workerName: "STRING_VALUE",
 * };
 * const command = new GetActivityTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetActivityTaskOutput
 * //   taskToken: "STRING_VALUE",
 * //   input: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetActivityTaskCommandInput - {@link GetActivityTaskCommandInput}
 * @returns {@link GetActivityTaskCommandOutput}
 * @see {@link GetActivityTaskCommandInput} for command's `input` shape.
 * @see {@link GetActivityTaskCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ActivityDoesNotExist} (client fault)
 *
 * The specified activity does not exist.
 *
 * @throws {@link ActivityWorkerLimitExceeded} (client fault)
 *
 * The maximum number of workers concurrently polling for activity tasks has been reached.
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *
 * Either your KMS key policy or API caller does not have the required permissions.
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *
 * The KMS key is not in valid state, for example: Disabled or Deleted.
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *
 * Received when KMS returns `ThrottlingException` for a KMS call that Step Functions makes on behalf of the caller.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class GetActivityTaskCommand extends command<GetActivityTaskCommandInput, GetActivityTaskCommandOutput>(
  _ep0,
  _mw1,
  "GetActivityTask",
  GetActivityTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetActivityTaskInput;
      output: GetActivityTaskOutput;
    };
    sdk: {
      input: GetActivityTaskCommandInput;
      output: GetActivityTaskCommandOutput;
    };
  };
}
