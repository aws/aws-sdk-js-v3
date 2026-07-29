// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeQueryRequest, DescribeQueryResponse } from "../models/models_0";
import { DescribeQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeQueryCommand}.
 */
export interface DescribeQueryCommandInput extends DescribeQueryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQueryCommand}.
 */
export interface DescribeQueryCommandOutput extends DescribeQueryResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a query, including its status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeQueryCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeQueryCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeQueryRequest
 *   workspaceName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQueryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueryResponse
 * //   queryId: "STRING_VALUE", // required
 * //   status: "SUBMITTED" || "RUNNING" || "COMPLETED" || "FAILED" || "CANCELED" || "CANCELING", // required
 * //   submittedAt: new Date("TIMESTAMP"), // required
 * //   completedAt: new Date("TIMESTAMP"),
 * //   statistics: { // QueryStatistics
 * //     rowCount: Number("long"), // required
 * //     bytesScanned: Number("long"), // required
 * //     executionTimeInMillis: Number("long"), // required
 * //   },
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeQueryCommandInput - {@link DescribeQueryCommandInput}
 * @returns {@link DescribeQueryCommandOutput}
 * @see {@link DescribeQueryCommandInput} for command's `input` shape.
 * @see {@link DescribeQueryCommandOutput} for command's `response` shape.
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
export class DescribeQueryCommand extends command<DescribeQueryCommandInput, DescribeQueryCommandOutput>(
  _ep0,
  _mw0,
  "DescribeQuery",
  DescribeQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQueryRequest;
      output: DescribeQueryResponse;
    };
    sdk: {
      input: DescribeQueryCommandInput;
      output: DescribeQueryCommandOutput;
    };
  };
}
