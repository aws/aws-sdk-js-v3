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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import {
  ListWorkspacesRequest,
  ListWorkspacesRequestFilterSensitiveLog,
  ListWorkspacesResponse,
  ListWorkspacesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListWorkspacesCommand,
  serializeAws_restJson1ListWorkspacesCommand,
} from "../protocols/Aws_restJson1";

export interface ListWorkspacesCommandInput extends ListWorkspacesRequest {}
export interface ListWorkspacesCommandOutput extends ListWorkspacesResponse, __MetadataBearer {}

/**
 * Lists all AMP workspaces, including workspaces being created or deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListWorkspacesCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListWorkspacesCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new ListWorkspacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWorkspacesCommandInput} for command's `input` shape.
 * @see {@link ListWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 */
export class ListWorkspacesCommand extends $Command<
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
  AmpClientResolvedConfig
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

  constructor(readonly input: ListWorkspacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorkspacesCommandInput, ListWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWorkspacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "ListWorkspacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorkspacesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListWorkspacesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWorkspacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkspacesCommandOutput> {
    return deserializeAws_restJson1ListWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
