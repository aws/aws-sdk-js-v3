// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelPipelineExecutionRequest, CancelPipelineExecutionResponse } from "../models/models_0";
import { CancelPipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelPipelineExecutionCommand}.
 */
export interface CancelPipelineExecutionCommandInput extends CancelPipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link CancelPipelineExecutionCommand}.
 */
export interface CancelPipelineExecutionCommandOutput extends CancelPipelineExecutionResponse, __MetadataBearer {}

/**
 * Cancels a pipeline execution in the specified workspace. If the execution is not in a terminal state (such as NOT_STARTED or RUNNING), it transitions to CANCELLING and asynchronously to CANCELLED. This operation is idempotent: calling it on an execution that is already CANCELLING or CANCELLED returns success with the current state. Calling it on a terminal execution (SUCCEEDED or FAILED) returns a conflict error. You can optionally provide a reason; it is returned in the stateDetails field when you describe the execution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CancelPipelineExecutionCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CancelPipelineExecutionCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CancelPipelineExecutionRequest
 *   workspaceName: "STRING_VALUE", // required
 *   pipelineName: "STRING_VALUE", // required
 *   pipelineExecutionId: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 * };
 * const command = new CancelPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // CancelPipelineExecutionResponse
 * //   state: "NOT_STARTED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED", // required
 * // };
 *
 * ```
 *
 * @param CancelPipelineExecutionCommandInput - {@link CancelPipelineExecutionCommandInput}
 * @returns {@link CancelPipelineExecutionCommandOutput}
 * @see {@link CancelPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class CancelPipelineExecutionCommand extends command<CancelPipelineExecutionCommandInput, CancelPipelineExecutionCommandOutput>(
  _ep0,
  _mw0,
  "CancelPipelineExecution",
  CancelPipelineExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelPipelineExecutionRequest;
      output: CancelPipelineExecutionResponse;
    };
    sdk: {
      input: CancelPipelineExecutionCommandInput;
      output: CancelPipelineExecutionCommandOutput;
    };
  };
}
