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

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import {
  GetECSServiceRecommendationProjectedMetricsRequest,
  GetECSServiceRecommendationProjectedMetricsRequestFilterSensitiveLog,
  GetECSServiceRecommendationProjectedMetricsResponse,
  GetECSServiceRecommendationProjectedMetricsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetECSServiceRecommendationProjectedMetricsCommand,
  serializeAws_json1_0GetECSServiceRecommendationProjectedMetricsCommand,
} from "../protocols/Aws_json1_0";

export interface GetECSServiceRecommendationProjectedMetricsCommandInput
  extends GetECSServiceRecommendationProjectedMetricsRequest {}
export interface GetECSServiceRecommendationProjectedMetricsCommandOutput
  extends GetECSServiceRecommendationProjectedMetricsResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Returns the projected metrics of Amazon ECS service recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, GetECSServiceRecommendationProjectedMetricsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, GetECSServiceRecommendationProjectedMetricsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new GetECSServiceRecommendationProjectedMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetECSServiceRecommendationProjectedMetricsCommandInput} for command's `input` shape.
 * @see {@link GetECSServiceRecommendationProjectedMetricsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 */
export class GetECSServiceRecommendationProjectedMetricsCommand extends $Command<
  GetECSServiceRecommendationProjectedMetricsCommandInput,
  GetECSServiceRecommendationProjectedMetricsCommandOutput,
  ComputeOptimizerClientResolvedConfig
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

  constructor(readonly input: GetECSServiceRecommendationProjectedMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetECSServiceRecommendationProjectedMetricsCommandInput,
    GetECSServiceRecommendationProjectedMetricsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetECSServiceRecommendationProjectedMetricsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "GetECSServiceRecommendationProjectedMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetECSServiceRecommendationProjectedMetricsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetECSServiceRecommendationProjectedMetricsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetECSServiceRecommendationProjectedMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0GetECSServiceRecommendationProjectedMetricsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetECSServiceRecommendationProjectedMetricsCommandOutput> {
    return deserializeAws_json1_0GetECSServiceRecommendationProjectedMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
