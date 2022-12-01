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
  StartPipeRequest,
  StartPipeRequestFilterSensitiveLog,
  StartPipeResponse,
  StartPipeResponseFilterSensitiveLog,
} from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import {
  deserializeAws_restJson1StartPipeCommand,
  serializeAws_restJson1StartPipeCommand,
} from "../protocols/Aws_restJson1";

export interface StartPipeCommandInput extends StartPipeRequest {}
export interface StartPipeCommandOutput extends StartPipeResponse, __MetadataBearer {}

/**
 * <p>Start an existing pipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, StartPipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, StartPipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * const client = new PipesClient(config);
 * const command = new StartPipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPipeCommandInput} for command's `input` shape.
 * @see {@link StartPipeCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 */
export class StartPipeCommand extends $Command<
  StartPipeCommandInput,
  StartPipeCommandOutput,
  PipesClientResolvedConfig
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

  constructor(readonly input: StartPipeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PipesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartPipeCommandInput, StartPipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartPipeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PipesClient";
    const commandName = "StartPipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartPipeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartPipeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartPipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartPipeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartPipeCommandOutput> {
    return deserializeAws_restJson1StartPipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
