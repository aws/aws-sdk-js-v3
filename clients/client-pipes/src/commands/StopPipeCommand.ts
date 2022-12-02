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
  StopPipeRequest,
  StopPipeRequestFilterSensitiveLog,
  StopPipeResponse,
  StopPipeResponseFilterSensitiveLog,
} from "../models/models_0";
import { PipesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PipesClient";
import {
  deserializeAws_restJson1StopPipeCommand,
  serializeAws_restJson1StopPipeCommand,
} from "../protocols/Aws_restJson1";

export interface StopPipeCommandInput extends StopPipeRequest {}
export interface StopPipeCommandOutput extends StopPipeResponse, __MetadataBearer {}

/**
 * <p>Stop an existing pipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, StopPipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, StopPipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * const client = new PipesClient(config);
 * const command = new StopPipeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopPipeCommandInput} for command's `input` shape.
 * @see {@link StopPipeCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 */
export class StopPipeCommand extends $Command<StopPipeCommandInput, StopPipeCommandOutput, PipesClientResolvedConfig> {
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

  constructor(readonly input: StopPipeCommandInput) {
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
  ): Handler<StopPipeCommandInput, StopPipeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopPipeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PipesClient";
    const commandName = "StopPipeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopPipeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopPipeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopPipeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopPipeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopPipeCommandOutput> {
    return deserializeAws_restJson1StopPipeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
