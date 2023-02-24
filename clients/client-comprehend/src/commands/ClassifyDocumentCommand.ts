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
  ClassifyDocumentRequest,
  ClassifyDocumentRequestFilterSensitiveLog,
  ClassifyDocumentResponse,
  ClassifyDocumentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ClassifyDocumentCommand,
  serializeAws_json1_1ClassifyDocumentCommand,
} from "../protocols/Aws_json1_1";

export interface ClassifyDocumentCommandInput extends ClassifyDocumentRequest {}
export interface ClassifyDocumentCommandOutput extends ClassifyDocumentResponse, __MetadataBearer {}

/**
 * <p>Creates a new document classification request to analyze a single document in real-time,
 *       using a previously created and trained custom model and an endpoint.</p>
 *          <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p>
 *          <p>If the system detects errors while processing a page in the input document,
 *       the API response includes an entry in <code>Errors</code> that describes the errors.</p>
 *          <p>If the system detects a document-level error in your input document, the API returns an
 *       <code>InvalidRequestException</code> error response.
 *       For details about this exception, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html">
 *         Errors in semi-structured documents</a> in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ClassifyDocumentCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ClassifyDocumentCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ClassifyDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ClassifyDocumentCommandInput} for command's `input` shape.
 * @see {@link ClassifyDocumentCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class ClassifyDocumentCommand extends $Command<
  ClassifyDocumentCommandInput,
  ClassifyDocumentCommandOutput,
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

  constructor(readonly input: ClassifyDocumentCommandInput) {
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
  ): Handler<ClassifyDocumentCommandInput, ClassifyDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ClassifyDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ClassifyDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ClassifyDocumentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ClassifyDocumentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ClassifyDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ClassifyDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClassifyDocumentCommandOutput> {
    return deserializeAws_json1_1ClassifyDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
