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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  DescribeOrganizationResourceCollectionHealthRequest,
  DescribeOrganizationResourceCollectionHealthResponse,
} from "../models/models_0";
import {
  de_DescribeOrganizationResourceCollectionHealthCommand,
  se_DescribeOrganizationResourceCollectionHealthCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationResourceCollectionHealthCommand}.
 */
export interface DescribeOrganizationResourceCollectionHealthCommandInput
  extends DescribeOrganizationResourceCollectionHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationResourceCollectionHealthCommand}.
 */
export interface DescribeOrganizationResourceCollectionHealthCommandOutput
  extends DescribeOrganizationResourceCollectionHealthResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides an overview of your system's health. If additional member accounts are part
 * 			of your organization, you can filter those accounts using the <code>AccountIds</code>
 * 			field.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeOrganizationResourceCollectionHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeOrganizationResourceCollectionHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeOrganizationResourceCollectionHealthRequest
 *   OrganizationResourceCollectionType: "AWS_CLOUD_FORMATION" || "AWS_SERVICE" || "AWS_ACCOUNT" || "AWS_TAGS", // required
 *   AccountIds: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitIds: [ // OrganizationalUnitIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeOrganizationResourceCollectionHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationResourceCollectionHealthResponse
 * //   CloudFormation: [ // CloudFormationHealths
 * //     { // CloudFormationHealth
 * //       StackName: "STRING_VALUE",
 * //       Insight: { // InsightHealth
 * //         OpenProactiveInsights: Number("int"),
 * //         OpenReactiveInsights: Number("int"),
 * //         MeanTimeToRecoverInMilliseconds: Number("long"),
 * //       },
 * //       AnalyzedResourceCount: Number("long"),
 * //     },
 * //   ],
 * //   Service: [ // ServiceHealths
 * //     { // ServiceHealth
 * //       ServiceName: "API_GATEWAY" || "APPLICATION_ELB" || "AUTO_SCALING_GROUP" || "CLOUD_FRONT" || "DYNAMO_DB" || "EC2" || "ECS" || "EKS" || "ELASTIC_BEANSTALK" || "ELASTI_CACHE" || "ELB" || "ES" || "KINESIS" || "LAMBDA" || "NAT_GATEWAY" || "NETWORK_ELB" || "RDS" || "REDSHIFT" || "ROUTE_53" || "S3" || "SAGE_MAKER" || "SNS" || "SQS" || "STEP_FUNCTIONS" || "SWF",
 * //       Insight: { // ServiceInsightHealth
 * //         OpenProactiveInsights: Number("int"),
 * //         OpenReactiveInsights: Number("int"),
 * //       },
 * //       AnalyzedResourceCount: Number("long"),
 * //     },
 * //   ],
 * //   Account: [ // AccountHealths
 * //     { // AccountHealth
 * //       AccountId: "STRING_VALUE",
 * //       Insight: { // AccountInsightHealth
 * //         OpenProactiveInsights: Number("int"),
 * //         OpenReactiveInsights: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Tags: [ // TagHealths
 * //     { // TagHealth
 * //       AppBoundaryKey: "STRING_VALUE",
 * //       TagValue: "STRING_VALUE",
 * //       Insight: {
 * //         OpenProactiveInsights: Number("int"),
 * //         OpenReactiveInsights: Number("int"),
 * //         MeanTimeToRecoverInMilliseconds: Number("long"),
 * //       },
 * //       AnalyzedResourceCount: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationResourceCollectionHealthCommandInput - {@link DescribeOrganizationResourceCollectionHealthCommandInput}
 * @returns {@link DescribeOrganizationResourceCollectionHealthCommandOutput}
 * @see {@link DescribeOrganizationResourceCollectionHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationResourceCollectionHealthCommandOutput} for command's `response` shape.
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
export class DescribeOrganizationResourceCollectionHealthCommand extends $Command<
  DescribeOrganizationResourceCollectionHealthCommandInput,
  DescribeOrganizationResourceCollectionHealthCommandOutput,
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
  constructor(readonly input: DescribeOrganizationResourceCollectionHealthCommandInput) {
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
  ): Handler<
    DescribeOrganizationResourceCollectionHealthCommandInput,
    DescribeOrganizationResourceCollectionHealthCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeOrganizationResourceCollectionHealthCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeOrganizationResourceCollectionHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CapstoneControlPlaneService",
        operation: "DescribeOrganizationResourceCollectionHealth",
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
  private serialize(
    input: DescribeOrganizationResourceCollectionHealthCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeOrganizationResourceCollectionHealthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationResourceCollectionHealthCommandOutput> {
    return de_DescribeOrganizationResourceCollectionHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
