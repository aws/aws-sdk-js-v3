// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListExportsRequest, ListExportsResponse } from "../models/models_0";
import { ListExports } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExportsCommand}.
 */
export interface ListExportsCommandInput extends ListExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListExportsCommand}.
 */
export interface ListExportsCommandOutput extends ListExportsResponse, __MetadataBearer {}

/**
 * <p>List exports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListExportsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListExportsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListExportsRequest
 *   filters: { // ListExportsRequestFilters
 *     exportIDs: [ // ListExportsRequestFiltersExportIDs
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListExportsResponse
 * //   items: [ // ExportsList
 * //     { // ExportTask
 * //       exportID: "STRING_VALUE",
 * //       s3Bucket: "STRING_VALUE",
 * //       s3Key: "STRING_VALUE",
 * //       s3BucketOwner: "STRING_VALUE",
 * //       creationDateTime: "STRING_VALUE",
 * //       endDateTime: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       progressPercentage: Number("float"),
 * //       summary: { // ExportTaskSummary
 * //         serversCount: Number("long"),
 * //         applicationsCount: Number("long"),
 * //         wavesCount: Number("long"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportsCommandInput - {@link ListExportsCommandInput}
 * @returns {@link ListExportsCommandOutput}
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class ListExportsCommand extends $Command
  .classBuilder<
    ListExportsCommandInput,
    ListExportsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListExports", {})
  .n("MgnClient", "ListExportsCommand")
  .sc(ListExports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportsRequest;
      output: ListExportsResponse;
    };
    sdk: {
      input: ListExportsCommandInput;
      output: ListExportsCommandOutput;
    };
  };
}
