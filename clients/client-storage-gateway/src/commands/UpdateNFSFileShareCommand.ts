// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { UpdateNFSFileShareInput, UpdateNFSFileShareOutput } from "../models/models_0";
import { de_UpdateNFSFileShareCommand, se_UpdateNFSFileShareCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateNFSFileShareCommand}.
 */
export interface UpdateNFSFileShareCommandInput extends UpdateNFSFileShareInput {}
/**
 * @public
 *
 * The output of {@link UpdateNFSFileShareCommand}.
 */
export interface UpdateNFSFileShareCommandOutput extends UpdateNFSFileShareOutput, __MetadataBearer {}

/**
 * @public
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
 * const input = { // UpdateNFSFileShareInput
 *   FileShareARN: "STRING_VALUE", // required
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   NFSFileShareDefaults: { // NFSFileShareDefaults
 *     FileMode: "STRING_VALUE",
 *     DirectoryMode: "STRING_VALUE",
 *     GroupId: Number("long"),
 *     OwnerId: Number("long"),
 *   },
 *   DefaultStorageClass: "STRING_VALUE",
 *   ObjectACL: "STRING_VALUE",
 *   ClientList: [ // FileShareClientList
 *     "STRING_VALUE",
 *   ],
 *   Squash: "STRING_VALUE",
 *   ReadOnly: true || false,
 *   GuessMIMETypeEnabled: true || false,
 *   RequesterPays: true || false,
 *   FileShareName: "STRING_VALUE",
 *   CacheAttributes: { // CacheAttributes
 *     CacheStaleTimeoutInSeconds: Number("int"),
 *   },
 *   NotificationPolicy: "STRING_VALUE",
 *   AuditDestinationARN: "STRING_VALUE",
 * };
 * const command = new UpdateNFSFileShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNFSFileShareOutput
 * //   FileShareARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateNFSFileShareCommandInput - {@link UpdateNFSFileShareCommandInput}
 * @returns {@link UpdateNFSFileShareCommandOutput}
 * @see {@link UpdateNFSFileShareCommandInput} for command's `input` shape.
 * @see {@link UpdateNFSFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateNFSFileShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateNFSFileShareCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateNFSFileShareCommandOutput> {
    return de_UpdateNFSFileShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
