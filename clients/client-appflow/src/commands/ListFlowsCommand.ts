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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import {
  ListFlowsRequest,
  ListFlowsRequestFilterSensitiveLog,
  ListFlowsResponse,
  ListFlowsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListFlowsCommand,
  serializeAws_restJson1ListFlowsCommand,
} from "../protocols/Aws_restJson1";

export interface ListFlowsCommandInput extends ListFlowsRequest {}
export interface ListFlowsCommandOutput extends ListFlowsResponse, __MetadataBearer {}

/**
 * <p> Lists all of the flows associated with your account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListFlowsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListFlowsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new ListFlowsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlowsCommandInput} for command's `input` shape.
 * @see {@link ListFlowsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 */
export class ListFlowsCommand extends $Command<
  ListFlowsCommandInput,
  ListFlowsCommandOutput,
  AppflowClientResolvedConfig
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

  constructor(readonly input: ListFlowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFlowsCommandInput, ListFlowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFlowsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "ListFlowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFlowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFlowsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFlowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFlowsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFlowsCommandOutput> {
    return deserializeAws_restJson1ListFlowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
