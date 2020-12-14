import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetCostAndUsageWithResourcesRequest, GetCostAndUsageWithResourcesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetCostAndUsageWithResourcesCommand,
  serializeAws_json1_1GetCostAndUsageWithResourcesCommand,
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

export type GetCostAndUsageWithResourcesCommandInput = GetCostAndUsageWithResourcesRequest;
export type GetCostAndUsageWithResourcesCommandOutput = GetCostAndUsageWithResourcesResponse & __MetadataBearer;

/**
 * <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and
 * 	    usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that
 * 	    you want the request to return. You can also filter and group your data by various dimensions,
 * 	    such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
 * 	    of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in AWS
 * 	    Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p>
 * 	        <note>
 *             <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
 *          </note>
 */
export class GetCostAndUsageWithResourcesCommand extends $Command<
  GetCostAndUsageWithResourcesCommandInput,
  GetCostAndUsageWithResourcesCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCostAndUsageWithResourcesCommandInput) {
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
  ): Handler<GetCostAndUsageWithResourcesCommandInput, GetCostAndUsageWithResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetCostAndUsageWithResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCostAndUsageWithResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCostAndUsageWithResourcesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCostAndUsageWithResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCostAndUsageWithResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCostAndUsageWithResourcesCommandOutput> {
    return deserializeAws_json1_1GetCostAndUsageWithResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
