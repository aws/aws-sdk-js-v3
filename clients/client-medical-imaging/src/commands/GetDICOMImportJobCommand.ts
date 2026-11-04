// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDICOMImportJobRequest, GetDICOMImportJobResponse } from "../models/models_0";
import { GetDICOMImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDICOMImportJobCommand}.
 */
export interface GetDICOMImportJobCommandInput extends GetDICOMImportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetDICOMImportJobCommand}.
 */
export interface GetDICOMImportJobCommandOutput extends GetDICOMImportJobResponse, __MetadataBearer {}

/**
 * Get the import job properties to learn more about the job or job progress.
 *
 * > **Note:** The `jobStatus` refers to the execution of the import job. Therefore, an import job can return a `jobStatus` as `COMPLETED` even if validation issues are discovered during the import process. If a `jobStatus` returns as `COMPLETED`, we still recommend you review the output manifests written to S3, as they provide details on the success or failure of individual P10 object imports.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetDICOMImportJobCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetDICOMImportJobCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // GetDICOMImportJobRequest
 *   datastoreId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetDICOMImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetDICOMImportJobResponse
 * //   jobProperties: { // DICOMImportJobProperties
 * //     jobId: "STRING_VALUE", // required
 * //     jobName: "STRING_VALUE", // required
 * //     jobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //     datastoreId: "STRING_VALUE", // required
 * //     dataAccessRoleArn: "STRING_VALUE", // required
 * //     endedAt: new Date("TIMESTAMP"),
 * //     submittedAt: new Date("TIMESTAMP"),
 * //     inputS3Uri: "STRING_VALUE", // required
 * //     outputS3Uri: "STRING_VALUE", // required
 * //     message: "STRING_VALUE",
 * //     importConfiguration: { // ImportConfiguration Union: only one key present
 * //       dicomJsonMetadataImportConfiguration: { // DicomJsonMetadataImportConfiguration
 * //         dicomMetadataMappings: [ // DicomMetadataMappings // required
 * //           { // DicomMetadataMapping
 * //             studyInstanceUID: "STRING_VALUE", // required
 * //             seriesInstanceUID: "STRING_VALUE",
 * //             metadataFilePath: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDICOMImportJobCommandInput - {@link GetDICOMImportJobCommandInput}
 * @returns {@link GetDICOMImportJobCommandOutput}
 * @see {@link GetDICOMImportJobCommandInput} for command's `input` shape.
 * @see {@link GetDICOMImportJobCommandOutput} for command's `response` shape.
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
export class GetDICOMImportJobCommand extends command<GetDICOMImportJobCommandInput, GetDICOMImportJobCommandOutput>(
  _ep0,
  _mw0,
  "GetDICOMImportJob",
  GetDICOMImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDICOMImportJobRequest;
      output: GetDICOMImportJobResponse;
    };
    sdk: {
      input: GetDICOMImportJobCommandInput;
      output: GetDICOMImportJobCommandOutput;
    };
  };
}
