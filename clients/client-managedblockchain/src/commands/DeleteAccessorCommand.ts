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

import {
  ManagedBlockchainClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ManagedBlockchainClient";
import {
  DeleteAccessorInput,
  DeleteAccessorInputFilterSensitiveLog,
  DeleteAccessorOutput,
  DeleteAccessorOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAccessorCommand,
  serializeAws_restJson1DeleteAccessorCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAccessorCommandInput extends DeleteAccessorInput {}
export interface DeleteAccessorCommandOutput extends DeleteAccessorOutput, __MetadataBearer {}

/**
 * <important>
 *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
 *         subject to change. We recommend that you use this feature only with
 *         test scenarios, and not in production environments.</p>
 *          </important>
 *          <p>Deletes an accessor that your Amazon Web Services account owns. An accessor object is a container that has the
 *          information required for token based access to your Ethereum nodes including, the
 *          <code>BILLING_TOKEN</code>. After an accessor is deleted, the status of the accessor changes
 *          from <code>AVAILABLE</code> to <code>PENDING_DELETION</code>. An accessor in the
 *          <code>PENDING_DELETION</code> state can’t be used for new WebSocket requests or
 *          HTTP requests. However, WebSocket connections that were initiated while the accessor was in the
 *          <code>AVAILABLE</code> state remain open until they expire (up to 2 hours).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, DeleteAccessorCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, DeleteAccessorCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new DeleteAccessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessorCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessorCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 */
export class DeleteAccessorCommand extends $Command<
  DeleteAccessorCommandInput,
  DeleteAccessorCommandOutput,
  ManagedBlockchainClientResolvedConfig
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

  constructor(readonly input: DeleteAccessorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ManagedBlockchainClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccessorCommandInput, DeleteAccessorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAccessorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "DeleteAccessorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccessorInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAccessorOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccessorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAccessorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccessorCommandOutput> {
    return deserializeAws_restJson1DeleteAccessorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
