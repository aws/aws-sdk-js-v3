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

import { ListServiceQuotasRequest, ListServiceQuotasResponse } from "../models/models_0";
import { de_ListServiceQuotasCommand, se_ListServiceQuotasCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServiceQuotasCommand}.
 */
export interface ListServiceQuotasCommandInput extends ListServiceQuotasRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceQuotasCommand}.
 */
export interface ListServiceQuotasCommandOutput extends ListServiceQuotasResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the applied quota values for the specified Amazon Web Service. For some quotas, only
 *             the default values are available. If the applied quota value is not available for a
 *             quota, the quota is not retrieved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotasCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotasCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const input = { // ListServiceQuotasRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuotaCode: "STRING_VALUE",
 *   QuotaAppliedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * };
 * const command = new ListServiceQuotasCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceQuotasResponse
 * //   NextToken: "STRING_VALUE",
 * //   Quotas: [ // ServiceQuotaListDefinition
 * //     { // ServiceQuota
 * //       ServiceCode: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       QuotaArn: "STRING_VALUE",
 * //       QuotaCode: "STRING_VALUE",
 * //       QuotaName: "STRING_VALUE",
 * //       Value: Number("double"),
 * //       Unit: "STRING_VALUE",
 * //       Adjustable: true || false,
 * //       GlobalQuota: true || false,
 * //       UsageMetric: { // MetricInfo
 * //         MetricNamespace: "STRING_VALUE",
 * //         MetricName: "STRING_VALUE",
 * //         MetricDimensions: { // MetricDimensionsMapDefinition
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         MetricStatisticRecommendation: "STRING_VALUE",
 * //       },
 * //       Period: { // QuotaPeriod
 * //         PeriodValue: Number("int"),
 * //         PeriodUnit: "MICROSECOND" || "MILLISECOND" || "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK",
 * //       },
 * //       ErrorReason: { // ErrorReason
 * //         ErrorCode: "DEPENDENCY_ACCESS_DENIED_ERROR" || "DEPENDENCY_THROTTLING_ERROR" || "DEPENDENCY_SERVICE_ERROR" || "SERVICE_QUOTA_NOT_AVAILABLE_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       QuotaAppliedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * //       QuotaContext: { // QuotaContextInfo
 * //         ContextScope: "RESOURCE" || "ACCOUNT",
 * //         ContextScopeType: "STRING_VALUE",
 * //         ContextId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceQuotasCommandInput - {@link ListServiceQuotasCommandInput}
 * @returns {@link ListServiceQuotasCommandOutput}
 * @see {@link ListServiceQuotasCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotasCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 *
 * @throws {@link ServiceQuotasServiceException}
 * <p>Base exception class for all service exceptions from ServiceQuotas service.</p>
 *
 */
export class ListServiceQuotasCommand extends $Command<
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput,
  ServiceQuotasClientResolvedConfig
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
  constructor(readonly input: ListServiceQuotasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceQuotasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServiceQuotasCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "ListServiceQuotasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ServiceQuotasV20190624",
        operation: "ListServiceQuotas",
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
  private serialize(input: ListServiceQuotasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListServiceQuotasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServiceQuotasCommandOutput> {
    return de_ListServiceQuotasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
