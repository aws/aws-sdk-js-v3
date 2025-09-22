// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListUploadJobsRequest, ListUploadJobsResponse } from "../models/models_0";
import { ListUploadJobs } from "../schemas/schemas_6_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUploadJobsCommand}.
 */
export interface ListUploadJobsCommandInput extends ListUploadJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListUploadJobsCommand}.
 */
export interface ListUploadJobsCommandOutput extends ListUploadJobsResponse, __MetadataBearer {}

/**
 * <p>This API retrieves a list of upload jobs for the specified domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListUploadJobsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListUploadJobsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListUploadJobsRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListUploadJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListUploadJobsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Items: [ // UploadJobsList
 * //     { // UploadJobItem
 * //       JobId: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Status: "CREATED" || "IN_PROGRESS" || "PARTIALLY_SUCCEEDED" || "SUCCEEDED" || "FAILED" || "STOPPED",
 * //       StatusReason: "VALIDATION_FAILURE" || "INTERNAL_FAILURE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       CompletedAt: new Date("TIMESTAMP"),
 * //       DataExpiry: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListUploadJobsCommandInput - {@link ListUploadJobsCommandInput}
 * @returns {@link ListUploadJobsCommandOutput}
 * @see {@link ListUploadJobsCommandInput} for command's `input` shape.
 * @see {@link ListUploadJobsCommandOutput} for command's `response` shape.
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
export class ListUploadJobsCommand extends $Command
  .classBuilder<
    ListUploadJobsCommandInput,
    ListUploadJobsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListUploadJobs", {})
  .n("CustomerProfilesClient", "ListUploadJobsCommand")
  .sc(ListUploadJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUploadJobsRequest;
      output: ListUploadJobsResponse;
    };
    sdk: {
      input: ListUploadJobsCommandInput;
      output: ListUploadJobsCommandOutput;
    };
  };
}
