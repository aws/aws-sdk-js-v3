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
  StartExperimentRequest,
  StartExperimentRequestFilterSensitiveLog,
  StartExperimentResponse,
  StartExperimentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartExperimentCommand,
  serializeAws_restJson1StartExperimentCommand,
} from "../protocols/Aws_restJson1";

export interface StartExperimentCommandInput extends StartExperimentRequest {}
export interface StartExperimentCommandOutput extends StartExperimentResponse, __MetadataBearer {}

/**
 * <p>Starts an existing experiment. To create an experiment,
 *         use <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_CreateExperiment.html">CreateExperiment</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, StartExperimentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, StartExperimentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new StartExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExperimentCommandInput} for command's `input` shape.
 * @see {@link StartExperimentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class StartExperimentCommand extends $Command<
  StartExperimentCommandInput,
  StartExperimentCommandOutput,
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

  constructor(readonly input: StartExperimentCommandInput) {
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
  ): Handler<StartExperimentCommandInput, StartExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartExperimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "StartExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExperimentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartExperimentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExperimentCommandOutput> {
    return deserializeAws_restJson1StartExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
