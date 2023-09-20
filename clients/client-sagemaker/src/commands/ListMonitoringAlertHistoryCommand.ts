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

import { ListMonitoringAlertHistoryRequest, ListMonitoringAlertHistoryResponse } from "../models/models_3";
import { de_ListMonitoringAlertHistoryCommand, se_ListMonitoringAlertHistoryCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMonitoringAlertHistoryCommand}.
 */
export interface ListMonitoringAlertHistoryCommandInput extends ListMonitoringAlertHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListMonitoringAlertHistoryCommand}.
 */
export interface ListMonitoringAlertHistoryCommandOutput extends ListMonitoringAlertHistoryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of past alerts in a model monitoring schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringAlertHistoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringAlertHistoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListMonitoringAlertHistoryRequest
 *   MonitoringScheduleName: "STRING_VALUE",
 *   MonitoringAlertName: "STRING_VALUE",
 *   SortBy: "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   StatusEquals: "InAlert" || "OK",
 * };
 * const command = new ListMonitoringAlertHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListMonitoringAlertHistoryResponse
 * //   MonitoringAlertHistory: [ // MonitoringAlertHistoryList
 * //     { // MonitoringAlertHistorySummary
 * //       MonitoringScheduleName: "STRING_VALUE", // required
 * //       MonitoringAlertName: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       AlertStatus: "InAlert" || "OK", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMonitoringAlertHistoryCommandInput - {@link ListMonitoringAlertHistoryCommandInput}
 * @returns {@link ListMonitoringAlertHistoryCommandOutput}
 * @see {@link ListMonitoringAlertHistoryCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringAlertHistoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListMonitoringAlertHistoryCommand extends $Command<
  ListMonitoringAlertHistoryCommandInput,
  ListMonitoringAlertHistoryCommandOutput,
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
  constructor(readonly input: ListMonitoringAlertHistoryCommandInput) {
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
  ): Handler<ListMonitoringAlertHistoryCommandInput, ListMonitoringAlertHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMonitoringAlertHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListMonitoringAlertHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListMonitoringAlertHistory",
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
  private serialize(input: ListMonitoringAlertHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMonitoringAlertHistoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMonitoringAlertHistoryCommandOutput> {
    return de_ListMonitoringAlertHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
