// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchIndexRequest, SearchIndexResponse } from "../models/models_2";
import { SearchIndex$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchIndexCommand}.
 */
export interface SearchIndexCommandInput extends SearchIndexRequest {}
/**
 * @public
 *
 * The output of {@link SearchIndexCommand}.
 */
export interface SearchIndexCommandOutput extends SearchIndexResponse, __MetadataBearer {}

/**
 * Searches the specified index.
 *
 * If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's `thingConnectivityIndexingMode` was enabled, the `connectivity` object for this device in the response will have the `connected` field set to `false` with no additional session details.
 *
 * Requires permission to access the [SearchIndex](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SearchIndexCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SearchIndexCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // SearchIndexRequest
 *   indexName: "STRING_VALUE",
 *   queryString: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   queryVersion: "STRING_VALUE",
 * };
 * const command = new SearchIndexCommand(input);
 * const response = await client.send(command);
 * // { // SearchIndexResponse
 * //   nextToken: "STRING_VALUE",
 * //   things: [ // ThingDocumentList
 * //     { // ThingDocument
 * //       thingName: "STRING_VALUE",
 * //       thingId: "STRING_VALUE",
 * //       thingTypeName: "STRING_VALUE",
 * //       thingGroupNames: [ // ThingGroupNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       shadow: "STRING_VALUE",
 * //       deviceDefender: "STRING_VALUE",
 * //       connectivity: { // ThingConnectivity
 * //         connected: true || false,
 * //         timestamp: Number("long"),
 * //         disconnectReason: "STRING_VALUE",
 * //         keepAliveDuration: Number("int"),
 * //         cleanSession: true || false,
 * //         sessionExpiry: Number("long"),
 * //         clientId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   thingGroups: [ // ThingGroupDocumentList
 * //     { // ThingGroupDocument
 * //       thingGroupName: "STRING_VALUE",
 * //       thingGroupId: "STRING_VALUE",
 * //       thingGroupDescription: "STRING_VALUE",
 * //       attributes: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       parentGroupNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchIndexCommandInput - {@link SearchIndexCommandInput}
 * @returns {@link SearchIndexCommandOutput}
 * @see {@link SearchIndexCommandInput} for command's `input` shape.
 * @see {@link SearchIndexCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link IndexNotReadyException} (client fault)
 *
 * The index is not ready.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidQueryException} (client fault)
 *
 * The query is invalid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class SearchIndexCommand extends command<SearchIndexCommandInput, SearchIndexCommandOutput>(
  _ep0,
  _mw0,
  "SearchIndex",
  SearchIndex$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchIndexRequest;
      output: SearchIndexResponse;
    };
    sdk: {
      input: SearchIndexCommandInput;
      output: SearchIndexCommandOutput;
    };
  };
}
