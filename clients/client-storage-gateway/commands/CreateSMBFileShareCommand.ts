import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateSMBFileShareInput, CreateSMBFileShareOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSMBFileShareCommand,
  serializeAws_json1_1CreateSMBFileShareCommand,
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

export type CreateSMBFileShareCommandInput = CreateSMBFileShareInput;
export type CreateSMBFileShareCommandOutput = CreateSMBFileShareOutput & __MetadataBearer;

/**
 * <p>Creates a Server Message Block (SMB) file share on an existing file gateway. In Storage
 *          Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage.
 *          Storage Gateway exposes file shares using an SMB interface. This operation is only
 *          supported for file gateways.</p>
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
export class CreateSMBFileShareCommand extends $Command<
  CreateSMBFileShareCommandInput,
  CreateSMBFileShareCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSMBFileShareCommandInput) {
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
  ): Handler<CreateSMBFileShareCommandInput, CreateSMBFileShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateSMBFileShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSMBFileShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSMBFileShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSMBFileShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSMBFileShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSMBFileShareCommandOutput> {
    return deserializeAws_json1_1CreateSMBFileShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
