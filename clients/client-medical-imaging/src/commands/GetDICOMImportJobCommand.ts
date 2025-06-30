// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { GetDICOMImportJobRequest, GetDICOMImportJobResponse } from "../models/models_0";
import { de_GetDICOMImportJobCommand, se_GetDICOMImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get the import job properties to learn more about the job or job progress.</p> <note> <p>The <code>jobStatus</code> refers to the execution of the import job. Therefore, an import job can return a <code>jobStatus</code> as <code>COMPLETED</code> even if validation issues are discovered during the import process. If a <code>jobStatus</code> returns as <code>COMPLETED</code>, we still recommend you review the output manifests written to S3, as they provide details on the success or failure of individual P10 object imports.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, GetDICOMImportJobCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, GetDICOMImportJobCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
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
export class GetDICOMImportJobCommand extends $Command
  .classBuilder<
    GetDICOMImportJobCommandInput,
    GetDICOMImportJobCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AHIGatewayService", "GetDICOMImportJob", {})
  .n("MedicalImagingClient", "GetDICOMImportJobCommand")
  .f(void 0, void 0)
  .ser(se_GetDICOMImportJobCommand)
  .de(de_GetDICOMImportJobCommand)
  .build() {
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
