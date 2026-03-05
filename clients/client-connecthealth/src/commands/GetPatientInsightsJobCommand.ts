// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectHealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectHealthClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPatientInsightsJobRequest, GetPatientInsightsJobResponse } from "../models/models_0";
import { GetPatientInsightsJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPatientInsightsJobCommand}.
 */
export interface GetPatientInsightsJobCommandInput extends GetPatientInsightsJobRequest {}
/**
 * @public
 *
 * The output of {@link GetPatientInsightsJobCommand}.
 */
export interface GetPatientInsightsJobCommandOutput extends GetPatientInsightsJobResponse, __MetadataBearer {}

/**
 * <p>Get details of a started patient insights job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, GetPatientInsightsJobCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, GetPatientInsightsJobCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // GetPatientInsightsJobRequest
 *   domainId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetPatientInsightsJobCommand(input);
 * const response = await client.send(command);
 * // { // GetPatientInsightsJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   jobArn: "STRING_VALUE", // required
 * //   jobStatus: "SUBMITTED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED", // required
 * //   creationTime: new Date("TIMESTAMP"),
 * //   updatedTime: new Date("TIMESTAMP"),
 * //   insightsOutput: { // InsightsOutput
 * //     uri: "STRING_VALUE", // required
 * //   },
 * //   statusDetails: "STRING_VALUE",
 * //   patientContext: { // PatientInsightsPatientContext
 * //     patientId: "STRING_VALUE", // required
 * //     dateOfBirth: "STRING_VALUE",
 * //     pronouns: "HE_HIM" || "SHE_HER" || "THEY_THEM",
 * //   },
 * //   insightsContext: { // InsightsContext
 * //     insightsType: "PRE_VISIT", // required
 * //   },
 * //   encounterContext: { // PatientInsightsEncounterContext
 * //     encounterReason: "STRING_VALUE", // required
 * //   },
 * //   userContext: { // UserContext
 * //     role: "CLINICIAN", // required
 * //     userId: "STRING_VALUE", // required
 * //     specialty: "PRIMARY_CARE",
 * //   },
 * //   inputDataConfig: { // InputDataConfig
 * //     fhirServer: { // FHIRServer
 * //       fhirEndpoint: "STRING_VALUE", // required
 * //       oauthToken: "STRING_VALUE",
 * //     },
 * //     s3Sources: [ // S3Sources
 * //       { // S3Source
 * //         uri: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   outputDataConfig: { // OutputDataConfig
 * //     s3OutputPath: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPatientInsightsJobCommandInput - {@link GetPatientInsightsJobCommandInput}
 * @returns {@link GetPatientInsightsJobCommandOutput}
 * @see {@link GetPatientInsightsJobCommandInput} for command's `input` shape.
 * @see {@link GetPatientInsightsJobCommandOutput} for command's `response` shape.
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
export class GetPatientInsightsJobCommand extends $Command
  .classBuilder<
    GetPatientInsightsJobCommandInput,
    GetPatientInsightsJobCommandOutput,
    ConnectHealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectHealthClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ConnectHealth", "GetPatientInsightsJob", {})
  .n("ConnectHealthClient", "GetPatientInsightsJobCommand")
  .sc(GetPatientInsightsJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPatientInsightsJobRequest;
      output: GetPatientInsightsJobResponse;
    };
    sdk: {
      input: GetPatientInsightsJobCommandInput;
      output: GetPatientInsightsJobCommandOutput;
    };
  };
}
