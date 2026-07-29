// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePipelineRequest, CreatePipelineResponse } from "../models/models_0";
import { CreatePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandInput extends CreatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreatePipelineCommand}.
 */
export interface CreatePipelineCommandOutput extends CreatePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a new pipeline in the specified workspace. A pipeline defines a
 * directed acyclic graph (DAG) of compute nodes, where each node references a task
 * and can declare dependencies on other nodes. Cyclic dependencies are not
 * allowed. Nodes without dependencies run in parallel, while nodes with dependencies
 * wait for all upstream nodes to complete successfully before starting.</p>
 * <p>You can set environment variables at the pipeline level that are shared across all
 * compute nodes, and override them at the individual compute node level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreatePipelineCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreatePipelineCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreatePipelineRequest
 *   workspaceName: "STRING_VALUE", // required
 *   pipelineName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   environmentVariables: { // EnvironmentVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   computations: [ // ComputeNodeList // required
 *     { // ComputeNode
 *       computeNodeName: "STRING_VALUE", // required
 *       taskName: "STRING_VALUE", // required
 *       environmentVariables: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       dependsOn: [ // ComputeNodeNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreatePipelineResponse
 * //   pipelineName: "STRING_VALUE", // required
 * //   pipelineArn: "STRING_VALUE", // required
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
 * @param CreatePipelineCommandInput - {@link CreatePipelineCommandInput}
 * @returns {@link CreatePipelineCommandOutput}
 * @see {@link CreatePipelineCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineCommandOutput} for command's `response` shape.
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
export class CreatePipelineCommand extends command<CreatePipelineCommandInput, CreatePipelineCommandOutput>(
  _ep0,
  _mw0,
  "CreatePipeline",
  CreatePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePipelineRequest;
      output: CreatePipelineResponse;
    };
    sdk: {
      input: CreatePipelineCommandInput;
      output: CreatePipelineCommandOutput;
    };
  };
}
