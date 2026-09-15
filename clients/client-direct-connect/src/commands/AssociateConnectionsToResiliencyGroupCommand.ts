// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateConnectionsToResiliencyGroupRequest,
  AssociateConnectionsToResiliencyGroupResult,
} from "../models/models_0";
import { AssociateConnectionsToResiliencyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateConnectionsToResiliencyGroupCommand}.
 */
export interface AssociateConnectionsToResiliencyGroupCommandInput extends AssociateConnectionsToResiliencyGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateConnectionsToResiliencyGroupCommand}.
 */
export interface AssociateConnectionsToResiliencyGroupCommandOutput extends AssociateConnectionsToResiliencyGroupResult, __MetadataBearer {}

/**
 * <p>Associates one or more connections with the specified resiliency group. This operation is
 *       atomic: either all of the specified connections are associated, or the operation fails and no
 *       changes are made.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, AssociateConnectionsToResiliencyGroupCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, AssociateConnectionsToResiliencyGroupCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // AssociateConnectionsToResiliencyGroupRequest
 *   connectionIdentifiers: [ // ConnectionIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   resiliencyGroupId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new AssociateConnectionsToResiliencyGroupCommand(input);
 * const response = await client.send(command);
 * // { // AssociateConnectionsToResiliencyGroupResult
 * //   resiliencyGroupAssociations: [ // ResiliencyGroupAssociationList
 * //     { // ResiliencyGroupAssociation
 * //       resiliencyGroupId: "STRING_VALUE",
 * //       connectionArn: "STRING_VALUE",
 * //       state: "associating" || "associated" || "disassociating" || "disassociated",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateConnectionsToResiliencyGroupCommandInput - {@link AssociateConnectionsToResiliencyGroupCommandInput}
 * @returns {@link AssociateConnectionsToResiliencyGroupCommandOutput}
 * @see {@link AssociateConnectionsToResiliencyGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateConnectionsToResiliencyGroupCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The rate limiter limit has been exceeded for the connection. You cannot add more rate limiters to virtual interfaces on this connection.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class AssociateConnectionsToResiliencyGroupCommand extends command<AssociateConnectionsToResiliencyGroupCommandInput, AssociateConnectionsToResiliencyGroupCommandOutput>(
  _ep0,
  _mw0,
  "AssociateConnectionsToResiliencyGroup",
  AssociateConnectionsToResiliencyGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateConnectionsToResiliencyGroupRequest;
      output: AssociateConnectionsToResiliencyGroupResult;
    };
    sdk: {
      input: AssociateConnectionsToResiliencyGroupCommandInput;
      output: AssociateConnectionsToResiliencyGroupCommandOutput;
    };
  };
}
