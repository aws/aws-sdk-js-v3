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

import { ListMetricAttributionMetricsRequest, ListMetricAttributionMetricsResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1ListMetricAttributionMetricsCommand,
  serializeAws_json1_1ListMetricAttributionMetricsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListMetricAttributionMetricsCommand}.
 */
export interface ListMetricAttributionMetricsCommandInput extends ListMetricAttributionMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListMetricAttributionMetricsCommand}.
 */
export interface ListMetricAttributionMetricsCommandOutput
  extends ListMetricAttributionMetricsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the metrics for the metric attribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListMetricAttributionMetricsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListMetricAttributionMetricsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListMetricAttributionMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListMetricAttributionMetricsCommandInput - {@link ListMetricAttributionMetricsCommandInput}
 * @returns {@link ListMetricAttributionMetricsCommandOutput}
 * @see {@link ListMetricAttributionMetricsCommandInput} for command's `input` shape.
 * @see {@link ListMetricAttributionMetricsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 *
 */
export class ListMetricAttributionMetricsCommand extends $Command<
  ListMetricAttributionMetricsCommandInput,
  ListMetricAttributionMetricsCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: ListMetricAttributionMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMetricAttributionMetricsCommandInput, ListMetricAttributionMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMetricAttributionMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "ListMetricAttributionMetricsCommand";
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
  private serialize(input: ListMetricAttributionMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMetricAttributionMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMetricAttributionMetricsCommandOutput> {
    return deserializeAws_json1_1ListMetricAttributionMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
