import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { DeleteEndpointInput } from "../models/models_0";
import {
  deserializeAws_queryDeleteEndpointCommand,
  serializeAws_queryDeleteEndpointCommand,
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

export type DeleteEndpointCommandInput = DeleteEndpointInput;
export type DeleteEndpointCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the endpoint for a device and mobile app from Amazon SNS. This action is
 *             idempotent. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *         <p>When you delete an endpoint that is also subscribed to a topic, then you must also
 *             unsubscribe the endpoint from the topic.</p>
 */
export class DeleteEndpointCommand extends $Command<
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEndpointCommandInput) {
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
  ): Handler<DeleteEndpointCommandInput, DeleteEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "DeleteEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEndpointInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEndpointCommandOutput> {
    return deserializeAws_queryDeleteEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
