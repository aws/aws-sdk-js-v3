// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNetworkConnectorsRequest, ListNetworkConnectorsResponse } from "../models/models_0";
import { ListNetworkConnectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNetworkConnectorsCommand}.
 */
export interface ListNetworkConnectorsCommandInput extends ListNetworkConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkConnectorsCommand}.
 */
export interface ListNetworkConnectorsCommandOutput extends ListNetworkConnectorsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of network connectors in your account for the current Region. You can optionally filter results by connector state. Use the <code>Marker</code> parameter from a previous response to retrieve the next page of results.</p> <p>Each item in the response includes the connector ARN, name, ID, type, current state, and last modified timestamp. To retrieve full configuration details for a specific connector, use <code>GetNetworkConnector</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, ListNetworkConnectorsCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, ListNetworkConnectorsCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // ListNetworkConnectorsRequest
 *   State: "PENDING" || "ACTIVE" || "INACTIVE" || "FAILED" || "DELETING" || "DELETE_FAILED",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListNetworkConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkConnectorsResponse
 * //   NetworkConnectors: [ // NetworkConnectorsList // required
 * //     { // NetworkConnectorSummary
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       Type: "VPC_EGRESS", // required
 * //       State: "PENDING" || "ACTIVE" || "INACTIVE" || "FAILED" || "DELETING" || "DELETE_FAILED",
 * //       LastModified: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkConnectorsCommandInput - {@link ListNetworkConnectorsCommandInput}
 * @returns {@link ListNetworkConnectorsCommandOutput}
 * @see {@link ListNetworkConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkConnectorsCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal service error occurred. Retry the request with exponential backoff.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link LambdaCoreServiceException}
 * <p>Base exception class for all service exceptions from LambdaCore service.</p>
 *
 *
 * @public
 */
export class ListNetworkConnectorsCommand extends command<ListNetworkConnectorsCommandInput, ListNetworkConnectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListNetworkConnectors",
  ListNetworkConnectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkConnectorsRequest;
      output: ListNetworkConnectorsResponse;
    };
    sdk: {
      input: ListNetworkConnectorsCommandInput;
      output: ListNetworkConnectorsCommandOutput;
    };
  };
}
