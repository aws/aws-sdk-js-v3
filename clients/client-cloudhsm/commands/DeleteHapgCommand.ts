import { CloudHSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudHSMClient";
import { DeleteHapgRequest, DeleteHapgResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteHapgCommand,
  serializeAws_json1_1DeleteHapgCommand,
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

export type DeleteHapgCommandInput = DeleteHapgRequest;
export type DeleteHapgCommandOutput = DeleteHapgResponse & __MetadataBearer;

/**
 * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 *          <p>Deletes a high-availability partition group.</p>
 */
export class DeleteHapgCommand extends $Command<
  DeleteHapgCommandInput,
  DeleteHapgCommandOutput,
  CloudHSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteHapgCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudHSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteHapgCommandInput, DeleteHapgCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudHSMClient";
    const commandName = "DeleteHapgCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteHapgRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteHapgResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteHapgCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteHapgCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHapgCommandOutput> {
    return deserializeAws_json1_1DeleteHapgCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
