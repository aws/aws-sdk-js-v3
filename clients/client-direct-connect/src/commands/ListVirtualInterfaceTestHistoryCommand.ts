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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  ListVirtualInterfaceTestHistoryRequest,
  ListVirtualInterfaceTestHistoryRequestFilterSensitiveLog,
  ListVirtualInterfaceTestHistoryResponse,
  ListVirtualInterfaceTestHistoryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand,
  serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand,
} from "../protocols/Aws_json1_1";

export interface ListVirtualInterfaceTestHistoryCommandInput extends ListVirtualInterfaceTestHistoryRequest {}
export interface ListVirtualInterfaceTestHistoryCommandOutput
  extends ListVirtualInterfaceTestHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Lists the virtual interface failover test history.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, ListVirtualInterfaceTestHistoryCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new ListVirtualInterfaceTestHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVirtualInterfaceTestHistoryCommandInput} for command's `input` shape.
 * @see {@link ListVirtualInterfaceTestHistoryCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class ListVirtualInterfaceTestHistoryCommand extends $Command<
  ListVirtualInterfaceTestHistoryCommandInput,
  ListVirtualInterfaceTestHistoryCommandOutput,
  DirectConnectClientResolvedConfig
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

  constructor(readonly input: ListVirtualInterfaceTestHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualInterfaceTestHistoryCommandInput, ListVirtualInterfaceTestHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVirtualInterfaceTestHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "ListVirtualInterfaceTestHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListVirtualInterfaceTestHistoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListVirtualInterfaceTestHistoryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListVirtualInterfaceTestHistoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListVirtualInterfaceTestHistoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListVirtualInterfaceTestHistoryCommandOutput> {
    return deserializeAws_json1_1ListVirtualInterfaceTestHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
