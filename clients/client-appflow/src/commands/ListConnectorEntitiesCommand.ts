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
  ListConnectorEntitiesRequest,
  ListConnectorEntitiesRequestFilterSensitiveLog,
  ListConnectorEntitiesResponse,
  ListConnectorEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListConnectorEntitiesCommand,
  serializeAws_restJson1ListConnectorEntitiesCommand,
} from "../protocols/Aws_restJson1";

export interface ListConnectorEntitiesCommandInput extends ListConnectorEntitiesRequest {}
export interface ListConnectorEntitiesCommandOutput extends ListConnectorEntitiesResponse, __MetadataBearer {}

/**
 * <p> Returns the list of available connector entities supported by Amazon AppFlow. For
 *       example, you can query Salesforce for <i>Account</i> and
 *         <i>Opportunity</i> entities, or query ServiceNow for the
 *         <i>Incident</i> entity. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, ListConnectorEntitiesCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, ListConnectorEntitiesCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new ListConnectorEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectorEntitiesCommandInput} for command's `input` shape.
 * @see {@link ListConnectorEntitiesCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 */
export class ListConnectorEntitiesCommand extends $Command<
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
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

  constructor(readonly input: ListConnectorEntitiesCommandInput) {
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
  ): Handler<ListConnectorEntitiesCommandInput, ListConnectorEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConnectorEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "ListConnectorEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConnectorEntitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListConnectorEntitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConnectorEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListConnectorEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConnectorEntitiesCommandOutput> {
    return deserializeAws_restJson1ListConnectorEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
