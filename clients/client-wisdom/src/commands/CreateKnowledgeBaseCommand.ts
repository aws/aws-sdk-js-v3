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
  CreateKnowledgeBaseRequest,
  CreateKnowledgeBaseRequestFilterSensitiveLog,
  CreateKnowledgeBaseResponse,
  CreateKnowledgeBaseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateKnowledgeBaseCommand,
  serializeAws_restJson1CreateKnowledgeBaseCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface CreateKnowledgeBaseCommandInput extends CreateKnowledgeBaseRequest {}
export interface CreateKnowledgeBaseCommandOutput extends CreateKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Creates a knowledge base.</p>
 *          <note>
 *             <p>When using this API, you cannot reuse <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/Welcome.html">Amazon AppIntegrations</a>
 *         DataIntegrations with external knowledge bases such as Salesforce and ServiceNow. If you do,
 *         you'll get an <code>InvalidRequestException</code> error. </p>
 *
 *             <p>For example, you're programmatically managing your external knowledge base, and you want
 *         to add or remove one of the fields that is being ingested from Salesforce. Do the
 *         following:</p>
 *             <ol>
 *                <li>
 *                   <p>Call <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_DeleteKnowledgeBase.html">DeleteKnowledgeBase</a>.</p>
 *                </li>
 *                <li>
 *                   <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_DeleteDataIntegration.html">DeleteDataIntegration</a>.</p>
 *                </li>
 *                <li>
 *                   <p>Call <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> to recreate the DataIntegration or a create different
 *             one.</p>
 *                </li>
 *                <li>
 *                   <p>Call CreateKnowledgeBase.</p>
 *                </li>
 *             </ol>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, CreateKnowledgeBaseCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, CreateKnowledgeBaseCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new CreateKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link CreateKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 */
export class CreateKnowledgeBaseCommand extends $Command<
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
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

  constructor(readonly input: CreateKnowledgeBaseCommandInput) {
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
  ): Handler<CreateKnowledgeBaseCommandInput, CreateKnowledgeBaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKnowledgeBaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "CreateKnowledgeBaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKnowledgeBaseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateKnowledgeBaseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKnowledgeBaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateKnowledgeBaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKnowledgeBaseCommandOutput> {
    return deserializeAws_restJson1CreateKnowledgeBaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
