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
  DescribeInferenceRecommendationsJobRequest,
  DescribeInferenceRecommendationsJobRequestFilterSensitiveLog,
  DescribeInferenceRecommendationsJobResponse,
  DescribeInferenceRecommendationsJobResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1DescribeInferenceRecommendationsJobCommand,
  serializeAws_json1_1DescribeInferenceRecommendationsJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface DescribeInferenceRecommendationsJobCommandInput extends DescribeInferenceRecommendationsJobRequest {}
export interface DescribeInferenceRecommendationsJobCommandOutput
  extends DescribeInferenceRecommendationsJobResponse,
    __MetadataBearer {}

/**
 * <p>Provides the results of the Inference Recommender job.
 *           One or more recommendation jobs are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeInferenceRecommendationsJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeInferenceRecommendationsJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeInferenceRecommendationsJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInferenceRecommendationsJobCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceRecommendationsJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class DescribeInferenceRecommendationsJobCommand extends $Command<
  DescribeInferenceRecommendationsJobCommandInput,
  DescribeInferenceRecommendationsJobCommandOutput,
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

  constructor(readonly input: DescribeInferenceRecommendationsJobCommandInput) {
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
  ): Handler<DescribeInferenceRecommendationsJobCommandInput, DescribeInferenceRecommendationsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInferenceRecommendationsJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeInferenceRecommendationsJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInferenceRecommendationsJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInferenceRecommendationsJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeInferenceRecommendationsJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeInferenceRecommendationsJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInferenceRecommendationsJobCommandOutput> {
    return deserializeAws_json1_1DescribeInferenceRecommendationsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
