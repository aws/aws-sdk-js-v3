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
  GetDashboardInput,
  GetDashboardInputFilterSensitiveLog,
  GetDashboardOutput,
  GetDashboardOutputFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryGetDashboardCommand, serializeAws_queryGetDashboardCommand } from "../protocols/Aws_query";

export interface GetDashboardCommandInput extends GetDashboardInput {}
export interface GetDashboardCommandOutput extends GetDashboardOutput, __MetadataBearer {}

/**
 * <p>Displays the details of the dashboard that you specify.</p>
 *          <p>To copy an existing dashboard, use <code>GetDashboard</code>, and then use the data returned
 * 			within <code>DashboardBody</code> as the template for the new dashboard when you call <code>PutDashboard</code> to create
 * 			the copy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetDashboardCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetDashboardCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetDashboardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDashboardCommandInput} for command's `input` shape.
 * @see {@link GetDashboardCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class GetDashboardCommand extends $Command<
  GetDashboardCommandInput,
  GetDashboardCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDashboardCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetDashboardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDashboardInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetDashboardOutputFilterSensitiveLog,
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
