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
  StartSimulationInput,
  StartSimulationInputFilterSensitiveLog,
  StartSimulationOutput,
  StartSimulationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartSimulationCommand,
  serializeAws_restJson1StartSimulationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

export interface StartSimulationCommandInput extends StartSimulationInput {}
export interface StartSimulationCommandOutput extends StartSimulationOutput, __MetadataBearer {}

/**
 * <p>Starts a simulation with the given name and schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, StartSimulationCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, StartSimulationCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const command = new StartSimulationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSimulationCommandInput} for command's `input` shape.
 * @see {@link StartSimulationCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 */
export class StartSimulationCommand extends $Command<
  StartSimulationCommandInput,
  StartSimulationCommandOutput,
  SimSpaceWeaverClientResolvedConfig
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

  constructor(readonly input: StartSimulationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SimSpaceWeaverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSimulationCommandInput, StartSimulationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSimulationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SimSpaceWeaverClient";
    const commandName = "StartSimulationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSimulationInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartSimulationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSimulationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartSimulationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSimulationCommandOutput> {
    return deserializeAws_restJson1StartSimulationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
