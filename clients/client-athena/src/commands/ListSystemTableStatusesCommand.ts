// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSystemTableStatusesInput, ListSystemTableStatusesOutput } from "../models/models_0";
import { ListSystemTableStatuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSystemTableStatusesCommand}.
 */
export interface ListSystemTableStatusesCommandInput extends ListSystemTableStatusesInput {}
/**
 * @public
 *
 * The output of {@link ListSystemTableStatusesCommand}.
 */
export interface ListSystemTableStatusesCommandOutput extends ListSystemTableStatusesOutput, __MetadataBearer {}

/**
 * <p>Lists the system tables that the account-level configuration activates, along with
 *             whether each is currently enabled. Because system tables are enabled at the account
 *             level, every entry reflects the same account-wide state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListSystemTableStatusesCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListSystemTableStatusesCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListSystemTableStatusesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSystemTableStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListSystemTableStatusesOutput
 * //   Items: [ // SystemTableStatusList // required
 * //     { // SystemTableStatus
 * //       TableName: "QUERY_EXECUTIONS", // required
 * //       Enabled: true || false, // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSystemTableStatusesCommandInput - {@link ListSystemTableStatusesCommandInput}
 * @returns {@link ListSystemTableStatusesCommandOutput}
 * @see {@link ListSystemTableStatusesCommandInput} for command's `input` shape.
 * @see {@link ListSystemTableStatusesCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request was throttled.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListSystemTableStatusesCommand extends command<ListSystemTableStatusesCommandInput, ListSystemTableStatusesCommandOutput>(
  _ep0,
  _mw0,
  "ListSystemTableStatuses",
  ListSystemTableStatuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSystemTableStatusesInput;
      output: ListSystemTableStatusesOutput;
    };
    sdk: {
      input: ListSystemTableStatusesCommandInput;
      output: ListSystemTableStatusesCommandOutput;
    };
  };
}
