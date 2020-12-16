import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribePortalRequest, DescribePortalResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribePortalCommand,
  serializeAws_restJson1DescribePortalCommand,
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

export type DescribePortalCommandInput = DescribePortalRequest;
export type DescribePortalCommandOutput = DescribePortalResponse & __MetadataBearer;

/**
 * <p>Retrieves information about a portal.</p>
 */
export class DescribePortalCommand extends $Command<
  DescribePortalCommandInput,
  DescribePortalCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePortalCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePortalCommandInput, DescribePortalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribePortalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePortalRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePortalResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePortalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribePortalCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePortalCommandOutput> {
    return deserializeAws_restJson1DescribePortalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
