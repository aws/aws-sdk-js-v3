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

import { StartFileTransferRequest, StartFileTransferResponse } from "../models/models_0";
import { de_StartFileTransferCommand, se_StartFileTransferCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartFileTransferCommand}.
 */
export interface StartFileTransferCommandInput extends StartFileTransferRequest {}
/**
 * @public
 *
 * The output of {@link StartFileTransferCommand}.
 */
export interface StartFileTransferCommandOutput extends StartFileTransferResponse, __MetadataBearer {}

/**
 * @public
 * <p>Begins a file transfer between local Amazon Web Services storage and a remote AS2 or SFTP server.</p>
 *          <ul>
 *             <li>
 *                <p>For an AS2 connector, you specify the <code>ConnectorId</code> and one or more <code>SendFilePaths</code> to identify the files
 *           you want to transfer.</p>
 *             </li>
 *             <li>
 *                <p>For an SFTP connector, the file transfer can be either outbound or inbound. In both
 *           cases, you specify the <code>ConnectorId</code>. Depending on the direction of the transfer,
 *           you also specify the following items:</p>
 *                <ul>
 *                   <li>
 *                      <p>If you are transferring file from a partner's SFTP server to Amazon Web Services
 *               storage, you specify one or more <code>RetreiveFilePaths</code> to identify the files
 *               you want to transfer, and a <code>LocalDirectoryPath</code> to specify the destination
 *               folder.</p>
 *                   </li>
 *                   <li>
 *                      <p>If you are transferring file to a partner's SFTP server from Amazon Web Services
 *               storage, you specify one or more <code>SendFilePaths</code> to identify the files you
 *               want to transfer, and a <code>RemoteDirectoryPath</code> to specify the destination
 *               folder.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, StartFileTransferCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, StartFileTransferCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // StartFileTransferRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   SendFilePaths: [ // FilePaths
 *     "STRING_VALUE",
 *   ],
 *   RetrieveFilePaths: [
 *     "STRING_VALUE",
 *   ],
 *   LocalDirectoryPath: "STRING_VALUE",
 *   RemoteDirectoryPath: "STRING_VALUE",
 * };
 * const command = new StartFileTransferCommand(input);
 * const response = await client.send(command);
 * // { // StartFileTransferResponse
 * //   TransferId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartFileTransferCommandInput - {@link StartFileTransferCommandInput}
 * @returns {@link StartFileTransferCommandOutput}
 * @see {@link StartFileTransferCommandInput} for command's `input` shape.
 * @see {@link StartFileTransferCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class StartFileTransferCommand extends $Command<
  StartFileTransferCommandInput,
  StartFileTransferCommandOutput,
  TransferClientResolvedConfig
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
  constructor(readonly input: StartFileTransferCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartFileTransferCommandInput, StartFileTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartFileTransferCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "StartFileTransferCommand";
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
  private serialize(input: StartFileTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartFileTransferCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartFileTransferCommandOutput> {
    return de_StartFileTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
