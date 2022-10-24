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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import {
  DeleteWebhookInput,
  DeleteWebhookInputFilterSensitiveLog,
  DeleteWebhookOutput,
  DeleteWebhookOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteWebhookCommand,
  serializeAws_json1_1DeleteWebhookCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteWebhookCommandInput extends DeleteWebhookInput {}
export interface DeleteWebhookCommandOutput extends DeleteWebhookOutput, __MetadataBearer {}

/**
 * <p>Deletes a previously created webhook by name. Deleting the webhook stops AWS
 *             CodePipeline from starting a pipeline every time an external event occurs. The API
 *             returns successfully when trying to delete a webhook that is already deleted. If a
 *             deleted webhook is re-created by calling PutWebhook with the same name, it will have a
 *             different URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeleteWebhookCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeleteWebhookCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class DeleteWebhookCommand extends $Command<
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
  CodePipelineClientResolvedConfig
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
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWebhookCommandInput, DeleteWebhookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteWebhookCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "DeleteWebhookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteWebhookInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteWebhookOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteWebhookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteWebhookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteWebhookCommandOutput> {
    return deserializeAws_json1_1DeleteWebhookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
