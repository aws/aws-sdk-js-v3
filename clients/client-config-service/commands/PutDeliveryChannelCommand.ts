import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutDeliveryChannelRequest } from "../models/models_0";
import {
  deserializeAws_json1_1PutDeliveryChannelCommand,
  serializeAws_json1_1PutDeliveryChannelCommand,
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

export type PutDeliveryChannelCommandInput = PutDeliveryChannelRequest;
export type PutDeliveryChannelCommandOutput = __MetadataBearer;

/**
 * <p>Creates a delivery channel object to deliver configuration
 * 			information to an Amazon S3 bucket and Amazon SNS topic.</p>
 * 		       <p>Before you can create a delivery channel, you must create a
 * 			configuration recorder.</p>
 * 		       <p>You can use this action to change the Amazon S3 bucket or an
 * 			Amazon SNS topic of the existing delivery channel. To change the
 * 			Amazon S3 bucket or an Amazon SNS topic, call this action and
 * 			specify the changed values for the S3 bucket and the SNS topic. If
 * 			you specify a different value for either the S3 bucket or the SNS
 * 			topic, this action will keep the existing value for the parameter
 * 			that is not changed.</p>
 * 		       <note>
 * 			         <p>You can have only one delivery channel per region in your
 * 				account.</p>
 *
 *
 * 		       </note>
 */
export class PutDeliveryChannelCommand extends $Command<
  PutDeliveryChannelCommandInput,
  PutDeliveryChannelCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDeliveryChannelCommandInput) {
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
  ): Handler<PutDeliveryChannelCommandInput, PutDeliveryChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutDeliveryChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDeliveryChannelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDeliveryChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutDeliveryChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDeliveryChannelCommandOutput> {
    return deserializeAws_json1_1PutDeliveryChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
