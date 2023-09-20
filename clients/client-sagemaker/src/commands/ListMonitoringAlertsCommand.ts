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

import { ListMonitoringAlertsRequest, ListMonitoringAlertsResponse } from "../models/models_3";
import { de_ListMonitoringAlertsCommand, se_ListMonitoringAlertsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMonitoringAlertsCommand}.
 */
export interface ListMonitoringAlertsCommandInput extends ListMonitoringAlertsRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitoringAlertsCommand}.
 */
export interface ListMonitoringAlertsCommandOutput extends ListMonitoringAlertsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the alerts for a single monitoring schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringAlertsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringAlertsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListMonitoringAlertsRequest
 *   MonitoringScheduleName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMonitoringAlertsCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitoringAlertsResponse
 * //   MonitoringAlertSummaries: [ // MonitoringAlertSummaryList
 * //     { // MonitoringAlertSummary
 * //       MonitoringAlertName: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       AlertStatus: "InAlert" || "OK", // required
 * //       DatapointsToAlert: Number("int"), // required
 * //       EvaluationPeriod: Number("int"), // required
 * //       Actions: { // MonitoringAlertActions
 * //         ModelDashboardIndicator: { // ModelDashboardIndicatorAction
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitoringAlertsCommandInput - {@link ListMonitoringAlertsCommandInput}
 * @returns {@link ListMonitoringAlertsCommandOutput}
 * @see {@link ListMonitoringAlertsCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringAlertsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListMonitoringAlertsCommand extends $Command<
  ListMonitoringAlertsCommandInput,
  ListMonitoringAlertsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListMonitoringAlertsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMonitoringAlertsCommandInput, ListMonitoringAlertsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMonitoringAlertsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListMonitoringAlertsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListMonitoringAlerts",
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
  private serialize(input: ListMonitoringAlertsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMonitoringAlertsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMonitoringAlertsCommandOutput> {
    return de_ListMonitoringAlertsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
