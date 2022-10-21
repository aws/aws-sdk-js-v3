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
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import {
  DescribeComponentConfigurationRecommendationRequest,
  DescribeComponentConfigurationRecommendationRequestFilterSensitiveLog,
  DescribeComponentConfigurationRecommendationResponse,
  DescribeComponentConfigurationRecommendationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand,
  serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeComponentConfigurationRecommendationCommandInput
  extends DescribeComponentConfigurationRecommendationRequest {}
export interface DescribeComponentConfigurationRecommendationCommandOutput
  extends DescribeComponentConfigurationRecommendationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the recommended monitoring configuration of the component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeComponentConfigurationRecommendationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeComponentConfigurationRecommendationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeComponentConfigurationRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComponentConfigurationRecommendationCommandInput} for command's `input` shape.
 * @see {@link DescribeComponentConfigurationRecommendationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 */
export class DescribeComponentConfigurationRecommendationCommand extends $Command<
  DescribeComponentConfigurationRecommendationCommandInput,
  DescribeComponentConfigurationRecommendationCommandOutput,
  ApplicationInsightsClientResolvedConfig
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

  constructor(readonly input: DescribeComponentConfigurationRecommendationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeComponentConfigurationRecommendationCommandInput,
    DescribeComponentConfigurationRecommendationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeComponentConfigurationRecommendationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DescribeComponentConfigurationRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeComponentConfigurationRecommendationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeComponentConfigurationRecommendationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeComponentConfigurationRecommendationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeComponentConfigurationRecommendationCommandOutput> {
    return deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
