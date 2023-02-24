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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  ListFunctionUrlConfigsRequest,
  ListFunctionUrlConfigsRequestFilterSensitiveLog,
  ListFunctionUrlConfigsResponse,
  ListFunctionUrlConfigsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListFunctionUrlConfigsCommand,
  serializeAws_restJson1ListFunctionUrlConfigsCommand,
} from "../protocols/Aws_restJson1";

export interface ListFunctionUrlConfigsCommandInput extends ListFunctionUrlConfigsRequest {}
export interface ListFunctionUrlConfigsCommandOutput extends ListFunctionUrlConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Lambda function URLs for the specified function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionUrlConfigsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionUrlConfigsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListFunctionUrlConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFunctionUrlConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionUrlConfigsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class ListFunctionUrlConfigsCommand extends $Command<
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: ListFunctionUrlConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFunctionUrlConfigsCommandInput, ListFunctionUrlConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFunctionUrlConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListFunctionUrlConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFunctionUrlConfigsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFunctionUrlConfigsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFunctionUrlConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFunctionUrlConfigsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFunctionUrlConfigsCommandOutput> {
    return deserializeAws_restJson1ListFunctionUrlConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
