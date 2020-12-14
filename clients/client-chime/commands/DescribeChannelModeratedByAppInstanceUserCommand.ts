import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  DescribeChannelModeratedByAppInstanceUserRequest,
  DescribeChannelModeratedByAppInstanceUserResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand,
  serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand,
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

export type DescribeChannelModeratedByAppInstanceUserCommandInput = DescribeChannelModeratedByAppInstanceUserRequest;
export type DescribeChannelModeratedByAppInstanceUserCommandOutput = DescribeChannelModeratedByAppInstanceUserResponse &
  __MetadataBearer;

/**
 * <p>Returns the full details of a channel moderated by the specified <code>AppInstanceUser</code>.</p>
 */
export class DescribeChannelModeratedByAppInstanceUserCommand extends $Command<
  DescribeChannelModeratedByAppInstanceUserCommandInput,
  DescribeChannelModeratedByAppInstanceUserCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeChannelModeratedByAppInstanceUserCommandInput) {
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
  ): Handler<
    DescribeChannelModeratedByAppInstanceUserCommandInput,
    DescribeChannelModeratedByAppInstanceUserCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "DescribeChannelModeratedByAppInstanceUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeChannelModeratedByAppInstanceUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeChannelModeratedByAppInstanceUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeChannelModeratedByAppInstanceUserCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeChannelModeratedByAppInstanceUserCommandOutput> {
    return deserializeAws_restJson1DescribeChannelModeratedByAppInstanceUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
