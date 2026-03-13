// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  ListNetworkMigrationCodeGenerationSegmentsRequest,
  ListNetworkMigrationCodeGenerationSegmentsResponse,
} from "../models/models_0";
import { ListNetworkMigrationCodeGenerationSegments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkMigrationCodeGenerationSegmentsCommand}.
 */
export interface ListNetworkMigrationCodeGenerationSegmentsCommandInput extends ListNetworkMigrationCodeGenerationSegmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkMigrationCodeGenerationSegmentsCommand}.
 */
export interface ListNetworkMigrationCodeGenerationSegmentsCommandOutput extends ListNetworkMigrationCodeGenerationSegmentsResponse, __MetadataBearer {}

/**
 * <p>Lists code generation segments, which represent individual infrastructure components generated as code templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListNetworkMigrationCodeGenerationSegmentsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListNetworkMigrationCodeGenerationSegmentsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // ListNetworkMigrationCodeGenerationSegmentsRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   filters: { // ListNetworkMigrationCodeGenerationSegmentsFilters
 *     segmentIDs: [ // ListNetworkMigrationCodeGenerationSegmentsIDsFilter
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkMigrationCodeGenerationSegmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkMigrationCodeGenerationSegmentsResponse
 * //   items: [ // NetworkMigrationCodeGenerationSegmentsList
 * //     { // NetworkMigrationCodeGenerationSegment
 * //       jobID: "STRING_VALUE",
 * //       networkMigrationExecutionID: "STRING_VALUE",
 * //       networkMigrationDefinitionID: "STRING_VALUE",
 * //       segmentID: "STRING_VALUE",
 * //       segmentType: "STRING_VALUE",
 * //       logicalID: "STRING_VALUE",
 * //       mapperSegmentID: "STRING_VALUE",
 * //       artifacts: [ // NetworkMigrationCodeGenerationArtifacts
 * //         { // NetworkMigrationCodeGenerationArtifact
 * //           artifactID: "STRING_VALUE",
 * //           artifactType: "STRING_VALUE",
 * //           artifactSubType: "STRING_VALUE",
 * //           logicalID: "STRING_VALUE",
 * //           outputS3Configuration: { // S3Configuration
 * //             s3Bucket: "STRING_VALUE",
 * //             s3BucketOwner: "STRING_VALUE",
 * //             s3Key: "STRING_VALUE",
 * //           },
 * //           checksum: { // Checksum
 * //             encryptionAlgorithm: "STRING_VALUE",
 * //             hash: "STRING_VALUE",
 * //           },
 * //           createdAt: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkMigrationCodeGenerationSegmentsCommandInput - {@link ListNetworkMigrationCodeGenerationSegmentsCommandInput}
 * @returns {@link ListNetworkMigrationCodeGenerationSegmentsCommandOutput}
 * @see {@link ListNetworkMigrationCodeGenerationSegmentsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkMigrationCodeGenerationSegmentsCommandOutput} for command's `response` shape.
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
 * @example Sample ListNetworkMigrationCodeGenerationSegments call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new ListNetworkMigrationCodeGenerationSegmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       artifacts: [
 *         {
 *           artifactID: "a2345678-abcd-abcd-efab-0123456789ab",
 *           artifactSubType: "STACK",
 *           artifactType: "CDK_TYPESCRIPT",
 *           checksum: {
 *             encryptionAlgorithm: "SHA256",
 *             hash: "0123456789aAbBcCdDeEfF0123456789"
 *           },
 *           createdAt: 1735334198,
 *           logicalID: "logical-id2",
 *           outputS3Configuration: {
 *             s3Bucket: "s3_bucket",
 *             s3BucketOwner: "012345678901",
 *             s3Key: "S3KeyName"
 *           }
 *         }
 *       ],
 *       createdAt: 1735334198,
 *       jobID: "01234567-abcd-abcd-efab-0123456789ab",
 *       logicalID: "logical-id1",
 *       mapperSegmentID: "12345678-abcd-abcd-efab-0123456789ab",
 *       networkMigrationDefinitionID: "nmd-01234567891234567",
 *       networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab",
 *       segmentID: "12345678-abcd-abcd-efab-0123456789ab",
 *       segmentType: "WORKLOAD"
 *     }
 *   ],
 *   nextToken: "NextTokenId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListNetworkMigrationCodeGenerationSegmentsCommand extends $Command
  .classBuilder<
    ListNetworkMigrationCodeGenerationSegmentsCommandInput,
    ListNetworkMigrationCodeGenerationSegmentsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "ListNetworkMigrationCodeGenerationSegments", {})
  .n("MgnClient", "ListNetworkMigrationCodeGenerationSegmentsCommand")
  .sc(ListNetworkMigrationCodeGenerationSegments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkMigrationCodeGenerationSegmentsRequest;
      output: ListNetworkMigrationCodeGenerationSegmentsResponse;
    };
    sdk: {
      input: ListNetworkMigrationCodeGenerationSegmentsCommandInput;
      output: ListNetworkMigrationCodeGenerationSegmentsCommandOutput;
    };
  };
}
