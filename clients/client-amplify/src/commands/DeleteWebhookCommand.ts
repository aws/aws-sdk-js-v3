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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import {
  DeleteWebhookRequest,
  DeleteWebhookRequestFilterSensitiveLog,
  DeleteWebhookResult,
  DeleteWebhookResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteWebhookCommand,
  serializeAws_restJson1DeleteWebhookCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteWebhookCommandInput extends DeleteWebhookRequest {}
export interface DeleteWebhookCommandOutput extends DeleteWebhookResult, __MetadataBearer {}

/**
 * <p> Deletes a webhook. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteWebhookCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteWebhookCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 */
export class DeleteWebhookCommand extends $Command<
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
  AmplifyClientResolvedConfig
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

  constructor(readonly input: DeleteWebhookCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWebhookCommandInput, DeleteWebhookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteWebhookCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "DeleteWebhookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWebhookRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteWebhookResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteWebhookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWebhookCommandOutput> {
    return deserializeAws_restJson1DeleteWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
