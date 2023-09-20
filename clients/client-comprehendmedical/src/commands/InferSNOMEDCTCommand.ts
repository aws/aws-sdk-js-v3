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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { InferSNOMEDCTRequest, InferSNOMEDCTResponse } from "../models/models_0";
import { de_InferSNOMEDCTCommand, se_InferSNOMEDCTCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 */
export class InferSNOMEDCTCommand extends $Command<
  InferSNOMEDCTCommandInput,
  InferSNOMEDCTCommandOutput,
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
  constructor(readonly input: InferSNOMEDCTCommandInput) {
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
  ): Handler<InferSNOMEDCTCommandInput, InferSNOMEDCTCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InferSNOMEDCTCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "InferSNOMEDCTCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ComprehendMedical_20181030",
        operation: "InferSNOMEDCT",
      },
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
  private serialize(input: InferSNOMEDCTCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InferSNOMEDCTCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InferSNOMEDCTCommandOutput> {
    return de_InferSNOMEDCTCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
