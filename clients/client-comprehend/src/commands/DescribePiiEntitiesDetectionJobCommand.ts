// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePiiEntitiesDetectionJobRequest, DescribePiiEntitiesDetectionJobResponse } from "../models/models_0";
import {
  de_DescribePiiEntitiesDetectionJobCommand,
  se_DescribePiiEntitiesDetectionJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePiiEntitiesDetectionJobCommand}.
 */
export interface DescribePiiEntitiesDetectionJobCommandInput extends DescribePiiEntitiesDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribePiiEntitiesDetectionJobCommand}.
 */
export interface DescribePiiEntitiesDetectionJobCommandOutput
  extends DescribePiiEntitiesDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Gets the properties associated with a PII entities detection job. For example, you can use
 *       this operation to get the job status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribePiiEntitiesDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribePiiEntitiesDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DescribePiiEntitiesDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribePiiEntitiesDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribePiiEntitiesDetectionJobResponse
 * //   PiiEntitiesDetectionJobProperties: { // PiiEntitiesDetectionJobProperties
 * //     JobId: "STRING_VALUE",
 * //     JobArn: "STRING_VALUE",
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //     Message: "STRING_VALUE",
 * //     SubmitTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     InputDataConfig: { // InputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 * //       DocumentReaderConfig: { // DocumentReaderConfig
 * //         DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 * //         DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 * //         FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 * //           "TABLES" || "FORMS",
 * //         ],
 * //       },
 * //     },
 * //     OutputDataConfig: { // PiiOutputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     RedactionConfig: { // RedactionConfig
 * //       PiiEntityTypes: [ // ListOfPiiEntityTypes
 * //         "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "DATE_TIME" || "PASSPORT_NUMBER" || "DRIVER_ID" || "URL" || "AGE" || "USERNAME" || "PASSWORD" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "IP_ADDRESS" || "MAC_ADDRESS" || "ALL" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "IN_PERMANENT_ACCOUNT_NUMBER" || "IN_NREGA" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "CA_HEALTH_NUMBER" || "IN_AADHAAR" || "IN_VOTER_NUMBER",
 * //       ],
 * //       MaskMode: "MASK" || "REPLACE_WITH_PII_ENTITY_TYPE",
 * //       MaskCharacter: "STRING_VALUE",
 * //     },
 * //     LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     Mode: "ONLY_REDACTION" || "ONLY_OFFSETS",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePiiEntitiesDetectionJobCommandInput - {@link DescribePiiEntitiesDetectionJobCommandInput}
 * @returns {@link DescribePiiEntitiesDetectionJobCommandOutput}
 * @see {@link DescribePiiEntitiesDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribePiiEntitiesDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The specified job was not found. Check the job ID and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 * @public
 */
export class DescribePiiEntitiesDetectionJobCommand extends $Command
  .classBuilder<
    DescribePiiEntitiesDetectionJobCommandInput,
    DescribePiiEntitiesDetectionJobCommandOutput,
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
  .s("Comprehend_20171127", "DescribePiiEntitiesDetectionJob", {})
  .n("ComprehendClient", "DescribePiiEntitiesDetectionJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribePiiEntitiesDetectionJobCommand)
  .de(de_DescribePiiEntitiesDetectionJobCommand)
  .build() {}
