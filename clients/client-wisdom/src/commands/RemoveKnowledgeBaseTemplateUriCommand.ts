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
  RemoveKnowledgeBaseTemplateUriRequest,
  RemoveKnowledgeBaseTemplateUriRequestFilterSensitiveLog,
  RemoveKnowledgeBaseTemplateUriResponse,
  RemoveKnowledgeBaseTemplateUriResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand,
  serializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface RemoveKnowledgeBaseTemplateUriCommandInput extends RemoveKnowledgeBaseTemplateUriRequest {}
export interface RemoveKnowledgeBaseTemplateUriCommandOutput
  extends RemoveKnowledgeBaseTemplateUriResponse,
    __MetadataBearer {}

/**
 * <p>Removes a URI template from a knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, RemoveKnowledgeBaseTemplateUriCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, RemoveKnowledgeBaseTemplateUriCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new RemoveKnowledgeBaseTemplateUriCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveKnowledgeBaseTemplateUriCommandInput} for command's `input` shape.
 * @see {@link RemoveKnowledgeBaseTemplateUriCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 */
export class RemoveKnowledgeBaseTemplateUriCommand extends $Command<
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
  WisdomClientResolvedConfig
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

  constructor(readonly input: RemoveKnowledgeBaseTemplateUriCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveKnowledgeBaseTemplateUriCommandInput, RemoveKnowledgeBaseTemplateUriCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveKnowledgeBaseTemplateUriCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "RemoveKnowledgeBaseTemplateUriCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveKnowledgeBaseTemplateUriRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveKnowledgeBaseTemplateUriResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RemoveKnowledgeBaseTemplateUriCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveKnowledgeBaseTemplateUriCommandOutput> {
    return deserializeAws_restJson1RemoveKnowledgeBaseTemplateUriCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
