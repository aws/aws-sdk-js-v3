import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateSMBFileShareInput, UpdateSMBFileShareOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateSMBFileShareCommand,
  serializeAws_json1_1UpdateSMBFileShareCommand,
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

export type UpdateSMBFileShareCommandInput = UpdateSMBFileShareInput;
export type UpdateSMBFileShareCommandOutput = UpdateSMBFileShareOutput & __MetadataBearer;

/**
 * <p>Updates a Server Message Block (SMB) file share. This operation is only supported for
 *          file gateways.</p>
 *
 *          <note>
 *             <p>To leave a file share field unchanged, set the corresponding input field to
 *             null.</p>
 *          </note>
 *
 *          <important>
 *             <p>File gateways require AWS Security Token Service (AWS STS) to be activated to enable
 *             you to create a file share. Make sure that AWS STS is activated in the AWS Region you
 *             are creating your file gateway in. If AWS STS is not activated in this AWS Region,
 *             activate it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and
 *                Access Management User Guide</i>.</p>
 *
 *             <p>File gateways don't support creating hard or symbolic links on a file
 *             share.</p>
 *          </important>
 */
export class UpdateSMBFileShareCommand extends $Command<
  UpdateSMBFileShareCommandInput,
  UpdateSMBFileShareCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSMBFileShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSMBFileShareCommandInput, UpdateSMBFileShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateSMBFileShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSMBFileShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSMBFileShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSMBFileShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateSMBFileShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSMBFileShareCommandOutput> {
    return deserializeAws_json1_1UpdateSMBFileShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
