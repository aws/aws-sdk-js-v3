// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDICOMImportJobRequest, StartDICOMImportJobResponse } from "../models/models_0";
import { StartDICOMImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDICOMImportJobCommand}.
 */
export interface StartDICOMImportJobCommandInput extends StartDICOMImportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDICOMImportJobCommand}.
 */
export interface StartDICOMImportJobCommandOutput extends StartDICOMImportJobResponse, __MetadataBearer {}

/**
 * Start importing bulk data into an `ACTIVE` data store. The import job imports DICOM P10 files or enhances existing DICOM files with JSON metadata. The `importConfiguration` parameter specifies the import type. The data is found in the S3 prefix specified by the `inputS3Uri` parameter. The import job stores processing results in the file specified by the `outputS3Uri` parameter.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, StartDICOMImportJobCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, StartDICOMImportJobCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // import type { MedicalImagingClientConfig } from "@aws-sdk/client-medical-imaging";
 * const config = {}; // type is MedicalImagingClientConfig
 * const client = new MedicalImagingClient(config);
 * const input = { // StartDICOMImportJobRequest
 *   jobName: "STRING_VALUE",
 *   dataAccessRoleArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE", // required
 *   datastoreId: "STRING_VALUE", // required
 *   inputS3Uri: "STRING_VALUE", // required
 *   outputS3Uri: "STRING_VALUE", // required
 *   inputOwnerAccountId: "STRING_VALUE",
 *   importConfiguration: { // ImportConfiguration Union: only one key present
 *     dicomJsonMetadataImportConfiguration: { // DicomJsonMetadataImportConfiguration
 *       dicomMetadataMappings: [ // DicomMetadataMappings // required
 *         { // DicomMetadataMapping
 *           studyInstanceUID: "STRING_VALUE", // required
 *           seriesInstanceUID: "STRING_VALUE",
 *           metadataFilePath: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new StartDICOMImportJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDICOMImportJobResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   jobId: "STRING_VALUE", // required
 * //   jobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //   submittedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartDICOMImportJobCommandInput - {@link StartDICOMImportJobCommandInput}
 * @returns {@link StartDICOMImportJobCommandOutput}
 * @see {@link StartDICOMImportJobCommandInput} for command's `input` shape.
 * @see {@link StartDICOMImportJobCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request caused a service quota to be exceeded.
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
export class StartDICOMImportJobCommand extends command<StartDICOMImportJobCommandInput, StartDICOMImportJobCommandOutput>(
  _ep0,
  _mw0,
  "StartDICOMImportJob",
  StartDICOMImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDICOMImportJobRequest;
      output: StartDICOMImportJobResponse;
    };
    sdk: {
      input: StartDICOMImportJobCommandInput;
      output: StartDICOMImportJobCommandOutput;
    };
  };
}
