// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContextChangesRequest, ListContextChangesResponse } from "../models/models_0";
import { ListContextChanges$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContextChangesCommand}.
 */
export interface ListContextChangesCommandInput extends ListContextChangesRequest {}
/**
 * @public
 *
 * The output of {@link ListContextChangesCommand}.
 */
export interface ListContextChangesCommandOutput extends ListContextChangesResponse, __MetadataBearer {}

/**
 * <p>Returns the context entries that were added to or removed from a context store after the specified version. The context store must be in the <code>AVAILABLE</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListContextChangesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListContextChangesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // import type { NetworkManagerClientConfig } from "@aws-sdk/client-networkmanager";
 * const config = {}; // type is NetworkManagerClientConfig
 * const client = new NetworkManagerClient(config);
 * const input = { // ListContextChangesRequest
 *   ContextStoreId: "STRING_VALUE", // required
 *   FromVersionId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContextChangesCommand(input);
 * const response = await client.send(command);
 * // { // ListContextChangesResponse
 * //   ContextChanges: [ // ContextChangeList
 * //     { // ContextChange
 * //       ChangeType: "ADDED" || "REMOVED",
 * //       Context: { // ContextEntry
 * //         ContextId: "STRING_VALUE",
 * //         ContextType: "STRING_VALUE",
 * //         SegmentType: "STRING_VALUE",
 * //         PublicId: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //         AvailabilityZone: "STRING_VALUE",
 * //         AttachmentType: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   FromVersionId: "STRING_VALUE",
 * //   ToVersionId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContextChangesCommandInput - {@link ListContextChangesCommandInput}
 * @returns {@link ListContextChangesCommandOutput}
 * @see {@link ListContextChangesCommandInput} for command's `input` shape.
 * @see {@link ListContextChangesCommandOutput} for command's `response` shape.
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
export class ListContextChangesCommand extends command<ListContextChangesCommandInput, ListContextChangesCommandOutput>(
  _ep0,
  _mw0,
  "ListContextChanges",
  ListContextChanges$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContextChangesRequest;
      output: ListContextChangesResponse;
    };
    sdk: {
      input: ListContextChangesCommandInput;
      output: ListContextChangesCommandOutput;
    };
  };
}
