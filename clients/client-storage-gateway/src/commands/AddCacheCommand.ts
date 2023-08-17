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

import { AddCacheInput, AddCacheOutput } from "../models/models_0";
import { de_AddCacheCommand, se_AddCacheCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddCacheCommand}.
 */
export interface AddCacheCommandInput extends AddCacheInput {}
/**
 * @public
 *
 * The output of {@link AddCacheCommand}.
 */
export interface AddCacheCommandOutput extends AddCacheOutput, __MetadataBearer {}

/**
 * @public
 * <p>Configures one or more gateway local disks as cache for a gateway. This operation is
 *          only supported in the cached volume, tape, and file gateway type (see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html">How Storage Gateway works (architecture)</a>.</p>
 *
 *          <p>In the request, you specify the gateway Amazon Resource Name (ARN) to which you want to
 *          add cache, and one or more disk IDs that you want to configure as cache.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AddCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AddCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // AddCacheInput
 *   GatewayARN: "STRING_VALUE", // required
 *   DiskIds: [ // DiskIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AddCacheCommand(input);
 * const response = await client.send(command);
 * // { // AddCacheOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddCacheCommandInput - {@link AddCacheCommandInput}
 * @returns {@link AddCacheCommandOutput}
 * @see {@link AddCacheCommandInput} for command's `input` shape.
 * @see {@link AddCacheCommandOutput} for command's `response` shape.
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
 * @example To add a cache
 * ```javascript
 * // The following example shows a request that activates a gateway-stored volume.
 * const input = {
 *   "DiskIds": [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:03:00.0-scsi-0:0:1:0"
 *   ],
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new AddCacheCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-add-a-cache-1471043606854
 * ```
 *
 */
export class AddCacheCommand extends $Command<
  AddCacheCommandInput,
  AddCacheCommandOutput,
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
  constructor(readonly input: AddCacheCommandInput) {
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
  ): Handler<AddCacheCommandInput, AddCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AddCacheCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AddCacheCommand";
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
  private serialize(input: AddCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddCacheCommandOutput> {
    return de_AddCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
