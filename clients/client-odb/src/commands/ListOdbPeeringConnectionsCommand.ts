// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOdbPeeringConnectionsInput, ListOdbPeeringConnectionsOutput } from "../models/models_0";
import { ListOdbPeeringConnections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOdbPeeringConnectionsCommand}.
 */
export interface ListOdbPeeringConnectionsCommandInput extends ListOdbPeeringConnectionsInput {}
/**
 * @public
 *
 * The output of {@link ListOdbPeeringConnectionsCommand}.
 */
export interface ListOdbPeeringConnectionsCommandOutput extends ListOdbPeeringConnectionsOutput, __MetadataBearer {}

/**
 * Lists all ODB peering connections or those associated with a specific ODB network.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListOdbPeeringConnectionsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListOdbPeeringConnectionsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListOdbPeeringConnectionsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   odbNetworkId: "STRING_VALUE",
 * };
 * const command = new ListOdbPeeringConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListOdbPeeringConnectionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   odbPeeringConnections: [ // OdbPeeringConnectionList // required
 * //     { // OdbPeeringConnectionSummary
 * //       odbPeeringConnectionId: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //       status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //       statusReason: "STRING_VALUE",
 * //       odbPeeringConnectionArn: "STRING_VALUE",
 * //       odbNetworkArn: "STRING_VALUE",
 * //       peerNetworkArn: "STRING_VALUE",
 * //       odbPeeringConnectionType: "STRING_VALUE",
 * //       peerNetworkCidrs: [ // PeeredCidrList
 * //         "STRING_VALUE",
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //       percentProgress: Number("float"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListOdbPeeringConnectionsCommandInput - {@link ListOdbPeeringConnectionsCommandInput}
 * @returns {@link ListOdbPeeringConnectionsCommandOutput}
 * @see {@link ListOdbPeeringConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListOdbPeeringConnectionsCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class ListOdbPeeringConnectionsCommand extends command<ListOdbPeeringConnectionsCommandInput, ListOdbPeeringConnectionsCommandOutput>(
  _ep0,
  _mw0,
  "ListOdbPeeringConnections",
  ListOdbPeeringConnections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOdbPeeringConnectionsInput;
      output: ListOdbPeeringConnectionsOutput;
    };
    sdk: {
      input: ListOdbPeeringConnectionsCommandInput;
      output: ListOdbPeeringConnectionsCommandOutput;
    };
  };
}
