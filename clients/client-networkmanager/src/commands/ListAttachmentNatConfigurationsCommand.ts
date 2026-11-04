// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAttachmentNatConfigurationsRequest,
  ListAttachmentNatConfigurationsResponse,
} from "../models/models_0";
import { ListAttachmentNatConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAttachmentNatConfigurationsCommand}.
 */
export interface ListAttachmentNatConfigurationsCommandInput extends ListAttachmentNatConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachmentNatConfigurationsCommand}.
 */
export interface ListAttachmentNatConfigurationsCommandOutput extends ListAttachmentNatConfigurationsResponse, __MetadataBearer {}

/**
 * Returns the NAT configurations of core network attachments. You must specify either a core network ID or an attachment ID. Only the core network owner can list NAT configurations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListAttachmentNatConfigurationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListAttachmentNatConfigurationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListAttachmentNatConfigurationsRequest
 *   CoreNetworkId: "STRING_VALUE",
 *   AttachmentId: "STRING_VALUE",
 *   Filters: { // FilterMap
 *     "<keys>": [ // FilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAttachmentNatConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachmentNatConfigurationsResponse
 * //   AttachmentNatConfigurations: [ // AttachmentNatConfigurationList // required
 * //     { // AttachmentNatConfiguration
 * //       AttachmentId: "STRING_VALUE",
 * //       NatGatewaySupport: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING" || "PENDING_ATTACHMENT_ACCEPTANCE",
 * //       NatSystemRouteSupport: true || false,
 * //       NatGatewayRules: [ // NatRuleList
 * //         { // NatRule
 * //           RuleNumber: Number("int"),
 * //           MatchSourceCidr: "STRING_VALUE",
 * //           NatCidr: "STRING_VALUE",
 * //           State: "CREATING" || "MODIFYING" || "DELETING" || "ACTIVATED" || "ACTIVATING" || "DEACTIVATED" || "DEACTIVATING" || "FAILED" || "PENDING_ATTACHMENT_ACCEPTANCE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachmentNatConfigurationsCommandInput - {@link ListAttachmentNatConfigurationsCommandInput}
 * @returns {@link ListAttachmentNatConfigurationsCommandOutput}
 * @see {@link ListAttachmentNatConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAttachmentNatConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints.
 *
 * @throws {@link NetworkManagerServiceException}
 *
 * Base exception class for all service exceptions from NetworkManager service.
 *
 * @public
 */
export class ListAttachmentNatConfigurationsCommand extends command<ListAttachmentNatConfigurationsCommandInput, ListAttachmentNatConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListAttachmentNatConfigurations",
  ListAttachmentNatConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachmentNatConfigurationsRequest;
      output: ListAttachmentNatConfigurationsResponse;
    };
    sdk: {
      input: ListAttachmentNatConfigurationsCommandInput;
      output: ListAttachmentNatConfigurationsCommandOutput;
    };
  };
}
