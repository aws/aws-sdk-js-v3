import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostAndUsageRequest, GetCostAndUsageResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCostAndUsageCommand,
  serializeAws_json1_1GetCostAndUsageCommand,
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

export interface GetCostAndUsageCommandInput extends GetCostAndUsageRequest {}
export interface GetCostAndUsageCommandOutput extends GetCostAndUsageResponse, __MetadataBearer {}

/**
 * <p>Retrieves cost and usage metrics for your account. You can specify which cost and
 *       usage-related metric that you want the request to return. For example, you can specify
 *         <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your
 *       data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific
 *       time range. For a complete list of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p>
 * 	        <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetCostAndUsageCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetCostAndUsageCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetCostAndUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCostAndUsageCommandInput} for command's `input` shape.
 * @see {@link GetCostAndUsageCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetCostAndUsageCommand extends $Command<
  GetCostAndUsageCommandInput,
  GetCostAndUsageCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCostAndUsageCommandInput) {
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
  ): Handler<GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetCostAndUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCostAndUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCostAndUsageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCostAndUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCostAndUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCostAndUsageCommandOutput> {
    return deserializeAws_json1_1GetCostAndUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
