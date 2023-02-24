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
  UpdateInferenceExperimentRequest,
  UpdateInferenceExperimentRequestFilterSensitiveLog,
  UpdateInferenceExperimentResponse,
  UpdateInferenceExperimentResponseFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_json1_1UpdateInferenceExperimentCommand,
  serializeAws_json1_1UpdateInferenceExperimentCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface UpdateInferenceExperimentCommandInput extends UpdateInferenceExperimentRequest {}
export interface UpdateInferenceExperimentCommandOutput extends UpdateInferenceExperimentResponse, __MetadataBearer {}

/**
 * <p>
 *            Updates an inference experiment that you created. The status of the inference experiment has to be either
 *            <code>Created</code>, <code>Running</code>. For more information on the status of an inference experiment,
 *            see <a>DescribeInferenceExperimentResponse$Status</a>.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateInferenceExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateInferenceExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateInferenceExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateInferenceExperimentCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class UpdateInferenceExperimentCommand extends $Command<
  UpdateInferenceExperimentCommandInput,
  UpdateInferenceExperimentCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: UpdateInferenceExperimentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInferenceExperimentCommandInput, UpdateInferenceExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInferenceExperimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateInferenceExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateInferenceExperimentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateInferenceExperimentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateInferenceExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateInferenceExperimentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInferenceExperimentCommandOutput> {
    return deserializeAws_json1_1UpdateInferenceExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
