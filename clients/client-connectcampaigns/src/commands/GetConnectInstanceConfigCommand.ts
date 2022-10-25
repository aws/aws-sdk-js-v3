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
  GetConnectInstanceConfigRequest,
  GetConnectInstanceConfigRequestFilterSensitiveLog,
  GetConnectInstanceConfigResponse,
  GetConnectInstanceConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetConnectInstanceConfigCommand,
  serializeAws_restJson1GetConnectInstanceConfigCommand,
} from "../protocols/Aws_restJson1";

export interface GetConnectInstanceConfigCommandInput extends GetConnectInstanceConfigRequest {}
export interface GetConnectInstanceConfigCommandOutput extends GetConnectInstanceConfigResponse, __MetadataBearer {}

/**
 * Get the specific Connect instance config.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, GetConnectInstanceConfigCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetConnectInstanceConfigCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const command = new GetConnectInstanceConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectInstanceConfigCommandInput} for command's `input` shape.
 * @see {@link GetConnectInstanceConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 */
export class GetConnectInstanceConfigCommand extends $Command<
  GetConnectInstanceConfigCommandInput,
  GetConnectInstanceConfigCommandOutput,
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

  constructor(readonly input: GetConnectInstanceConfigCommandInput) {
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
  ): Handler<GetConnectInstanceConfigCommandInput, GetConnectInstanceConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConnectInstanceConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "GetConnectInstanceConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConnectInstanceConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetConnectInstanceConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConnectInstanceConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConnectInstanceConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectInstanceConfigCommandOutput> {
    return deserializeAws_restJson1GetConnectInstanceConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
