// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStateMachineAliasesInput, ListStateMachineAliasesOutput } from "../models/models_0";
import { ListStateMachineAliases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStateMachineAliasesCommand}.
 */
export interface ListStateMachineAliasesCommandInput extends ListStateMachineAliasesInput {}
/**
 * @public
 *
 * The output of {@link ListStateMachineAliasesCommand}.
 */
export interface ListStateMachineAliasesCommandOutput extends ListStateMachineAliasesOutput, __MetadataBearer {}

/**
 * Lists [aliases](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html) for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first.
 *
 * To list aliases that reference a state machine [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html), you can specify the version ARN in the `stateMachineArn` parameter.
 *
 * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an *HTTP 400 InvalidToken* error.
 *
 * **Related operations:**
 *
 * - CreateStateMachineAlias
 * - DescribeStateMachineAlias
 * - UpdateStateMachineAlias
 * - DeleteStateMachineAlias
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, ListStateMachineAliasesCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, ListStateMachineAliasesCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // ListStateMachineAliasesInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStateMachineAliasesCommand(input);
 * const response = await client.send(command);
 * // { // ListStateMachineAliasesOutput
 * //   stateMachineAliases: [ // StateMachineAliasList // required
 * //     { // StateMachineAliasListItem
 * //       stateMachineAliasArn: "STRING_VALUE", // required
 * //       creationDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStateMachineAliasesCommandInput - {@link ListStateMachineAliasesCommandInput}
 * @returns {@link ListStateMachineAliasesCommandOutput}
 * @see {@link ListStateMachineAliasesCommandInput} for command's `input` shape.
 * @see {@link ListStateMachineAliasesCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link InvalidToken} (client fault)
 *
 * The provided token is not valid.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *
 * Could not find the referenced resource.
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *
 * The specified state machine is being deleted.
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *
 * The specified state machine does not exist.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class ListStateMachineAliasesCommand extends command<ListStateMachineAliasesCommandInput, ListStateMachineAliasesCommandOutput>(
  _ep0,
  _mw0,
  "ListStateMachineAliases",
  ListStateMachineAliases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStateMachineAliasesInput;
      output: ListStateMachineAliasesOutput;
    };
    sdk: {
      input: ListStateMachineAliasesCommandInput;
      output: ListStateMachineAliasesCommandOutput;
    };
  };
}
