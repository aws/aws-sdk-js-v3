// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContextsRequest, ListContextsResponse } from "../models/models_0";
import { ListContexts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContextsCommand}.
 */
export interface ListContextsCommandInput extends ListContextsRequest {}
/**
 * @public
 *
 * The output of {@link ListContextsCommand}.
 */
export interface ListContextsCommandOutput extends ListContextsResponse, __MetadataBearer {}

/**
 * <p>Returns the context entries of a context store, and the version of the context entries. To get the context entries that were added or removed after this version, specify the returned <code>VersionId</code> in a <code>ListContextChanges</code> request. The context store must be in the <code>AVAILABLE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListContextsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListContextsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListContextsRequest
 *   ContextStoreId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContextsCommand(input);
 * const response = await client.send(command);
 * // { // ListContextsResponse
 * //   Contexts: [ // ContextList
 * //     { // ContextEntry
 * //       ContextId: "STRING_VALUE",
 * //       ContextType: "STRING_VALUE",
 * //       SegmentType: "STRING_VALUE",
 * //       PublicId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AttachmentType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContextsCommandInput - {@link ListContextsCommandInput}
 * @returns {@link ListContextsCommandOutput}
 * @see {@link ListContextsCommandInput} for command's `input` shape.
 * @see {@link ListContextsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 *
 * @public
 */
export class ListContextsCommand extends command<ListContextsCommandInput, ListContextsCommandOutput>(
  _ep0,
  _mw0,
  "ListContexts",
  ListContexts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContextsRequest;
      output: ListContextsResponse;
    };
    sdk: {
      input: ListContextsCommandInput;
      output: ListContextsCommandOutput;
    };
  };
}
