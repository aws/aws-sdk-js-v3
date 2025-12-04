// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPiiEntitiesDetectionJobsRequest, ListPiiEntitiesDetectionJobsResponse } from "../models/models_0";
import { ListPiiEntitiesDetectionJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPiiEntitiesDetectionJobsCommand}.
 */
export interface ListPiiEntitiesDetectionJobsCommandInput extends ListPiiEntitiesDetectionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListPiiEntitiesDetectionJobsCommand}.
 */
export interface ListPiiEntitiesDetectionJobsCommandOutput
  extends ListPiiEntitiesDetectionJobsResponse,
    __MetadataBearer {}

/**
 * <p>Gets a list of the PII entity detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListPiiEntitiesDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListPiiEntitiesDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListPiiEntitiesDetectionJobsRequest
 *   Filter: { // PiiEntitiesDetectionJobFilter
 *     JobName: "STRING_VALUE",
 *     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPiiEntitiesDetectionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListPiiEntitiesDetectionJobsResponse
 * //   PiiEntitiesDetectionJobPropertiesList: [ // PiiEntitiesDetectionJobPropertiesList
 * //     { // PiiEntitiesDetectionJobProperties
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
 * //       OutputDataConfig: { // PiiOutputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       RedactionConfig: { // RedactionConfig
 * //         PiiEntityTypes: [ // ListOfPiiEntityTypes
 * //           "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "DATE_TIME" || "PASSPORT_NUMBER" || "DRIVER_ID" || "URL" || "AGE" || "USERNAME" || "PASSWORD" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "IP_ADDRESS" || "MAC_ADDRESS" || "ALL" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "IN_PERMANENT_ACCOUNT_NUMBER" || "IN_NREGA" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "CA_HEALTH_NUMBER" || "IN_AADHAAR" || "IN_VOTER_NUMBER",
 * //         ],
 * //         MaskMode: "MASK" || "REPLACE_WITH_PII_ENTITY_TYPE",
 * //         MaskCharacter: "STRING_VALUE",
 * //       },
 * //       LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       Mode: "ONLY_REDACTION" || "ONLY_OFFSETS",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPiiEntitiesDetectionJobsCommandInput - {@link ListPiiEntitiesDetectionJobsCommandInput}
 * @returns {@link ListPiiEntitiesDetectionJobsCommandOutput}
 * @see {@link ListPiiEntitiesDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListPiiEntitiesDetectionJobsCommandOutput} for command's `response` shape.
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
export class ListPiiEntitiesDetectionJobsCommand extends $Command
  .classBuilder<
    ListPiiEntitiesDetectionJobsCommandInput,
    ListPiiEntitiesDetectionJobsCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ListPiiEntitiesDetectionJobs", {})
  .n("ComprehendClient", "ListPiiEntitiesDetectionJobsCommand")
  .sc(ListPiiEntitiesDetectionJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPiiEntitiesDetectionJobsRequest;
      output: ListPiiEntitiesDetectionJobsResponse;
    };
    sdk: {
      input: ListPiiEntitiesDetectionJobsCommandInput;
      output: ListPiiEntitiesDetectionJobsCommandOutput;
    };
  };
}
