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

import { DeleteBandwidthRateLimitInput, DeleteBandwidthRateLimitOutput } from "../models/models_0";
import { de_DeleteBandwidthRateLimitCommand, se_DeleteBandwidthRateLimitCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteBandwidthRateLimitCommand}.
 */
export interface DeleteBandwidthRateLimitCommandInput extends DeleteBandwidthRateLimitInput {}
/**
 * @public
 *
 * The output of {@link DeleteBandwidthRateLimitCommand}.
 */
export interface DeleteBandwidthRateLimitCommandOutput extends DeleteBandwidthRateLimitOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the bandwidth rate limits of a gateway. You can delete either the upload and
 *          download bandwidth rate limit, or you can delete both. If you delete only one of the
 *          limits, the other limit remains unchanged. To specify which gateway to work with, use the
 *          Amazon Resource Name (ARN) of the gateway in your request. This operation is supported only
 *          for the stored volume, cached volume, and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteBandwidthRateLimitInput
 *   GatewayARN: "STRING_VALUE", // required
 *   BandwidthType: "STRING_VALUE", // required
 * };
 * const command = new DeleteBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBandwidthRateLimitOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteBandwidthRateLimitCommandInput - {@link DeleteBandwidthRateLimitCommandInput}
 * @returns {@link DeleteBandwidthRateLimitCommandOutput}
 * @see {@link DeleteBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DeleteBandwidthRateLimitCommandOutput} for command's `response` shape.
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
 * @example To delete bandwidth rate limits of gateway
 * ```javascript
 * // Deletes the bandwidth rate limits of a gateway; either the upload or download limit, or both.
 * const input = {
 *   "BandwidthType": "All",
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DeleteBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-delete-bandwidth-rate-limits-of-gateway-1471373225520
 * ```
 *
 */
export class DeleteBandwidthRateLimitCommand extends $Command<
  DeleteBandwidthRateLimitCommandInput,
  DeleteBandwidthRateLimitCommandOutput,
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
  constructor(readonly input: DeleteBandwidthRateLimitCommandInput) {
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
  ): Handler<DeleteBandwidthRateLimitCommandInput, DeleteBandwidthRateLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBandwidthRateLimitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteBandwidthRateLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DeleteBandwidthRateLimit",
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
  private serialize(input: DeleteBandwidthRateLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteBandwidthRateLimitCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBandwidthRateLimitCommandOutput> {
    return de_DeleteBandwidthRateLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
