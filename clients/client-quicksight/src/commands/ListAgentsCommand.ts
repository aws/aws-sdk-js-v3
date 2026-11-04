// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgentsRequest, ListAgentsResponse } from "../models/models_4";
import { ListAgents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentsCommand}.
 */
export interface ListAgentsCommandInput extends ListAgentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentsCommand}.
 */
export interface ListAgentsCommandOutput extends ListAgentsResponse, __MetadataBearer {}

/**
 * Lists all agents in an Amazon QuickSight account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListAgentsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListAgentsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListAgentsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentsResponse
 * //   RequestId: "STRING_VALUE",
 * //   AgentSummaries: [ // AgentSummaries // required
 * //     { // AgentSummary
 * //       Arn: "STRING_VALUE", // required
 * //       AgentId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       IconId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentsCommandInput - {@link ListAgentsCommandInput}
 * @returns {@link ListAgentsCommandOutput}
 * @see {@link ListAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAgentsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The `NextToken` value isn't valid.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class ListAgentsCommand extends command<ListAgentsCommandInput, ListAgentsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgents",
  ListAgents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentsRequest;
      output: ListAgentsResponse;
    };
    sdk: {
      input: ListAgentsCommandInput;
      output: ListAgentsCommandOutput;
    };
  };
}
