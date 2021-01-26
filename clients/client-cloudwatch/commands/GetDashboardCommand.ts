import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetDashboardInput, GetDashboardOutput } from "../models/models_0";
import { deserializeAws_queryGetDashboardCommand, serializeAws_queryGetDashboardCommand } from "../protocols/Aws_query";
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

export type GetDashboardCommandInput = GetDashboardInput;
export type GetDashboardCommandOutput = GetDashboardOutput & __MetadataBearer;

/**
 * <p>Displays the details of the dashboard that you specify.</p>
 * 		       <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned
 * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create
 * 			the copy.</p>
 */
export class GetDashboardCommand extends $Command<
  GetDashboardCommandInput,
  GetDashboardCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDashboardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDashboardCommandInput, GetDashboardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetDashboardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDashboardInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetDashboardOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDashboardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetDashboardCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDashboardCommandOutput> {
    return deserializeAws_queryGetDashboardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
