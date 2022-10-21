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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  StopTrainingEntityRecognizerRequest,
  StopTrainingEntityRecognizerRequestFilterSensitiveLog,
  StopTrainingEntityRecognizerResponse,
  StopTrainingEntityRecognizerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopTrainingEntityRecognizerCommand,
  serializeAws_json1_1StopTrainingEntityRecognizerCommand,
} from "../protocols/Aws_json1_1";

export interface StopTrainingEntityRecognizerCommandInput extends StopTrainingEntityRecognizerRequest {}
export interface StopTrainingEntityRecognizerCommandOutput
  extends StopTrainingEntityRecognizerResponse,
    __MetadataBearer {}

/**
 * <p>Stops an entity recognizer training job while in progress.</p>
 *          <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and
 *       put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be
 *       stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and
 *       putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response
 *       with an empty HTTP body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopTrainingEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopTrainingEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StopTrainingEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTrainingEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link StopTrainingEntityRecognizerCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class StopTrainingEntityRecognizerCommand extends $Command<
  StopTrainingEntityRecognizerCommandInput,
  StopTrainingEntityRecognizerCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: StopTrainingEntityRecognizerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopTrainingEntityRecognizerCommandInput, StopTrainingEntityRecognizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopTrainingEntityRecognizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StopTrainingEntityRecognizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTrainingEntityRecognizerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopTrainingEntityRecognizerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopTrainingEntityRecognizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTrainingEntityRecognizerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopTrainingEntityRecognizerCommandOutput> {
    return deserializeAws_json1_1StopTrainingEntityRecognizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
