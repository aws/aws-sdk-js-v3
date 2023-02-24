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
  DetectSyntaxRequest,
  DetectSyntaxRequestFilterSensitiveLog,
  DetectSyntaxResponse,
  DetectSyntaxResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetectSyntaxCommand,
  serializeAws_json1_1DetectSyntaxCommand,
} from "../protocols/Aws_json1_1";

export interface DetectSyntaxCommandInput extends DetectSyntaxRequest {}
export interface DetectSyntaxCommandOutput extends DetectSyntaxResponse, __MetadataBearer {}

/**
 * <p>Inspects text for syntax and the part of speech of words in the document. For more
 *       information, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectSyntaxCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectSyntaxCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectSyntaxCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectSyntaxCommandInput} for command's `input` shape.
 * @see {@link DetectSyntaxCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class DetectSyntaxCommand extends $Command<
  DetectSyntaxCommandInput,
  DetectSyntaxCommandOutput,
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

  constructor(readonly input: DetectSyntaxCommandInput) {
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
  ): Handler<DetectSyntaxCommandInput, DetectSyntaxCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DetectSyntaxCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectSyntaxCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectSyntaxRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectSyntaxResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectSyntaxCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectSyntaxCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectSyntaxCommandOutput> {
    return deserializeAws_json1_1DetectSyntaxCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
