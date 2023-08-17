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

import { CreateTapesInput, CreateTapesOutput } from "../models/models_0";
import { de_CreateTapesCommand, se_CreateTapesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTapesCommand}.
 */
export interface CreateTapesCommandInput extends CreateTapesInput {}
/**
 * @public
 *
 * The output of {@link CreateTapesCommand}.
 */
export interface CreateTapesCommandOutput extends CreateTapesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates one or more virtual tapes. You write data to the virtual tapes and then archive
 *          the tapes. This operation is only supported in the tape gateway type.</p>
 *
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create virtual tapes.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateTapesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateTapesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateTapesInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeSizeInBytes: Number("long"), // required
 *   ClientToken: "STRING_VALUE", // required
 *   NumTapesToCreate: Number("int"), // required
 *   TapeBarcodePrefix: "STRING_VALUE", // required
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
 * const command = new CreateTapesCommand(input);
 * const response = await client.send(command);
 * // { // CreateTapesOutput
 * //   TapeARNs: [ // TapeARNs
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateTapesCommandInput - {@link CreateTapesCommandInput}
 * @returns {@link CreateTapesCommandOutput}
 * @see {@link CreateTapesCommandInput} for command's `input` shape.
 * @see {@link CreateTapesCommandOutput} for command's `response` shape.
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
 * @example To create a virtual tape
 * ```javascript
 * // Creates one or more virtual tapes.
 * const input = {
 *   "ClientToken": "77777",
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   "NumTapesToCreate": 3,
 *   "TapeBarcodePrefix": "TEST",
 *   "TapeSizeInBytes": 107374182400
 * };
 * const command = new CreateTapesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "TapeARNs": [
 *     "arn:aws:storagegateway:us-east-1:999999999999:tape/TEST38A29D",
 *     "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3AA29F",
 *     "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST3BA29E"
 *   ]
 * }
 * *\/
 * // example id: to-create-a-virtual-tape-1471372061659
 * ```
 *
 */
export class CreateTapesCommand extends $Command<
  CreateTapesCommandInput,
  CreateTapesCommandOutput,
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
  constructor(readonly input: CreateTapesCommandInput) {
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
  ): Handler<CreateTapesCommandInput, CreateTapesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTapesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "CreateTapesCommand";
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
  private serialize(input: CreateTapesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTapesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTapesCommandOutput> {
    return de_CreateTapesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
