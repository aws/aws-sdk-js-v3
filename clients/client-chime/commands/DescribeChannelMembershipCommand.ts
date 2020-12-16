import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { DescribeChannelMembershipRequest, DescribeChannelMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeChannelMembershipCommand,
  serializeAws_restJson1DescribeChannelMembershipCommand,
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

export type DescribeChannelMembershipCommandInput = DescribeChannelMembershipRequest;
export type DescribeChannelMembershipCommandOutput = DescribeChannelMembershipResponse & __MetadataBearer;

/**
 * <p>Returns the full details of a user's channel membership.</p>
 */
export class DescribeChannelMembershipCommand extends $Command<
  DescribeChannelMembershipCommandInput,
  DescribeChannelMembershipCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeChannelMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeChannelMembershipCommandInput, DescribeChannelMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeChannelMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeChannelMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChannelMembershipResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeChannelMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeChannelMembershipCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeChannelMembershipCommandOutput> {
    return deserializeAws_restJson1DescribeChannelMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
