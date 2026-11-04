// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartPipelineExecutionRequest, StartPipelineExecutionResponse } from "../models/models_1";
import { StartPipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandInput extends StartPipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandOutput extends StartPipelineExecutionResponse, __MetadataBearer {}

/**
 * Starts execution of a pipeline in the specified workspace. Each compute node runs according to the DAG dependency order defined in the pipeline. Nodes without dependencies start immediately, while dependent nodes wait for all upstream nodes to complete successfully.
 *
 * You can provide runtime environment variable overrides that take the highest priority in the environment variable hierarchy, without modifying the pipeline definition.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, StartPipelineExecutionCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, StartPipelineExecutionCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // StartPipelineExecutionRequest
 *   workspaceName: "STRING_VALUE", // required
 *   pipelineName: "STRING_VALUE", // required
 *   executionEnvironmentVariableOverrides: { // ExecutionEnvironmentVariables
 *     global: { // EnvironmentVariablesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     computeNodes: { // ComputeNodeEnvironmentVariablesMap
 *       "<keys>": {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   executionMountOverrides: { // MountOverrides
 *     computeNodes: { // ComputeNodeMountsMap // required
 *       "<keys>": [ // MountList
 *         { // Mount
 *           name: "STRING_VALUE", // required
 *           relativePath: "STRING_VALUE", // required
 *           source: { // MountSource Union: only one key present
 *             s3AccessPoint: { // S3AccessPointSource
 *               accessPointArn: "STRING_VALUE", // required
 *               prefix: "STRING_VALUE",
 *             },
 *           },
 *           storageType: "SHARED_STORAGE", // required
 *         },
 *       ],
 *     },
 *   },
 *   executionPriority: Number("int"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartPipelineExecutionResponse
 * //   pipelineExecutionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartPipelineExecutionCommandInput - {@link StartPipelineExecutionCommandInput}
 * @returns {@link StartPipelineExecutionCommandOutput}
 * @see {@link StartPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPipelineExecutionCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
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
export class StartPipelineExecutionCommand extends command<StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartPipelineExecution",
  StartPipelineExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPipelineExecutionRequest;
      output: StartPipelineExecutionResponse;
    };
    sdk: {
      input: StartPipelineExecutionCommandInput;
      output: StartPipelineExecutionCommandOutput;
    };
  };
}
