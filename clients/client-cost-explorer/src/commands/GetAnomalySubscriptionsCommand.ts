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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetAnomalySubscriptionsRequest, GetAnomalySubscriptionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetAnomalySubscriptionsCommand,
  serializeAws_json1_1GetAnomalySubscriptionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetAnomalySubscriptionsCommand}.
 */
export interface GetAnomalySubscriptionsCommandInput extends GetAnomalySubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link GetAnomalySubscriptionsCommand}.
 */
export interface GetAnomalySubscriptionsCommandOutput extends GetAnomalySubscriptionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the cost anomaly subscription objects for your account. You can filter using a
 *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetAnomalySubscriptionsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetAnomalySubscriptionsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // GetAnomalySubscriptionsRequest
 *   SubscriptionArnList: [ // Values
 *     "STRING_VALUE",
 *   ],
 *   MonitorArn: "STRING_VALUE",
 *   NextPageToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetAnomalySubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetAnomalySubscriptionsCommandInput - {@link GetAnomalySubscriptionsCommandInput}
 * @returns {@link GetAnomalySubscriptionsCommandOutput}
 * @see {@link GetAnomalySubscriptionsCommandInput} for command's `input` shape.
 * @see {@link GetAnomalySubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link UnknownSubscriptionException} (client fault)
 *  <p>The cost anomaly subscription does not exist for the account. </p>
 *
 *
 */
export class GetAnomalySubscriptionsCommand extends $Command<
  GetAnomalySubscriptionsCommandInput,
  GetAnomalySubscriptionsCommandOutput,
  CostExplorerClientResolvedConfig
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
  constructor(readonly input: GetAnomalySubscriptionsCommandInput) {
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
  ): Handler<GetAnomalySubscriptionsCommandInput, GetAnomalySubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAnomalySubscriptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "GetAnomalySubscriptionsCommand";
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
  private serialize(input: GetAnomalySubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAnomalySubscriptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnomalySubscriptionsCommandOutput> {
    return deserializeAws_json1_1GetAnomalySubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
