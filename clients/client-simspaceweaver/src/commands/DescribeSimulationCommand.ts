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
  DescribeSimulationInput,
  DescribeSimulationInputFilterSensitiveLog,
  DescribeSimulationOutput,
  DescribeSimulationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeSimulationCommand,
  serializeAws_restJson1DescribeSimulationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

export interface DescribeSimulationCommandInput extends DescribeSimulationInput {}
export interface DescribeSimulationCommandOutput extends DescribeSimulationOutput, __MetadataBearer {}

/**
 * <p>Returns the current state of the given simulation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, DescribeSimulationCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, DescribeSimulationCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * const client = new SimSpaceWeaverClient(config);
 * const command = new DescribeSimulationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSimulationCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 */
export class DescribeSimulationCommand extends $Command<
  DescribeSimulationCommandInput,
  DescribeSimulationCommandOutput,
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

  constructor(readonly input: DescribeSimulationCommandInput) {
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
  ): Handler<DescribeSimulationCommandInput, DescribeSimulationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSimulationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SimSpaceWeaverClient";
    const commandName = "DescribeSimulationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSimulationInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSimulationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSimulationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSimulationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSimulationCommandOutput> {
    return deserializeAws_restJson1DescribeSimulationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
