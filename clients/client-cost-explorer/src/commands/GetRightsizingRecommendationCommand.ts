import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetRightsizingRecommendationRequest, GetRightsizingRecommendationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetRightsizingRecommendationCommand,
  serializeAws_json1_1GetRightsizingRecommendationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetRightsizingRecommendationCommandInput extends GetRightsizingRecommendationRequest {}
export interface GetRightsizingRecommendationCommandOutput
  extends GetRightsizingRecommendationResponse,
    __MetadataBearer {}

/**
 * <p>Creates recommendations that
 *       help you save cost
 *       by identifying idle and underutilized Amazon EC2 instances.</p>
 *          <p>Recommendations are generated to either downsize or terminate instances, along with
 *       providing savings detail and metrics. For details on calculation and function, see
 *         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing
 *         Your Cost with Rightsizing
 *       Recommendations</a>
 *       in the <i>Billing and Cost Management User
 *       Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetRightsizingRecommendationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetRightsizingRecommendationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetRightsizingRecommendationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRightsizingRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetRightsizingRecommendationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetRightsizingRecommendationCommand extends $Command<
  GetRightsizingRecommendationCommandInput,
  GetRightsizingRecommendationCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRightsizingRecommendationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRightsizingRecommendationCommandInput, GetRightsizingRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetRightsizingRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRightsizingRecommendationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRightsizingRecommendationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRightsizingRecommendationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRightsizingRecommendationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRightsizingRecommendationCommandOutput> {
    return deserializeAws_json1_1GetRightsizingRecommendationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
