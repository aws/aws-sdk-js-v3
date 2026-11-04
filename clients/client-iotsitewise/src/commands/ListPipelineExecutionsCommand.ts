// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPipelineExecutionsRequest, ListPipelineExecutionsResponse } from "../models/models_1";
import { ListPipelineExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPipelineExecutionsCommand}.
 */
export interface ListPipelineExecutionsCommandInput extends ListPipelineExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineExecutionsCommand}.
 */
export interface ListPipelineExecutionsCommandOutput extends ListPipelineExecutionsResponse, __MetadataBearer {}

/**
 * Lists pipeline executions for a specific pipeline in a workspace. Supports filtering by state and time range. State can be combined with either startTime or endTime filters. Time range filters are grouped: use startTime filters (startTimeAfter, startTimeBefore) or endTime filters (endTimeAfter, endTimeBefore), but not both. Combining startTime and endTime filters returns an InvalidRequestException. Note: endTime filters only return executions in terminal states, as in-progress executions have no endTime.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListPipelineExecutionsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListPipelineExecutionsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListPipelineExecutionsRequest
 *   workspaceName: "STRING_VALUE", // required
 *   pipelineName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   state: "NOT_STARTED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED",
 *   startTimeAfter: new Date("TIMESTAMP"),
 *   startTimeBefore: new Date("TIMESTAMP"),
 *   endTimeAfter: new Date("TIMESTAMP"),
 *   endTimeBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListPipelineExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineExecutionsResponse
 * //   pipelineExecutionSummaries: [ // PipelineExecutionSummaryList // required
 * //     { // PipelineExecutionSummary
 * //       pipelineExecutionId: "STRING_VALUE", // required
 * //       pipelineVersion: "STRING_VALUE", // required
 * //       status: { // PipelineExecutionStatus
 * //         state: "NOT_STARTED" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLING" || "CANCELLED", // required
 * //         stateDetails: { // PipelineExecutionStateDetails
 * //           code: "VALIDATION_ERROR" || "INTERNAL_FAILURE" || "EXECUTION_ERROR" || "TIMED_OUT",
 * //           message: "STRING_VALUE", // required
 * //           details: [ // DetailedErrorList
 * //             { // DetailedPipelineError
 * //               code: "VALIDATION_ERROR" || "INTERNAL_FAILURE" || "EXECUTION_ERROR" || "TIMED_OUT", // required
 * //               message: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       executionPriority: Number("int"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPipelineExecutionsCommandInput - {@link ListPipelineExecutionsCommandInput}
 * @returns {@link ListPipelineExecutionsCommandOutput}
 * @see {@link ListPipelineExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
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
export class ListPipelineExecutionsCommand extends command<ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListPipelineExecutions",
  ListPipelineExecutions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelineExecutionsRequest;
      output: ListPipelineExecutionsResponse;
    };
    sdk: {
      input: ListPipelineExecutionsCommandInput;
      output: ListPipelineExecutionsCommandOutput;
    };
  };
}
