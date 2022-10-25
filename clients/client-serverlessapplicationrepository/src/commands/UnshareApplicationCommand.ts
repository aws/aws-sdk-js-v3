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

import { UnshareApplicationRequest, UnshareApplicationRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1UnshareApplicationCommand,
  serializeAws_restJson1UnshareApplicationCommand,
} from "../protocols/Aws_restJson1";
import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";

export interface UnshareApplicationCommandInput extends UnshareApplicationRequest {}
export interface UnshareApplicationCommandOutput extends __MetadataBearer {}

/**
 * <p>Unshares an application from an AWS Organization.</p><p>This operation can be called only from the organization's master account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, UnshareApplicationCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, UnshareApplicationCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new UnshareApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnshareApplicationCommandInput} for command's `input` shape.
 * @see {@link UnshareApplicationCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 */
export class UnshareApplicationCommand extends $Command<
  UnshareApplicationCommandInput,
  UnshareApplicationCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
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

  constructor(readonly input: UnshareApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnshareApplicationCommandInput, UnshareApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnshareApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "UnshareApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnshareApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnshareApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnshareApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnshareApplicationCommandOutput> {
    return deserializeAws_restJson1UnshareApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
