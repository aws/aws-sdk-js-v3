// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetectEntitiesV2Request, DetectEntitiesV2Response } from "../models/models_0";
import { de_DetectEntitiesV2Command, se_DetectEntitiesV2Command } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectEntitiesV2Command}.
 */
export interface DetectEntitiesV2CommandInput extends DetectEntitiesV2Request {}
/**
 * @public
 *
 * The output of {@link DetectEntitiesV2Command}.
 */
export interface DetectEntitiesV2CommandOutput extends DetectEntitiesV2Response, __MetadataBearer {}

/**
 * <p>Inspects the clinical text for a variety of medical entities and returns specific
 *       information about them such as entity category, location, and confidence score on that
 *       information. Amazon Comprehend Medical only detects medical entities in English language
 *       texts.</p>
 *          <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a>
 *       operation. This new action uses a different model for determining the entities in your medical
 *       text and changes the way that some entities are returned in the output. You should use the
 *         <code>DetectEntitiesV2</code> operation in all new applications.</p>
 *
 *          <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and
 *         <code>Direction</code> entities as attributes instead of types. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DetectEntitiesV2Command } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DetectEntitiesV2Command } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const input = { // DetectEntitiesV2Request
 *   Text: "STRING_VALUE", // required
 * };
 * const command = new DetectEntitiesV2Command(input);
 * const response = await client.send(command);
 * // { // DetectEntitiesV2Response
 * //   Entities: [ // EntityList // required
 * //     { // Entity
 * //       Id: Number("int"),
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //       Score: Number("float"),
 * //       Text: "STRING_VALUE",
 * //       Category: "MEDICATION" || "MEDICAL_CONDITION" || "PROTECTED_HEALTH_INFORMATION" || "TEST_TREATMENT_PROCEDURE" || "ANATOMY" || "TIME_EXPRESSION" || "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
 * //       Type: "NAME" || "DX_NAME" || "DOSAGE" || "ROUTE_OR_MODE" || "FORM" || "FREQUENCY" || "DURATION" || "GENERIC_NAME" || "BRAND_NAME" || "STRENGTH" || "RATE" || "ACUITY" || "TEST_NAME" || "TEST_VALUE" || "TEST_UNITS" || "TEST_UNIT" || "PROCEDURE_NAME" || "TREATMENT_NAME" || "DATE" || "AGE" || "CONTACT_POINT" || "PHONE_OR_FAX" || "EMAIL" || "IDENTIFIER" || "ID" || "URL" || "ADDRESS" || "PROFESSION" || "SYSTEM_ORGAN_SITE" || "DIRECTION" || "QUALITY" || "QUANTITY" || "TIME_EXPRESSION" || "TIME_TO_MEDICATION_NAME" || "TIME_TO_DX_NAME" || "TIME_TO_TEST_NAME" || "TIME_TO_PROCEDURE_NAME" || "TIME_TO_TREATMENT_NAME" || "AMOUNT" || "GENDER" || "RACE_ETHNICITY" || "ALLERGIES" || "TOBACCO_USE" || "ALCOHOL_CONSUMPTION" || "REC_DRUG_USE",
 * //       Traits: [ // TraitList
 * //         { // Trait
 * //           Name: "SIGN" || "SYMPTOM" || "DIAGNOSIS" || "NEGATION" || "PERTAINS_TO_FAMILY" || "HYPOTHETICAL" || "LOW_CONFIDENCE" || "PAST_HISTORY" || "FUTURE",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //       Attributes: [ // AttributeList
 * //         { // Attribute
 * //           Type: "NAME" || "DX_NAME" || "DOSAGE" || "ROUTE_OR_MODE" || "FORM" || "FREQUENCY" || "DURATION" || "GENERIC_NAME" || "BRAND_NAME" || "STRENGTH" || "RATE" || "ACUITY" || "TEST_NAME" || "TEST_VALUE" || "TEST_UNITS" || "TEST_UNIT" || "PROCEDURE_NAME" || "TREATMENT_NAME" || "DATE" || "AGE" || "CONTACT_POINT" || "PHONE_OR_FAX" || "EMAIL" || "IDENTIFIER" || "ID" || "URL" || "ADDRESS" || "PROFESSION" || "SYSTEM_ORGAN_SITE" || "DIRECTION" || "QUALITY" || "QUANTITY" || "TIME_EXPRESSION" || "TIME_TO_MEDICATION_NAME" || "TIME_TO_DX_NAME" || "TIME_TO_TEST_NAME" || "TIME_TO_PROCEDURE_NAME" || "TIME_TO_TREATMENT_NAME" || "AMOUNT" || "GENDER" || "RACE_ETHNICITY" || "ALLERGIES" || "TOBACCO_USE" || "ALCOHOL_CONSUMPTION" || "REC_DRUG_USE",
 * //           Score: Number("float"),
 * //           RelationshipScore: Number("float"),
 * //           RelationshipType: "EVERY" || "WITH_DOSAGE" || "ADMINISTERED_VIA" || "FOR" || "NEGATIVE" || "OVERLAP" || "DOSAGE" || "ROUTE_OR_MODE" || "FORM" || "FREQUENCY" || "DURATION" || "STRENGTH" || "RATE" || "ACUITY" || "TEST_VALUE" || "TEST_UNITS" || "TEST_UNIT" || "DIRECTION" || "SYSTEM_ORGAN_SITE" || "AMOUNT" || "USAGE" || "QUALITY",
 * //           Id: Number("int"),
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           Text: "STRING_VALUE",
 * //           Category: "MEDICATION" || "MEDICAL_CONDITION" || "PROTECTED_HEALTH_INFORMATION" || "TEST_TREATMENT_PROCEDURE" || "ANATOMY" || "TIME_EXPRESSION" || "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
 * //           Traits: [
 * //             {
 * //               Name: "SIGN" || "SYMPTOM" || "DIAGNOSIS" || "NEGATION" || "PERTAINS_TO_FAMILY" || "HYPOTHETICAL" || "LOW_CONFIDENCE" || "PAST_HISTORY" || "FUTURE",
 * //               Score: Number("float"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   UnmappedAttributes: [ // UnmappedAttributeList
 * //     { // UnmappedAttribute
 * //       Type: "MEDICATION" || "MEDICAL_CONDITION" || "PROTECTED_HEALTH_INFORMATION" || "TEST_TREATMENT_PROCEDURE" || "ANATOMY" || "TIME_EXPRESSION" || "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
 * //       Attribute: {
 * //         Type: "NAME" || "DX_NAME" || "DOSAGE" || "ROUTE_OR_MODE" || "FORM" || "FREQUENCY" || "DURATION" || "GENERIC_NAME" || "BRAND_NAME" || "STRENGTH" || "RATE" || "ACUITY" || "TEST_NAME" || "TEST_VALUE" || "TEST_UNITS" || "TEST_UNIT" || "PROCEDURE_NAME" || "TREATMENT_NAME" || "DATE" || "AGE" || "CONTACT_POINT" || "PHONE_OR_FAX" || "EMAIL" || "IDENTIFIER" || "ID" || "URL" || "ADDRESS" || "PROFESSION" || "SYSTEM_ORGAN_SITE" || "DIRECTION" || "QUALITY" || "QUANTITY" || "TIME_EXPRESSION" || "TIME_TO_MEDICATION_NAME" || "TIME_TO_DX_NAME" || "TIME_TO_TEST_NAME" || "TIME_TO_PROCEDURE_NAME" || "TIME_TO_TREATMENT_NAME" || "AMOUNT" || "GENDER" || "RACE_ETHNICITY" || "ALLERGIES" || "TOBACCO_USE" || "ALCOHOL_CONSUMPTION" || "REC_DRUG_USE",
 * //         Score: Number("float"),
 * //         RelationshipScore: Number("float"),
 * //         RelationshipType: "EVERY" || "WITH_DOSAGE" || "ADMINISTERED_VIA" || "FOR" || "NEGATIVE" || "OVERLAP" || "DOSAGE" || "ROUTE_OR_MODE" || "FORM" || "FREQUENCY" || "DURATION" || "STRENGTH" || "RATE" || "ACUITY" || "TEST_VALUE" || "TEST_UNITS" || "TEST_UNIT" || "DIRECTION" || "SYSTEM_ORGAN_SITE" || "AMOUNT" || "USAGE" || "QUALITY",
 * //         Id: Number("int"),
 * //         BeginOffset: Number("int"),
 * //         EndOffset: Number("int"),
 * //         Text: "STRING_VALUE",
 * //         Category: "MEDICATION" || "MEDICAL_CONDITION" || "PROTECTED_HEALTH_INFORMATION" || "TEST_TREATMENT_PROCEDURE" || "ANATOMY" || "TIME_EXPRESSION" || "BEHAVIORAL_ENVIRONMENTAL_SOCIAL",
 * //         Traits: "<TraitList>",
 * //       },
 * //     },
 * //   ],
 * //   PaginationToken: "STRING_VALUE",
 * //   ModelVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DetectEntitiesV2CommandInput - {@link DetectEntitiesV2CommandInput}
 * @returns {@link DetectEntitiesV2CommandOutput}
 * @see {@link DetectEntitiesV2CommandInput} for command's `input` shape.
 * @see {@link DetectEntitiesV2CommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for ComprehendMedicalClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal server error occurred. Retry your request. </p>
 *
 * @throws {@link InvalidEncodingException} (client fault)
 *  <p> The input text was not in valid UTF-8 character encoding. Check your text then retry your
 *       request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is invalid. Check your request to determine why it's invalid
 *       and then retry the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p> The Amazon Comprehend Medical service is temporarily unavailable. Please wait and then retry your request.
 *     </p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p> The size of the text you submitted exceeds the size limit. Reduce the size of the text or
 *       use a smaller document and then retry your request. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again. Contact customer support for more information about a service
 *       limit increase. </p>
 *
 * @throws {@link ComprehendMedicalServiceException}
 * <p>Base exception class for all service exceptions from ComprehendMedical service.</p>
 *
 * @public
 */
export class DetectEntitiesV2Command extends $Command
  .classBuilder<
    DetectEntitiesV2CommandInput,
    DetectEntitiesV2CommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ComprehendMedical_20181030", "DetectEntitiesV2", {})
  .n("ComprehendMedicalClient", "DetectEntitiesV2Command")
  .f(void 0, void 0)
  .ser(se_DetectEntitiesV2Command)
  .de(de_DetectEntitiesV2Command)
  .build() {}
