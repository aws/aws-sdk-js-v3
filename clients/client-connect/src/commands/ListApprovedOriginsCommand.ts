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
  ListApprovedOriginsRequest,
  ListApprovedOriginsRequestFilterSensitiveLog,
  ListApprovedOriginsResponse,
  ListApprovedOriginsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListApprovedOriginsCommand,
  serializeAws_restJson1ListApprovedOriginsCommand,
} from "../protocols/Aws_restJson1";

export interface ListApprovedOriginsCommandInput extends ListApprovedOriginsRequest {}
export interface ListApprovedOriginsCommandOutput extends ListApprovedOriginsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all approved origins associated with the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListApprovedOriginsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListApprovedOriginsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListApprovedOriginsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApprovedOriginsCommandInput} for command's `input` shape.
 * @see {@link ListApprovedOriginsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListApprovedOriginsCommand extends $Command<
  ListApprovedOriginsCommandInput,
  ListApprovedOriginsCommandOutput,
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

  constructor(readonly input: ListApprovedOriginsCommandInput) {
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
  ): Handler<ListApprovedOriginsCommandInput, ListApprovedOriginsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApprovedOriginsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListApprovedOriginsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApprovedOriginsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListApprovedOriginsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApprovedOriginsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListApprovedOriginsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListApprovedOriginsCommandOutput> {
    return deserializeAws_restJson1ListApprovedOriginsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
