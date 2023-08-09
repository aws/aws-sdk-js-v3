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

import { DescribeCacheInput, DescribeCacheOutput } from "../models/models_0";
import { de_DescribeCacheCommand, se_DescribeCacheCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCacheCommand}.
 */
export interface DescribeCacheCommandInput extends DescribeCacheInput {}
/**
 * @public
 *
 * The output of {@link DescribeCacheCommand}.
 */
export interface DescribeCacheCommandOutput extends DescribeCacheOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the cache of a gateway. This operation is only supported in
 *          the cached volume, tape, and file gateway types.</p>
 *
 *          <p>The response includes disk IDs that are configured as cache, and it includes the amount
 *          of cache allocated and used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCacheCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCacheCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeCacheInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeCacheCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCacheOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   DiskIds: [ // DiskIds
 * //     "STRING_VALUE",
 * //   ],
 * //   CacheAllocatedInBytes: Number("long"),
 * //   CacheUsedPercentage: Number("double"),
 * //   CacheDirtyPercentage: Number("double"),
 * //   CacheHitPercentage: Number("double"),
 * //   CacheMissPercentage: Number("double"),
 * // };
 *
 * ```
 *
 * @param DescribeCacheCommandInput - {@link DescribeCacheCommandInput}
 * @returns {@link DescribeCacheCommandOutput}
 * @see {@link DescribeCacheCommandInput} for command's `input` shape.
 * @see {@link DescribeCacheCommandOutput} for command's `response` shape.
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
 * @example To describe cache information
 * ```javascript
 * // Returns information about the cache of a gateway.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeCacheCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CacheAllocatedInBytes": 2199023255552,
 *   "CacheDirtyPercentage": 0.07,
 *   "CacheHitPercentage": 99.68,
 *   "CacheMissPercentage": 0.32,
 *   "CacheUsedPercentage": 0.07,
 *   "DiskIds": [
 *     "pci-0000:03:00.0-scsi-0:0:0:0",
 *     "pci-0000:04:00.0-scsi-0:1:0:0"
 *   ],
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-describe-cache-information-1471385756036
 * ```
 *
 */
export class DescribeCacheCommand extends $Command<
  DescribeCacheCommandInput,
  DescribeCacheCommandOutput,
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
  constructor(readonly input: DescribeCacheCommandInput) {
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
  ): Handler<DescribeCacheCommandInput, DescribeCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeCacheCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeCacheCommand";
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
  private serialize(input: DescribeCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCacheCommandOutput> {
    return de_DescribeCacheCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
