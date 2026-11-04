// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnvironmentActionsInput, ListEnvironmentActionsOutput } from "../models/models_1";
import { ListEnvironmentActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentActionsCommand}.
 */
export interface ListEnvironmentActionsCommandInput extends ListEnvironmentActionsInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentActionsCommand}.
 */
export interface ListEnvironmentActionsCommandOutput extends ListEnvironmentActionsOutput, __MetadataBearer {}

/**
 * Lists existing environment actions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListEnvironmentActionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListEnvironmentActionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListEnvironmentActionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEnvironmentActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentActionsOutput
 * //   items: [ // ListEnvironmentActionSummaries
 * //     { // EnvironmentActionSummary
 * //       domainId: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       parameters: { // ActionParameters Union: only one key present
 * //         awsConsoleLink: { // AwsConsoleLinkParameters
 * //           uri: "STRING_VALUE",
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentActionsCommandInput - {@link ListEnvironmentActionsCommandInput}
 * @returns {@link ListEnvironmentActionsCommandOutput}
 * @see {@link ListEnvironmentActionsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentActionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class ListEnvironmentActionsCommand extends command<ListEnvironmentActionsCommandInput, ListEnvironmentActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironmentActions",
  ListEnvironmentActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentActionsInput;
      output: ListEnvironmentActionsOutput;
    };
    sdk: {
      input: ListEnvironmentActionsCommandInput;
      output: ListEnvironmentActionsCommandOutput;
    };
  };
}
