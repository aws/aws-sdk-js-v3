// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQueryResultsRequest, GetQueryResultsResponse } from "../models/models_1";
import { GetQueryResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandInput extends GetQueryResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetQueryResultsCommand}.
 */
export interface GetQueryResultsCommandOutput extends GetQueryResultsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the paginated results of a query. Returns empty rows if the query is not yet complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, GetQueryResultsCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, GetQueryResultsCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // GetQueryResultsRequest
 *   workspaceName: "STRING_VALUE", // required
 *   queryId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new GetQueryResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetQueryResultsResponse
 * //   columnInfo: [ // ColumnInformationList
 * //     { // ColumnInformation
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   rows: [ // RowList
 * //     [ // Result
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueryResultsCommandInput - {@link GetQueryResultsCommandInput}
 * @returns {@link GetQueryResultsCommandOutput}
 * @see {@link GetQueryResultsCommandInput} for command's `input` shape.
 * @see {@link GetQueryResultsCommandOutput} for command's `response` shape.
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
export class GetQueryResultsCommand extends command<GetQueryResultsCommandInput, GetQueryResultsCommandOutput>(
  _ep0,
  _mw0,
  "GetQueryResults",
  GetQueryResults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueryResultsRequest;
      output: GetQueryResultsResponse;
    };
    sdk: {
      input: GetQueryResultsCommandInput;
      output: GetQueryResultsCommandOutput;
    };
  };
}
