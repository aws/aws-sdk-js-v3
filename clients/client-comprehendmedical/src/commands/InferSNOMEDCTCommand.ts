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
import { InferSNOMEDCTRequest, InferSNOMEDCTResponse } from "../models/models_0";
import { de_InferSNOMEDCTCommand, se_InferSNOMEDCTCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InferSNOMEDCTCommand}.
 */
export interface InferSNOMEDCTCommandInput extends InferSNOMEDCTRequest {}
/**
 * @public
 *
 * The output of {@link InferSNOMEDCTCommand}.
 */
export interface InferSNOMEDCTCommandOutput extends InferSNOMEDCTResponse, __MetadataBearer {}

/**
 * <p>
 *       InferSNOMEDCT detects possible medical concepts as entities and links them to codes from the Systematized Nomenclature of Medicine, Clinical Terms (SNOMED-CT) ontology</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, InferSNOMEDCTCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, InferSNOMEDCTCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const input = { // InferSNOMEDCTRequest
 *   Text: "STRING_VALUE", // required
 * };
 * const command = new InferSNOMEDCTCommand(input);
 * const response = await client.send(command);
 * // { // InferSNOMEDCTResponse
 * //   Entities: [ // SNOMEDCTEntityList // required
 * //     { // SNOMEDCTEntity
 * //       Id: Number("int"),
 * //       Text: "STRING_VALUE",
 * //       Category: "MEDICAL_CONDITION" || "ANATOMY" || "TEST_TREATMENT_PROCEDURE",
 * //       Type: "DX_NAME" || "TEST_NAME" || "PROCEDURE_NAME" || "TREATMENT_NAME",
 * //       Score: Number("float"),
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //       Attributes: [ // SNOMEDCTAttributeList
 * //         { // SNOMEDCTAttribute
 * //           Category: "MEDICAL_CONDITION" || "ANATOMY" || "TEST_TREATMENT_PROCEDURE",
 * //           Type: "ACUITY" || "QUALITY" || "DIRECTION" || "SYSTEM_ORGAN_SITE" || "TEST_VALUE" || "TEST_UNIT",
 * //           Score: Number("float"),
 * //           RelationshipScore: Number("float"),
 * //           RelationshipType: "ACUITY" || "QUALITY" || "TEST_VALUE" || "TEST_UNITS" || "DIRECTION" || "SYSTEM_ORGAN_SITE" || "TEST_UNIT",
 * //           Id: Number("int"),
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           Text: "STRING_VALUE",
 * //           Traits: [ // SNOMEDCTTraitList
 * //             { // SNOMEDCTTrait
 * //               Name: "NEGATION" || "DIAGNOSIS" || "SIGN" || "SYMPTOM" || "PERTAINS_TO_FAMILY" || "HYPOTHETICAL" || "LOW_CONFIDENCE" || "PAST_HISTORY" || "FUTURE",
 * //               Score: Number("float"),
 * //             },
 * //           ],
 * //           SNOMEDCTConcepts: [ // SNOMEDCTConceptList
 * //             { // SNOMEDCTConcept
 * //               Description: "STRING_VALUE",
 * //               Code: "STRING_VALUE",
 * //               Score: Number("float"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Traits: [
 * //         {
 * //           Name: "NEGATION" || "DIAGNOSIS" || "SIGN" || "SYMPTOM" || "PERTAINS_TO_FAMILY" || "HYPOTHETICAL" || "LOW_CONFIDENCE" || "PAST_HISTORY" || "FUTURE",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //       SNOMEDCTConcepts: [
 * //         {
 * //           Description: "STRING_VALUE",
 * //           Code: "STRING_VALUE",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   PaginationToken: "STRING_VALUE",
 * //   ModelVersion: "STRING_VALUE",
 * //   SNOMEDCTDetails: { // SNOMEDCTDetails
 * //     Edition: "STRING_VALUE",
 * //     Language: "STRING_VALUE",
 * //     VersionDate: "STRING_VALUE",
 * //   },
 * //   Characters: { // Characters
 * //     OriginalTextCharacters: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param InferSNOMEDCTCommandInput - {@link InferSNOMEDCTCommandInput}
 * @returns {@link InferSNOMEDCTCommandOutput}
 * @see {@link InferSNOMEDCTCommandInput} for command's `input` shape.
 * @see {@link InferSNOMEDCTCommandOutput} for command's `response` shape.
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
export class InferSNOMEDCTCommand extends $Command
  .classBuilder<
    InferSNOMEDCTCommandInput,
    InferSNOMEDCTCommandOutput,
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
  .s("ComprehendMedical_20181030", "InferSNOMEDCT", {})
  .n("ComprehendMedicalClient", "InferSNOMEDCTCommand")
  .f(void 0, void 0)
  .ser(se_InferSNOMEDCTCommand)
  .de(de_InferSNOMEDCTCommand)
  .build() {}
