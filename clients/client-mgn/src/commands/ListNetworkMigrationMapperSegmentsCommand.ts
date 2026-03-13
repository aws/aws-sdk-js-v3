// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  ListNetworkMigrationMapperSegmentsRequest,
  ListNetworkMigrationMapperSegmentsResponse,
} from "../models/models_0";
import { ListNetworkMigrationMapperSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationMapperSegmentsCommand}.
 */
export interface ListNetworkMigrationMapperSegmentsCommandInput extends ListNetworkMigrationMapperSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationMapperSegmentsCommand}.
 */
export interface ListNetworkMigrationMapperSegmentsCommandOutput extends ListNetworkMigrationMapperSegmentsResponse, __MetadataBearer {}

/**
 * <p>Lists mapper segments, which represent logical groupings of network resources to be migrated together.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationMapperSegmentsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationMapperSegmentsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationMapperSegmentsRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationMapperSegmentsFilters
 *     segmentIDs: [ // ListNetworkMigrationMapperSegmentsIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationMapperSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationMapperSegmentsResponse
 * //   items: [ // NetworkMigrationMapperSegmentsList
 * //     { // NetworkMigrationMapperSegment
 * //       jobID: "STRING_VALUE",
 * //       networkMigrationExecutionID: "STRING_VALUE",
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       segmentID: "STRING_VALUE",
 * //       segmentType: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       logicalID: "STRING_VALUE",
 * //       checksum: { // Checksum
 * //         encryptionAlgorithm: "STRING_VALUE",
 * //         hash: "STRING_VALUE",
 * //       },
 * //       outputS3Configuration: { // S3Configuration
 * //         s3Bucket: "STRING_VALUE",
 * //         s3BucketOwner: "STRING_VALUE",
 * //         s3Key: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       scopeTags: { // ScopeTagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       targetAccount: "STRING_VALUE",
 * //       referencedSegments: [ // referencedSegmentsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationMapperSegmentsCommandInput - {@link ListNetworkMigrationMapperSegmentsCommandInput}
 * @returns {@link ListNetworkMigrationMapperSegmentsCommandOutput}
 * @see {@link ListNetworkMigrationMapperSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationMapperSegmentsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample ListNetworkMigrationMapperSegments call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new ListNetworkMigrationMapperSegmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       checksum: {
 *         encryptionAlgorithm: "SHA256",
 *         hash: "0123456789aAbBcCdDeEfF0123456789"
 *       },
 *       createdAt: 1735334198,
 *       description: "Segment description",
 *       jobID: "01234567-abcd-abcd-efab-0123456789ab",
 *       logicalID: "logical-id1",
 *       name: "SegmentName",
 *       networkMigrationDefinitionID: "nmd-01234567891234567",
 *       networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *       outputS3Configuration: {
 *         s3Bucket: "s3_bucket",
 *         s3BucketOwner: "012345678901",
 *         s3Key: "S3KeyName"
 *       },
 *       segmentID: "12345678-abcd-abcd-efab-0123456789ab",
 *       segmentType: "WORKLOAD",
 *       updatedAt: 1735334198
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationMapperSegmentsCommand extends $Command
  .classBuilder<
    ListNetworkMigrationMapperSegmentsCommandInput,
    ListNetworkMigrationMapperSegmentsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationMapperSegments", {})
  .n("MgnClient", "ListNetworkMigrationMapperSegmentsCommand")
  .sc(ListNetworkMigrationMapperSegments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationMapperSegmentsRequest;
      output: ListNetworkMigrationMapperSegmentsResponse;
    };
    sdk: {
      input: ListNetworkMigrationMapperSegmentsCommandInput;
      output: ListNetworkMigrationMapperSegmentsCommandOutput;
    };
  };
}
