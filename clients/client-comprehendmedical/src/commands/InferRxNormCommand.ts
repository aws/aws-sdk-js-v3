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
import { InferRxNormRequest, InferRxNormResponse } from "../models/models_0";
import { de_InferRxNormCommand, se_InferRxNormCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link InferRxNormCommand}.
 */
export interface InferRxNormCommandInput extends InferRxNormRequest {}
/**
 * @public
 *
 * The output of {@link InferRxNormCommand}.
 */
export interface InferRxNormCommandOutput extends InferRxNormResponse, __MetadataBearer {}

/**
 * @public
 * <p>InferRxNorm detects medications as entities listed in a patient record and links to the
 *       normalized concept identifiers in the RxNorm database from the National Library of Medicine.
 *       Amazon Comprehend Medical only detects medical entities in English language texts.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, InferRxNormCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, InferRxNormCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const input = { // InferRxNormRequest
 *   Text: "STRING_VALUE", // required
 * };
 * const command = new InferRxNormCommand(input);
 * const response = await client.send(command);
 * // { // InferRxNormResponse
 * //   Entities: [ // RxNormEntityList // required
 * //     { // RxNormEntity
 * //       Id: Number("int"),
 * //       Text: "STRING_VALUE",
 * //       Category: "MEDICATION",
 * //       Type: "BRAND_NAME" || "GENERIC_NAME",
 * //       Score: Number("float"),
 * //       BeginOffset: Number("int"),
 * //       EndOffset: Number("int"),
 * //       Attributes: [ // RxNormAttributeList
 * //         { // RxNormAttribute
 * //           Type: "DOSAGE" || "DURATION" || "FORM" || "FREQUENCY" || "RATE" || "ROUTE_OR_MODE" || "STRENGTH",
 * //           Score: Number("float"),
 * //           RelationshipScore: Number("float"),
 * //           Id: Number("int"),
 * //           BeginOffset: Number("int"),
 * //           EndOffset: Number("int"),
 * //           Text: "STRING_VALUE",
 * //           Traits: [ // RxNormTraitList
 * //             { // RxNormTrait
 * //               Name: "NEGATION" || "PAST_HISTORY",
 * //               Score: Number("float"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Traits: [
 * //         {
 * //           Name: "NEGATION" || "PAST_HISTORY",
 * //           Score: Number("float"),
 * //         },
 * //       ],
 * //       RxNormConcepts: [ // RxNormConceptList
 * //         { // RxNormConcept
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
 * @param InferRxNormCommandInput - {@link InferRxNormCommandInput}
 * @returns {@link InferRxNormCommandOutput}
 * @see {@link InferRxNormCommandInput} for command's `input` shape.
 * @see {@link InferRxNormCommandOutput} for command's `response` shape.
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
export class InferRxNormCommand extends $Command<
  InferRxNormCommandInput,
  InferRxNormCommandOutput,
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
  constructor(readonly input: InferRxNormCommandInput) {
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
  ): Handler<InferRxNormCommandInput, InferRxNormCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, InferRxNormCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "InferRxNormCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ComprehendMedical_20181030",
        operation: "InferRxNorm",
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
  private serialize(input: InferRxNormCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InferRxNormCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InferRxNormCommandOutput> {
    return de_InferRxNormCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
