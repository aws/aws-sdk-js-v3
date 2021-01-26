import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { GetPlatformApplicationAttributesInput, GetPlatformApplicationAttributesResponse } from "../models/models_0";
import {
  deserializeAws_queryGetPlatformApplicationAttributesCommand,
  serializeAws_queryGetPlatformApplicationAttributesCommand,
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

export type GetPlatformApplicationAttributesCommandInput = GetPlatformApplicationAttributesInput;
export type GetPlatformApplicationAttributesCommandOutput = GetPlatformApplicationAttributesResponse & __MetadataBearer;

/**
 * <p>Retrieves the attributes of the platform application object for the supported push
 *             notification services, such as APNS and GCM (Firebase Cloud Messaging). For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 */
export class GetPlatformApplicationAttributesCommand extends $Command<
  GetPlatformApplicationAttributesCommandInput,
  GetPlatformApplicationAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPlatformApplicationAttributesCommandInput) {
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
  ): Handler<GetPlatformApplicationAttributesCommandInput, GetPlatformApplicationAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "GetPlatformApplicationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPlatformApplicationAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPlatformApplicationAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetPlatformApplicationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetPlatformApplicationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlatformApplicationAttributesCommandOutput> {
    return deserializeAws_queryGetPlatformApplicationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
