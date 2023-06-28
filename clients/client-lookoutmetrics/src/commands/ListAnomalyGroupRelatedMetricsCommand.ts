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
} from "@smithy/types";

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ListAnomalyGroupRelatedMetricsRequest, ListAnomalyGroupRelatedMetricsResponse } from "../models/models_0";
import {
  de_ListAnomalyGroupRelatedMetricsCommand,
  se_ListAnomalyGroupRelatedMetricsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAnomalyGroupRelatedMetricsCommand}.
 */
export interface ListAnomalyGroupRelatedMetricsCommandInput extends ListAnomalyGroupRelatedMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListAnomalyGroupRelatedMetricsCommand}.
 */
export interface ListAnomalyGroupRelatedMetricsCommandOutput
  extends ListAnomalyGroupRelatedMetricsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of measures that are potential causes or effects of an
 *             anomaly group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupRelatedMetricsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupRelatedMetricsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // ListAnomalyGroupRelatedMetricsRequest
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 *   AnomalyGroupId: "STRING_VALUE", // required
 *   RelationshipTypeFilter: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAnomalyGroupRelatedMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListAnomalyGroupRelatedMetricsResponse
 * //   InterMetricImpactList: [ // InterMetricImpactList
 * //     { // InterMetricImpactDetails
 * //       MetricName: "STRING_VALUE",
 * //       AnomalyGroupId: "STRING_VALUE",
 * //       RelationshipType: "STRING_VALUE",
 * //       ContributionPercentage: Number("double"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnomalyGroupRelatedMetricsCommandInput - {@link ListAnomalyGroupRelatedMetricsCommandInput}
 * @returns {@link ListAnomalyGroupRelatedMetricsCommandOutput}
 * @see {@link ListAnomalyGroupRelatedMetricsCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupRelatedMetricsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 */
export class ListAnomalyGroupRelatedMetricsCommand extends $Command<
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput,
  LookoutMetricsClientResolvedConfig
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
  constructor(readonly input: ListAnomalyGroupRelatedMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnomalyGroupRelatedMetricsCommandInput, ListAnomalyGroupRelatedMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnomalyGroupRelatedMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "ListAnomalyGroupRelatedMetricsCommand";
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
  private serialize(
    input: ListAnomalyGroupRelatedMetricsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListAnomalyGroupRelatedMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnomalyGroupRelatedMetricsCommandOutput> {
    return de_ListAnomalyGroupRelatedMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
