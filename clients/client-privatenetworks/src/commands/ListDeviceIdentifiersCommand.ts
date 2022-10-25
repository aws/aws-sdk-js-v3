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
  ListDeviceIdentifiersRequest,
  ListDeviceIdentifiersRequestFilterSensitiveLog,
  ListDeviceIdentifiersResponse,
  ListDeviceIdentifiersResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1ListDeviceIdentifiersCommand,
  serializeAws_restJson1ListDeviceIdentifiersCommand,
} from "../protocols/Aws_restJson1";

export interface ListDeviceIdentifiersCommandInput extends ListDeviceIdentifiersRequest {}
export interface ListDeviceIdentifiersCommandOutput extends ListDeviceIdentifiersResponse, __MetadataBearer {}

/**
 * <p>Lists device identifiers. Add filters to your request to return a more
 *             specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order,
 *             the status of device identifiers, or the ARN of the traffic group.</p>
 *
 *         <p>If you specify multiple filters, filters are joined with an OR, and the request
 * returns results that match all of the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListDeviceIdentifiersCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListDeviceIdentifiersCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const command = new ListDeviceIdentifiersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceIdentifiersCommandInput} for command's `input` shape.
 * @see {@link ListDeviceIdentifiersCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 */
export class ListDeviceIdentifiersCommand extends $Command<
  ListDeviceIdentifiersCommandInput,
  ListDeviceIdentifiersCommandOutput,
  PrivateNetworksClientResolvedConfig
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

  constructor(readonly input: ListDeviceIdentifiersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeviceIdentifiersCommandInput, ListDeviceIdentifiersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeviceIdentifiersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ListDeviceIdentifiersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDeviceIdentifiersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListDeviceIdentifiersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDeviceIdentifiersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDeviceIdentifiersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeviceIdentifiersCommandOutput> {
    return deserializeAws_restJson1ListDeviceIdentifiersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
