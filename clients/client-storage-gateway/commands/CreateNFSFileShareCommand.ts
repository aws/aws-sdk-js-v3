import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateNFSFileShareInput, CreateNFSFileShareOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateNFSFileShareCommand,
  serializeAws_json1_1CreateNFSFileShareCommand,
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

export type CreateNFSFileShareCommandInput = CreateNFSFileShareInput;
export type CreateNFSFileShareCommandOutput = CreateNFSFileShareOutput & __MetadataBearer;

/**
 * <p>Creates a Network File System (NFS) file share on an existing file gateway. In Storage
 *          Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage.
 *          Storage Gateway exposes file shares using an NFS interface. This operation is only
 *          supported for file gateways.</p>
 *
 *          <important>
 *             <p>File gateway requires AWS Security Token Service (AWS STS) to be activated to enable
 *             you to create a file share. Make sure AWS STS is activated in the AWS Region you are
 *             creating your file gateway in. If AWS STS is not activated in the AWS Region, activate
 *             it. For information about how to activate AWS STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and
 *                Access Management User Guide</i>.</p>
 *
 *             <p>File gateway does not support creating hard or symbolic links on a file share.</p>
 *          </important>
 */
export class CreateNFSFileShareCommand extends $Command<
  CreateNFSFileShareCommandInput,
  CreateNFSFileShareCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNFSFileShareCommandInput) {
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
  ): Handler<CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateNFSFileShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNFSFileShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateNFSFileShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNFSFileShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateNFSFileShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNFSFileShareCommandOutput> {
    return deserializeAws_json1_1CreateNFSFileShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
