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
import { DescribeResourceCollectionHealthRequest, DescribeResourceCollectionHealthResponse } from "../models/models_0";
import {
  de_DescribeResourceCollectionHealthCommand,
  se_DescribeResourceCollectionHealthCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceCollectionHealthCommand}.
 */
export interface DescribeResourceCollectionHealthCommandInput extends DescribeResourceCollectionHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourceCollectionHealthCommand}.
 */
export interface DescribeResourceCollectionHealthCommandOutput
  extends DescribeResourceCollectionHealthResponse,
    __MetadataBearer {}

/**
 * @public
 * <p> Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR)
 * 			for all closed insights in resource collections in your account. You specify the type of
 * 			Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeResourceCollectionHealthCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeResourceCollectionHealthCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // DescribeResourceCollectionHealthRequest
 *   ResourceCollectionType: "AWS_CLOUD_FORMATION" || "AWS_SERVICE" || "AWS_TAGS", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeResourceCollectionHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceCollectionHealthResponse
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
 * @param DescribeResourceCollectionHealthCommandInput - {@link DescribeResourceCollectionHealthCommandInput}
 * @returns {@link DescribeResourceCollectionHealthCommandOutput}
 * @see {@link DescribeResourceCollectionHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceCollectionHealthCommandOutput} for command's `response` shape.
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
export class DescribeResourceCollectionHealthCommand extends $Command<
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
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
  constructor(readonly input: DescribeResourceCollectionHealthCommandInput) {
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
  ): Handler<DescribeResourceCollectionHealthCommandInput, DescribeResourceCollectionHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeResourceCollectionHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeResourceCollectionHealthCommand";
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
    input: DescribeResourceCollectionHealthCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeResourceCollectionHealthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeResourceCollectionHealthCommandOutput> {
    return de_DescribeResourceCollectionHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
