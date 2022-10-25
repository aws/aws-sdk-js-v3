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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import {
  ListGatewayRoutesInput,
  ListGatewayRoutesInputFilterSensitiveLog,
  ListGatewayRoutesOutput,
  ListGatewayRoutesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListGatewayRoutesCommand,
  serializeAws_restJson1ListGatewayRoutesCommand,
} from "../protocols/Aws_restJson1";

export interface ListGatewayRoutesCommandInput extends ListGatewayRoutesInput {}
export interface ListGatewayRoutesCommandOutput extends ListGatewayRoutesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing gateway routes that are associated to a virtual
 *          gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, ListGatewayRoutesCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, ListGatewayRoutesCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new ListGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link ListGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 */
export class ListGatewayRoutesCommand extends $Command<
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput,
  AppMeshClientResolvedConfig
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

  constructor(readonly input: ListGatewayRoutesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGatewayRoutesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "ListGatewayRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGatewayRoutesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListGatewayRoutesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGatewayRoutesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGatewayRoutesCommandOutput> {
    return deserializeAws_restJson1ListGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
