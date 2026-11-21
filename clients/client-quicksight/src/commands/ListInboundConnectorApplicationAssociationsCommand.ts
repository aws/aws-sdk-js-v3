// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListInboundConnectorApplicationAssociationsRequest,
  ListInboundConnectorApplicationAssociationsResponse,
} from "../models/models_5";
import { ListInboundConnectorApplicationAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListInboundConnectorApplicationAssociationsCommand}.
 */
export interface ListInboundConnectorApplicationAssociationsCommandInput extends ListInboundConnectorApplicationAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListInboundConnectorApplicationAssociationsCommand}.
 */
export interface ListInboundConnectorApplicationAssociationsCommandOutput extends ListInboundConnectorApplicationAssociationsResponse, __MetadataBearer {}

/**
 * <p>Lists the access control applications that are associated with an inbound connector. Quick Sight paginates the results. To retrieve additional results, use the <code>NextToken</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListInboundConnectorApplicationAssociationsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListInboundConnectorApplicationAssociationsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListInboundConnectorApplicationAssociationsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   InboundConnectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInboundConnectorApplicationAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListInboundConnectorApplicationAssociationsResponse
 * //   Status: Number("int"), // required
 * //   RequestId: "STRING_VALUE", // required
 * //   ApplicationAssociations: [ // InboundConnectorApplicationAssociationSummaryList // required
 * //     { // InboundConnectorApplicationAssociationSummary
 * //       AccessControlApplicationArn: "STRING_VALUE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInboundConnectorApplicationAssociationsCommandInput - {@link ListInboundConnectorApplicationAssociationsCommandInput}
 * @returns {@link ListInboundConnectorApplicationAssociationsCommandOutput}
 * @see {@link ListInboundConnectorApplicationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListInboundConnectorApplicationAssociationsCommandOutput} for command's `response` shape.
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
export class ListInboundConnectorApplicationAssociationsCommand extends command<ListInboundConnectorApplicationAssociationsCommandInput, ListInboundConnectorApplicationAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListInboundConnectorApplicationAssociations",
  ListInboundConnectorApplicationAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInboundConnectorApplicationAssociationsRequest;
      output: ListInboundConnectorApplicationAssociationsResponse;
    };
    sdk: {
      input: ListInboundConnectorApplicationAssociationsCommandInput;
      output: ListInboundConnectorApplicationAssociationsCommandOutput;
    };
  };
}
