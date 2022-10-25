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
  DeleteKnowledgeBaseRequest,
  DeleteKnowledgeBaseRequestFilterSensitiveLog,
  DeleteKnowledgeBaseResponse,
  DeleteKnowledgeBaseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteKnowledgeBaseCommand,
  serializeAws_restJson1DeleteKnowledgeBaseCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface DeleteKnowledgeBaseCommandInput extends DeleteKnowledgeBaseRequest {}
export interface DeleteKnowledgeBaseCommandOutput extends DeleteKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Deletes the knowledge base.</p>
 *          <note>
 *             <p>When you use this API to delete an external knowledge base such as Salesforce or
 *         ServiceNow, you must also delete the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a> DataIntegration.
 *         This is because you can't reuse the DataIntegration after it's been associated with an
 *         external knowledge base. However, you can delete and recreate it. See <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a> and <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> in the <i>Amazon AppIntegrations API
 *         Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, DeleteKnowledgeBaseCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, DeleteKnowledgeBaseCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new DeleteKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link DeleteKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 */
export class DeleteKnowledgeBaseCommand extends $Command<
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
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

  constructor(readonly input: DeleteKnowledgeBaseCommandInput) {
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
  ): Handler<DeleteKnowledgeBaseCommandInput, DeleteKnowledgeBaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteKnowledgeBaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "DeleteKnowledgeBaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteKnowledgeBaseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteKnowledgeBaseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteKnowledgeBaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteKnowledgeBaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteKnowledgeBaseCommandOutput> {
    return deserializeAws_restJson1DeleteKnowledgeBaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
