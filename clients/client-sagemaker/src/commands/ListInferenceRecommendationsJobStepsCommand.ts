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
  ListInferenceRecommendationsJobStepsRequest,
  ListInferenceRecommendationsJobStepsRequestFilterSensitiveLog,
  ListInferenceRecommendationsJobStepsResponse,
  ListInferenceRecommendationsJobStepsResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1ListInferenceRecommendationsJobStepsCommand,
  serializeAws_json1_1ListInferenceRecommendationsJobStepsCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface ListInferenceRecommendationsJobStepsCommandInput extends ListInferenceRecommendationsJobStepsRequest {}
export interface ListInferenceRecommendationsJobStepsCommandOutput
  extends ListInferenceRecommendationsJobStepsResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the subtasks for an Inference Recommender job.</p>
 *          <p>The supported subtasks are benchmarks, which evaluate the performance of your model on different instance types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListInferenceRecommendationsJobStepsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListInferenceRecommendationsJobStepsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListInferenceRecommendationsJobStepsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInferenceRecommendationsJobStepsCommandInput} for command's `input` shape.
 * @see {@link ListInferenceRecommendationsJobStepsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class ListInferenceRecommendationsJobStepsCommand extends $Command<
  ListInferenceRecommendationsJobStepsCommandInput,
  ListInferenceRecommendationsJobStepsCommandOutput,
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

  constructor(readonly input: ListInferenceRecommendationsJobStepsCommandInput) {
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
  ): Handler<ListInferenceRecommendationsJobStepsCommandInput, ListInferenceRecommendationsJobStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInferenceRecommendationsJobStepsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListInferenceRecommendationsJobStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInferenceRecommendationsJobStepsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInferenceRecommendationsJobStepsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListInferenceRecommendationsJobStepsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListInferenceRecommendationsJobStepsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListInferenceRecommendationsJobStepsCommandOutput> {
    return deserializeAws_json1_1ListInferenceRecommendationsJobStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
