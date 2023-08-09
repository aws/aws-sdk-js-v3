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

import { ImportSshPublicKeyRequest, ImportSshPublicKeyResponse } from "../models/models_0";
import { de_ImportSshPublicKeyCommand, se_ImportSshPublicKeyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportSshPublicKeyCommand}.
 */
export interface ImportSshPublicKeyCommandInput extends ImportSshPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link ImportSshPublicKeyCommand}.
 */
export interface ImportSshPublicKeyCommandOutput extends ImportSshPublicKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a Secure Shell (SSH) public key to a Transfer Family user identified by a
 *         <code>UserName</code> value assigned to the specific file transfer protocol-enabled server,
 *       identified by <code>ServerId</code>.</p>
 *          <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and
 *       the name of the <code>SshPublicKeyId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ImportSshPublicKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ImportSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // ImportSshPublicKeyRequest
 *   ServerId: "STRING_VALUE", // required
 *   SshPublicKeyBody: "STRING_VALUE", // required
 *   UserName: "STRING_VALUE", // required
 * };
 * const command = new ImportSshPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // ImportSshPublicKeyResponse
 * //   ServerId: "STRING_VALUE", // required
 * //   SshPublicKeyId: "STRING_VALUE", // required
 * //   UserName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ImportSshPublicKeyCommandInput - {@link ImportSshPublicKeyCommandInput}
 * @returns {@link ImportSshPublicKeyCommandOutput}
 * @see {@link ImportSshPublicKeyCommandInput} for command's `input` shape.
 * @see {@link ImportSshPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist.</p>
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
export class ImportSshPublicKeyCommand extends $Command<
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput,
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
  constructor(readonly input: ImportSshPublicKeyCommandInput) {
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
  ): Handler<ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportSshPublicKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ImportSshPublicKeyCommand";
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
  private serialize(input: ImportSshPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportSshPublicKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportSshPublicKeyCommandOutput> {
    return de_ImportSshPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
