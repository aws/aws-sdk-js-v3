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

import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { DescribeRecommendationExportJobsRequest, DescribeRecommendationExportJobsResponse } from "../models/models_0";
import {
  de_DescribeRecommendationExportJobsCommand,
  se_DescribeRecommendationExportJobsCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecommendationExportJobsCommand}.
 */
export interface DescribeRecommendationExportJobsCommandInput extends DescribeRecommendationExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecommendationExportJobsCommand}.
 */
export interface DescribeRecommendationExportJobsCommandOutput
  extends DescribeRecommendationExportJobsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes recommendation export jobs created in the last seven days.</p>
 *          <p>Use the <a>ExportAutoScalingGroupRecommendations</a> or <a>ExportEC2InstanceRecommendations</a> actions to request an export of your
 *             recommendations. Then use the <a>DescribeRecommendationExportJobs</a> action
 *             to view your export jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, DescribeRecommendationExportJobsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, DescribeRecommendationExportJobsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const input = { // DescribeRecommendationExportJobsRequest
 *   jobIds: [ // JobIds
 *     "STRING_VALUE",
 *   ],
 *   filters: [ // JobFilters
 *     { // JobFilter
 *       name: "ResourceType" || "JobStatus",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeRecommendationExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecommendationExportJobsResponse
 * //   recommendationExportJobs: [ // RecommendationExportJobs
 * //     { // RecommendationExportJob
 * //       jobId: "STRING_VALUE",
 * //       destination: { // ExportDestination
 * //         s3: { // S3Destination
 * //           bucket: "STRING_VALUE",
 * //           key: "STRING_VALUE",
 * //           metadataKey: "STRING_VALUE",
 * //         },
 * //       },
 * //       resourceType: "Ec2Instance" || "AutoScalingGroup" || "EbsVolume" || "LambdaFunction" || "NotApplicable" || "EcsService",
 * //       status: "Queued" || "InProgress" || "Complete" || "Failed",
 * //       creationTimestamp: new Date("TIMESTAMP"),
 * //       lastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //       failureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecommendationExportJobsCommandInput - {@link DescribeRecommendationExportJobsCommandInput}
 * @returns {@link DescribeRecommendationExportJobsCommandOutput}
 * @see {@link DescribeRecommendationExportJobsCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationExportJobsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for ComputeOptimizerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Try your call again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value supplied for the input parameter is out of range or not valid.</p>
 *
 * @throws {@link MissingAuthenticationToken} (client fault)
 *  <p>The request must contain either a valid (registered) Amazon Web Services access key ID
 *             or X.509 certificate.</p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p>The account is not opted in to Compute Optimizer.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ComputeOptimizerServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizer service.</p>
 *
 */
export class DescribeRecommendationExportJobsCommand extends $Command<
  DescribeRecommendationExportJobsCommandInput,
  DescribeRecommendationExportJobsCommandOutput,
  ComputeOptimizerClientResolvedConfig
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
  constructor(readonly input: DescribeRecommendationExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRecommendationExportJobsCommandInput, DescribeRecommendationExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecommendationExportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "DescribeRecommendationExportJobsCommand";
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
    input: DescribeRecommendationExportJobsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeRecommendationExportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRecommendationExportJobsCommandOutput> {
    return de_DescribeRecommendationExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
