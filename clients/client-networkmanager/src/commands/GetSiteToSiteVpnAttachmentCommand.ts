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
  GetSiteToSiteVpnAttachmentRequest,
  GetSiteToSiteVpnAttachmentRequestFilterSensitiveLog,
  GetSiteToSiteVpnAttachmentResponse,
  GetSiteToSiteVpnAttachmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommand,
  serializeAws_restJson1GetSiteToSiteVpnAttachmentCommand,
} from "../protocols/Aws_restJson1";

export interface GetSiteToSiteVpnAttachmentCommandInput extends GetSiteToSiteVpnAttachmentRequest {}
export interface GetSiteToSiteVpnAttachmentCommandOutput extends GetSiteToSiteVpnAttachmentResponse, __MetadataBearer {}

/**
 * <p>Returns information about a site-to-site VPN attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetSiteToSiteVpnAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetSiteToSiteVpnAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetSiteToSiteVpnAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSiteToSiteVpnAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetSiteToSiteVpnAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class GetSiteToSiteVpnAttachmentCommand extends $Command<
  GetSiteToSiteVpnAttachmentCommandInput,
  GetSiteToSiteVpnAttachmentCommandOutput,
  NetworkManagerClientResolvedConfig
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

  constructor(readonly input: GetSiteToSiteVpnAttachmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSiteToSiteVpnAttachmentCommandInput, GetSiteToSiteVpnAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSiteToSiteVpnAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetSiteToSiteVpnAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSiteToSiteVpnAttachmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSiteToSiteVpnAttachmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSiteToSiteVpnAttachmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSiteToSiteVpnAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSiteToSiteVpnAttachmentCommandOutput> {
    return deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
