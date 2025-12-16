// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListEnvironmentAccountConnectionsInput,
  ListEnvironmentAccountConnectionsOutput,
} from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListEnvironmentAccountConnections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListEnvironmentAccountConnectionsCommandOutput
  extends ListEnvironmentAccountConnectionsOutput,
    __MetadataBearer {}

/**
 * <p>View a list of environment account connections.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
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
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class ListEnvironmentAccountConnectionsCommand extends $Command
  .classBuilder<
    ListEnvironmentAccountConnectionsCommandInput,
    ListEnvironmentAccountConnectionsCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListEnvironmentAccountConnections", {})
  .n("ProtonClient", "ListEnvironmentAccountConnectionsCommand")
  .sc(ListEnvironmentAccountConnections$)
  .build() {
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
