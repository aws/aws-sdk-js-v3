// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { StopInferenceRecommendationsJobRequest } from "../models/models_4";
import {
  de_StopInferenceRecommendationsJobCommand,
  se_StopInferenceRecommendationsJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopInferenceRecommendationsJobCommand}.
 */
export interface StopInferenceRecommendationsJobCommandInput extends StopInferenceRecommendationsJobRequest {}
/**
 * @public
 *
 * The output of {@link StopInferenceRecommendationsJobCommand}.
 */
export interface StopInferenceRecommendationsJobCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Stops an Inference Recommender job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopInferenceRecommendationsJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopInferenceRecommendationsJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StopInferenceRecommendationsJobRequest
 *   JobName: "STRING_VALUE", // required
 * };
 * const command = new StopInferenceRecommendationsJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopInferenceRecommendationsJobCommandInput - {@link StopInferenceRecommendationsJobCommandInput}
 * @returns {@link StopInferenceRecommendationsJobCommandOutput}
 * @see {@link StopInferenceRecommendationsJobCommandInput} for command's `input` shape.
 * @see {@link StopInferenceRecommendationsJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class StopInferenceRecommendationsJobCommand extends $Command<
  StopInferenceRecommendationsJobCommandInput,
  StopInferenceRecommendationsJobCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: StopInferenceRecommendationsJobCommandInput) {
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
  ): Handler<StopInferenceRecommendationsJobCommandInput, StopInferenceRecommendationsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopInferenceRecommendationsJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "StopInferenceRecommendationsJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: StopInferenceRecommendationsJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_StopInferenceRecommendationsJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopInferenceRecommendationsJobCommandOutput> {
    return de_StopInferenceRecommendationsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
