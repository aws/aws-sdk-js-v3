// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartSearchRequest, StartSearchResponse } from "../models/models_1";
import { StartSearch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartSearchCommand}.
 */
export interface StartSearchCommandInput extends StartSearchRequest {}
/**
 * @public
 *
 * The output of {@link StartSearchCommand}.
 */
export interface StartSearchCommandOutput extends StartSearchResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous search over the data in a workspace. The search runs in the background;
 * the response returns immediately with a <code>searchId</code> and an initial status of <code>QUEUED</code>. Use
 * <code>DescribeSearch</code> to poll for completion and <code>GetSearchResults</code> to retrieve the results once the
 * search reaches <code>SUCCEEDED</code>. The request is idempotent on <code>clientToken</code>: repeating a call with the
 * same token returns the original search instead of starting a new one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, StartSearchCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, StartSearchCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // StartSearchRequest
 *   workspaceName: "STRING_VALUE", // required
 *   queryStatement: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   searchType: "DEEP" || "QUICK",
 *   searchFilters: { // SearchFilters
 *     timeSeriesIds: [ // TimeSeriesIdList
 *       "STRING_VALUE",
 *     ],
 *     datasetIds: [ // DataSetIdList
 *       "STRING_VALUE",
 *     ],
 *     timeIntervals: [ // TimeIntervalList
 *       { // TimeInterval
 *         startTime: { // TimeInNanos
 *           timeInSeconds: Number("long"), // required
 *           offsetInNanos: Number("int"),
 *         },
 *         endTime: {
 *           timeInSeconds: Number("long"), // required
 *           offsetInNanos: Number("int"),
 *         },
 *       },
 *     ],
 *   },
 *   groupId: "STRING_VALUE",
 * };
 * const command = new StartSearchCommand(input);
 * const response = await client.send(command);
 * // { // StartSearchResponse
 * //   searchId: "STRING_VALUE", // required
 * //   workspaceName: "STRING_VALUE", // required
 * //   status: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED", // required
 * //   groupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSearchCommandInput - {@link StartSearchCommandInput}
 * @returns {@link StartSearchCommandOutput}
 * @see {@link StartSearchCommandInput} for command's `input` shape.
 * @see {@link StartSearchCommandOutput} for command's `response` shape.
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
export class StartSearchCommand extends command<StartSearchCommandInput, StartSearchCommandOutput>(
  _ep0,
  _mw0,
  "StartSearch",
  StartSearch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSearchRequest;
      output: StartSearchResponse;
    };
    sdk: {
      input: StartSearchCommandInput;
      output: StartSearchCommandOutput;
    };
  };
}
