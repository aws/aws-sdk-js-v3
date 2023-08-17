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

import { DescribeTapeRecoveryPointsInput, DescribeTapeRecoveryPointsOutput } from "../models/models_0";
import { de_DescribeTapeRecoveryPointsCommand, se_DescribeTapeRecoveryPointsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTapeRecoveryPointsCommand}.
 */
export interface DescribeTapeRecoveryPointsCommandInput extends DescribeTapeRecoveryPointsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTapeRecoveryPointsCommand}.
 */
export interface DescribeTapeRecoveryPointsCommandOutput extends DescribeTapeRecoveryPointsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of virtual tape recovery points that are available for the specified tape
 *          gateway.</p>
 *
 *          <p>A recovery point is a point-in-time view of a virtual tape at which all the data on the
 *          virtual tape is consistent. If your gateway crashes, virtual tapes that have recovery
 *          points can be recovered to a new gateway. This operation is only supported in the tape
 *          gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeTapeRecoveryPointsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeTapeRecoveryPointsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeTapeRecoveryPointsInput
 *   GatewayARN: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeTapeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTapeRecoveryPointsOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   TapeRecoveryPointInfos: [ // TapeRecoveryPointInfos
 * //     { // TapeRecoveryPointInfo
 * //       TapeARN: "STRING_VALUE",
 * //       TapeRecoveryPointTime: new Date("TIMESTAMP"),
 * //       TapeSizeInBytes: Number("long"),
 * //       TapeStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTapeRecoveryPointsCommandInput - {@link DescribeTapeRecoveryPointsCommandInput}
 * @returns {@link DescribeTapeRecoveryPointsCommandOutput}
 * @see {@link DescribeTapeRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link DescribeTapeRecoveryPointsCommandOutput} for command's `response` shape.
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
 * @example To describe virtual tape recovery points
 * ```javascript
 * // Returns a list of virtual tape recovery points that are available for the specified gateway-VTL.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "Limit": 1,
 *   "Marker": "1"
 * };
 * const command = new DescribeTapeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "Marker": "1",
 *   "TapeRecoveryPointInfos": [
 *     {
 *       "TapeARN": "arn:aws:storagegateway:us-east-1:999999999:tape/AMZN01A2A4",
 *       "TapeRecoveryPointTime": "2016-12-16T13:50Z",
 *       "TapeSizeInBytes": 1471550497,
 *       "TapeStatus": "AVAILABLE"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-virtual-tape-recovery-points-1471542042026
 * ```
 *
 */
export class DescribeTapeRecoveryPointsCommand extends $Command<
  DescribeTapeRecoveryPointsCommandInput,
  DescribeTapeRecoveryPointsCommandOutput,
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
  constructor(readonly input: DescribeTapeRecoveryPointsCommandInput) {
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
  ): Handler<DescribeTapeRecoveryPointsCommandInput, DescribeTapeRecoveryPointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTapeRecoveryPointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeTapeRecoveryPointsCommand";
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
  private serialize(input: DescribeTapeRecoveryPointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTapeRecoveryPointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTapeRecoveryPointsCommandOutput> {
    return de_DescribeTapeRecoveryPointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
