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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DetectPiiEntitiesRequest, DetectPiiEntitiesResponse } from "../models/models_0";
import { de_DetectPiiEntitiesCommand, se_DetectPiiEntitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetectPiiEntitiesCommand}.
 */
export interface DetectPiiEntitiesCommandInput extends DetectPiiEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link DetectPiiEntitiesCommand}.
 */
export interface DetectPiiEntitiesCommandOutput extends DetectPiiEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Inspects the input text for entities that contain personally identifiable information
 *       (PII) and returns information about them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectPiiEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectPiiEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DetectPiiEntitiesRequest
 *   Text: "STRING_VALUE", // required
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * };
 * const command = new DetectPiiEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // DetectPiiEntitiesResponse
 * //   Entities: [ // ListOfPiiEntities
 * //     { // PiiEntity
 * //       Score: Number("float"),
 * //       Type: "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "DATE_TIME" || "PASSPORT_NUMBER" || "DRIVER_ID" || "URL" || "AGE" || "USERNAME" || "PASSWORD" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "IP_ADDRESS" || "MAC_ADDRESS" || "ALL" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "IN_PERMANENT_ACCOUNT_NUMBER" || "IN_NREGA" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "CA_HEALTH_NUMBER" || "IN_AADHAAR" || "IN_VOTER_NUMBER",
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectPiiEntitiesCommandInput - {@link DetectPiiEntitiesCommandInput}
 * @returns {@link DetectPiiEntitiesCommandOutput}
 * @see {@link DetectPiiEntitiesCommandInput} for command's `input` shape.
 * @see {@link DetectPiiEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 *
 * @throws {@link UnsupportedLanguageException} (client fault)
 *  <p>Amazon Comprehend can't process the language of the input text. For custom entity
 *       recognition APIs, only English, Spanish, French, Italian, German, or Portuguese are accepted.
 *       For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class DetectPiiEntitiesCommand extends $Command<
  DetectPiiEntitiesCommandInput,
  DetectPiiEntitiesCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: DetectPiiEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectPiiEntitiesCommandInput, DetectPiiEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectPiiEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectPiiEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "DetectPiiEntities",
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
  private serialize(input: DetectPiiEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetectPiiEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectPiiEntitiesCommandOutput> {
    return de_DetectPiiEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
