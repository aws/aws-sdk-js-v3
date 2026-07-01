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
 * <p>Searches the specified index.</p>
 *          <p>If a device has never connected to IoT Core or was disconnected for more than 1 hour before fleet indexing's <code>thingConnectivityIndexingMode</code> was enabled, the <code>connectivity</code> object for this device in the response will have the <code>connected</code> field set to <code>false</code> with no additional session details.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SearchIndex</a> action.</p>
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
 *  <p>The index is not ready.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidQueryException} (client fault)
 *  <p>The query is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
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
