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
import { ListConfigurationHistoryRequest, ListConfigurationHistoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListConfigurationHistoryCommand,
  serializeAws_json1_1ListConfigurationHistoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListConfigurationHistoryCommand}.
 */
export interface ListConfigurationHistoryCommandInput extends ListConfigurationHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationHistoryCommand}.
 */
export interface ListConfigurationHistoryCommandOutput extends ListConfigurationHistoryResponse, __MetadataBearer {}

/**
 * @public
 * <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by
 *          Application Insights. Examples of events represented are: </p>
 *          <ul>
 *             <li>
 *                <p>INFO: creating a new alarm or updating an alarm threshold.</p>
 *             </li>
 *             <li>
 *                <p>WARN: alarm not created due to insufficient data points used to predict
 *                thresholds.</p>
 *             </li>
 *             <li>
 *                <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListConfigurationHistoryCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListConfigurationHistoryCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // ListConfigurationHistoryRequest
 *   ResourceGroupName: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   EventStatus: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConfigurationHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListConfigurationHistoryCommandInput - {@link ListConfigurationHistoryCommandInput}
 * @returns {@link ListConfigurationHistoryCommandOutput}
 * @see {@link ListConfigurationHistoryCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationHistoryCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 *
 */
export class ListConfigurationHistoryCommand extends $Command<
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListConfigurationHistoryCommandInput) {
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
  ): Handler<ListConfigurationHistoryCommandInput, ListConfigurationHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListConfigurationHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "ListConfigurationHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListConfigurationHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListConfigurationHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConfigurationHistoryCommandOutput> {
    return deserializeAws_json1_1ListConfigurationHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
