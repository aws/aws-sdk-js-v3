// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEventsDetectionJobsRequest, ListEventsDetectionJobsResponse } from "../models/models_0";
import { de_ListEventsDetectionJobsCommand, se_ListEventsDetectionJobsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventsDetectionJobsCommand}.
 */
export interface ListEventsDetectionJobsCommandInput extends ListEventsDetectionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventsDetectionJobsCommand}.
 */
export interface ListEventsDetectionJobsCommandOutput extends ListEventsDetectionJobsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the events detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEventsDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEventsDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListEventsDetectionJobsRequest
 *   Filter: { // EventsDetectionJobFilter
 *     JobName: "STRING_VALUE",
 *     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventsDetectionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventsDetectionJobsResponse
 * //   EventsDetectionJobPropertiesList: [ // EventsDetectionJobPropertiesList
 * //     { // EventsDetectionJobProperties
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
 * //       LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       TargetEventTypes: [ // TargetEventTypes
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventsDetectionJobsCommandInput - {@link ListEventsDetectionJobsCommandInput}
 * @returns {@link ListEventsDetectionJobsCommandOutput}
 * @see {@link ListEventsDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListEventsDetectionJobsCommandOutput} for command's `response` shape.
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
export class ListEventsDetectionJobsCommand extends $Command
  .classBuilder<
    ListEventsDetectionJobsCommandInput,
    ListEventsDetectionJobsCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "ListEventsDetectionJobs", {})
  .n("ComprehendClient", "ListEventsDetectionJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListEventsDetectionJobsCommand)
  .de(de_ListEventsDetectionJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventsDetectionJobsRequest;
      output: ListEventsDetectionJobsResponse;
    };
    sdk: {
      input: ListEventsDetectionJobsCommandInput;
      output: ListEventsDetectionJobsCommandOutput;
    };
  };
}
