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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  StopLaunchRequest,
  StopLaunchRequestFilterSensitiveLog,
  StopLaunchResponse,
  StopLaunchResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StopLaunchCommand,
  serializeAws_restJson1StopLaunchCommand,
} from "../protocols/Aws_restJson1";

export interface StopLaunchCommandInput extends StopLaunchRequest {}
export interface StopLaunchCommandOutput extends StopLaunchResponse, __MetadataBearer {}

/**
 * <p>Stops a launch that is currently running. After you stop a launch, you will not be able to resume it or restart it.
 *        Also, it
 *        will not be evaluated as a rule for traffic allocation, and the traffic that was allocated to the launch
 *        will instead be available to the feature's experiment, if there is one. Otherwise, all traffic
 *        will be served the default variation after the launch is stopped.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StopLaunchCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StopLaunchCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new StopLaunchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopLaunchCommandInput} for command's `input` shape.
 * @see {@link StopLaunchCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class StopLaunchCommand extends $Command<
  StopLaunchCommandInput,
  StopLaunchCommandOutput,
  EvidentlyClientResolvedConfig
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

  constructor(readonly input: StopLaunchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopLaunchCommandInput, StopLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StopLaunchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "StopLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopLaunchRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopLaunchResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopLaunchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopLaunchCommandOutput> {
    return deserializeAws_restJson1StopLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
