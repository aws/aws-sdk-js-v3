// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTaskRequest, UpdateTaskResponse } from "../models/models_1";
import { UpdateTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTaskCommand}.
 */
export interface UpdateTaskCommandInput extends UpdateTaskRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTaskCommand}.
 */
export interface UpdateTaskCommandOutput extends UpdateTaskResponse, __MetadataBearer {}

/**
 * <p>Updates an existing task in the specified workspace. Only the fields
 * provided in the request are updated; fields not included in the request are preserved
 * unchanged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdateTaskCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdateTaskCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdateTaskRequest
 *   workspaceName: "STRING_VALUE", // required
 *   taskName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   taskConfiguration: { // TaskConfiguration Union: only one key present
 *     containerTaskConfiguration: { // ContainerTaskConfiguration
 *       ecrUri: "STRING_VALUE", // required
 *       taskExecutionRole: "STRING_VALUE", // required
 *       processingType: "GENERIC_COMPUTE_PROCESSING" || "HARDWARE_ACCELERATED_PROCESSING", // required
 *       processingUnit: "UNITS_2" || "UNITS_4" || "UNITS_8" || "UNITS_12" || "UNITS_16" || "UNITS_24" || "UNITS_32" || "UNITS_36" || "UNITS_48" || "UNITS_60" || "UNITS_64" || "UNITS_72" || "UNITS_84" || "UNITS_96", // required
 *       command: [ // CommandList
 *         "STRING_VALUE",
 *       ],
 *       timeoutSeconds: Number("long"),
 *       environmentVariables: { // EnvironmentVariablesMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateTaskCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTaskResponse
 * //   version: "STRING_VALUE", // required
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
 * @param UpdateTaskCommandInput - {@link UpdateTaskCommandInput}
 * @returns {@link UpdateTaskCommandOutput}
 * @see {@link UpdateTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskCommandOutput} for command's `response` shape.
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
export class UpdateTaskCommand extends command<UpdateTaskCommandInput, UpdateTaskCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTask",
  UpdateTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTaskRequest;
      output: UpdateTaskResponse;
    };
    sdk: {
      input: UpdateTaskCommandInput;
      output: UpdateTaskCommandOutput;
    };
  };
}
