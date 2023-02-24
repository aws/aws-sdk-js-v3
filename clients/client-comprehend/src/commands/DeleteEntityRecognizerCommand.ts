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
  DeleteEntityRecognizerRequest,
  DeleteEntityRecognizerRequestFilterSensitiveLog,
  DeleteEntityRecognizerResponse,
  DeleteEntityRecognizerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteEntityRecognizerCommand,
  serializeAws_json1_1DeleteEntityRecognizerCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteEntityRecognizerCommandInput extends DeleteEntityRecognizerRequest {}
export interface DeleteEntityRecognizerCommandOutput extends DeleteEntityRecognizerResponse, __MetadataBearer {}

/**
 * <p>Deletes an entity recognizer.</p>
 *          <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted.
 *       If an active inference job is using the model, a <code>ResourceInUseException</code> will be
 *       returned.</p>
 *          <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is
 *       then removed by a background job. Once removed, the recognizer disappears from your account
 *       and is no longer available for use. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DeleteEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DeleteEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DeleteEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link DeleteEntityRecognizerCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class DeleteEntityRecognizerCommand extends $Command<
  DeleteEntityRecognizerCommandInput,
  DeleteEntityRecognizerCommandOutput,
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

  constructor(readonly input: DeleteEntityRecognizerCommandInput) {
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
  ): Handler<DeleteEntityRecognizerCommandInput, DeleteEntityRecognizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEntityRecognizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DeleteEntityRecognizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEntityRecognizerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteEntityRecognizerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEntityRecognizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteEntityRecognizerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEntityRecognizerCommandOutput> {
    return deserializeAws_json1_1DeleteEntityRecognizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
