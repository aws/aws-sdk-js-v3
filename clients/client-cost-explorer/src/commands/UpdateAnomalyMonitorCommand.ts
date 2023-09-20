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
import { UpdateAnomalyMonitorRequest, UpdateAnomalyMonitorResponse } from "../models/models_0";
import { de_UpdateAnomalyMonitorCommand, se_UpdateAnomalyMonitorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAnomalyMonitorCommand}.
 */
export interface UpdateAnomalyMonitorCommandInput extends UpdateAnomalyMonitorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnomalyMonitorCommand}.
 */
export interface UpdateAnomalyMonitorCommandOutput extends UpdateAnomalyMonitorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing cost anomaly monitor. The changes made are applied going forward, and
 *       doesn't change anomalies detected in the past. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, UpdateAnomalyMonitorCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, UpdateAnomalyMonitorCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // UpdateAnomalyMonitorRequest
 *   MonitorArn: "STRING_VALUE", // required
 *   MonitorName: "STRING_VALUE",
 * };
 * const command = new UpdateAnomalyMonitorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnomalyMonitorResponse
 * //   MonitorArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateAnomalyMonitorCommandInput - {@link UpdateAnomalyMonitorCommandInput}
 * @returns {@link UpdateAnomalyMonitorCommandOutput}
 * @see {@link UpdateAnomalyMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateAnomalyMonitorCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link UnknownMonitorException} (client fault)
 *  <p>The cost anomaly monitor does not exist for the account. </p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class UpdateAnomalyMonitorCommand extends $Command<
  UpdateAnomalyMonitorCommandInput,
  UpdateAnomalyMonitorCommandOutput,
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
  constructor(readonly input: UpdateAnomalyMonitorCommandInput) {
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
  ): Handler<UpdateAnomalyMonitorCommandInput, UpdateAnomalyMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAnomalyMonitorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "UpdateAnomalyMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSInsightsIndexService",
        operation: "UpdateAnomalyMonitor",
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
  private serialize(input: UpdateAnomalyMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAnomalyMonitorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAnomalyMonitorCommandOutput> {
    return de_UpdateAnomalyMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
