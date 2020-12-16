import { CloudHSMV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMV2Client";
import { DeleteHsmRequest, DeleteHsmResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteHsmCommand, serializeAws_json1_1DeleteHsmCommand } from "../protocols/Aws_json1_1";
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

export type DeleteHsmCommandInput = DeleteHsmRequest;
export type DeleteHsmCommandOutput = DeleteHsmResponse & __MetadataBearer;

/**
 * <p>Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP
 *       address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to
 *       specify only one of these values. To find these values, use <a>DescribeClusters</a>.</p>
 */
export class DeleteHsmCommand extends $Command<
  DeleteHsmCommandInput,
  DeleteHsmCommandOutput,
  CloudHSMV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHsmCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHsmCommandInput, DeleteHsmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMV2Client";
    const commandName = "DeleteHsmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHsmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHsmResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHsmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteHsmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHsmCommandOutput> {
    return deserializeAws_json1_1DeleteHsmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
