// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListInboundConnectorsRequest, ListInboundConnectorsResponse } from "../models/models_5";
import { ListInboundConnectors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInboundConnectorsCommand}.
 */
export interface ListInboundConnectorsCommandInput extends ListInboundConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListInboundConnectorsCommand}.
 */
export interface ListInboundConnectorsCommandOutput extends ListInboundConnectorsResponse, __MetadataBearer {}

/**
 * <p>Lists the inbound connectors in a Quick Sight account. You can filter the results by connector type. Quick Sight paginates the results. To retrieve additional results, use the <code>NextToken</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListInboundConnectorsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListInboundConnectorsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListInboundConnectorsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Type: [ // InboundConnectorTypeFilterList
 *     "QUICK_DESKTOP",
 *   ],
 * };
 * const command = new ListInboundConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListInboundConnectorsResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   InboundConnectorSummaries: [ // InboundConnectorSummaryList // required
 * //     { // InboundConnectorSummary
 * //       InboundConnectorId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Status: "ENABLED" || "DISABLED", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       TenantUrl: "STRING_VALUE", // required
 * //       InboundConnectorConfiguration: { // InboundConnectorConfig
 * //         InboundConnectorType: "QUICK_DESKTOP", // required
 * //       },
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInboundConnectorsCommandInput - {@link ListInboundConnectorsCommandInput}
 * @returns {@link ListInboundConnectorsCommandOutput}
 * @see {@link ListInboundConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListInboundConnectorsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListInboundConnectorsCommand extends command<ListInboundConnectorsCommandInput, ListInboundConnectorsCommandOutput>(
  _ep0,
  _mw0,
  "ListInboundConnectors",
  ListInboundConnectors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInboundConnectorsRequest;
      output: ListInboundConnectorsResponse;
    };
    sdk: {
      input: ListInboundConnectorsCommandInput;
      output: ListInboundConnectorsCommandOutput;
    };
  };
}
