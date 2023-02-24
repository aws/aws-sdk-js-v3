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
  ListIntegrationAssociationsRequest,
  ListIntegrationAssociationsRequestFilterSensitiveLog,
  ListIntegrationAssociationsResponse,
  ListIntegrationAssociationsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListIntegrationAssociationsCommand,
  serializeAws_restJson1ListIntegrationAssociationsCommand,
} from "../protocols/Aws_restJson1";

export interface ListIntegrationAssociationsCommandInput extends ListIntegrationAssociationsRequest {}
export interface ListIntegrationAssociationsCommandOutput
  extends ListIntegrationAssociationsResponse,
    __MetadataBearer {}

/**
 * <p>Provides summary information about the Amazon Web Services resource associations for the
 *    specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListIntegrationAssociationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListIntegrationAssociationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListIntegrationAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIntegrationAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationAssociationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListIntegrationAssociationsCommand extends $Command<
  ListIntegrationAssociationsCommandInput,
  ListIntegrationAssociationsCommandOutput,
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

  constructor(readonly input: ListIntegrationAssociationsCommandInput) {
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
  ): Handler<ListIntegrationAssociationsCommandInput, ListIntegrationAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListIntegrationAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListIntegrationAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListIntegrationAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListIntegrationAssociationsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListIntegrationAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListIntegrationAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListIntegrationAssociationsCommandOutput> {
    return deserializeAws_restJson1ListIntegrationAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
