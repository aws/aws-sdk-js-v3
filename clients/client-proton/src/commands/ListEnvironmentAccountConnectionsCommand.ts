// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListEnvironmentAccountConnectionsInput,
  ListEnvironmentAccountConnectionsOutput,
} from "../models/models_0";
import { ListEnvironmentAccountConnections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentAccountConnectionsCommand}.
 */
export interface ListEnvironmentAccountConnectionsCommandInput extends ListEnvironmentAccountConnectionsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentAccountConnectionsCommand}.
 */
export interface ListEnvironmentAccountConnectionsCommandOutput extends ListEnvironmentAccountConnectionsOutput, __MetadataBearer {}

/**
 * View a list of environment account connections.
 *
 * For more information, see [Environment account connections](https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html) in the *Proton User guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentAccountConnectionsCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentAccountConnectionsCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentAccountConnectionsInput
 *   requestedBy: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE",
 *   statuses: [ // EnvironmentAccountConnectionStatusList
 *     "STRING_VALUE",
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentAccountConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentAccountConnectionsOutput
 * //   environmentAccountConnections: [ // EnvironmentAccountConnectionSummaryList // required
 * //     { // EnvironmentAccountConnectionSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       managementAccountId: "STRING_VALUE", // required
 * //       environmentAccountId: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       requestedAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       status: "STRING_VALUE", // required
 * //       componentRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentAccountConnectionsCommandInput - {@link ListEnvironmentAccountConnectionsCommandInput}
 * @returns {@link ListEnvironmentAccountConnectionsCommandOutput}
 * @see {@link ListEnvironmentAccountConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentAccountConnectionsCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class ListEnvironmentAccountConnectionsCommand extends command<ListEnvironmentAccountConnectionsCommandInput, ListEnvironmentAccountConnectionsCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironmentAccountConnections",
  ListEnvironmentAccountConnections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentAccountConnectionsInput;
      output: ListEnvironmentAccountConnectionsOutput;
    };
    sdk: {
      input: ListEnvironmentAccountConnectionsCommandInput;
      output: ListEnvironmentAccountConnectionsCommandOutput;
    };
  };
}
