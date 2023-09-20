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

import { DescribeBandwidthRateLimitInput, DescribeBandwidthRateLimitOutput } from "../models/models_0";
import { de_DescribeBandwidthRateLimitCommand, se_DescribeBandwidthRateLimitCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBandwidthRateLimitCommand}.
 */
export interface DescribeBandwidthRateLimitCommandInput extends DescribeBandwidthRateLimitInput {}
/**
 * @public
 *
 * The output of {@link DescribeBandwidthRateLimitCommand}.
 */
export interface DescribeBandwidthRateLimitCommandOutput extends DescribeBandwidthRateLimitOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the bandwidth rate limits of a gateway. By default, these limits are not set,
 *          which means no bandwidth rate limiting is in effect. This operation is supported only for
 *          the stored volume, cached volume, and tape gateway types. To describe bandwidth rate limits
 *          for S3 file gateways, use <a>DescribeBandwidthRateLimitSchedule</a>.</p>
 *          <p>This operation returns a value for a bandwidth rate limit only if the limit is set. If
 *          no limits are set for the gateway, then this operation returns only the gateway ARN in the
 *          response body. To specify which gateway to describe, use the Amazon Resource Name (ARN) of
 *          the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeBandwidthRateLimitCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeBandwidthRateLimitCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeBandwidthRateLimitInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBandwidthRateLimitOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   AverageUploadRateLimitInBitsPerSec: Number("long"),
 * //   AverageDownloadRateLimitInBitsPerSec: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeBandwidthRateLimitCommandInput - {@link DescribeBandwidthRateLimitCommandInput}
 * @returns {@link DescribeBandwidthRateLimitCommandOutput}
 * @see {@link DescribeBandwidthRateLimitCommandInput} for command's `input` shape.
 * @see {@link DescribeBandwidthRateLimitCommandOutput} for command's `response` shape.
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
 * @example To describe the bandwidth rate limits of a gateway
 * ```javascript
 * // Returns a value for a bandwidth rate limit if set. If not set, then only the gateway ARN is returned.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeBandwidthRateLimitCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AverageDownloadRateLimitInBitsPerSec": 204800,
 *   "AverageUploadRateLimitInBitsPerSec": 102400,
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-describe-the-bandwidth-rate-limits-of-a-gateway-1471384826404
 * ```
 *
 */
export class DescribeBandwidthRateLimitCommand extends $Command<
  DescribeBandwidthRateLimitCommandInput,
  DescribeBandwidthRateLimitCommandOutput,
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
  constructor(readonly input: DescribeBandwidthRateLimitCommandInput) {
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
  ): Handler<DescribeBandwidthRateLimitCommandInput, DescribeBandwidthRateLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBandwidthRateLimitCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeBandwidthRateLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DescribeBandwidthRateLimit",
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
  private serialize(input: DescribeBandwidthRateLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBandwidthRateLimitCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBandwidthRateLimitCommandOutput> {
    return de_DescribeBandwidthRateLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
