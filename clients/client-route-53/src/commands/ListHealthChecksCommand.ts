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

import { ListHealthChecksRequest, ListHealthChecksResponse } from "../models/models_0";
import { de_ListHealthChecksCommand, se_ListHealthChecksCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHealthChecksCommand}.
 */
export interface ListHealthChecksCommandInput extends ListHealthChecksRequest {}
/**
 * @public
 *
 * The output of {@link ListHealthChecksCommand}.
 */
export interface ListHealthChecksCommandOutput extends ListHealthChecksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve a list of the health checks that are associated with the current Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHealthChecksCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHealthChecksCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListHealthChecksRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListHealthChecksCommand(input);
 * const response = await client.send(command);
 * // { // ListHealthChecksResponse
 * //   HealthChecks: [ // HealthChecks // required
 * //     { // HealthCheck
 * //       Id: "STRING_VALUE", // required
 * //       CallerReference: "STRING_VALUE", // required
 * //       LinkedService: { // LinkedService
 * //         ServicePrincipal: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //       HealthCheckConfig: { // HealthCheckConfig
 * //         IPAddress: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         Type: "HTTP" || "HTTPS" || "HTTP_STR_MATCH" || "HTTPS_STR_MATCH" || "TCP" || "CALCULATED" || "CLOUDWATCH_METRIC" || "RECOVERY_CONTROL", // required
 * //         ResourcePath: "STRING_VALUE",
 * //         FullyQualifiedDomainName: "STRING_VALUE",
 * //         SearchString: "STRING_VALUE",
 * //         RequestInterval: Number("int"),
 * //         FailureThreshold: Number("int"),
 * //         MeasureLatency: true || false,
 * //         Inverted: true || false,
 * //         Disabled: true || false,
 * //         HealthThreshold: Number("int"),
 * //         ChildHealthChecks: [ // ChildHealthCheckList
 * //           "STRING_VALUE",
 * //         ],
 * //         EnableSNI: true || false,
 * //         Regions: [ // HealthCheckRegionList
 * //           "us-east-1" || "us-west-1" || "us-west-2" || "eu-west-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "sa-east-1",
 * //         ],
 * //         AlarmIdentifier: { // AlarmIdentifier
 * //           Region: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-central-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "ap-east-1" || "me-south-1" || "me-central-1" || "ap-south-1" || "ap-south-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "cn-northwest-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "ap-southeast-4", // required
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         InsufficientDataHealthStatus: "Healthy" || "Unhealthy" || "LastKnownStatus",
 * //         RoutingControlArn: "STRING_VALUE",
 * //       },
 * //       HealthCheckVersion: Number("long"), // required
 * //       CloudWatchAlarmConfiguration: { // CloudWatchAlarmConfiguration
 * //         EvaluationPeriods: Number("int"), // required
 * //         Threshold: Number("double"), // required
 * //         ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold", // required
 * //         Period: Number("int"), // required
 * //         MetricName: "STRING_VALUE", // required
 * //         Namespace: "STRING_VALUE", // required
 * //         Statistic: "Average" || "Sum" || "SampleCount" || "Maximum" || "Minimum", // required
 * //         Dimensions: [ // DimensionList
 * //           { // Dimension
 * //             Name: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE", // required
 * //   IsTruncated: true || false, // required
 * //   NextMarker: "STRING_VALUE",
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListHealthChecksCommandInput - {@link ListHealthChecksCommandInput}
 * @returns {@link ListHealthChecksCommandOutput}
 * @see {@link ListHealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListHealthChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link IncompatibleVersion} (client fault)
 *  <p>The resource you're trying to access is unsupported on this Amazon Route 53
 * 			endpoint.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class ListHealthChecksCommand extends $Command<
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: ListHealthChecksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHealthChecksCommandInput, ListHealthChecksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHealthChecksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListHealthChecksCommand";
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
  private serialize(input: ListHealthChecksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHealthChecksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHealthChecksCommandOutput> {
    return de_ListHealthChecksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
