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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListLambdaFunctionsRequest,
  ListLambdaFunctionsRequestFilterSensitiveLog,
  ListLambdaFunctionsResponse,
  ListLambdaFunctionsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListLambdaFunctionsCommand,
  serializeAws_restJson1ListLambdaFunctionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListLambdaFunctionsCommandInput extends ListLambdaFunctionsRequest {}
export interface ListLambdaFunctionsCommandOutput extends ListLambdaFunctionsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all Lambda functions that display in the dropdown options in the
 *    relevant flow blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListLambdaFunctionsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListLambdaFunctionsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListLambdaFunctionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLambdaFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListLambdaFunctionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListLambdaFunctionsCommand extends $Command<
  ListLambdaFunctionsCommandInput,
  ListLambdaFunctionsCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: ListLambdaFunctionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLambdaFunctionsCommandInput, ListLambdaFunctionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLambdaFunctionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListLambdaFunctionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLambdaFunctionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLambdaFunctionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLambdaFunctionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLambdaFunctionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLambdaFunctionsCommandOutput> {
    return deserializeAws_restJson1ListLambdaFunctionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
