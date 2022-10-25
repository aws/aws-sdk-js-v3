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
  StartDiscovererRequest,
  StartDiscovererRequestFilterSensitiveLog,
  StartDiscovererResponse,
  StartDiscovererResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartDiscovererCommand,
  serializeAws_restJson1StartDiscovererCommand,
} from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

export interface StartDiscovererCommandInput extends StartDiscovererRequest {}
export interface StartDiscovererCommandOutput extends StartDiscovererResponse, __MetadataBearer {}

/**
 * <p>Starts the discoverer</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, StartDiscovererCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, StartDiscovererCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new StartDiscovererCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDiscovererCommandInput} for command's `input` shape.
 * @see {@link StartDiscovererCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 */
export class StartDiscovererCommand extends $Command<
  StartDiscovererCommandInput,
  StartDiscovererCommandOutput,
  SchemasClientResolvedConfig
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

  constructor(readonly input: StartDiscovererCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDiscovererCommandInput, StartDiscovererCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDiscovererCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "StartDiscovererCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDiscovererRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartDiscovererResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDiscovererCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartDiscovererCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDiscovererCommandOutput> {
    return deserializeAws_restJson1StartDiscovererCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
