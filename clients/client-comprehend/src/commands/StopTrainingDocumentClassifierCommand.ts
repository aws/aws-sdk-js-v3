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
  StopTrainingDocumentClassifierRequest,
  StopTrainingDocumentClassifierRequestFilterSensitiveLog,
  StopTrainingDocumentClassifierResponse,
  StopTrainingDocumentClassifierResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopTrainingDocumentClassifierCommand,
  serializeAws_json1_1StopTrainingDocumentClassifierCommand,
} from "../protocols/Aws_json1_1";

export interface StopTrainingDocumentClassifierCommandInput extends StopTrainingDocumentClassifierRequest {}
export interface StopTrainingDocumentClassifierCommandOutput
  extends StopTrainingDocumentClassifierResponse,
    __MetadataBearer {}

/**
 * <p>Stops a document classifier training job while in progress.</p>
 *          <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and
 *       put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be
 *       stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and
 *       put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with
 *       an empty HTTP body. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, StopTrainingDocumentClassifierCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, StopTrainingDocumentClassifierCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new StopTrainingDocumentClassifierCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopTrainingDocumentClassifierCommandInput} for command's `input` shape.
 * @see {@link StopTrainingDocumentClassifierCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class StopTrainingDocumentClassifierCommand extends $Command<
  StopTrainingDocumentClassifierCommandInput,
  StopTrainingDocumentClassifierCommandOutput,
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

  constructor(readonly input: StopTrainingDocumentClassifierCommandInput) {
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
  ): Handler<StopTrainingDocumentClassifierCommandInput, StopTrainingDocumentClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopTrainingDocumentClassifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "StopTrainingDocumentClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTrainingDocumentClassifierRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopTrainingDocumentClassifierResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StopTrainingDocumentClassifierCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTrainingDocumentClassifierCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopTrainingDocumentClassifierCommandOutput> {
    return deserializeAws_json1_1StopTrainingDocumentClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
