// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAnalyticsDataLakeDataSetsRequest, ListAnalyticsDataLakeDataSetsResponse } from "../models/models_2";
import { ListAnalyticsDataLakeDataSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAnalyticsDataLakeDataSetsCommand}.
 */
export interface ListAnalyticsDataLakeDataSetsCommandInput extends ListAnalyticsDataLakeDataSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnalyticsDataLakeDataSetsCommand}.
 */
export interface ListAnalyticsDataLakeDataSetsCommandOutput extends ListAnalyticsDataLakeDataSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the data lake datasets available to associate with for a given Connect Customer instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListAnalyticsDataLakeDataSetsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListAnalyticsDataLakeDataSetsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListAnalyticsDataLakeDataSetsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAnalyticsDataLakeDataSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnalyticsDataLakeDataSetsResponse
 * //   Results: [ // AnalyticsDataSetsResults
 * //     { // AnalyticsDataSetsResult
 * //       DataSetId: "STRING_VALUE",
 * //       DataSetName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnalyticsDataLakeDataSetsCommandInput - {@link ListAnalyticsDataLakeDataSetsCommandInput}
 * @returns {@link ListAnalyticsDataLakeDataSetsCommandOutput}
 * @see {@link ListAnalyticsDataLakeDataSetsCommandInput} for command's `input` shape.
 * @see {@link ListAnalyticsDataLakeDataSetsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListAnalyticsDataLakeDataSetsCommand extends command<ListAnalyticsDataLakeDataSetsCommandInput, ListAnalyticsDataLakeDataSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListAnalyticsDataLakeDataSets",
  ListAnalyticsDataLakeDataSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnalyticsDataLakeDataSetsRequest;
      output: ListAnalyticsDataLakeDataSetsResponse;
    };
    sdk: {
      input: ListAnalyticsDataLakeDataSetsCommandInput;
      output: ListAnalyticsDataLakeDataSetsCommandOutput;
    };
  };
}
