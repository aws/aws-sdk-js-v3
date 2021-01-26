import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContactMethodRequest, CreateContactMethodResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateContactMethodCommand,
  serializeAws_json1_1CreateContactMethodCommand,
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

export type CreateContactMethodCommandInput = CreateContactMethodRequest;
export type CreateContactMethodCommandOutput = CreateContactMethodResult & __MetadataBearer;

/**
 * <p>Creates an email or SMS text message contact method.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each AWS Region.
 *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
 *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 */
export class CreateContactMethodCommand extends $Command<
  CreateContactMethodCommandInput,
  CreateContactMethodCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateContactMethodCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContactMethodCommandInput, CreateContactMethodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateContactMethodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContactMethodRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateContactMethodResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateContactMethodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContactMethodCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContactMethodCommandOutput> {
    return deserializeAws_json1_1CreateContactMethodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
