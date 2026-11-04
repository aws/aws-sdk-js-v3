// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataProductRevisionsInput, ListDataProductRevisionsOutput } from "../models/models_1";
import { ListDataProductRevisions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataProductRevisionsCommand}.
 */
export interface ListDataProductRevisionsCommandInput extends ListDataProductRevisionsInput {}
/**
 * @public
 *
 * The output of {@link ListDataProductRevisionsCommand}.
 */
export interface ListDataProductRevisionsCommandOutput extends ListDataProductRevisionsOutput, __MetadataBearer {}

/**
 * Lists data product revisions.
 *
 * Prerequisites:
 *
 * - The data product ID must exist within the domain.
 * - User must have view permissions on the data product.
 * - The domain must be in a valid and accessible state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListDataProductRevisionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListDataProductRevisionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListDataProductRevisionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDataProductRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataProductRevisionsOutput
 * //   items: [ // DataProductRevisions // required
 * //     { // DataProductRevision
 * //       domainId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       revision: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataProductRevisionsCommandInput - {@link ListDataProductRevisionsCommandInput}
 * @returns {@link ListDataProductRevisionsCommandOutput}
 * @see {@link ListDataProductRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListDataProductRevisionsCommandOutput} for command's `response` shape.
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
export class ListDataProductRevisionsCommand extends command<ListDataProductRevisionsCommandInput, ListDataProductRevisionsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataProductRevisions",
  ListDataProductRevisions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataProductRevisionsInput;
      output: ListDataProductRevisionsOutput;
    };
    sdk: {
      input: ListDataProductRevisionsCommandInput;
      output: ListDataProductRevisionsCommandOutput;
    };
  };
}
