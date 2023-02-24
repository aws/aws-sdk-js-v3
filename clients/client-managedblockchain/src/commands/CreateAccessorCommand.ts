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
  CreateAccessorInput,
  CreateAccessorInputFilterSensitiveLog,
  CreateAccessorOutput,
  CreateAccessorOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateAccessorCommand,
  serializeAws_restJson1CreateAccessorCommand,
} from "../protocols/Aws_restJson1";

export interface CreateAccessorCommandInput extends CreateAccessorInput {}
export interface CreateAccessorCommandOutput extends CreateAccessorOutput, __MetadataBearer {}

/**
 * <important>
 *             <p>The token based access feature is in preview release for Ethereum on Amazon Managed Blockchain and is
 *         subject to change. We recommend that you use this feature only with
 *         test scenarios, and not in production environments.</p>
 *          </important>
 *          <p>Creates a new accessor for use with Managed Blockchain Ethereum nodes. An accessor object is a container that has the information
 *          required for token based access to your Ethereum nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ManagedBlockchainClient, CreateAccessorCommand } from "@aws-sdk/client-managedblockchain"; // ES Modules import
 * // const { ManagedBlockchainClient, CreateAccessorCommand } = require("@aws-sdk/client-managedblockchain"); // CommonJS import
 * const client = new ManagedBlockchainClient(config);
 * const command = new CreateAccessorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessorCommandInput} for command's `input` shape.
 * @see {@link CreateAccessorCommandOutput} for command's `response` shape.
 * @see {@link ManagedBlockchainClientResolvedConfig | config} for ManagedBlockchainClient's `config` shape.
 *
 */
export class CreateAccessorCommand extends $Command<
  CreateAccessorCommandInput,
  CreateAccessorCommandOutput,
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

  constructor(readonly input: CreateAccessorCommandInput) {
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
  ): Handler<CreateAccessorCommandInput, CreateAccessorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccessorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ManagedBlockchainClient";
    const commandName = "CreateAccessorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessorInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAccessorOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccessorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAccessorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessorCommandOutput> {
    return deserializeAws_restJson1CreateAccessorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
