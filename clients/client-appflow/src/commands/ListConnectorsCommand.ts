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
  ListConnectorsRequest,
  ListConnectorsRequestFilterSensitiveLog,
  ListConnectorsResponse,
  ListConnectorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListConnectorsCommand,
  serializeAws_restJson1ListConnectorsCommand,
} from "../protocols/Aws_restJson1";

export interface ListConnectorsCommandInput extends ListConnectorsRequest {}
export interface ListConnectorsCommandOutput extends ListConnectorsResponse, __MetadataBearer {}

/**
 * <p>Returns the list of all registered custom connectors in your Amazon Web Services account.
 *       This API lists only custom connectors registered in this account, not the Amazon Web Services
 *       authored connectors. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListConnectorsCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListConnectorsCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new ListConnectorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorsCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 */
export class ListConnectorsCommand extends $Command<
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
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

  constructor(readonly input: ListConnectorsCommandInput) {
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
  ): Handler<ListConnectorsCommandInput, ListConnectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConnectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "ListConnectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConnectorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListConnectorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConnectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConnectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConnectorsCommandOutput> {
    return deserializeAws_restJson1ListConnectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
