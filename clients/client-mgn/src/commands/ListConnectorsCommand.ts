// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConnectorsRequest, ListConnectorsResponse } from "../models/models_0";
import { ListConnectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConnectorsCommand}.
 */
export interface ListConnectorsCommandInput extends ListConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorsCommand}.
 */
export interface ListConnectorsCommandOutput extends ListConnectorsResponse, __MetadataBearer {}

/**
 * <p>List Connectors.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListConnectorsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListConnectorsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListConnectorsRequest
 *   filters: { // ListConnectorsRequestFilters
 *     connectorIDs: [ // ConnectorIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorsResponse
 * //   items: [ // ConnectorsList
 * //     { // Connector
 * //       connectorID: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       ssmInstanceID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ssmCommandConfig: { // ConnectorSsmCommandConfig
 * //         s3OutputEnabled: true || false, // required
 * //         outputS3BucketName: "STRING_VALUE",
 * //         cloudWatchOutputEnabled: true || false, // required
 * //         cloudWatchLogGroupName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectorsCommandInput - {@link ListConnectorsCommandInput}
 * @returns {@link ListConnectorsCommandOutput}
 * @see {@link ListConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class ListConnectorsCommand extends command<ListConnectorsCommandInput, ListConnectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListConnectors",
  ListConnectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorsRequest;
      output: ListConnectorsResponse;
    };
    sdk: {
      input: ListConnectorsCommandInput;
      output: ListConnectorsCommandOutput;
    };
  };
}
