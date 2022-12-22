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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import {
  PutDashboardInput,
  PutDashboardInputFilterSensitiveLog,
  PutDashboardOutput,
  PutDashboardOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryPutDashboardCommand, serializeAws_queryPutDashboardCommand } from "../protocols/Aws_query";

export interface PutDashboardCommandInput extends PutDashboardInput {}
export interface PutDashboardCommandOutput extends PutDashboardOutput, __MetadataBearer {}

/**
 * <p>Creates a dashboard if it does not already exist, or updates an existing dashboard. If you update a dashboard,
 * 		the entire contents are replaced with what you specify here.</p>
 *          <p>All dashboards in your account are global, not region-specific.</p>
 *          <p>A simple way to create a dashboard using <code>PutDashboard</code> is to copy an
 * 			existing dashboard. To copy an existing dashboard using the console, you can load the dashboard
 * 			and then use the View/edit source command in the Actions menu to display the JSON  block
 * 			for that dashboard. Another way to copy a dashboard is to
 * 			use <code>GetDashboard</code>, and then use the data returned
 * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code>.</p>
 *          <p>When you create a dashboard with <code>PutDashboard</code>, a good practice is to
 * 			add a text widget at the top of the dashboard with a message that the dashboard was created by script and should
 * 		not be changed in the console. This message could also point console users to the location
 * 		of the <code>DashboardBody</code> script or the CloudFormation template used to create the
 * 		dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutDashboardCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutDashboardCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutDashboardCommandInput} for command's `input` shape.
 * @see {@link PutDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class PutDashboardCommand extends $Command<
  PutDashboardCommandInput,
  PutDashboardCommandOutput,
  CloudWatchClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, PutDashboardCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutDashboardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutDashboardInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutDashboardOutputFilterSensitiveLog,
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
