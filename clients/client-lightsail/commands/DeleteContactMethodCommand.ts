import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteContactMethodRequest, DeleteContactMethodResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteContactMethodCommand,
  serializeAws_json1_1DeleteContactMethodCommand,
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

export type DeleteContactMethodCommandInput = DeleteContactMethodRequest;
export type DeleteContactMethodCommandOutput = DeleteContactMethodResult & __MetadataBearer;

/**
 * <p>Deletes a contact method.</p>
 *          <p>A contact method is used to send you notifications about your Amazon Lightsail resources.
 *       You can add one email address and one mobile phone number contact method in each AWS Region.
 *       However, SMS text messaging is not supported in some AWS Regions, and SMS text messages
 *       cannot be sent to some countries/regions. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-notifications">Notifications in Amazon Lightsail</a>.</p>
 */
export class DeleteContactMethodCommand extends $Command<
  DeleteContactMethodCommandInput,
  DeleteContactMethodCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteContactMethodCommandInput) {
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
  ): Handler<DeleteContactMethodCommandInput, DeleteContactMethodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteContactMethodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteContactMethodRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteContactMethodResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteContactMethodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteContactMethodCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContactMethodCommandOutput> {
    return deserializeAws_json1_1DeleteContactMethodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
