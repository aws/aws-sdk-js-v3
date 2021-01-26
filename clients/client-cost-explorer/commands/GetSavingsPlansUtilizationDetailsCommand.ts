import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import {
  GetSavingsPlansUtilizationDetailsRequest,
  GetSavingsPlansUtilizationDetailsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand,
  serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand,
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

export type GetSavingsPlansUtilizationDetailsCommandInput = GetSavingsPlansUtilizationDetailsRequest;
export type GetSavingsPlansUtilizationDetailsCommandOutput = GetSavingsPlansUtilizationDetailsResponse &
  __MetadataBearer;

/**
 * <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
 * 	        <note>
 *             <p>
 *                <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p>
 *          </note>
 */
export class GetSavingsPlansUtilizationDetailsCommand extends $Command<
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSavingsPlansUtilizationDetailsCommandInput) {
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
  ): Handler<GetSavingsPlansUtilizationDetailsCommandInput, GetSavingsPlansUtilizationDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetSavingsPlansUtilizationDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSavingsPlansUtilizationDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSavingsPlansUtilizationDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetSavingsPlansUtilizationDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSavingsPlansUtilizationDetailsCommandOutput> {
    return deserializeAws_json1_1GetSavingsPlansUtilizationDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
