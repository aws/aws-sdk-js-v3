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

import { CreateTapeWithBarcodeInput, CreateTapeWithBarcodeOutput } from "../models/models_0";
import { de_CreateTapeWithBarcodeCommand, se_CreateTapeWithBarcodeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTapeWithBarcodeCommand}.
 */
export interface CreateTapeWithBarcodeCommandInput extends CreateTapeWithBarcodeInput {}
/**
 * @public
 *
 * The output of {@link CreateTapeWithBarcodeCommand}.
 */
export interface CreateTapeWithBarcodeCommandOutput extends CreateTapeWithBarcodeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a virtual tape by using your own barcode. You write data to the virtual tape and
 *          then archive the tape. A barcode is unique and cannot be reused if it has already been used
 *          on a tape. This applies to barcodes used on deleted tapes. This operation is only supported
 *          in the tape gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a virtual tape.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapeWithBarcodeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapeWithBarcodeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateTapeWithBarcodeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeSizeInBytes: Number("long"), // required
 *   TapeBarcode: "STRING_VALUE", // required
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   PoolId: "STRING_VALUE",
 *   Worm: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTapeWithBarcodeCommand(input);
 * const response = await client.send(command);
 * // { // CreateTapeWithBarcodeOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTapeWithBarcodeCommandInput - {@link CreateTapeWithBarcodeCommandInput}
 * @returns {@link CreateTapeWithBarcodeCommandOutput}
 * @see {@link CreateTapeWithBarcodeCommandInput} for command's `input` shape.
 * @see {@link CreateTapeWithBarcodeCommandOutput} for command's `response` shape.
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
 * @example To create a virtual tape using a barcode
 * ```javascript
 * // Creates a virtual tape by using your own barcode.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   "TapeBarcode": "TEST12345",
 *   "TapeSizeInBytes": 107374182400
 * };
 * const command = new CreateTapeWithBarcodeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST12345"
 * }
 * *\/
 * // example id: to-create-a-virtual-tape-using-a-barcode-1471371842452
 * ```
 *
 */
export class CreateTapeWithBarcodeCommand extends $Command<
  CreateTapeWithBarcodeCommandInput,
  CreateTapeWithBarcodeCommandOutput,
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
  constructor(readonly input: CreateTapeWithBarcodeCommandInput) {
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
  ): Handler<CreateTapeWithBarcodeCommandInput, CreateTapeWithBarcodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTapeWithBarcodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateTapeWithBarcodeCommand";
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
  private serialize(input: CreateTapeWithBarcodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTapeWithBarcodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTapeWithBarcodeCommandOutput> {
    return de_CreateTapeWithBarcodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
