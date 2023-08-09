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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { SearchOrganizationInsightsRequest, SearchOrganizationInsightsResponse } from "../models/models_0";
import { de_SearchOrganizationInsightsCommand, se_SearchOrganizationInsightsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchOrganizationInsightsCommand}.
 */
export interface SearchOrganizationInsightsCommandInput extends SearchOrganizationInsightsRequest {}
/**
 * @public
 *
 * The output of {@link SearchOrganizationInsightsCommand}.
 */
export interface SearchOrganizationInsightsCommandOutput extends SearchOrganizationInsightsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of insights in your organization. You can specify which insights are
 * 			returned by their start time, one or more statuses (<code>ONGOING</code>,
 * 				<code>CLOSED</code>, and <code>CLOSED</code>), one or more severities
 * 				(<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type
 * 				(<code>REACTIVE</code> or <code>PROACTIVE</code>). </p>
 *          <p> Use the <code>Filters</code> parameter to specify status and severity search
 * 			parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or
 * 				<code>PROACTIVE</code> in your search. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, SearchOrganizationInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, SearchOrganizationInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // SearchOrganizationInsightsRequest
 *   AccountIds: [ // SearchInsightsAccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   StartTimeRange: { // StartTimeRange
 *     FromTime: new Date("TIMESTAMP"),
 *     ToTime: new Date("TIMESTAMP"),
 *   },
 *   Filters: { // SearchOrganizationInsightsFilters
 *     Severities: [ // InsightSeverities
 *       "LOW" || "MEDIUM" || "HIGH",
 *     ],
 *     Statuses: [ // InsightStatuses
 *       "ONGOING" || "CLOSED",
 *     ],
 *     ResourceCollection: { // ResourceCollection
 *       CloudFormation: { // CloudFormationCollection
 *         StackNames: [ // StackNames
 *           "STRING_VALUE",
 *         ],
 *       },
 *       Tags: [ // TagCollections
 *         { // TagCollection
 *           AppBoundaryKey: "STRING_VALUE", // required
 *           TagValues: [ // TagValues // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *     ServiceCollection: { // ServiceCollection
 *       ServiceNames: [ // ServiceNames
 *         "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 *       ],
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Type: "REACTIVE" || "PROACTIVE", // required
 * };
 * const command = new SearchOrganizationInsightsCommand(input);
 * const response = await client.send(command);
 * // { // SearchOrganizationInsightsResponse
 * //   ProactiveInsights: [ // ProactiveInsights
 * //     { // ProactiveInsightSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Severity: "LOW" || "MEDIUM" || "HIGH",
 * //       Status: "ONGOING" || "CLOSED",
 * //       InsightTimeRange: { // InsightTimeRange
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       PredictionTimeRange: { // PredictionTimeRange
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       ResourceCollection: { // ResourceCollection
 * //         CloudFormation: { // CloudFormationCollection
 * //           StackNames: [ // StackNames
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Tags: [ // TagCollections
 * //           { // TagCollection
 * //             AppBoundaryKey: "STRING_VALUE", // required
 * //             TagValues: [ // TagValues // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       ServiceCollection: { // ServiceCollection
 * //         ServiceNames: [ // ServiceNames
 * //           "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 * //         ],
 * //       },
 * //       AssociatedResourceArns: [ // AssociatedResourceArns
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   ReactiveInsights: [ // ReactiveInsights
 * //     { // ReactiveInsightSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Severity: "LOW" || "MEDIUM" || "HIGH",
 * //       Status: "ONGOING" || "CLOSED",
 * //       InsightTimeRange: {
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"),
 * //       },
 * //       ResourceCollection: {
 * //         CloudFormation: {
 * //           StackNames: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Tags: [
 * //           {
 * //             AppBoundaryKey: "STRING_VALUE", // required
 * //             TagValues: [ // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       ServiceCollection: {
 * //         ServiceNames: [
 * //           "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 * //         ],
 * //       },
 * //       AssociatedResourceArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchOrganizationInsightsCommandInput - {@link SearchOrganizationInsightsCommandInput}
 * @returns {@link SearchOrganizationInsightsCommandOutput}
 * @see {@link SearchOrganizationInsightsCommandInput} for command's `input` shape.
 * @see {@link SearchOrganizationInsightsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class SearchOrganizationInsightsCommand extends $Command<
  SearchOrganizationInsightsCommandInput,
  SearchOrganizationInsightsCommandOutput,
  DevOpsGuruClientResolvedConfig
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
  constructor(readonly input: SearchOrganizationInsightsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchOrganizationInsightsCommandInput, SearchOrganizationInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchOrganizationInsightsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "SearchOrganizationInsightsCommand";
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
  private serialize(input: SearchOrganizationInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchOrganizationInsightsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchOrganizationInsightsCommandOutput> {
    return de_SearchOrganizationInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
