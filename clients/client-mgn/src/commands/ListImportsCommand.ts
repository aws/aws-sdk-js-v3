// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListImportsRequest, ListImportsResponse } from "../models/models_0";
import { de_ListImportsCommand, se_ListImportsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImportsCommand}.
 */
export interface ListImportsCommandInput extends ListImportsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportsCommand}.
 */
export interface ListImportsCommandOutput extends ListImportsResponse, __MetadataBearer {}

/**
 * <p>List imports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListImportsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListImportsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListImportsRequest
 *   filters: { // ListImportsRequestFilters
 *     importIDs: [ // ImportIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImportsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportsResponse
 * //   items: [ // ImportList
 * //     { // ImportTask
 * //       importID: "STRING_VALUE",
 * //       s3BucketSource: { // S3BucketSource
 * //         s3Bucket: "STRING_VALUE", // required
 * //         s3Key: "STRING_VALUE", // required
 * //         s3BucketOwner: "STRING_VALUE",
 * //       },
 * //       creationDateTime: "STRING_VALUE",
 * //       endDateTime: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       progressPercentage: Number("float"),
 * //       summary: { // ImportTaskSummary
 * //         waves: { // ImportTaskSummaryWaves
 * //           createdCount: Number("long"),
 * //           modifiedCount: Number("long"),
 * //         },
 * //         applications: { // ImportTaskSummaryApplications
 * //           createdCount: Number("long"),
 * //           modifiedCount: Number("long"),
 * //         },
 * //         servers: { // ImportTaskSummaryServers
 * //           createdCount: Number("long"),
 * //           modifiedCount: Number("long"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportsCommandInput - {@link ListImportsCommandInput}
 * @returns {@link ListImportsCommandOutput}
 * @see {@link ListImportsCommandInput} for command's `input` shape.
 * @see {@link ListImportsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 * @public
 */
export class ListImportsCommand extends $Command
  .classBuilder<
    ListImportsCommandInput,
    ListImportsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "ListImports", {})
  .n("MgnClient", "ListImportsCommand")
  .f(void 0, void 0)
  .ser(se_ListImportsCommand)
  .de(de_ListImportsCommand)
  .build() {}
