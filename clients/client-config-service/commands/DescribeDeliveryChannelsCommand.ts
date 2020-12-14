import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeDeliveryChannelsRequest, DescribeDeliveryChannelsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDeliveryChannelsCommand,
  serializeAws_json1_1DescribeDeliveryChannelsCommand,
} from "../protocols/Aws_json1_1";
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

export type DescribeDeliveryChannelsCommandInput = DescribeDeliveryChannelsRequest;
export type DescribeDeliveryChannelsCommandOutput = DescribeDeliveryChannelsResponse & __MetadataBearer;

/**
 * <p>Returns details about the specified delivery channel. If a
 * 			delivery channel is not specified, this action returns the details
 * 			of all delivery channels associated with the account.</p>
 * 		       <note>
 * 			         <p>Currently, you can specify only one delivery channel per
 * 				region in your account.</p>
 * 		       </note>
 */
export class DescribeDeliveryChannelsCommand extends $Command<
  DescribeDeliveryChannelsCommandInput,
  DescribeDeliveryChannelsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDeliveryChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDeliveryChannelsCommandInput, DescribeDeliveryChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeDeliveryChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDeliveryChannelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDeliveryChannelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDeliveryChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDeliveryChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDeliveryChannelsCommandOutput> {
    return deserializeAws_json1_1DescribeDeliveryChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
