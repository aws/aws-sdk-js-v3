// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetRevisionsInput, ListAssetRevisionsOutput } from "../models/models_1";
import { ListAssetRevisions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetRevisionsCommand}.
 */
export interface ListAssetRevisionsCommandInput extends ListAssetRevisionsInput {}
/**
 * @public
 *
 * The output of {@link ListAssetRevisionsCommand}.
 */
export interface ListAssetRevisionsCommandOutput extends ListAssetRevisionsOutput, __MetadataBearer {}

/**
 * Lists the revisions for the asset.
 *
 * Prerequisites:
 *
 * - The asset must exist in the domain.
 * - There must be at least one revision of the asset (which happens automatically after creation).
 * - The domain must be valid and active.
 * - User must have permissions on the asset and domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListAssetRevisionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListAssetRevisionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListAssetRevisionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssetRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetRevisionsOutput
 * //   items: [ // AssetRevisions
 * //     { // AssetRevision
 * //       domainId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       revision: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetRevisionsCommandInput - {@link ListAssetRevisionsCommandInput}
 * @returns {@link ListAssetRevisionsCommandOutput}
 * @see {@link ListAssetRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListAssetRevisionsCommandOutput} for command's `response` shape.
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
export class ListAssetRevisionsCommand extends command<ListAssetRevisionsCommandInput, ListAssetRevisionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssetRevisions",
  ListAssetRevisions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetRevisionsInput;
      output: ListAssetRevisionsOutput;
    };
    sdk: {
      input: ListAssetRevisionsCommandInput;
      output: ListAssetRevisionsCommandOutput;
    };
  };
}
