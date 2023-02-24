// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getPredictEndpointPlugin } from "@aws-sdk/middleware-sdk-machinelearning";
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

import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import {
  PredictInput,
  PredictInputFilterSensitiveLog,
  PredictOutput,
  PredictOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1PredictCommand, serializeAws_json1_1PredictCommand } from "../protocols/Aws_json1_1";

export interface PredictCommandInput extends PredictInput {}
export interface PredictCommandOutput extends PredictOutput, __MetadataBearer {}

/**
 * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p>
 *         <p>
 *             <b>Note:</b> Not all response parameters will be populated. Whether a
 *           response parameter is populated depends on the type of model requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MachineLearningClient, PredictCommand } from "@aws-sdk/client-machine-learning"; // ES Modules import
 * // const { MachineLearningClient, PredictCommand } = require("@aws-sdk/client-machine-learning"); // CommonJS import
 * const client = new MachineLearningClient(config);
 * const command = new PredictCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PredictCommandInput} for command's `input` shape.
 * @see {@link PredictCommandOutput} for command's `response` shape.
 * @see {@link MachineLearningClientResolvedConfig | config} for MachineLearningClient's `config` shape.
 *
 */
export class PredictCommand extends $Command<
  PredictCommandInput,
  PredictCommandOutput,
  MachineLearningClientResolvedConfig
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

  constructor(readonly input: PredictCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MachineLearningClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PredictCommandInput, PredictCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PredictCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getPredictEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MachineLearningClient";
    const commandName = "PredictCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PredictInputFilterSensitiveLog,
      outputFilterSensitiveLog: PredictOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PredictCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PredictCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PredictCommandOutput> {
    return deserializeAws_json1_1PredictCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
