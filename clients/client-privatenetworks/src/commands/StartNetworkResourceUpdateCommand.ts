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
  StartNetworkResourceUpdateRequest,
  StartNetworkResourceUpdateRequestFilterSensitiveLog,
  StartNetworkResourceUpdateResponse,
  StartNetworkResourceUpdateResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1StartNetworkResourceUpdateCommand,
  serializeAws_restJson1StartNetworkResourceUpdateCommand,
} from "../protocols/Aws_restJson1";

export interface StartNetworkResourceUpdateCommandInput extends StartNetworkResourceUpdateRequest {}
export interface StartNetworkResourceUpdateCommandOutput extends StartNetworkResourceUpdateResponse, __MetadataBearer {}

/**
 * <p>Starts an update of the specified network resource.</p>
 *          <p>After you submit a request to replace or return a network resource, the status
 *            of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label
 *             is available when the status of the network resource is <code>PENDING_RETURN</code>.
 *             After the network resource is successfully returned, its status is <code>DELETED</code>.
 *             For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, StartNetworkResourceUpdateCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, StartNetworkResourceUpdateCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const command = new StartNetworkResourceUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNetworkResourceUpdateCommandInput} for command's `input` shape.
 * @see {@link StartNetworkResourceUpdateCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 */
export class StartNetworkResourceUpdateCommand extends $Command<
  StartNetworkResourceUpdateCommandInput,
  StartNetworkResourceUpdateCommandOutput,
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

  constructor(readonly input: StartNetworkResourceUpdateCommandInput) {
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
  ): Handler<StartNetworkResourceUpdateCommandInput, StartNetworkResourceUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartNetworkResourceUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "StartNetworkResourceUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartNetworkResourceUpdateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartNetworkResourceUpdateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartNetworkResourceUpdateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartNetworkResourceUpdateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartNetworkResourceUpdateCommandOutput> {
    return deserializeAws_restJson1StartNetworkResourceUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
