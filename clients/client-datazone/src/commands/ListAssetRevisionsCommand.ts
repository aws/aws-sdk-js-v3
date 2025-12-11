// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAssetRevisionsInput, ListAssetRevisionsOutput } from "../models/models_1";
import { ListAssetRevisions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the revisions for the asset.</p> <p>Prerequisites:</p> <ul> <li> <p>The asset must exist in the domain. </p> </li> <li> <p>There must be at least one revision of the asset (which happens automatically after creation).</p> </li> <li> <p>The domain must be valid and active.</p> </li> <li> <p>User must have permissions on the asset and domain.</p> </li> </ul>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListAssetRevisionsCommand extends $Command
  .classBuilder<
    ListAssetRevisionsCommandInput,
    ListAssetRevisionsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListAssetRevisions", {})
  .n("DataZoneClient", "ListAssetRevisionsCommand")
  .sc(ListAssetRevisions)
  .build() {
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
