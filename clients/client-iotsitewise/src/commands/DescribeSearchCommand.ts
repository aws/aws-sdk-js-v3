// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSearchRequest, DescribeSearchResponse } from "../models/models_1";
import { DescribeSearch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSearchCommand}.
 */
export interface DescribeSearchCommandInput extends DescribeSearchRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSearchCommand}.
 */
export interface DescribeSearchCommandOutput extends DescribeSearchResponse, __MetadataBearer {}

/**
 * <p>Returns the current status and metadata of a single search, including the query that was
 * submitted, the search type, and — when the search has failed — the reason. Use this to poll a
 * search started with <code>StartSearch</code> until it reaches a terminal status (<code>SUCCEEDED</code> or
 * <code>FAILED</code>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeSearchCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeSearchCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeSearchRequest
 *   workspaceName: "STRING_VALUE", // required
 *   searchId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSearchCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSearchResponse
 * //   searchId: "STRING_VALUE", // required
 * //   workspaceName: "STRING_VALUE", // required
 * //   status: "QUEUED" || "RUNNING" || "SUCCEEDED" || "FAILED", // required
 * //   queryStatement: "STRING_VALUE", // required
 * //   searchType: "DEEP" || "QUICK", // required
 * //   statusReason: "STRING_VALUE",
 * //   startedAt: new Date("TIMESTAMP"),
 * //   groupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSearchCommandInput - {@link DescribeSearchCommandInput}
 * @returns {@link DescribeSearchCommandOutput}
 * @see {@link DescribeSearchCommandInput} for command's `input` shape.
 * @see {@link DescribeSearchCommandOutput} for command's `response` shape.
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
export class DescribeSearchCommand extends command<DescribeSearchCommandInput, DescribeSearchCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSearch",
  DescribeSearch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSearchRequest;
      output: DescribeSearchResponse;
    };
    sdk: {
      input: DescribeSearchCommandInput;
      output: DescribeSearchCommandOutput;
    };
  };
}
