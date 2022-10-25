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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import {
  ListResolversByFunctionRequest,
  ListResolversByFunctionRequestFilterSensitiveLog,
  ListResolversByFunctionResponse,
  ListResolversByFunctionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListResolversByFunctionCommand,
  serializeAws_restJson1ListResolversByFunctionCommand,
} from "../protocols/Aws_restJson1";

export interface ListResolversByFunctionCommandInput extends ListResolversByFunctionRequest {}
export interface ListResolversByFunctionCommandOutput extends ListResolversByFunctionResponse, __MetadataBearer {}

/**
 * <p>List the resolvers that are associated with a specific function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListResolversByFunctionCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListResolversByFunctionCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new ListResolversByFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolversByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListResolversByFunctionCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class ListResolversByFunctionCommand extends $Command<
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
  AppSyncClientResolvedConfig
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

  constructor(readonly input: ListResolversByFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResolversByFunctionCommandInput, ListResolversByFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResolversByFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "ListResolversByFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResolversByFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListResolversByFunctionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResolversByFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListResolversByFunctionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResolversByFunctionCommandOutput> {
    return deserializeAws_restJson1ListResolversByFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
