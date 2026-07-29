// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTasksRequest, ListTasksResponse } from "../models/models_1";
import { ListTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTasksCommand}.
 */
export interface ListTasksCommandInput extends ListTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListTasksCommand}.
 */
export interface ListTasksCommandOutput extends ListTasksResponse, __MetadataBearer {}

/**
 * <p>Lists tasks in a workspace. To get complete details about a task, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeTask.html">DescribeTask</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, ListTasksCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, ListTasksCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // ListTasksRequest
 *   workspaceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListTasksResponse
 * //   taskSummaries: [ // TaskSummaries // required
 * //     { // TaskSummary
 * //       taskName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       taskArn: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //       status: { // ResourceStatus
 * //         error: { // ResourceError
 * //           code: "VALIDATION_ERROR" || "INTERNAL_FAILURE",
 * //           message: "STRING_VALUE",
 * //         },
 * //         state: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTasksCommandInput - {@link ListTasksCommandInput}
 * @returns {@link ListTasksCommandOutput}
 * @see {@link ListTasksCommandInput} for command's `input` shape.
 * @see {@link ListTasksCommandOutput} for command's `response` shape.
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
export class ListTasksCommand extends command<ListTasksCommandInput, ListTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListTasks",
  ListTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTasksRequest;
      output: ListTasksResponse;
    };
    sdk: {
      input: ListTasksCommandInput;
      output: ListTasksCommandOutput;
    };
  };
}
