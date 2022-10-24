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
  DeleteDocumentClassifierRequest,
  DeleteDocumentClassifierRequestFilterSensitiveLog,
  DeleteDocumentClassifierResponse,
  DeleteDocumentClassifierResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDocumentClassifierCommand,
  serializeAws_json1_1DeleteDocumentClassifierCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteDocumentClassifierCommandInput extends DeleteDocumentClassifierRequest {}
export interface DeleteDocumentClassifierCommandOutput extends DeleteDocumentClassifierResponse, __MetadataBearer {}

/**
 * <p>Deletes a previously created document classifier</p>
 *          <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted.
 *       If an active inference job is using the model, a <code>ResourceInUseException</code> will be
 *       returned.</p>
 *          <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is
 *       then removed by a background job. Once removed, the classifier disappears from your account
 *       and is no longer available for use. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DeleteDocumentClassifierCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DeleteDocumentClassifierCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DeleteDocumentClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDocumentClassifierCommandInput} for command's `input` shape.
 * @see {@link DeleteDocumentClassifierCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class DeleteDocumentClassifierCommand extends $Command<
  DeleteDocumentClassifierCommandInput,
  DeleteDocumentClassifierCommandOutput,
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

  constructor(readonly input: DeleteDocumentClassifierCommandInput) {
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
  ): Handler<DeleteDocumentClassifierCommandInput, DeleteDocumentClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDocumentClassifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DeleteDocumentClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDocumentClassifierRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDocumentClassifierResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDocumentClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDocumentClassifierCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDocumentClassifierCommandOutput> {
    return deserializeAws_json1_1DeleteDocumentClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
