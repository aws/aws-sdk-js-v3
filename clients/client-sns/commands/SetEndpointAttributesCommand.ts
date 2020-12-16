import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SetEndpointAttributesInput } from "../models/models_0";
import {
  deserializeAws_querySetEndpointAttributesCommand,
  serializeAws_querySetEndpointAttributesCommand,
} from "../protocols/Aws_query";
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

export type SetEndpointAttributesCommandInput = SetEndpointAttributesInput;
export type SetEndpointAttributesCommandOutput = __MetadataBearer;

/**
 * <p>Sets the attributes for an endpoint for a device on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 */
export class SetEndpointAttributesCommand extends $Command<
  SetEndpointAttributesCommandInput,
  SetEndpointAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetEndpointAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetEndpointAttributesCommandInput, SetEndpointAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SetEndpointAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetEndpointAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetEndpointAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetEndpointAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetEndpointAttributesCommandOutput> {
    return deserializeAws_querySetEndpointAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
