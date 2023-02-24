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
  ListEventSourceMappingsRequest,
  ListEventSourceMappingsRequestFilterSensitiveLog,
  ListEventSourceMappingsResponse,
  ListEventSourceMappingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListEventSourceMappingsCommand,
  serializeAws_restJson1ListEventSourceMappingsCommand,
} from "../protocols/Aws_restJson1";

export interface ListEventSourceMappingsCommandInput extends ListEventSourceMappingsRequest {}
export interface ListEventSourceMappingsCommandOutput extends ListEventSourceMappingsResponse, __MetadataBearer {}

/**
 * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a
 *       single event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListEventSourceMappingsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListEventSourceMappingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new ListEventSourceMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListEventSourceMappingsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class ListEventSourceMappingsCommand extends $Command<
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
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

  constructor(readonly input: ListEventSourceMappingsCommandInput) {
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
  ): Handler<ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEventSourceMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "ListEventSourceMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventSourceMappingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEventSourceMappingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventSourceMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEventSourceMappingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventSourceMappingsCommandOutput> {
    return deserializeAws_restJson1ListEventSourceMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
