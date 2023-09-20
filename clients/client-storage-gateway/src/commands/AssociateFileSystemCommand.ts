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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  AssociateFileSystemInput,
  AssociateFileSystemInputFilterSensitiveLog,
  AssociateFileSystemOutput,
} from "../models/models_0";
import { de_AssociateFileSystemCommand, se_AssociateFileSystemCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateFileSystemCommand}.
 */
export interface AssociateFileSystemCommandInput extends AssociateFileSystemInput {}
/**
 * @public
 *
 * The output of {@link AssociateFileSystemCommand}.
 */
export interface AssociateFileSystemCommandOutput extends AssociateFileSystemOutput, __MetadataBearer {}

/**
 * @public
 * <p>Associate an Amazon FSx file system with the FSx File Gateway. After the
 *          association process is complete, the file shares on the Amazon FSx file system are
 *          available for access through the gateway. This operation only supports the FSx File Gateway
 *          type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AssociateFileSystemCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AssociateFileSystemCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // AssociateFileSystemInput
 *   UserName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   GatewayARN: "STRING_VALUE", // required
 *   LocationARN: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AuditDestinationARN: "STRING_VALUE",
 *   CacheAttributes: { // CacheAttributes
 *     CacheStaleTimeoutInSeconds: Number("int"),
 *   },
 *   EndpointNetworkConfiguration: { // EndpointNetworkConfiguration
 *     IpAddresses: [ // IpAddressList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new AssociateFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFileSystemOutput
 * //   FileSystemAssociationARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateFileSystemCommandInput - {@link AssociateFileSystemCommandInput}
 * @returns {@link AssociateFileSystemCommandOutput}
 * @see {@link AssociateFileSystemCommandInput} for command's `input` shape.
 * @see {@link AssociateFileSystemCommandOutput} for command's `response` shape.
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
export class AssociateFileSystemCommand extends $Command<
  AssociateFileSystemCommandInput,
  AssociateFileSystemCommandOutput,
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
  constructor(readonly input: AssociateFileSystemCommandInput) {
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
  ): Handler<AssociateFileSystemCommandInput, AssociateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateFileSystemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AssociateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateFileSystemInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "AssociateFileSystem",
      },
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
  private serialize(input: AssociateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateFileSystemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateFileSystemCommandOutput> {
    return de_AssociateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
