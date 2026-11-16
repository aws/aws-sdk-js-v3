// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMedicalCodingJobRequest, StartMedicalCodingJobResponse } from "../models/models_0";
import { StartMedicalCodingJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMedicalCodingJobCommand}.
 */
export interface StartMedicalCodingJobCommandInput extends StartMedicalCodingJobRequest {}
/**
 * @public
 *
 * The output of {@link StartMedicalCodingJobCommand}.
 */
export interface StartMedicalCodingJobCommandOutput extends StartMedicalCodingJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous job that generates medical codes (ICD-10 and CPT) for clinical text. Call GetMedicalCodingJob to check the status of the job. When the job succeeds, Amazon Connect Health writes the results to the output Amazon S3 location.</p> <p>To tailor the codes to your organization, specify an ACTIVE medical coding dataset in the Domain. If you don't specify a dataset, the job uses the general medical coding knowledge base.</p> <p>Medical coding jobs are in preview release and are subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, StartMedicalCodingJobCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, StartMedicalCodingJobCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // StartMedicalCodingJobRequest
 *   domainId: "STRING_VALUE", // required
 *   text: "STRING_VALUE", // required
 *   patientContext: { // MedicalCodesPatientContext
 *     sex: "MALE" || "FEMALE" || "NON_BINARY" || "UNKNOWN",
 *     status: "NEW" || "ESTABLISHED",
 *     dateOfBirth: "STRING_VALUE",
 *     insurance: "STRING_VALUE",
 *   },
 *   encounterContext: { // MedicalCodesEncounterContext
 *     encounterType: "TELEHEALTH" || "IN_PERSON",
 *     encounterReason: "STRING_VALUE",
 *     afterHours: true || false,
 *     encounterDate: "STRING_VALUE",
 *     encounterDurationMinutes: Number("int"),
 *   },
 *   outputDataConfig: { // MedicalCodingOutputDataConfig
 *     s3OutputPath: "STRING_VALUE", // required
 *   },
 *   datasetId: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartMedicalCodingJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMedicalCodingJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * //   jobId: "STRING_VALUE", // required
 * //   creationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartMedicalCodingJobCommandInput - {@link StartMedicalCodingJobCommandInput}
 * @returns {@link StartMedicalCodingJobCommandOutput}
 * @see {@link StartMedicalCodingJobCommandInput} for command's `input` shape.
 * @see {@link StartMedicalCodingJobCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error is thrown when the client does not supply proper credentials to the API.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error is thrown when a resource update is no longer valid due to assumptions about initial state changing.</p>
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
export class StartMedicalCodingJobCommand extends command<StartMedicalCodingJobCommandInput, StartMedicalCodingJobCommandOutput>(
  _ep0,
  _mw0,
  "StartMedicalCodingJob",
  StartMedicalCodingJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMedicalCodingJobRequest;
      output: StartMedicalCodingJobResponse;
    };
    sdk: {
      input: StartMedicalCodingJobCommandInput;
      output: StartMedicalCodingJobCommandOutput;
    };
  };
}
