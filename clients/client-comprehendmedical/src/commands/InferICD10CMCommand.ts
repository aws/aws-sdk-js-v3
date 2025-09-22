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
import { InferICD10CMRequest, InferICD10CMResponse } from "../models/models_0";
import { InferICD10CM } from "../schemas/schemas_1_Infer";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InferICD10CMCommand}.
 */
export interface InferICD10CMCommandInput extends InferICD10CMRequest {}
/**
 * @public
 *
 * The output of {@link InferICD10CMCommand}.
 */
export interface InferICD10CMCommandOutput extends InferICD10CMResponse, __MetadataBearer {}

/**
 * <p>InferICD10CM detects medical conditions as entities listed in a patient record and links
 *       those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the
 *       Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in
 *       English language texts.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, InferICD10CMCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, InferICD10CMCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * // import type { ComprehendMedicalClientConfig } from "@aws-sdk/client-comprehendmedical";
 * const config = {}; // type is ComprehendMedicalClientConfig
 * const client = new ComprehendMedicalClient(config);
 * const input = { // InferICD10CMRequest
 *   Text: "STRING_VALUE", // required
 * };
 * const command = new InferICD10CMCommand(input);
 * const response = await client.send(command);
 * // { // InferICD10CMResponse
 * //   Entities: [ // ICD10CMEntityList // required
 * //     { // ICD10CMEntity
 * //       Id: Number("int"),
 * //       Text: "STRING_VALUE",
 * //       Category: "MEDICAL_CONDITION",
 * //       Type: "DX_NAME" || "TIME_EXPRESSION",
 * //       Score: Number("float"),
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //       Attributes: [ // ICD10CMAttributeList
 * //         { // ICD10CMAttribute
 * //           Type: "ACUITY" || "DIRECTION" || "SYSTEM_ORGAN_SITE" || "QUALITY" || "QUANTITY" || "TIME_TO_DX_NAME" || "TIME_EXPRESSION",
 * //           Score: Number("float"),
 * //           RelationshipScore: Number("float"),
 * //           Id: Number("int"),
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           Text: "STRING_VALUE",
 * //           Traits: [ // ICD10CMTraitList
 * //             { // ICD10CMTrait
 * //               Name: "NEGATION" || "DIAGNOSIS" || "SIGN" || "SYMPTOM" || "PERTAINS_TO_FAMILY" || "HYPOTHETICAL" || "LOW_CONFIDENCE",
 * //               Score: Number("float"),
 * //             },
 * //           ],
 * //           Category: "DX_NAME" || "TIME_EXPRESSION",
 * //           RelationshipType: "OVERLAP" || "SYSTEM_ORGAN_SITE" || "QUALITY",
 * //         },
 * //       ],
 * //       Traits: [
 * //         {
 * //           Name: "NEGATION" || "DIAGNOSIS" || "SIGN" || "SYMPTOM" || "PERTAINS_TO_FAMILY" || "HYPOTHETICAL" || "LOW_CONFIDENCE",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //       ICD10CMConcepts: [ // ICD10CMConceptList
 * //         { // ICD10CMConcept
 * //           Description: "STRING_VALUE",
 * //           Code: "STRING_VALUE",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   PaginationToken: "STRING_VALUE",
 * //   ModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param InferICD10CMCommandInput - {@link InferICD10CMCommandInput}
 * @returns {@link InferICD10CMCommandOutput}
 * @see {@link InferICD10CMCommandInput} for command's `input` shape.
 * @see {@link InferICD10CMCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class InferICD10CMCommand extends $Command
  .classBuilder<
    InferICD10CMCommandInput,
    InferICD10CMCommandOutput,
    ComprehendMedicalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendMedicalClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComprehendMedical_20181030", "InferICD10CM", {})
  .n("ComprehendMedicalClient", "InferICD10CMCommand")
  .sc(InferICD10CM)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InferICD10CMRequest;
      output: InferICD10CMResponse;
    };
    sdk: {
      input: InferICD10CMCommandInput;
      output: InferICD10CMCommandOutput;
    };
  };
}
