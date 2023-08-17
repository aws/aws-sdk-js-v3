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
import { ListOrganizationInsightsRequest, ListOrganizationInsightsResponse } from "../models/models_0";
import { de_ListOrganizationInsightsCommand, se_ListOrganizationInsightsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationInsightsCommand}.
 */
export interface ListOrganizationInsightsCommandInput extends ListOrganizationInsightsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationInsightsCommand}.
 */
export interface ListOrganizationInsightsCommandOutput extends ListOrganizationInsightsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of insights associated with the account or OU Id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListOrganizationInsightsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListOrganizationInsightsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListOrganizationInsightsRequest
 *   StatusFilter: { // ListInsightsStatusFilter
 *     Ongoing: { // ListInsightsOngoingStatusFilter
 *       Type: "REACTIVE" || "PROACTIVE", // required
 *     },
 *     Closed: { // ListInsightsClosedStatusFilter
 *       Type: "REACTIVE" || "PROACTIVE", // required
 *       EndTimeRange: { // EndTimeRange
 *         FromTime: new Date("TIMESTAMP"),
 *         ToTime: new Date("TIMESTAMP"),
 *       },
 *     },
 *     Any: { // ListInsightsAnyStatusFilter
 *       Type: "REACTIVE" || "PROACTIVE", // required
 *       StartTimeRange: { // StartTimeRange
 *         FromTime: new Date("TIMESTAMP"),
 *         ToTime: new Date("TIMESTAMP"),
 *       },
 *     },
 *   },
 *   MaxResults: Number("int"),
 *   AccountIds: [ // ListInsightsAccountIdList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitIds: [ // ListInsightsOrganizationalUnitIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOrganizationInsightsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationInsightsResponse
 * //   ProactiveInsights: [ // ProactiveOrganizationInsights
 * //     { // ProactiveOrganizationInsightSummary
 * //       Id: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       OrganizationalUnitId: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   ReactiveInsights: [ // ReactiveOrganizationInsights
 * //     { // ReactiveOrganizationInsightSummary
 * //       Id: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       OrganizationalUnitId: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationInsightsCommandInput - {@link ListOrganizationInsightsCommandInput}
 * @returns {@link ListOrganizationInsightsCommandOutput}
 * @see {@link ListOrganizationInsightsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationInsightsCommandOutput} for command's `response` shape.
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
export class ListOrganizationInsightsCommand extends $Command<
  ListOrganizationInsightsCommandInput,
  ListOrganizationInsightsCommandOutput,
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
  constructor(readonly input: ListOrganizationInsightsCommandInput) {
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
  ): Handler<ListOrganizationInsightsCommandInput, ListOrganizationInsightsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOrganizationInsightsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListOrganizationInsightsCommand";
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
  private serialize(input: ListOrganizationInsightsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOrganizationInsightsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOrganizationInsightsCommandOutput> {
    return de_ListOrganizationInsightsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
