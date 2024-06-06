// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDocumentClassificationJobsRequest, ListDocumentClassificationJobsResponse } from "../models/models_0";
import {
  de_ListDocumentClassificationJobsCommand,
  se_ListDocumentClassificationJobsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDocumentClassificationJobsCommand}.
 */
export interface ListDocumentClassificationJobsCommandInput extends ListDocumentClassificationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDocumentClassificationJobsCommand}.
 */
export interface ListDocumentClassificationJobsCommandOutput
  extends ListDocumentClassificationJobsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of the documentation classification jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDocumentClassificationJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDocumentClassificationJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // ListDocumentClassificationJobsRequest
 *   Filter: { // DocumentClassificationJobFilter
 *     JobName: "STRING_VALUE",
 *     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDocumentClassificationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDocumentClassificationJobsResponse
 * //   DocumentClassificationJobPropertiesList: [ // DocumentClassificationJobPropertiesList
 * //     { // DocumentClassificationJobProperties
 * //       JobId: "STRING_VALUE",
 * //       JobArn: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //       Message: "STRING_VALUE",
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       DocumentClassifierArn: "STRING_VALUE",
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
 * //       FlywheelArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDocumentClassificationJobsCommandInput - {@link ListDocumentClassificationJobsCommandInput}
 * @returns {@link ListDocumentClassificationJobsCommandOutput}
 * @see {@link ListDocumentClassificationJobsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentClassificationJobsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListDocumentClassificationJobsCommand extends $Command
  .classBuilder<
    ListDocumentClassificationJobsCommandInput,
    ListDocumentClassificationJobsCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "ListDocumentClassificationJobs", {})
  .n("ComprehendClient", "ListDocumentClassificationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListDocumentClassificationJobsCommand)
  .de(de_ListDocumentClassificationJobsCommand)
  .build() {}
