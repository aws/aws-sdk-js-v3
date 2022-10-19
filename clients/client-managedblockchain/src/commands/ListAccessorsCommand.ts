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
  ListAccessorsInput,
  ListAccessorsInputFilterSensitiveLog,
  ListAccessorsOutput,
  ListAccessorsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAccessorsCommand,
  serializeAws_restJson1ListAccessorsCommand,
} from "../protocols/Aws_restJson1";

export interface ListAccessorsCommandInput extends ListAccessorsInput {}
export interface ListAccessorsCommandOutput extends ListAccessorsOutput, __MetadataBearer {}

/**
 * <important>
 *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
 *         subject to change. We recommend that you use this feature only with
 *         test scenarios, and not in production environments.</p>
 *          </important>
 *          <p>Returns a list of the accessors and their properties. Accessor objects are containers that have the
 *          information required for token based access to your Ethereum nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, ListAccessorsCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, ListAccessorsCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new ListAccessorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessorsCommandInput} for command's `input` shape.
 * @see {@link ListAccessorsCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 */
export class ListAccessorsCommand extends $Command<
  ListAccessorsCommandInput,
  ListAccessorsCommandOutput,
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

  constructor(readonly input: ListAccessorsCommandInput) {
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
  ): Handler<ListAccessorsCommandInput, ListAccessorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAccessorsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "ListAccessorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessorsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListAccessorsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccessorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccessorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessorsCommandOutput> {
    return deserializeAws_restJson1ListAccessorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
