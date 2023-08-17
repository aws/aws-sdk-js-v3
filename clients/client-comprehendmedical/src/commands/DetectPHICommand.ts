// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { DetectPHIRequest, DetectPHIResponse } from "../models/models_0";
import { de_DetectPHICommand, se_DetectPHICommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectPHICommand}.
 */
export interface DetectPHICommandInput extends DetectPHIRequest {}
/**
 * @public
 *
 * The output of {@link DetectPHICommand}.
 */
export interface DetectPHICommandOutput extends DetectPHIResponse, __MetadataBearer {}

/**
 * @public
 * <p>Inspects the clinical text for protected health information (PHI) entities and returns
 *       the entity category, location, and confidence score for each entity. Amazon Comprehend Medical
 *       only detects entities in English language texts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DetectPHICommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DetectPHICommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const input = { // DetectPHIRequest
 *   Text: "STRING_VALUE", // required
 * };
 * const command = new DetectPHICommand(input);
 * const response = await client.send(command);
 * // { // DetectPHIResponse
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
 * //   PaginationToken: "STRING_VALUE",
 * //   ModelVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DetectPHICommandInput - {@link DetectPHICommandInput}
 * @returns {@link DetectPHICommandOutput}
 * @see {@link DetectPHICommandInput} for command's `input` shape.
 * @see {@link DetectPHICommandOutput} for command's `response` shape.
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
 */
export class DetectPHICommand extends $Command<
  DetectPHICommandInput,
  DetectPHICommandOutput,
  ComprehendMedicalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DetectPHICommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendMedicalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectPHICommandInput, DetectPHICommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DetectPHICommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "DetectPHICommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DetectPHICommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectPHICommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectPHICommandOutput> {
    return de_DetectPHICommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
