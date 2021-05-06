import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetSavingsPlansUtilizationRequest, GetSavingsPlansUtilizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetSavingsPlansUtilizationCommand,
  serializeAws_json1_1GetSavingsPlansUtilizationCommand,
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

export interface GetSavingsPlansUtilizationCommandInput extends GetSavingsPlansUtilizationRequest {}
export interface GetSavingsPlansUtilizationCommandOutput extends GetSavingsPlansUtilizationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
 * 	        <note>
 *             <p>You cannot group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetSavingsPlansUtilizationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetSavingsPlansUtilizationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetSavingsPlansUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSavingsPlansUtilizationCommandInput} for command's `input` shape.
 * @see {@link GetSavingsPlansUtilizationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetSavingsPlansUtilizationCommand extends $Command<
  GetSavingsPlansUtilizationCommandInput,
  GetSavingsPlansUtilizationCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSavingsPlansUtilizationCommandInput) {
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
  ): Handler<GetSavingsPlansUtilizationCommandInput, GetSavingsPlansUtilizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetSavingsPlansUtilizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSavingsPlansUtilizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSavingsPlansUtilizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSavingsPlansUtilizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSavingsPlansUtilizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSavingsPlansUtilizationCommandOutput> {
    return deserializeAws_json1_1GetSavingsPlansUtilizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
