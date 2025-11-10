// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { StartDICOMImportJobRequest, StartDICOMImportJobResponse } from "../models/models_0";
import { StartDICOMImportJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Start importing bulk data into an <code>ACTIVE</code> data store. The import job imports DICOM P10 files found in the S3 prefix specified by the <code>inputS3Uri</code> parameter. The import job stores processing results in the file specified by the <code>outputS3Uri</code> parameter.</p>
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
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request caused a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 *
 * @public
 */
export class StartDICOMImportJobCommand extends $Command
  .classBuilder<
    StartDICOMImportJobCommandInput,
    StartDICOMImportJobCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AHIGatewayService", "StartDICOMImportJob", {})
  .n("MedicalImagingClient", "StartDICOMImportJobCommand")
  .sc(StartDICOMImportJob)
  .build() {
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
