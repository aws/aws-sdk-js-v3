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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DetectEntitiesRequest,
  DetectEntitiesRequestFilterSensitiveLog,
  DetectEntitiesResponse,
  DetectEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetectEntitiesCommand,
  serializeAws_json1_1DetectEntitiesCommand,
} from "../protocols/Aws_json1_1";

export interface DetectEntitiesCommandInput extends DetectEntitiesRequest {}
export interface DetectEntitiesCommandOutput extends DetectEntitiesResponse, __MetadataBearer {}

/**
 * <p>Detects named entities in input text when you use the pre-trained model.
 *       Detects custom entities if you have a custom entity recognition model. </p>
 *          <p>
 *       When detecting named entities using the pre-trained model, use plain text as the input.
 *       For more information about named entities, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p>
 *          <p>When you use a custom entity recognition model,
 *       you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p>
 *          <p>If the system detects errors while processing a page in the input document, the API response
 *        includes an entry in <code>Errors</code> for each error. </p>
 *          <p>If the system detects a document-level error in your input document, the API returns an
 *        <code>InvalidRequestException</code> error response.
 *       For details about this exception, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html">
 *         Errors in semi-structured documents</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectEntitiesCommandInput} for command's `input` shape.
 * @see {@link DetectEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class DetectEntitiesCommand extends $Command<
  DetectEntitiesCommandInput,
  DetectEntitiesCommandOutput,
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
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectEntitiesCommandInput, DetectEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectEntitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectEntitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectEntitiesCommandOutput> {
    return deserializeAws_json1_1DetectEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
