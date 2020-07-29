import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetCampaignVersionRequest, GetCampaignVersionResponse } from "../models/index";
import {
  deserializeAws_restJson1GetCampaignVersionCommand,
  serializeAws_restJson1GetCampaignVersionCommand,
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

export type GetCampaignVersionCommandInput = GetCampaignVersionRequest;
export type GetCampaignVersionCommandOutput = GetCampaignVersionResponse & __MetadataBearer;

export class GetCampaignVersionCommand extends $Command<
  GetCampaignVersionCommandInput,
  GetCampaignVersionCommandOutput,
  PinpointClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCampaignVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCampaignVersionCommandInput, GetCampaignVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCampaignVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCampaignVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCampaignVersionCommandOutput> {
    return deserializeAws_restJson1GetCampaignVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
