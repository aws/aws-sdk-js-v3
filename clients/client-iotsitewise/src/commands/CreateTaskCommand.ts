// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTaskRequest, CreateTaskResponse } from "../models/models_0";
import { CreateTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTaskCommand}.
 */
export interface CreateTaskCommandInput extends CreateTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateTaskCommand}.
 */
export interface CreateTaskCommandOutput extends CreateTaskResponse, __MetadataBearer {}

/**
 * <p>Creates a new task in the specified workspace. A task defines a reusable
 * containerized compute workload that can be referenced by one or more pipeline compute nodes.</p>
 * <p>Specify a <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ContainerTaskConfiguration.html"><code>containerTaskConfiguration</code></a> for custom container workloads with
 * configurable ECR image, processing type, processing unit, and environment variables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateTaskCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateTaskCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateTaskRequest
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
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateTaskResponse
 * //   taskName: "STRING_VALUE", // required
 * //   taskArn: "STRING_VALUE", // required
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
 * @param CreateTaskCommandInput - {@link CreateTaskCommandInput}
 * @returns {@link CreateTaskCommandOutput}
 * @see {@link CreateTaskCommandInput} for command's `input` shape.
 * @see {@link CreateTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
export class CreateTaskCommand extends command<CreateTaskCommandInput, CreateTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateTask",
  CreateTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTaskRequest;
      output: CreateTaskResponse;
    };
    sdk: {
      input: CreateTaskCommandInput;
      output: CreateTaskCommandOutput;
    };
  };
}
