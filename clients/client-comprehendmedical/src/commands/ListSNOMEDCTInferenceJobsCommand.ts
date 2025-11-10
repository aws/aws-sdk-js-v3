// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSNOMEDCTInferenceJobsRequest, ListSNOMEDCTInferenceJobsResponse } from "../models/models_0";
import { ListSNOMEDCTInferenceJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSNOMEDCTInferenceJobsCommand}.
 */
export interface ListSNOMEDCTInferenceJobsCommandInput extends ListSNOMEDCTInferenceJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListSNOMEDCTInferenceJobsCommand}.
 */
export interface ListSNOMEDCTInferenceJobsCommandOutput extends ListSNOMEDCTInferenceJobsResponse, __MetadataBearer {}

/**
 * <p>
 *       Gets a list of InferSNOMEDCT jobs a user has submitted.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, ListSNOMEDCTInferenceJobsCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, ListSNOMEDCTInferenceJobsCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // ListSNOMEDCTInferenceJobsRequest
 *   Filter: { // ComprehendMedicalAsyncJobFilter
 *     JobName: "STRING_VALUE",
 *     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "PARTIAL_SUCCESS" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSNOMEDCTInferenceJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListSNOMEDCTInferenceJobsResponse
 * //   ComprehendMedicalAsyncJobPropertiesList: [ // ComprehendMedicalAsyncJobPropertiesList
 * //     { // ComprehendMedicalAsyncJobProperties
 * //       JobId: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "PARTIAL_SUCCESS" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //       Message: "STRING_VALUE",
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       InputDataConfig: { // InputDataConfig
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       OutputDataConfig: { // OutputDataConfig
 * //         S3Bucket: "STRING_VALUE", // required
 * //         S3Key: "STRING_VALUE",
 * //       },
 * //       LanguageCode: "en",
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       ManifestFilePath: "STRING_VALUE",
 * //       KMSKey: "STRING_VALUE",
 * //       ModelVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSNOMEDCTInferenceJobsCommandInput - {@link ListSNOMEDCTInferenceJobsCommandInput}
 * @returns {@link ListSNOMEDCTInferenceJobsCommandOutput}
 * @see {@link ListSNOMEDCTInferenceJobsCommandInput} for command's `input` shape.
 * @see {@link ListSNOMEDCTInferenceJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal server error occurred. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again. Contact customer support for more information about a service
 *       limit increase. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The filter that you specified for the operation is invalid. Check the filter values that
 *       you entered and try your request again.</p>
 *
 * @throws {@link ComprehendMedicalServiceException}
 * <p>Base exception class for all service exceptions from ComprehendMedical service.</p>
 *
 *
 * @public
 */
export class ListSNOMEDCTInferenceJobsCommand extends $Command
  .classBuilder<
    ListSNOMEDCTInferenceJobsCommandInput,
    ListSNOMEDCTInferenceJobsCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComprehendMedical_20181030", "ListSNOMEDCTInferenceJobs", {})
  .n("ComprehendMedicalClient", "ListSNOMEDCTInferenceJobsCommand")
  .sc(ListSNOMEDCTInferenceJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSNOMEDCTInferenceJobsRequest;
      output: ListSNOMEDCTInferenceJobsResponse;
    };
    sdk: {
      input: ListSNOMEDCTInferenceJobsCommandInput;
      output: ListSNOMEDCTInferenceJobsCommandOutput;
    };
  };
}
