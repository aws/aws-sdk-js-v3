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
  CreateSiteToSiteVpnAttachmentRequest,
  CreateSiteToSiteVpnAttachmentRequestFilterSensitiveLog,
  CreateSiteToSiteVpnAttachmentResponse,
  CreateSiteToSiteVpnAttachmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand,
  serializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSiteToSiteVpnAttachmentCommandInput extends CreateSiteToSiteVpnAttachmentRequest {}
export interface CreateSiteToSiteVpnAttachmentCommandOutput
  extends CreateSiteToSiteVpnAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateSiteToSiteVpnAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateSiteToSiteVpnAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateSiteToSiteVpnAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSiteToSiteVpnAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateSiteToSiteVpnAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class CreateSiteToSiteVpnAttachmentCommand extends $Command<
  CreateSiteToSiteVpnAttachmentCommandInput,
  CreateSiteToSiteVpnAttachmentCommandOutput,
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

  constructor(readonly input: CreateSiteToSiteVpnAttachmentCommandInput) {
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
  ): Handler<CreateSiteToSiteVpnAttachmentCommandInput, CreateSiteToSiteVpnAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSiteToSiteVpnAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "CreateSiteToSiteVpnAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSiteToSiteVpnAttachmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSiteToSiteVpnAttachmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSiteToSiteVpnAttachmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSiteToSiteVpnAttachmentCommandOutput> {
    return deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
