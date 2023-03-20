// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ComprehendMedicalClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComprehendMedicalClient";
import { DetectEntitiesRequest, DetectEntitiesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DetectEntitiesCommand,
  serializeAws_json1_1DetectEntitiesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DetectEntitiesCommand}.
 */
export interface DetectEntitiesCommandInput extends DetectEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link DetectEntitiesCommand}.
 */
export interface DetectEntitiesCommandOutput extends DetectEntitiesResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p>
 *          <p> Inspects the clinical text for a variety of medical entities and returns specific
 *       information about them such as entity category, location, and confidence score on that
 *       information .</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DetectEntitiesCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DetectEntitiesCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DetectEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DetectEntitiesCommandInput - {@link DetectEntitiesCommandInput}
 * @returns {@link DetectEntitiesCommandOutput}
 * @see {@link DetectEntitiesCommandInput} for command's `input` shape.
 * @see {@link DetectEntitiesCommandOutput} for command's `response` shape.
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
 *  <p> The Comprehend Medical; service is temporarily unavailable. Please wait and then retry your request.
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
 *
 */
export class DetectEntitiesCommand extends $Command<
  DetectEntitiesCommandInput,
  DetectEntitiesCommandOutput,
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
  constructor(readonly input: DetectEntitiesCommandInput) {
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
  ): Handler<DetectEntitiesCommandInput, DetectEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendMedicalClient";
    const commandName = "DetectEntitiesCommand";
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
  private serialize(input: DetectEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectEntitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectEntitiesCommandOutput> {
    return deserializeAws_json1_1DetectEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
