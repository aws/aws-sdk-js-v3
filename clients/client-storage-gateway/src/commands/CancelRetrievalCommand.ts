// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelRetrievalInput, CancelRetrievalOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CancelRetrievalCommand,
  serializeAws_json1_1CancelRetrievalCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 *
 * The input for {@link CancelRetrievalCommand}.
 */
export interface CancelRetrievalCommandInput extends CancelRetrievalInput {}
/**
 * @public
 *
 * The output of {@link CancelRetrievalCommand}.
 */
export interface CancelRetrievalCommandOutput extends CancelRetrievalOutput, __MetadataBearer {}

/**
 * @public
 * <p>Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after
 *          the retrieval process is initiated. The virtual tape is returned to the VTS. This operation
 *          is only supported in the tape gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CancelRetrievalCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CancelRetrievalCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new CancelRetrievalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CancelRetrievalCommandInput - {@link CancelRetrievalCommandInput}
 * @returns {@link CancelRetrievalCommandOutput}
 * @see {@link CancelRetrievalCommandInput} for command's `input` shape.
 * @see {@link CancelRetrievalCommandOutput} for command's `response` shape.
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
 *
 * @example To cancel virtual tape retrieval
 * ```javascript
 * // Cancels retrieval of a virtual tape from the virtual tape shelf (VTS) to a gateway after the retrieval process is initiated.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
 * };
 * const command = new CancelRetrievalCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TapeARN": "arn:aws:storagegateway:us-east-1:999999999999:tape/AMZN01A2A4"
 * }
 * *\/
 * // example id: to-cancel-virtual-tape-retrieval-1471295704491
 * ```
 *
 */
export class CancelRetrievalCommand extends $Command<
  CancelRetrievalCommandInput,
  CancelRetrievalCommandOutput,
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
  constructor(readonly input: CancelRetrievalCommandInput) {
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
  ): Handler<CancelRetrievalCommandInput, CancelRetrievalCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelRetrievalCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CancelRetrievalCommand";
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
  private serialize(input: CancelRetrievalCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelRetrievalCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelRetrievalCommandOutput> {
    return deserializeAws_json1_1CancelRetrievalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
