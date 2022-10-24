// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateNFSFileShareInput,
  CreateNFSFileShareInputFilterSensitiveLog,
  CreateNFSFileShareOutput,
  CreateNFSFileShareOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateNFSFileShareCommand,
  serializeAws_json1_1CreateNFSFileShareCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface CreateNFSFileShareCommandInput extends CreateNFSFileShareInput {}
export interface CreateNFSFileShareCommandOutput extends CreateNFSFileShareOutput, __MetadataBearer {}

/**
 * <p>Creates a Network File System (NFS) file share on an existing S3 File Gateway. In
 *          Storage Gateway, a file share is a file system mount point backed by Amazon S3
 *          cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation
 *          is only supported for S3 File Gateways.</p>
 *
 *          <important>
 *             <p>S3 File gateway requires Security Token Service (Amazon Web Services STS) to be
 *             activated to enable you to create a file share. Make sure Amazon Web Services STS is
 *             activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If
 *                Amazon Web Services STS is not activated in the Amazon Web Services Region, activate
 *             it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
 *                   <i>Identity and Access Management User Guide</i>.</p>
 *
 *             <p>S3 File Gateways do not support creating hard or symbolic links on a file
 *             share.</p>
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
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class CreateNFSFileShareCommand extends $Command<
  CreateNFSFileShareCommandInput,
  CreateNFSFileShareCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNFSFileShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateNFSFileShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNFSFileShareInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNFSFileShareOutputFilterSensitiveLog,
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
