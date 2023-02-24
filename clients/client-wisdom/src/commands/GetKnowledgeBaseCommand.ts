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
  GetKnowledgeBaseRequest,
  GetKnowledgeBaseRequestFilterSensitiveLog,
  GetKnowledgeBaseResponse,
  GetKnowledgeBaseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetKnowledgeBaseCommand,
  serializeAws_restJson1GetKnowledgeBaseCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface GetKnowledgeBaseCommandInput extends GetKnowledgeBaseRequest {}
export interface GetKnowledgeBaseCommandOutput extends GetKnowledgeBaseResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the knowledge base.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, GetKnowledgeBaseCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, GetKnowledgeBaseCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new GetKnowledgeBaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetKnowledgeBaseCommandInput} for command's `input` shape.
 * @see {@link GetKnowledgeBaseCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 */
export class GetKnowledgeBaseCommand extends $Command<
  GetKnowledgeBaseCommandInput,
  GetKnowledgeBaseCommandOutput,
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

  constructor(readonly input: GetKnowledgeBaseCommandInput) {
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
  ): Handler<GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetKnowledgeBaseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "GetKnowledgeBaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetKnowledgeBaseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetKnowledgeBaseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetKnowledgeBaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetKnowledgeBaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetKnowledgeBaseCommandOutput> {
    return deserializeAws_restJson1GetKnowledgeBaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
