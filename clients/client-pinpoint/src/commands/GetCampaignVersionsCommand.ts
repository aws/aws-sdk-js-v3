import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetCampaignVersionsRequest, GetCampaignVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetCampaignVersionsCommand,
  serializeAws_restJson1GetCampaignVersionsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetCampaignVersionsCommandInput extends GetCampaignVersionsRequest {}
export interface GetCampaignVersionsCommandOutput extends GetCampaignVersionsResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the status, configuration, and other settings for all versions of a campaign.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetCampaignVersionsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetCampaignVersionsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetCampaignVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCampaignVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCampaignVersionsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCampaignVersionsCommand extends $Command<
  GetCampaignVersionsCommandInput,
  GetCampaignVersionsCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCampaignVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCampaignVersionsCommandInput, GetCampaignVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetCampaignVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCampaignVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCampaignVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCampaignVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCampaignVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCampaignVersionsCommandOutput> {
    return deserializeAws_restJson1GetCampaignVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
