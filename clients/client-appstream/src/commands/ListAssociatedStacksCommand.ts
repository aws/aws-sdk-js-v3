// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssociatedStacksRequest, ListAssociatedStacksResult } from "../models/models_0";
import { ListAssociatedStacks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssociatedStacksCommand}.
 */
export interface ListAssociatedStacksCommandInput extends ListAssociatedStacksRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedStacksCommand}.
 */
export interface ListAssociatedStacksCommandOutput extends ListAssociatedStacksResult, __MetadataBearer {}

/**
 * <p>Retrieves the name of the stack with which the specified fleet is associated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, ListAssociatedStacksCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, ListAssociatedStacksCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // ListAssociatedStacksRequest
 *   FleetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAssociatedStacksCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedStacksResult
 * //   Names: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedStacksCommandInput - {@link ListAssociatedStacksCommandInput}
 * @returns {@link ListAssociatedStacksCommandOutput}
 * @see {@link ListAssociatedStacksCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedStacksCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class ListAssociatedStacksCommand extends command<ListAssociatedStacksCommandInput, ListAssociatedStacksCommandOutput>(
  _ep0,
  _mw0,
  "ListAssociatedStacks",
  ListAssociatedStacks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedStacksRequest;
      output: ListAssociatedStacksResult;
    };
    sdk: {
      input: ListAssociatedStacksCommandInput;
      output: ListAssociatedStacksCommandOutput;
    };
  };
}
