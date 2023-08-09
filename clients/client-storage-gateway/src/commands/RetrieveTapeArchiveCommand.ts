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

import { RetrieveTapeArchiveInput, RetrieveTapeArchiveOutput } from "../models/models_0";
import { de_RetrieveTapeArchiveCommand, se_RetrieveTapeArchiveCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RetrieveTapeArchiveCommand}.
 */
export interface RetrieveTapeArchiveCommandInput extends RetrieveTapeArchiveInput {}
/**
 * @public
 *
 * The output of {@link RetrieveTapeArchiveCommand}.
 */
export interface RetrieveTapeArchiveCommandOutput extends RetrieveTapeArchiveOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a tape gateway.
 *          Virtual tapes archived in the VTS are not associated with any gateway. However after a tape
 *          is retrieved, it is associated with a gateway, even though it is also listed in the VTS,
 *          that is, archive. This operation is only supported in the tape gateway type.</p>
 *
 *          <p>Once a tape is successfully retrieved to a gateway, it cannot be retrieved again to
 *          another gateway. You must archive the tape again before you can retrieve it to another
 *          gateway. This operation is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, RetrieveTapeArchiveCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, RetrieveTapeArchiveCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // RetrieveTapeArchiveInput
 *   TapeARN: "STRING_VALUE", // required
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new RetrieveTapeArchiveCommand(input);
 * const response = await client.send(command);
 * // { // RetrieveTapeArchiveOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RetrieveTapeArchiveCommandInput - {@link RetrieveTapeArchiveCommandInput}
 * @returns {@link RetrieveTapeArchiveCommandOutput}
 * @see {@link RetrieveTapeArchiveCommandInput} for command's `input` shape.
 * @see {@link RetrieveTapeArchiveCommandOutput} for command's `response` shape.
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
 * @example To retrieve an archived tape from the VTS
 * ```javascript
 * // Retrieves an archived virtual tape from the virtual tape shelf (VTS) to a gateway-VTL. Virtual tapes archived in the VTS are not associated with any gateway.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
 * };
 * const command = new RetrieveTapeArchiveCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST0AA2AF"
 * }
 * *\/
 * // example id: to-retrieve-an-archived-tape-from-the-vts-1472149812358
 * ```
 *
 */
export class RetrieveTapeArchiveCommand extends $Command<
  RetrieveTapeArchiveCommandInput,
  RetrieveTapeArchiveCommandOutput,
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
  constructor(readonly input: RetrieveTapeArchiveCommandInput) {
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
  ): Handler<RetrieveTapeArchiveCommandInput, RetrieveTapeArchiveCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RetrieveTapeArchiveCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "RetrieveTapeArchiveCommand";
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
  private serialize(input: RetrieveTapeArchiveCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RetrieveTapeArchiveCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RetrieveTapeArchiveCommandOutput> {
    return de_RetrieveTapeArchiveCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
