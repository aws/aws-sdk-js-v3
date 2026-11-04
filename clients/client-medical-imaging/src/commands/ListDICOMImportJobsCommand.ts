// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDICOMImportJobsRequest, ListDICOMImportJobsResponse } from "../models/models_0";
import { ListDICOMImportJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDICOMImportJobsCommand}.
 */
export interface ListDICOMImportJobsCommandInput extends ListDICOMImportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDICOMImportJobsCommand}.
 */
export interface ListDICOMImportJobsCommandOutput extends ListDICOMImportJobsResponse, __MetadataBearer {}

/**
 * List import jobs created for a specific data store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, ListDICOMImportJobsCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, ListDICOMImportJobsCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // ListDICOMImportJobsRequest
 *   datastoreId: "STRING_VALUE", // required
 *   jobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDICOMImportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDICOMImportJobsResponse
 * //   jobSummaries: [ // DICOMImportJobSummaries // required
 * //     { // DICOMImportJobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       jobName: "STRING_VALUE", // required
 * //       jobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //       datastoreId: "STRING_VALUE", // required
 * //       dataAccessRoleArn: "STRING_VALUE",
 * //       endedAt: new Date("TIMESTAMP"),
 * //       submittedAt: new Date("TIMESTAMP"),
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDICOMImportJobsCommandInput - {@link ListDICOMImportJobsCommandInput}
 * @returns {@link ListDICOMImportJobsCommandOutput}
 * @see {@link ListDICOMImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDICOMImportJobsCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The user does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints set by the service.
 *
 * @throws {@link MedicalImagingServiceException}
 *
 * Base exception class for all service exceptions from MedicalImaging service.
 *
 * @public
 */
export class ListDICOMImportJobsCommand extends command<ListDICOMImportJobsCommandInput, ListDICOMImportJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListDICOMImportJobs",
  ListDICOMImportJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDICOMImportJobsRequest;
      output: ListDICOMImportJobsResponse;
    };
    sdk: {
      input: ListDICOMImportJobsCommandInput;
      output: ListDICOMImportJobsCommandOutput;
    };
  };
}
