// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMedicalCodingJobRequest, GetMedicalCodingJobResponse } from "../models/models_0";
import { GetMedicalCodingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMedicalCodingJobCommand}.
 */
export interface GetMedicalCodingJobCommandInput extends GetMedicalCodingJobRequest {}
/**
 * @public
 *
 * The output of {@link GetMedicalCodingJobCommand}.
 */
export interface GetMedicalCodingJobCommandOutput extends GetMedicalCodingJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a medical coding job, including its status and, when it succeeds, the location of its results.</p> <p>Medical coding jobs are in preview release and are subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, GetMedicalCodingJobCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, GetMedicalCodingJobCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // GetMedicalCodingJobRequest
 *   domainId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetMedicalCodingJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMedicalCodingJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   jobArn: "STRING_VALUE", // required
 * //   jobStatus: "SUBMITTED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED", // required
 * //   creationTime: new Date("TIMESTAMP"),
 * //   updatedTime: new Date("TIMESTAMP"),
 * //   text: "STRING_VALUE", // required
 * //   patientContext: { // MedicalCodesPatientContext
 * //     sex: "MALE" || "FEMALE" || "NON_BINARY" || "UNKNOWN",
 * //     status: "NEW" || "ESTABLISHED",
 * //     dateOfBirth: "STRING_VALUE",
 * //     insurance: "STRING_VALUE",
 * //   },
 * //   encounterContext: { // MedicalCodesEncounterContext
 * //     encounterType: "TELEHEALTH" || "IN_PERSON",
 * //     encounterReason: "STRING_VALUE",
 * //     afterHours: true || false,
 * //     encounterDate: "STRING_VALUE",
 * //     encounterDurationMinutes: Number("int"),
 * //   },
 * //   outputDataConfig: { // MedicalCodingOutputDataConfig
 * //     s3OutputPath: "STRING_VALUE", // required
 * //   },
 * //   datasetId: "STRING_VALUE",
 * //   medicalCodingOutput: { // MedicalCodingOutput
 * //     uri: "STRING_VALUE", // required
 * //   },
 * //   statusDetails: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMedicalCodingJobCommandInput - {@link GetMedicalCodingJobCommandInput}
 * @returns {@link GetMedicalCodingJobCommandOutput}
 * @see {@link GetMedicalCodingJobCommandInput} for command's `input` shape.
 * @see {@link GetMedicalCodingJobCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error is thrown when the client does not supply proper credentials to the API.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error is thrown when a transient error causes our API to fail.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error is thrown when the requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error is thrown when the client exceeds the allowed request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This error is thrown when the client supplies invalid input to the API.</p>
 *
 * @throws {@link ConnectHealthServiceException}
 * <p>Base exception class for all service exceptions from ConnectHealth service.</p>
 *
 *
 * @public
 */
export class GetMedicalCodingJobCommand extends command<GetMedicalCodingJobCommandInput, GetMedicalCodingJobCommandOutput>(
  _ep0,
  _mw0,
  "GetMedicalCodingJob",
  GetMedicalCodingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMedicalCodingJobRequest;
      output: GetMedicalCodingJobResponse;
    };
    sdk: {
      input: GetMedicalCodingJobCommandInput;
      output: GetMedicalCodingJobCommandOutput;
    };
  };
}
