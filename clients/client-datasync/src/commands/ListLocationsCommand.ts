// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLocationsRequest, ListLocationsResponse } from "../models/models_0";
import { de_ListLocationsCommand, se_ListLocationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLocationsCommand}.
 */
export interface ListLocationsCommandInput extends ListLocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListLocationsCommand}.
 */
export interface ListLocationsCommandOutput extends ListLocationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of source and destination locations.</p>
 *          <p>If you have more locations than are returned in a response (that is, the response
 *       returns only a truncated list of your agents), the response contains a token that you can
 *       specify in your next request to fetch the next page of locations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListLocationsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListLocationsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // ListLocationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // LocationFilters
 *     { // LocationFilter
 *       Name: "LocationUri" || "LocationType" || "CreationTime", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "Equals" || "NotEquals" || "In" || "LessThanOrEqual" || "LessThan" || "GreaterThanOrEqual" || "GreaterThan" || "Contains" || "NotContains" || "BeginsWith", // required
 *     },
 *   ],
 * };
 * const command = new ListLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListLocationsResponse
 * //   Locations: [ // LocationList
 * //     { // LocationListEntry
 * //       LocationArn: "STRING_VALUE",
 * //       LocationUri: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLocationsCommandInput - {@link ListLocationsCommandInput}
 * @returns {@link ListLocationsCommandOutput}
 * @see {@link ListLocationsCommandInput} for command's `input` shape.
 * @see {@link ListLocationsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class ListLocationsCommand extends $Command
  .classBuilder<
    ListLocationsCommandInput,
    ListLocationsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "ListLocations", {})
  .n("DataSyncClient", "ListLocationsCommand")
  .f(void 0, void 0)
  .ser(se_ListLocationsCommand)
  .de(de_ListLocationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLocationsRequest;
      output: ListLocationsResponse;
    };
    sdk: {
      input: ListLocationsCommandInput;
      output: ListLocationsCommandOutput;
    };
  };
}
