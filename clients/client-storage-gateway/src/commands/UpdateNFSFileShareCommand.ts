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
  UpdateNFSFileShareInput,
  UpdateNFSFileShareInputFilterSensitiveLog,
  UpdateNFSFileShareOutput,
  UpdateNFSFileShareOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateNFSFileShareCommand,
  serializeAws_json1_1UpdateNFSFileShareCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface UpdateNFSFileShareCommandInput extends UpdateNFSFileShareInput {}
export interface UpdateNFSFileShareCommandOutput extends UpdateNFSFileShareOutput, __MetadataBearer {}

/**
 * <p>Updates a Network File System (NFS) file share. This operation is only supported in S3
 *          File Gateways.</p>
 *
 *          <note>
 *             <p>To leave a file share field unchanged, set the corresponding input field to
 *             null.</p>
 *          </note>
 *
 *          <p>Updates the following file share settings:</p>
 *
 *          <ul>
 *             <li>
 *                <p>Default storage class for your S3 bucket</p>
 *             </li>
 *             <li>
 *                <p>Metadata defaults for your S3 bucket</p>
 *             </li>
 *             <li>
 *                <p>Allowed NFS clients for your file share</p>
 *             </li>
 *             <li>
 *                <p>Squash settings</p>
 *             </li>
 *             <li>
 *                <p>Write status of your file share</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateNFSFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateNFSFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateNFSFileShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNFSFileShareCommandInput} for command's `input` shape.
 * @see {@link UpdateNFSFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class UpdateNFSFileShareCommand extends $Command<
  UpdateNFSFileShareCommandInput,
  UpdateNFSFileShareCommandOutput,
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

  constructor(readonly input: UpdateNFSFileShareCommandInput) {
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
  ): Handler<UpdateNFSFileShareCommandInput, UpdateNFSFileShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateNFSFileShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateNFSFileShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNFSFileShareInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateNFSFileShareOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateNFSFileShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateNFSFileShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNFSFileShareCommandOutput> {
    return deserializeAws_json1_1UpdateNFSFileShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
