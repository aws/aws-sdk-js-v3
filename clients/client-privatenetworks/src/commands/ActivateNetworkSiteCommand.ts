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
  ActivateNetworkSiteRequest,
  ActivateNetworkSiteRequestFilterSensitiveLog,
  ActivateNetworkSiteResponse,
  ActivateNetworkSiteResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import {
  deserializeAws_restJson1ActivateNetworkSiteCommand,
  serializeAws_restJson1ActivateNetworkSiteCommand,
} from "../protocols/Aws_restJson1";

export interface ActivateNetworkSiteCommandInput extends ActivateNetworkSiteRequest {}
export interface ActivateNetworkSiteCommandOutput extends ActivateNetworkSiteResponse, __MetadataBearer {}

/**
 * <p>Activates the specified network site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ActivateNetworkSiteCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ActivateNetworkSiteCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const command = new ActivateNetworkSiteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateNetworkSiteCommandInput} for command's `input` shape.
 * @see {@link ActivateNetworkSiteCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 */
export class ActivateNetworkSiteCommand extends $Command<
  ActivateNetworkSiteCommandInput,
  ActivateNetworkSiteCommandOutput,
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

  constructor(readonly input: ActivateNetworkSiteCommandInput) {
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
  ): Handler<ActivateNetworkSiteCommandInput, ActivateNetworkSiteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ActivateNetworkSiteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ActivateNetworkSiteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateNetworkSiteRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ActivateNetworkSiteResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ActivateNetworkSiteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ActivateNetworkSiteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateNetworkSiteCommandOutput> {
    return deserializeAws_restJson1ActivateNetworkSiteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
