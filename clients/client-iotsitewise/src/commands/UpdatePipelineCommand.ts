// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePipelineRequest, UpdatePipelineResponse } from "../models/models_1";
import { UpdatePipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandInput extends UpdatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandOutput extends UpdatePipelineResponse, __MetadataBearer {}

/**
 * <p>Updates an existing pipeline in the specified workspace. Only the fields
 * provided in the request are updated; fields not included in the request are preserved
 * unchanged. You can update the pipeline description, environment variables, and the
 * list of compute nodes independently.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, UpdatePipelineCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, UpdatePipelineCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // UpdatePipelineRequest
 *   workspaceName: "STRING_VALUE", // required
 *   pipelineName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   environmentVariables: { // EnvironmentVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   computations: [ // ComputeNodeList
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
 * };
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineResponse
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
 * @param UpdatePipelineCommandInput - {@link UpdatePipelineCommandInput}
 * @returns {@link UpdatePipelineCommandOutput}
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
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
export class UpdatePipelineCommand extends command<UpdatePipelineCommandInput, UpdatePipelineCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePipeline",
  UpdatePipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineRequest;
      output: UpdatePipelineResponse;
    };
    sdk: {
      input: UpdatePipelineCommandInput;
      output: UpdatePipelineCommandOutput;
    };
  };
}
