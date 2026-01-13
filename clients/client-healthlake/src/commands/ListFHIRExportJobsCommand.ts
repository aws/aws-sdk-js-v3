// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import type { ListFHIRExportJobsRequest, ListFHIRExportJobsResponse } from "../models/models_0";
import { ListFHIRExportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFHIRExportJobsCommand}.
 */
export interface ListFHIRExportJobsCommandInput extends ListFHIRExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListFHIRExportJobsCommand}.
 */
export interface ListFHIRExportJobsCommandOutput extends ListFHIRExportJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all FHIR export jobs associated with an account and their statuses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRExportJobsCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRExportJobsCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // ListFHIRExportJobsRequest
 *   DatastoreId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   JobName: "STRING_VALUE",
 *   JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED",
 *   SubmittedBefore: new Date("TIMESTAMP"),
 *   SubmittedAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListFHIRExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListFHIRExportJobsResponse
 * //   ExportJobPropertiesList: [ // ExportJobPropertiesList // required
 * //     { // ExportJobProperties
 * //       JobId: "STRING_VALUE", // required
 * //       JobName: "STRING_VALUE",
 * //       JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //       SubmitTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       DatastoreId: "STRING_VALUE", // required
 * //       OutputDataConfig: { // OutputDataConfig Union: only one key present
 * //         S3Configuration: { // S3Configuration
 * //           S3Uri: "STRING_VALUE", // required
 * //           KmsKeyId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFHIRExportJobsCommandInput - {@link ListFHIRExportJobsCommandInput}
 * @returns {@link ListFHIRExportJobsCommandOutput}
 * @see {@link ListFHIRExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListFHIRExportJobsCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class ListFHIRExportJobsCommand extends $Command
  .classBuilder<
    ListFHIRExportJobsCommandInput,
    ListFHIRExportJobsCommandOutput,
    HealthLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("HealthLake", "ListFHIRExportJobs", {})
  .n("HealthLakeClient", "ListFHIRExportJobsCommand")
  .sc(ListFHIRExportJobs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFHIRExportJobsRequest;
      output: ListFHIRExportJobsResponse;
    };
    sdk: {
      input: ListFHIRExportJobsCommandInput;
      output: ListFHIRExportJobsCommandOutput;
    };
  };
}
