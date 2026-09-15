// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateConnectionsFromResiliencyGroupRequest,
  DisassociateConnectionsFromResiliencyGroupResult,
} from "../models/models_0";
import { DisassociateConnectionsFromResiliencyGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateConnectionsFromResiliencyGroupCommand}.
 */
export interface DisassociateConnectionsFromResiliencyGroupCommandInput extends DisassociateConnectionsFromResiliencyGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateConnectionsFromResiliencyGroupCommand}.
 */
export interface DisassociateConnectionsFromResiliencyGroupCommandOutput extends DisassociateConnectionsFromResiliencyGroupResult, __MetadataBearer {}

/**
 * <p>Disassociates one or more connections from the specified resiliency group. This operation
 *       is atomic: either all of the specified connections are disassociated, or the operation fails
 *       and no changes are made.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateConnectionsFromResiliencyGroupCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateConnectionsFromResiliencyGroupCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * // import type { DirectConnectClientConfig } from "@aws-sdk/client-direct-connect";
 * const config = {}; // type is DirectConnectClientConfig
 * const client = new DirectConnectClient(config);
 * const input = { // DisassociateConnectionsFromResiliencyGroupRequest
 *   connectionIdentifiers: [ // ConnectionIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   resiliencyGroupId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DisassociateConnectionsFromResiliencyGroupCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateConnectionsFromResiliencyGroupResult
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
 * @param DisassociateConnectionsFromResiliencyGroupCommandInput - {@link DisassociateConnectionsFromResiliencyGroupCommandInput}
 * @returns {@link DisassociateConnectionsFromResiliencyGroupCommandOutput}
 * @see {@link DisassociateConnectionsFromResiliencyGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateConnectionsFromResiliencyGroupCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 *
 * @public
 */
export class DisassociateConnectionsFromResiliencyGroupCommand extends command<DisassociateConnectionsFromResiliencyGroupCommandInput, DisassociateConnectionsFromResiliencyGroupCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateConnectionsFromResiliencyGroup",
  DisassociateConnectionsFromResiliencyGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateConnectionsFromResiliencyGroupRequest;
      output: DisassociateConnectionsFromResiliencyGroupResult;
    };
    sdk: {
      input: DisassociateConnectionsFromResiliencyGroupCommandInput;
      output: DisassociateConnectionsFromResiliencyGroupCommandOutput;
    };
  };
}
