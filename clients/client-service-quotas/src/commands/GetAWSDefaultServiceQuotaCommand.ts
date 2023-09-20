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

import { GetAWSDefaultServiceQuotaRequest, GetAWSDefaultServiceQuotaResponse } from "../models/models_0";
import { de_GetAWSDefaultServiceQuotaCommand, se_GetAWSDefaultServiceQuotaCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAWSDefaultServiceQuotaCommand}.
 */
export interface GetAWSDefaultServiceQuotaCommandInput extends GetAWSDefaultServiceQuotaRequest {}
/**
 * @public
 *
 * The output of {@link GetAWSDefaultServiceQuotaCommand}.
 */
export interface GetAWSDefaultServiceQuotaCommandOutput extends GetAWSDefaultServiceQuotaResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the default value for the specified quota. The default value does not
 *             reflect any quota increases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetAWSDefaultServiceQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetAWSDefaultServiceQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const input = { // GetAWSDefaultServiceQuotaRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   QuotaCode: "STRING_VALUE", // required
 * };
 * const command = new GetAWSDefaultServiceQuotaCommand(input);
 * const response = await client.send(command);
 * // { // GetAWSDefaultServiceQuotaResponse
 * //   Quota: { // ServiceQuota
 * //     ServiceCode: "STRING_VALUE",
 * //     ServiceName: "STRING_VALUE",
 * //     QuotaArn: "STRING_VALUE",
 * //     QuotaCode: "STRING_VALUE",
 * //     QuotaName: "STRING_VALUE",
 * //     Value: Number("double"),
 * //     Unit: "STRING_VALUE",
 * //     Adjustable: true || false,
 * //     GlobalQuota: true || false,
 * //     UsageMetric: { // MetricInfo
 * //       MetricNamespace: "STRING_VALUE",
 * //       MetricName: "STRING_VALUE",
 * //       MetricDimensions: { // MetricDimensionsMapDefinition
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       MetricStatisticRecommendation: "STRING_VALUE",
 * //     },
 * //     Period: { // QuotaPeriod
 * //       PeriodValue: Number("int"),
 * //       PeriodUnit: "MICROSECOND" || "MILLISECOND" || "SECOND" || "MINUTE" || "HOUR" || "DAY" || "WEEK",
 * //     },
 * //     ErrorReason: { // ErrorReason
 * //       ErrorCode: "DEPENDENCY_ACCESS_DENIED_ERROR" || "DEPENDENCY_THROTTLING_ERROR" || "DEPENDENCY_SERVICE_ERROR" || "SERVICE_QUOTA_NOT_AVAILABLE_ERROR",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //     QuotaAppliedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * //     QuotaContext: { // QuotaContextInfo
 * //       ContextScope: "RESOURCE" || "ACCOUNT",
 * //       ContextScopeType: "STRING_VALUE",
 * //       ContextId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAWSDefaultServiceQuotaCommandInput - {@link GetAWSDefaultServiceQuotaCommandInput}
 * @returns {@link GetAWSDefaultServiceQuotaCommandOutput}
 * @see {@link GetAWSDefaultServiceQuotaCommandInput} for command's `input` shape.
 * @see {@link GetAWSDefaultServiceQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
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
export class GetAWSDefaultServiceQuotaCommand extends $Command<
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput,
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
  constructor(readonly input: GetAWSDefaultServiceQuotaCommandInput) {
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
  ): Handler<GetAWSDefaultServiceQuotaCommandInput, GetAWSDefaultServiceQuotaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAWSDefaultServiceQuotaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceQuotasClient";
    const commandName = "GetAWSDefaultServiceQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ServiceQuotasV20190624",
        operation: "GetAWSDefaultServiceQuota",
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
  private serialize(input: GetAWSDefaultServiceQuotaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAWSDefaultServiceQuotaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAWSDefaultServiceQuotaCommandOutput> {
    return de_GetAWSDefaultServiceQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
