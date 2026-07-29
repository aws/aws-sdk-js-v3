// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTaskRequest, DeleteTaskResponse } from "../models/models_0";
import { DeleteTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTaskCommand}.
 */
export interface DeleteTaskCommandInput extends DeleteTaskRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTaskCommand}.
 */
export interface DeleteTaskCommandOutput extends DeleteTaskResponse, __MetadataBearer {}

/**
 * <p>Deletes a task from the specified workspace. A task cannot be deleted
 * if it is currently referenced by any existing pipeline. Remove the task from all
 * pipelines before attempting to delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DeleteTaskCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DeleteTaskCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DeleteTaskRequest
 *   workspaceName: "STRING_VALUE", // required
 *   taskName: "STRING_VALUE", // required
 * };
 * const command = new DeleteTaskCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTaskResponse
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
 * @param DeleteTaskCommandInput - {@link DeleteTaskCommandInput}
 * @returns {@link DeleteTaskCommandOutput}
 * @see {@link DeleteTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskCommandOutput} for command's `response` shape.
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
export class DeleteTaskCommand extends command<DeleteTaskCommandInput, DeleteTaskCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTask",
  DeleteTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTaskRequest;
      output: DeleteTaskResponse;
    };
    sdk: {
      input: DeleteTaskCommandInput;
      output: DeleteTaskCommandOutput;
    };
  };
}
