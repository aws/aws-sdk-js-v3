// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIdentityResolutionJobsRequest, ListIdentityResolutionJobsResponse } from "../models/models_0";
import { ListIdentityResolutionJobs } from "../schemas/schemas_2_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIdentityResolutionJobsCommand}.
 */
export interface ListIdentityResolutionJobsCommandInput extends ListIdentityResolutionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityResolutionJobsCommand}.
 */
export interface ListIdentityResolutionJobsCommandOutput extends ListIdentityResolutionJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the Identity Resolution Jobs in your domain. The response sorts the list by
 *             <code>JobStartTime</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListIdentityResolutionJobsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListIdentityResolutionJobsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListIdentityResolutionJobsRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIdentityResolutionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityResolutionJobsResponse
 * //   IdentityResolutionJobsList: [ // IdentityResolutionJobsList
 * //     { // IdentityResolutionJob
 * //       DomainName: "STRING_VALUE",
 * //       JobId: "STRING_VALUE",
 * //       Status: "PENDING" || "PREPROCESSING" || "FIND_MATCHING" || "MERGING" || "COMPLETED" || "PARTIAL_SUCCESS" || "FAILED",
 * //       JobStartTime: new Date("TIMESTAMP"),
 * //       JobEndTime: new Date("TIMESTAMP"),
 * //       JobStats: { // JobStats
 * //         NumberOfProfilesReviewed: Number("long"),
 * //         NumberOfMatchesFound: Number("long"),
 * //         NumberOfMergesDone: Number("long"),
 * //       },
 * //       ExportingLocation: { // ExportingLocation
 * //         S3Exporting: { // S3ExportingLocation
 * //           S3BucketName: "STRING_VALUE",
 * //           S3KeyName: "STRING_VALUE",
 * //         },
 * //       },
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityResolutionJobsCommandInput - {@link ListIdentityResolutionJobsCommandInput}
 * @returns {@link ListIdentityResolutionJobsCommandOutput}
 * @see {@link ListIdentityResolutionJobsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityResolutionJobsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListIdentityResolutionJobsCommand extends $Command
  .classBuilder<
    ListIdentityResolutionJobsCommandInput,
    ListIdentityResolutionJobsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListIdentityResolutionJobs", {})
  .n("CustomerProfilesClient", "ListIdentityResolutionJobsCommand")
  .sc(ListIdentityResolutionJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentityResolutionJobsRequest;
      output: ListIdentityResolutionJobsResponse;
    };
    sdk: {
      input: ListIdentityResolutionJobsCommandInput;
      output: ListIdentityResolutionJobsCommandOutput;
    };
  };
}
