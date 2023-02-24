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
  QueryAssistantRequest,
  QueryAssistantRequestFilterSensitiveLog,
  QueryAssistantResponse,
  QueryAssistantResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1QueryAssistantCommand,
  serializeAws_restJson1QueryAssistantCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface QueryAssistantCommandInput extends QueryAssistantRequest {}
export interface QueryAssistantCommandOutput extends QueryAssistantResponse, __MetadataBearer {}

/**
 * <p>Performs a manual search against the specified assistant. To retrieve recommendations for
 *       an assistant, use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, QueryAssistantCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, QueryAssistantCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new QueryAssistantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryAssistantCommandInput} for command's `input` shape.
 * @see {@link QueryAssistantCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 */
export class QueryAssistantCommand extends $Command<
  QueryAssistantCommandInput,
  QueryAssistantCommandOutput,
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

  constructor(readonly input: QueryAssistantCommandInput) {
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
  ): Handler<QueryAssistantCommandInput, QueryAssistantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, QueryAssistantCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "QueryAssistantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryAssistantRequestFilterSensitiveLog,
      outputFilterSensitiveLog: QueryAssistantResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryAssistantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1QueryAssistantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryAssistantCommandOutput> {
    return deserializeAws_restJson1QueryAssistantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
