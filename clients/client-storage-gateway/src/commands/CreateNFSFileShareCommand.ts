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

export interface CreateNFSFileShareCommandInput extends CreateNFSFileShareInput {}
export interface CreateNFSFileShareCommandOutput extends CreateNFSFileShareOutput, __MetadataBearer {}

/**
 * <p>Creates a Network File System (NFS) file share on an existing S3 File Gateway. In Storage
 *          Gateway, a file share is a file system mount point backed by Amazon S3 cloud storage.
 *          Storage Gateway exposes file shares using an NFS interface. This operation is only
 *          supported for S3 File Gateways.</p>
 *
 *          <important>
 *             <p>S3 File gateway requires Security Token Service (STS) to be activated to enable
 *             you to create a file share. Make sure STS is activated in the Region you are
 *             creating your S3 File Gateway in. If STS is not activated in the Region, activate
 *             it. For information about how to activate STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating STS in an Region</a> in the
 *             <i>Identity and Access Management User Guide</i>.</p>
 *
 *             <p>S3 File Gateways do not support creating hard or symbolic links on a file share.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateNFSFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateNFSFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CreateNFSFileShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNFSFileShareCommandInput} for command's `input` shape.
 * @see {@link CreateNFSFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
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
