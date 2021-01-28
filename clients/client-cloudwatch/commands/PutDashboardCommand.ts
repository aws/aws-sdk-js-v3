import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutDashboardInput, PutDashboardOutput } from "../models/models_0";
import { deserializeAws_queryPutDashboardCommand, serializeAws_queryPutDashboardCommand } from "../protocols/Aws_query";
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

export type PutDashboardCommandInput = PutDashboardInput;
export type PutDashboardCommandOutput = PutDashboardOutput & __MetadataBearer;

/**
 * <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard,
 * 		the entire contents are replaced with what you specify here.</p>
 * 		       <p>All dashboards in your account are global, not region-specific.</p>
 * 		       <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an
 * 			existing dashboard. To copy an existing dashboard using the console, you can load the dashboard
 * 			and then use the View/edit source command in the Actions menu to display the JSON  block
 * 			for that dashboard. Another way to copy a dashboard is to
 * 			use <code>GetDashboard</code>, and then use the data returned
 * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p>
 * 		       <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to
 * 			add a text widget at the top of the dashboard with a message that the dashboard was created by script and should
 * 		not be changed in the console. This message could also point console users to the location
 * 		of the <code>DashboardBody</code> script or the CloudFormation template used to create the
 * 		dashboard.</p>
 */
export class PutDashboardCommand extends $Command<
  PutDashboardCommandInput,
  PutDashboardCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutDashboardCommandInput) {
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
  ): Handler<PutDashboardCommandInput, PutDashboardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutDashboardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDashboardInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutDashboardOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutDashboardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutDashboardCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDashboardCommandOutput> {
    return deserializeAws_queryPutDashboardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
