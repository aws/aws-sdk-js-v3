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

import { DeleteHostKeyRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteHostKeyCommand,
  serializeAws_json1_1DeleteHostKeyCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 *
 * The input for {@link DeleteHostKeyCommand}.
 */
export interface DeleteHostKeyCommandInput extends DeleteHostKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteHostKeyCommand}.
 */
export interface DeleteHostKeyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteHostKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteHostKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DeleteHostKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteHostKeyCommandInput - {@link DeleteHostKeyCommandInput}
 * @returns {@link DeleteHostKeyCommandOutput}
 * @see {@link DeleteHostKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteHostKeyCommandOutput} for command's `response` shape.
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
 *
 */
export class DeleteHostKeyCommand extends $Command<
  DeleteHostKeyCommandInput,
  DeleteHostKeyCommandOutput,
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
  constructor(readonly input: DeleteHostKeyCommandInput) {
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
  ): Handler<DeleteHostKeyCommandInput, DeleteHostKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteHostKeyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DeleteHostKeyCommand";
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
  private serialize(input: DeleteHostKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteHostKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteHostKeyCommandOutput> {
    return deserializeAws_json1_1DeleteHostKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
