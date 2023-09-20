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

import { DescribeTapesInput, DescribeTapesOutput } from "../models/models_0";
import { de_DescribeTapesCommand, se_DescribeTapesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTapesCommand}.
 */
export interface DescribeTapesCommandInput extends DescribeTapesInput {}
/**
 * @public
 *
 * The output of {@link DescribeTapesCommand}.
 */
export interface DescribeTapesCommandOutput extends DescribeTapesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a
 *             <code>TapeARN</code> is not specified, returns a description of all virtual tapes
 *          associated with the specified gateway. This operation is only supported in the tape gateway
 *          type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeTapesInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeARNs: [ // TapeARNs
 *     "STRING_VALUE",
 *   ],
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeTapesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTapesOutput
 * //   Tapes: [ // Tapes
 * //     { // Tape
 * //       TapeARN: "STRING_VALUE",
 * //       TapeBarcode: "STRING_VALUE",
 * //       TapeCreatedDate: new Date("TIMESTAMP"),
 * //       TapeSizeInBytes: Number("long"),
 * //       TapeStatus: "STRING_VALUE",
 * //       VTLDevice: "STRING_VALUE",
 * //       Progress: Number("double"),
 * //       TapeUsedInBytes: Number("long"),
 * //       KMSKey: "STRING_VALUE",
 * //       PoolId: "STRING_VALUE",
 * //       Worm: true || false,
 * //       RetentionStartDate: new Date("TIMESTAMP"),
 * //       PoolEntryDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTapesCommandInput - {@link DescribeTapesCommandInput}
 * @returns {@link DescribeTapesCommandOutput}
 * @see {@link DescribeTapesCommandInput} for command's `input` shape.
 * @see {@link DescribeTapesCommandOutput} for command's `response` shape.
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
 * @example To describe virtual tape(s) associated with gateway
 * ```javascript
 * // Returns a description of the specified Amazon Resource Name (ARN) of virtual tapes. If a TapeARN is not specified, returns a description of all virtual tapes.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   "Limit": 2,
 *   "Marker": "1",
 *   "TapeARNs": [
 *     "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST04A2A1",
 *     "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST05A2A0"
 *   ]
 * };
 * const command = new DescribeTapesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "1",
 *   "Tapes": [
 *     {
 *       "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST04A2A1",
 *       "TapeBarcode": "TEST04A2A1",
 *       "TapeSizeInBytes": 107374182400,
 *       "TapeStatus": "AVAILABLE"
 *     },
 *     {
 *       "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST05A2A0",
 *       "TapeBarcode": "TEST05A2A0",
 *       "TapeSizeInBytes": 107374182400,
 *       "TapeStatus": "AVAILABLE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-virtual-tapes-associated-with-gateway-1471629287727
 * ```
 *
 */
export class DescribeTapesCommand extends $Command<
  DescribeTapesCommandInput,
  DescribeTapesCommandOutput,
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
  constructor(readonly input: DescribeTapesCommandInput) {
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
  ): Handler<DescribeTapesCommandInput, DescribeTapesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeTapesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeTapesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DescribeTapes",
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
  private serialize(input: DescribeTapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTapesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTapesCommandOutput> {
    return de_DescribeTapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
