// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { ProvideAnomalyFeedbackRequest, ProvideAnomalyFeedbackResponse } from "../models/models_0";
import { de_ProvideAnomalyFeedbackCommand, se_ProvideAnomalyFeedbackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ProvideAnomalyFeedbackCommand}.
 */
export interface ProvideAnomalyFeedbackCommandInput extends ProvideAnomalyFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link ProvideAnomalyFeedbackCommand}.
 */
export interface ProvideAnomalyFeedbackCommandOutput extends ProvideAnomalyFeedbackResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the feedback property of a given cost anomaly. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ProvideAnomalyFeedbackCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ProvideAnomalyFeedbackCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // ProvideAnomalyFeedbackRequest
 *   AnomalyId: "STRING_VALUE", // required
 *   Feedback: "YES" || "NO" || "PLANNED_ACTIVITY", // required
 * };
 * const command = new ProvideAnomalyFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // ProvideAnomalyFeedbackResponse
 * //   AnomalyId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ProvideAnomalyFeedbackCommandInput - {@link ProvideAnomalyFeedbackCommandInput}
 * @returns {@link ProvideAnomalyFeedbackCommandOutput}
 * @see {@link ProvideAnomalyFeedbackCommandInput} for command's `input` shape.
 * @see {@link ProvideAnomalyFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class ProvideAnomalyFeedbackCommand extends $Command<
  ProvideAnomalyFeedbackCommandInput,
  ProvideAnomalyFeedbackCommandOutput,
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
  constructor(readonly input: ProvideAnomalyFeedbackCommandInput) {
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
  ): Handler<ProvideAnomalyFeedbackCommandInput, ProvideAnomalyFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvideAnomalyFeedbackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ProvideAnomalyFeedbackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSInsightsIndexService",
        operation: "ProvideAnomalyFeedback",
      },
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
  private serialize(input: ProvideAnomalyFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ProvideAnomalyFeedbackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvideAnomalyFeedbackCommandOutput> {
    return de_ProvideAnomalyFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
