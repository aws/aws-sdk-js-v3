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
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import {
  ListEventTypesRequest,
  ListEventTypesRequestFilterSensitiveLog,
  ListEventTypesResult,
  ListEventTypesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListEventTypesCommand,
  serializeAws_restJson1ListEventTypesCommand,
} from "../protocols/Aws_restJson1";

export interface ListEventTypesCommandInput extends ListEventTypesRequest {}
export interface ListEventTypesCommandOutput extends ListEventTypesResult, __MetadataBearer {}

/**
 * <p>Returns information about the event types available for configuring notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListEventTypesCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListEventTypesCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new ListEventTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventTypesCommandInput} for command's `input` shape.
 * @see {@link ListEventTypesCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 */
export class ListEventTypesCommand extends $Command<
  ListEventTypesCommandInput,
  ListEventTypesCommandOutput,
  CodestarNotificationsClientResolvedConfig
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

  constructor(readonly input: ListEventTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodestarNotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventTypesCommandInput, ListEventTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEventTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "ListEventTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEventTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEventTypesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEventTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEventTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventTypesCommandOutput> {
    return deserializeAws_restJson1ListEventTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
