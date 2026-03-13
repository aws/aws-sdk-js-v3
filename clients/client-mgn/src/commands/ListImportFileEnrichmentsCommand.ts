// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { ListImportFileEnrichmentsRequest, ListImportFileEnrichmentsResponse } from "../models/models_0";
import { ListImportFileEnrichments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImportFileEnrichmentsCommand}.
 */
export interface ListImportFileEnrichmentsCommandInput extends ListImportFileEnrichmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListImportFileEnrichmentsCommand}.
 */
export interface ListImportFileEnrichmentsCommandOutput extends ListImportFileEnrichmentsResponse, __MetadataBearer {}

/**
 * <p>Lists import file enrichment jobs with optional filtering by job IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListImportFileEnrichmentsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListImportFileEnrichmentsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListImportFileEnrichmentsRequest
 *   filters: { // ListImportFileEnrichmentsFilters
 *     jobIDs: [ // ImportFileEnrichmentsIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImportFileEnrichmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListImportFileEnrichmentsResponse
 * //   items: [ // ImportFileEnrichmentsList
 * //     { // ImportFileEnrichment
 * //       jobID: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE",
 * //       statusDetails: "STRING_VALUE",
 * //       checksum: { // Checksum
 * //         encryptionAlgorithm: "STRING_VALUE",
 * //         hash: "STRING_VALUE",
 * //       },
 * //       s3BucketTarget: { // EnrichmentTargetS3Configuration
 * //         s3Bucket: "STRING_VALUE", // required
 * //         s3BucketOwner: "STRING_VALUE", // required
 * //         s3Key: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImportFileEnrichmentsCommandInput - {@link ListImportFileEnrichmentsCommandInput}
 * @returns {@link ListImportFileEnrichmentsCommandOutput}
 * @see {@link ListImportFileEnrichmentsCommandInput} for command's `input` shape.
 * @see {@link ListImportFileEnrichmentsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample ListImportFileEnrichments call
 * ```javascript
 * //
 * const input = {
 *   filters: {
 *     jobIDs: [
 *       "01234567-abcd-abcd-efab-0123456789ab"
 *     ]
 *   },
 *   maxResults: 10
 * };
 * const command = new ListImportFileEnrichmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: 1735334198,
 *       endedAt: 1735334258,
 *       jobID: "01234567-abcd-abcd-efab-0123456789ab",
 *       s3BucketTarget: {
 *         s3Bucket: "my-target-bucket",
 *         s3BucketOwner: "123456789012",
 *         s3Key: "enriched/output.csv"
 *       },
 *       status: "SUCCEEDED",
 *       statusDetails: "Import file enrichment completed successfully"
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImportFileEnrichmentsCommand extends $Command
  .classBuilder<
    ListImportFileEnrichmentsCommandInput,
    ListImportFileEnrichmentsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListImportFileEnrichments", {})
  .n("MgnClient", "ListImportFileEnrichmentsCommand")
  .sc(ListImportFileEnrichments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImportFileEnrichmentsRequest;
      output: ListImportFileEnrichmentsResponse;
    };
    sdk: {
      input: ListImportFileEnrichmentsCommandInput;
      output: ListImportFileEnrichmentsCommandOutput;
    };
  };
}
