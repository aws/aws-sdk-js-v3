// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAutonomousDatabasePeersInput, ListAutonomousDatabasePeersOutput } from "../models/models_0";
import { ListAutonomousDatabasePeers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutonomousDatabasePeersCommand}.
 */
export interface ListAutonomousDatabasePeersCommandInput extends ListAutonomousDatabasePeersInput {}
/**
 * @public
 *
 * The output of {@link ListAutonomousDatabasePeersCommand}.
 */
export interface ListAutonomousDatabasePeersCommandOutput extends ListAutonomousDatabasePeersOutput, __MetadataBearer {}

/**
 * <p>Lists the peer databases of the specified Autonomous Database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListAutonomousDatabasePeersCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListAutonomousDatabasePeersCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListAutonomousDatabasePeersInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   autonomousDatabaseId: "STRING_VALUE", // required
 * };
 * const command = new ListAutonomousDatabasePeersCommand(input);
 * const response = await client.send(command);
 * // { // ListAutonomousDatabasePeersOutput
 * //   nextToken: "STRING_VALUE",
 * //   autonomousDatabasePeers: [ // AutonomousDatabasePeerList // required
 * //     { // AutonomousDatabasePeerSummary
 * //       autonomousDatabaseId: "STRING_VALUE",
 * //       autonomousDatabaseArn: "STRING_VALUE",
 * //       ocid: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutonomousDatabasePeersCommandInput - {@link ListAutonomousDatabasePeersCommandInput}
 * @returns {@link ListAutonomousDatabasePeersCommandOutput}
 * @see {@link ListAutonomousDatabasePeersCommandInput} for command's `input` shape.
 * @see {@link ListAutonomousDatabasePeersCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class ListAutonomousDatabasePeersCommand extends command<ListAutonomousDatabasePeersCommandInput, ListAutonomousDatabasePeersCommandOutput>(
  _ep0,
  _mw0,
  "ListAutonomousDatabasePeers",
  ListAutonomousDatabasePeers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutonomousDatabasePeersInput;
      output: ListAutonomousDatabasePeersOutput;
    };
    sdk: {
      input: ListAutonomousDatabasePeersCommandInput;
      output: ListAutonomousDatabasePeersCommandOutput;
    };
  };
}
