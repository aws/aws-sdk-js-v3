// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFoldersForResourceRequest, ListFoldersForResourceResponse } from "../models/models_4";
import { ListFoldersForResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFoldersForResourceCommand}.
 */
export interface ListFoldersForResourceCommandInput extends ListFoldersForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListFoldersForResourceCommand}.
 */
export interface ListFoldersForResourceCommandOutput extends ListFoldersForResourceResponse, __MetadataBearer {}

/**
 * List all folders that a resource is a member of.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListFoldersForResourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListFoldersForResourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListFoldersForResourceRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFoldersForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListFoldersForResourceResponse
 * //   Status: Number("int"),
 * //   Folders: [ // FoldersForResourceArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFoldersForResourceCommandInput - {@link ListFoldersForResourceCommandInput}
 * @returns {@link ListFoldersForResourceCommandOutput}
 * @see {@link ListFoldersForResourceCommandInput} for command's `input` shape.
 * @see {@link ListFoldersForResourceCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
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
export class ListFoldersForResourceCommand extends command<ListFoldersForResourceCommandInput, ListFoldersForResourceCommandOutput>(
  _ep0,
  _mw0,
  "ListFoldersForResource",
  ListFoldersForResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFoldersForResourceRequest;
      output: ListFoldersForResourceResponse;
    };
    sdk: {
      input: ListFoldersForResourceCommandInput;
      output: ListFoldersForResourceCommandOutput;
    };
  };
}
