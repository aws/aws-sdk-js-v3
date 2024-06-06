// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIdentityResolutionJobRequest, GetIdentityResolutionJobResponse } from "../models/models_0";
import { de_GetIdentityResolutionJobCommand, se_GetIdentityResolutionJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentityResolutionJobCommand}.
 */
export interface GetIdentityResolutionJobCommandInput extends GetIdentityResolutionJobRequest {}
/**
 * @public
 *
 * The output of {@link GetIdentityResolutionJobCommand}.
 */
export interface GetIdentityResolutionJobCommandOutput extends GetIdentityResolutionJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about an Identity Resolution Job in a specific domain. </p>
 *          <p>Identity Resolution Jobs are set up using the Amazon Connect admin console. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/use-identity-resolution.html">Use
 *             Identity Resolution to consolidate similar profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetIdentityResolutionJobCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetIdentityResolutionJobCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetIdentityResolutionJobRequest
 *   DomainName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetIdentityResolutionJobCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentityResolutionJobResponse
 * //   DomainName: "STRING_VALUE",
 * //   JobId: "STRING_VALUE",
 * //   Status: "PENDING" || "PREPROCESSING" || "FIND_MATCHING" || "MERGING" || "COMPLETED" || "PARTIAL_SUCCESS" || "FAILED",
 * //   Message: "STRING_VALUE",
 * //   JobStartTime: new Date("TIMESTAMP"),
 * //   JobEndTime: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   JobExpirationTime: new Date("TIMESTAMP"),
 * //   AutoMerging: { // AutoMerging
 * //     Enabled: true || false, // required
 * //     Consolidation: { // Consolidation
 * //       MatchingAttributesList: [ // MatchingAttributesList // required
 * //         [ // MatchingAttributes
 * //           "STRING_VALUE",
 * //         ],
 * //       ],
 * //     },
 * //     ConflictResolution: { // ConflictResolution
 * //       ConflictResolvingModel: "RECENCY" || "SOURCE", // required
 * //       SourceName: "STRING_VALUE",
 * //     },
 * //     MinAllowedConfidenceScoreForMerging: Number("double"),
 * //   },
 * //   ExportingLocation: { // ExportingLocation
 * //     S3Exporting: { // S3ExportingLocation
 * //       S3BucketName: "STRING_VALUE",
 * //       S3KeyName: "STRING_VALUE",
 * //     },
 * //   },
 * //   JobStats: { // JobStats
 * //     NumberOfProfilesReviewed: Number("long"),
 * //     NumberOfMatchesFound: Number("long"),
 * //     NumberOfMergesDone: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentityResolutionJobCommandInput - {@link GetIdentityResolutionJobCommandInput}
 * @returns {@link GetIdentityResolutionJobCommandOutput}
 * @see {@link GetIdentityResolutionJobCommandInput} for command's `input` shape.
 * @see {@link GetIdentityResolutionJobCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 * @public
 */
export class GetIdentityResolutionJobCommand extends $Command
  .classBuilder<
    GetIdentityResolutionJobCommandInput,
    GetIdentityResolutionJobCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "GetIdentityResolutionJob", {})
  .n("CustomerProfilesClient", "GetIdentityResolutionJobCommand")
  .f(void 0, void 0)
  .ser(se_GetIdentityResolutionJobCommand)
  .de(de_GetIdentityResolutionJobCommand)
  .build() {}
