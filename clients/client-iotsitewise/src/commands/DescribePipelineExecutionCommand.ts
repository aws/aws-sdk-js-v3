// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribePipelineExecutionRequest, DescribePipelineExecutionResponse } from "../models/models_0";
import { DescribePipelineExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribePipelineExecutionCommand}.
 */
export interface DescribePipelineExecutionCommandInput extends DescribePipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePipelineExecutionCommand}.
 */
export interface DescribePipelineExecutionCommandOutput extends DescribePipelineExecutionResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific pipeline execution, including the
 * overall execution status and the status of each individual compute node. Use this
 * operation to monitor execution progress and inspect per-node results, environment
 * variables, and error details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribePipelineExecutionCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribePipelineExecutionCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribePipelineExecutionRequest
 *   workspaceName: "STRING_VALUE", // required
 *   pipelineName: "STRING_VALUE", // required
 *   pipelineExecutionId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePipelineExecutionResponse
 * //   pipelineExecutionId: "STRING_VALUE", // required
 * //   pipelineName: "STRING_VALUE", // required
 * //   workspaceName: "STRING_VALUE", // required
 * //   pipelineVersion: "STRING_VALUE", // required
 * //   status: { // PipelineExecutionStatus
 * //     state: "NOT_STARTED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED", // required
 * //     stateDetails: { // PipelineExecutionStateDetails
 * //       code: "VALIDATION_ERROR" || "INTERNAL_FAILURE" || "EXECUTION_ERROR" || "TIMED_OUT",
 * //       message: "STRING_VALUE", // required
 * //       details: [ // DetailedErrorList
 * //         { // DetailedPipelineError
 * //           code: "VALIDATION_ERROR" || "INTERNAL_FAILURE" || "EXECUTION_ERROR" || "TIMED_OUT", // required
 * //           message: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * //   requestEnvironmentVariables: { // ExecutionEnvironmentVariables
 * //     global: { // EnvironmentVariablesMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     computeNodes: { // ComputeNodeEnvironmentVariablesMap
 * //       "<keys>": {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   executionPriority: Number("int"),
 * //   computeNodeExecutionDetails: [ // ComputeNodeExecutionDetailsList // required
 * //     { // ComputeNodeExecutionDetails
 * //       computeNodeName: "STRING_VALUE", // required
 * //       taskName: "STRING_VALUE", // required
 * //       taskArn: "STRING_VALUE", // required
 * //       taskVersion: "STRING_VALUE", // required
 * //       dependsOn: [ // ComputeNodeNameList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       status: { // ComputeNodeExecutionStatus
 * //         state: "NOT_STARTED" || "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED", // required
 * //         stateDetails: { // ComputeNodeExecutionStateDetails
 * //           code: "VALIDATION_ERROR" || "INTERNAL_FAILURE" || "EXECUTION_ERROR" || "TIMED_OUT", // required
 * //           message: "STRING_VALUE", // required
 * //           details: [
 * //             {
 * //               code: "VALIDATION_ERROR" || "INTERNAL_FAILURE" || "EXECUTION_ERROR" || "TIMED_OUT", // required
 * //               message: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //       executionEnvironmentVariables: { // ExecutionEnvironmentVariablesMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePipelineExecutionCommandInput - {@link DescribePipelineExecutionCommandInput}
 * @returns {@link DescribePipelineExecutionCommandOutput}
 * @see {@link DescribePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
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
export class DescribePipelineExecutionCommand extends command<DescribePipelineExecutionCommandInput, DescribePipelineExecutionCommandOutput>(
  _ep0,
  _mw0,
  "DescribePipelineExecution",
  DescribePipelineExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePipelineExecutionRequest;
      output: DescribePipelineExecutionResponse;
    };
    sdk: {
      input: DescribePipelineExecutionCommandInput;
      output: DescribePipelineExecutionCommandOutput;
    };
  };
}
