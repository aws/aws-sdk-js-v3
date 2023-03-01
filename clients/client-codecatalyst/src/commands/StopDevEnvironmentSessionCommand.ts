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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import {
  StopDevEnvironmentSessionRequest,
  StopDevEnvironmentSessionRequestFilterSensitiveLog,
  StopDevEnvironmentSessionResponse,
  StopDevEnvironmentSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StopDevEnvironmentSessionCommand,
  serializeAws_restJson1StopDevEnvironmentSessionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link StopDevEnvironmentSessionCommand}.
 */
export interface StopDevEnvironmentSessionCommandInput extends StopDevEnvironmentSessionRequest {}
/**
 * The output of {@link StopDevEnvironmentSessionCommand}.
 */
export interface StopDevEnvironmentSessionCommandOutput extends StopDevEnvironmentSessionResponse, __MetadataBearer {}

/**
 * <p>Stops a session for a specified Dev Environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, StopDevEnvironmentSessionCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, StopDevEnvironmentSessionCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const command = new StopDevEnvironmentSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDevEnvironmentSessionCommandInput} for command's `input` shape.
 * @see {@link StopDevEnvironmentSessionCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 */
export class StopDevEnvironmentSessionCommand extends $Command<
  StopDevEnvironmentSessionCommandInput,
  StopDevEnvironmentSessionCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: StopDevEnvironmentSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopDevEnvironmentSessionCommandInput, StopDevEnvironmentSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopDevEnvironmentSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "StopDevEnvironmentSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDevEnvironmentSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopDevEnvironmentSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopDevEnvironmentSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopDevEnvironmentSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopDevEnvironmentSessionCommandOutput> {
    return deserializeAws_restJson1StopDevEnvironmentSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
