// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssociatedGroupsRequest, ListAssociatedGroupsResponse } from "../models/models_0";
import { ListAssociatedGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssociatedGroupsCommand}.
 */
export interface ListAssociatedGroupsCommandInput extends ListAssociatedGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedGroupsCommand}.
 */
export interface ListAssociatedGroupsCommandOutput extends ListAssociatedGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the groups that the specified canary is associated with. The canary
 *       that you specify must be in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, ListAssociatedGroupsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, ListAssociatedGroupsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // ListAssociatedGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new ListAssociatedGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedGroupsResponse
 * //   Groups: [ // GroupSummaryList
 * //     { // GroupSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedGroupsCommandInput - {@link ListAssociatedGroupsCommandInput}
 * @returns {@link ListAssociatedGroupsCommandOutput}
 * @see {@link ListAssociatedGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedGroupsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class ListAssociatedGroupsCommand extends command<ListAssociatedGroupsCommandInput, ListAssociatedGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssociatedGroups",
  ListAssociatedGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedGroupsRequest;
      output: ListAssociatedGroupsResponse;
    };
    sdk: {
      input: ListAssociatedGroupsCommandInput;
      output: ListAssociatedGroupsCommandOutput;
    };
  };
}
