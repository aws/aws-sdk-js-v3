// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFHIRImportJobsRequest, ListFHIRImportJobsResponse } from "../models/models_0";
import { ListFHIRImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFHIRImportJobsCommand}.
 */
export interface ListFHIRImportJobsCommandInput extends ListFHIRImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListFHIRImportJobsCommand}.
 */
export interface ListFHIRImportJobsCommandOutput extends ListFHIRImportJobsResponse, __MetadataBearer {}

/**
 * List all FHIR import jobs associated with an account and their statuses.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, ListFHIRImportJobsCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, ListFHIRImportJobsCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * // import type { HealthLakeClientConfig } from "@aws-sdk/client-healthlake";
 * const config = {}; // type is HealthLakeClientConfig
 * const client = new HealthLakeClient(config);
 * const input = { // ListFHIRImportJobsRequest
 *   DatastoreId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   JobName: "STRING_VALUE",
 *   JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED",
 *   SubmittedBefore: new Date("TIMESTAMP"),
 *   SubmittedAfter: new Date("TIMESTAMP"),
 * };
 * const command = new ListFHIRImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListFHIRImportJobsResponse
 * //   ImportJobPropertiesList: [ // ImportJobPropertiesList // required
 * //     { // ImportJobProperties
 * //       JobId: "STRING_VALUE", // required
 * //       JobName: "STRING_VALUE",
 * //       JobStatus: "SUBMITTED" || "QUEUED" || "IN_PROGRESS" || "COMPLETED_WITH_ERRORS" || "COMPLETED" || "FAILED" || "CANCEL_SUBMITTED" || "CANCEL_IN_PROGRESS" || "CANCEL_COMPLETED" || "CANCEL_FAILED", // required
 * //       SubmitTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       DatastoreId: "STRING_VALUE", // required
 * //       InputDataConfig: { // InputDataConfig Union: only one key present
 * //         S3Uri: "STRING_VALUE",
 * //       },
 * //       JobOutputDataConfig: { // OutputDataConfig Union: only one key present
 * //         S3Configuration: { // S3Configuration
 * //           S3Uri: "STRING_VALUE", // required
 * //           KmsKeyId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       JobProgressReport: { // JobProgressReport
 * //         TotalNumberOfScannedFiles: Number("long"),
 * //         TotalSizeOfScannedFilesInMB: Number("double"),
 * //         TotalNumberOfImportedFiles: Number("long"),
 * //         TotalNumberOfResourcesScanned: Number("long"),
 * //         TotalNumberOfResourcesImported: Number("long"),
 * //         TotalNumberOfResourcesWithCustomerError: Number("long"),
 * //         TotalNumberOfFilesReadWithCustomerError: Number("long"),
 * //         TotalNumberOfScannedNonFhirFiles: Number("long"),
 * //         TotalSizeOfScannedNonFhirFilesInMB: Number("double"),
 * //         TotalNumberOfImportedNonFhirFiles: Number("long"),
 * //         TotalNumberOfNonFhirResourcesScanned: Number("long"),
 * //         TotalNumberOfNonFhirResourcesImported: Number("long"),
 * //         TotalNumberOfNonFhirResourcesWithCustomerError: Number("long"),
 * //         TotalNumberOfNonFhirFilesReadWithCustomerError: Number("long"),
 * //         Throughput: Number("double"),
 * //         TotalFilesConverted: Number("long"),
 * //         TotalResourcesGenerated: Number("long"),
 * //       },
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       ValidationLevel: "strict" || "structure-only" || "minimal",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFHIRImportJobsCommandInput - {@link ListFHIRImportJobsCommandInput}
 * @returns {@link ListFHIRImportJobsCommandOutput}
 * @see {@link ListFHIRImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListFHIRImportJobsCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied. Your account is not authorized to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown internal error occurred in the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested data store was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The user has exceeded their maximum number of allowed calls to the given API.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input parameter was invalid.
 *
 * @throws {@link HealthLakeServiceException}
 *
 * Base exception class for all service exceptions from HealthLake service.
 *
 * @public
 */
export class ListFHIRImportJobsCommand extends command<ListFHIRImportJobsCommandInput, ListFHIRImportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListFHIRImportJobs",
  ListFHIRImportJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFHIRImportJobsRequest;
      output: ListFHIRImportJobsResponse;
    };
    sdk: {
      input: ListFHIRImportJobsCommandInput;
      output: ListFHIRImportJobsCommandOutput;
    };
  };
}
