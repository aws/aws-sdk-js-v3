// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIndexesForMembersInput, ListIndexesForMembersOutput } from "../models/models_0";
import { ListIndexesForMembers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIndexesForMembersCommand}.
 */
export interface ListIndexesForMembersCommandInput extends ListIndexesForMembersInput {}
/**
 * @public
 *
 * The output of {@link ListIndexesForMembersCommand}.
 */
export interface ListIndexesForMembersCommandOutput extends ListIndexesForMembersOutput, __MetadataBearer {}

/**
 * Retrieves a list of a member's indexes in all Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer. Only the management account or a delegated administrator with service access enabled can invoke this API call.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceExplorer2Client, ListIndexesForMembersCommand } from "@aws-sdk/client-resource-explorer-2"; // ES Modules import
 * // const { ResourceExplorer2Client, ListIndexesForMembersCommand } = require("@aws-sdk/client-resource-explorer-2"); // CommonJS import
 * // import type { ResourceExplorer2ClientConfig } from "@aws-sdk/client-resource-explorer-2";
 * const config = {}; // type is ResourceExplorer2ClientConfig
 * const client = new ResourceExplorer2Client(config);
 * const input = { // ListIndexesForMembersInput
 *   AccountIdList: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIndexesForMembersCommand(input);
 * const response = await client.send(command);
 * // { // ListIndexesForMembersOutput
 * //   Indexes: [ // MemberIndexList
 * //     { // MemberIndex
 * //       AccountId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIndexesForMembersCommandInput - {@link ListIndexesForMembersCommandInput}
 * @returns {@link ListIndexesForMembersCommandOutput}
 * @see {@link ListIndexesForMembersCommandInput} for command's `input` shape.
 * @see {@link ListIndexesForMembersCommandOutput} for command's `response` shape.
 * @see {@link ResourceExplorer2ClientResolvedConfig | config} for ResourceExplorer2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The credentials that you used to call this operation don't have the minimum required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of internal service error. Try your request again later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request failed because you exceeded a rate limit for this operation. For more information, see [Quotas for Resource Explorer](https://docs.aws.amazon.com/resource-explorer/latest/userguide/quotas.html).
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You provided an invalid value for one of the operation's parameters. Check the syntax for the operation, and try again.
 *
 * @throws {@link ResourceExplorer2ServiceException}
 *
 * Base exception class for all service exceptions from ResourceExplorer2 service.
 *
 * @public
 */
export class ListIndexesForMembersCommand extends command<ListIndexesForMembersCommandInput, ListIndexesForMembersCommandOutput>(
  _ep0,
  _mw0,
  "ListIndexesForMembers",
  ListIndexesForMembers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIndexesForMembersInput;
      output: ListIndexesForMembersOutput;
    };
    sdk: {
      input: ListIndexesForMembersCommandInput;
      output: ListIndexesForMembersCommandOutput;
    };
  };
}
