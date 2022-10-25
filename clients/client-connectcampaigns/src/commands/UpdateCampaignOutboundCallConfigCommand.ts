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

import { ConnectCampaignsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCampaignsClient";
import {
  UpdateCampaignOutboundCallConfigRequest,
  UpdateCampaignOutboundCallConfigRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateCampaignOutboundCallConfigCommand,
  serializeAws_restJson1UpdateCampaignOutboundCallConfigCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateCampaignOutboundCallConfigCommandInput extends UpdateCampaignOutboundCallConfigRequest {}
export interface UpdateCampaignOutboundCallConfigCommandOutput extends __MetadataBearer {}

/**
 * Updates the outbound call config of a campaign. This API is idempotent.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, UpdateCampaignOutboundCallConfigCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, UpdateCampaignOutboundCallConfigCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const command = new UpdateCampaignOutboundCallConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCampaignOutboundCallConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCampaignOutboundCallConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 */
export class UpdateCampaignOutboundCallConfigCommand extends $Command<
  UpdateCampaignOutboundCallConfigCommandInput,
  UpdateCampaignOutboundCallConfigCommandOutput,
  ConnectCampaignsClientResolvedConfig
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

  constructor(readonly input: UpdateCampaignOutboundCallConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCampaignsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCampaignOutboundCallConfigCommandInput, UpdateCampaignOutboundCallConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCampaignOutboundCallConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "UpdateCampaignOutboundCallConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCampaignOutboundCallConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCampaignOutboundCallConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateCampaignOutboundCallConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCampaignOutboundCallConfigCommandOutput> {
    return deserializeAws_restJson1UpdateCampaignOutboundCallConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
