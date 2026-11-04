// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccountsInAccountPoolInput, ListAccountsInAccountPoolOutput } from "../models/models_1";
import { ListAccountsInAccountPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountsInAccountPoolCommand}.
 */
export interface ListAccountsInAccountPoolCommandInput extends ListAccountsInAccountPoolInput {}
/**
 * @public
 *
 * The output of {@link ListAccountsInAccountPoolCommand}.
 */
export interface ListAccountsInAccountPoolCommandOutput extends ListAccountsInAccountPoolOutput, __MetadataBearer {}

/**
 * Lists the accounts in the specified account pool.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListAccountsInAccountPoolCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListAccountsInAccountPoolCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListAccountsInAccountPoolInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAccountsInAccountPoolCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountsInAccountPoolOutput
 * //   items: [ // AccountInfoList
 * //     { // AccountInfo
 * //       awsAccountId: "STRING_VALUE", // required
 * //       supportedRegions: [ // AwsRegionList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       awsAccountName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountsInAccountPoolCommandInput - {@link ListAccountsInAccountPoolCommandInput}
 * @returns {@link ListAccountsInAccountPoolCommandOutput}
 * @see {@link ListAccountsInAccountPoolCommandInput} for command's `input` shape.
 * @see {@link ListAccountsInAccountPoolCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
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
export class ListAccountsInAccountPoolCommand extends command<ListAccountsInAccountPoolCommandInput, ListAccountsInAccountPoolCommandOutput>(
  _ep0,
  _mw0,
  "ListAccountsInAccountPool",
  ListAccountsInAccountPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountsInAccountPoolInput;
      output: ListAccountsInAccountPoolOutput;
    };
    sdk: {
      input: ListAccountsInAccountPoolCommandInput;
      output: ListAccountsInAccountPoolCommandOutput;
    };
  };
}
