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

import { ResetCacheInput, ResetCacheOutput } from "../models/models_0";
import { de_ResetCacheCommand, se_ResetCacheCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ResetCacheCommand}.
 */
export interface ResetCacheCommandInput extends ResetCacheInput {}
/**
 * @public
 *
 * The output of {@link ResetCacheCommand}.
 */
export interface ResetCacheCommandOutput extends ResetCacheOutput, __MetadataBearer {}

/**
 * @public
 * <p>Resets all cache disks that have encountered an error and makes the disks available for
 *          reconfiguration as cache storage. If your cache disk encounters an error, the gateway
 *          prevents read and write operations on virtual tapes in the gateway. For example, an error
 *          can occur when a disk is corrupted or removed from the gateway. When a cache is reset, the
 *          gateway loses its cache storage. At this point, you can reconfigure the disks as cache
 *          disks. This operation is only supported in the cached volume and tape types.</p>
 *
 *          <important>
 *             <p>If the cache disk you are resetting contains data that has not been uploaded to
 *                Amazon S3 yet, that data can be lost. After you reset cache disks, there will
 *             be no configured cache disks left in the gateway, so you must configure at least one new
 *             cache disk for your gateway to function properly.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ResetCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ResetCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ResetCacheInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new ResetCacheCommand(input);
 * const response = await client.send(command);
 * // { // ResetCacheOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetCacheCommandInput - {@link ResetCacheCommandInput}
 * @returns {@link ResetCacheCommandOutput}
 * @see {@link ResetCacheCommandInput} for command's `input` shape.
 * @see {@link ResetCacheCommandOutput} for command's `response` shape.
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
 * @example To reset cache disks in error status
 * ```javascript
 * // Resets all cache disks that have encountered a error and makes the disks available for reconfiguration as cache storage.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C"
 * };
 * const command = new ResetCacheCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C"
 * }
 * *\/
 * // example id: to-reset-cache-disks-in-error-status-1472148909807
 * ```
 *
 */
export class ResetCacheCommand extends $Command<
  ResetCacheCommandInput,
  ResetCacheCommandOutput,
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
  constructor(readonly input: ResetCacheCommandInput) {
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
  ): Handler<ResetCacheCommandInput, ResetCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ResetCacheCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ResetCacheCommand";
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
  private serialize(input: ResetCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ResetCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetCacheCommandOutput> {
    return de_ResetCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
