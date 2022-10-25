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
  GetCampaignStateBatchRequest,
  GetCampaignStateBatchRequestFilterSensitiveLog,
  GetCampaignStateBatchResponse,
  GetCampaignStateBatchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetCampaignStateBatchCommand,
  serializeAws_restJson1GetCampaignStateBatchCommand,
} from "../protocols/Aws_restJson1";

export interface GetCampaignStateBatchCommandInput extends GetCampaignStateBatchRequest {}
export interface GetCampaignStateBatchCommandOutput extends GetCampaignStateBatchResponse, __MetadataBearer {}

/**
 * Get state of campaigns for the specified Amazon Connect account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCampaignsClient, GetCampaignStateBatchCommand } from "@aws-sdk/client-connectcampaigns"; // ES Modules import
 * // const { ConnectCampaignsClient, GetCampaignStateBatchCommand } = require("@aws-sdk/client-connectcampaigns"); // CommonJS import
 * const client = new ConnectCampaignsClient(config);
 * const command = new GetCampaignStateBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignStateBatchCommandInput} for command's `input` shape.
 * @see {@link GetCampaignStateBatchCommandOutput} for command's `response` shape.
 * @see {@link ConnectCampaignsClientResolvedConfig | config} for ConnectCampaignsClient's `config` shape.
 *
 */
export class GetCampaignStateBatchCommand extends $Command<
  GetCampaignStateBatchCommandInput,
  GetCampaignStateBatchCommandOutput,
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

  constructor(readonly input: GetCampaignStateBatchCommandInput) {
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
  ): Handler<GetCampaignStateBatchCommandInput, GetCampaignStateBatchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCampaignStateBatchCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCampaignsClient";
    const commandName = "GetCampaignStateBatchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCampaignStateBatchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCampaignStateBatchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCampaignStateBatchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCampaignStateBatchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCampaignStateBatchCommandOutput> {
    return deserializeAws_restJson1GetCampaignStateBatchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
