// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePipelineRequest, DeletePipelineResponse } from "../models/models_0";
import { DeletePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePipelineCommand}.
 */
export interface DeletePipelineCommandInput extends DeletePipelineRequest {}
/**
 * @public
 *
 * The output of {@link DeletePipelineCommand}.
 */
export interface DeletePipelineCommandOutput extends DeletePipelineResponse, __MetadataBearer {}

/**
 * <p>Deletes a pipeline from the specified workspace. A pipeline cannot be
 * deleted if it has any active executions. Wait for all executions to complete before
 * attempting to delete the pipeline, or use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CancelPipelineExecution.html">CancelPipelineExecution</a> to stop a running
 * execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeletePipelineCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeletePipelineCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DeletePipelineRequest
 *   workspaceName: "STRING_VALUE", // required
 *   pipelineName: "STRING_VALUE", // required
 * };
 * const command = new DeletePipelineCommand(input);
 * const response = await client.send(command);
 * // { // DeletePipelineResponse
 * //   status: { // ResourceStatus
 * //     error: { // ResourceError
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE",
 * //       message: "STRING_VALUE",
 * //     },
 * //     state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeletePipelineCommandInput - {@link DeletePipelineCommandInput}
 * @returns {@link DeletePipelineCommandOutput}
 * @see {@link DeletePipelineCommandInput} for command's `input` shape.
 * @see {@link DeletePipelineCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class DeletePipelineCommand extends command<DeletePipelineCommandInput, DeletePipelineCommandOutput>(
  _ep0,
  _mw0,
  "DeletePipeline",
  DeletePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePipelineRequest;
      output: DeletePipelineResponse;
    };
    sdk: {
      input: DeletePipelineCommandInput;
      output: DeletePipelineCommandOutput;
    };
  };
}
