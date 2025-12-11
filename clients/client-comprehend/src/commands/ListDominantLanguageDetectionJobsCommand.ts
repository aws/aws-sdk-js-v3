// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListDominantLanguageDetectionJobsRequest,
  ListDominantLanguageDetectionJobsResponse,
} from "../models/models_0";
import { ListDominantLanguageDetectionJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDominantLanguageDetectionJobsCommand}.
 */
export interface ListDominantLanguageDetectionJobsCommandInput extends ListDominantLanguageDetectionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDominantLanguageDetectionJobsCommand}.
 */
export interface ListDominantLanguageDetectionJobsCommandOutput
  extends ListDominantLanguageDetectionJobsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of the dominant language detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDominantLanguageDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDominantLanguageDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListDominantLanguageDetectionJobsRequest
 *   Filter: { // DominantLanguageDetectionJobFilter
 *     JobName: "STRING_VALUE",
 *     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDominantLanguageDetectionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDominantLanguageDetectionJobsResponse
 * //   DominantLanguageDetectionJobPropertiesList: [ // DominantLanguageDetectionJobPropertiesList
 * //     { // DominantLanguageDetectionJobProperties
 * //       JobId: "STRING_VALUE",
 * //       JobArn: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //       Message: "STRING_VALUE",
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       InputDataConfig: { // InputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 * //         DocumentReaderConfig: { // DocumentReaderConfig
 * //           DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 * //           DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 * //           FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 * //             "TABLES" || "FORMS",
 * //           ],
 * //         },
 * //       },
 * //       OutputDataConfig: { // OutputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       VolumeKmsKeyId: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfig
 * //         SecurityGroupIds: [ // SecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Subnets: [ // Subnets // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDominantLanguageDetectionJobsCommandInput - {@link ListDominantLanguageDetectionJobsCommandInput}
 * @returns {@link ListDominantLanguageDetectionJobsCommandOutput}
 * @see {@link ListDominantLanguageDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListDominantLanguageDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class ListDominantLanguageDetectionJobsCommand extends $Command
  .classBuilder<
    ListDominantLanguageDetectionJobsCommandInput,
    ListDominantLanguageDetectionJobsCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ListDominantLanguageDetectionJobs", {})
  .n("ComprehendClient", "ListDominantLanguageDetectionJobsCommand")
  .sc(ListDominantLanguageDetectionJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDominantLanguageDetectionJobsRequest;
      output: ListDominantLanguageDetectionJobsResponse;
    };
    sdk: {
      input: ListDominantLanguageDetectionJobsCommandInput;
      output: ListDominantLanguageDetectionJobsCommandOutput;
    };
  };
}
