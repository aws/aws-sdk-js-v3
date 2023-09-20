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

import { DescribeEdgeDeploymentPlanRequest, DescribeEdgeDeploymentPlanResponse } from "../models/models_2";
import { de_DescribeEdgeDeploymentPlanCommand, se_DescribeEdgeDeploymentPlanCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEdgeDeploymentPlanCommand}.
 */
export interface DescribeEdgeDeploymentPlanCommandInput extends DescribeEdgeDeploymentPlanRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEdgeDeploymentPlanCommand}.
 */
export interface DescribeEdgeDeploymentPlanCommandOutput extends DescribeEdgeDeploymentPlanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an edge deployment plan with deployment status per stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeEdgeDeploymentPlanCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeEdgeDeploymentPlanCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeEdgeDeploymentPlanRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeEdgeDeploymentPlanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEdgeDeploymentPlanResponse
 * //   EdgeDeploymentPlanArn: "STRING_VALUE", // required
 * //   EdgeDeploymentPlanName: "STRING_VALUE", // required
 * //   ModelConfigs: [ // EdgeDeploymentModelConfigs // required
 * //     { // EdgeDeploymentModelConfig
 * //       ModelHandle: "STRING_VALUE", // required
 * //       EdgePackagingJobName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   DeviceFleetName: "STRING_VALUE", // required
 * //   EdgeDeploymentSuccess: Number("int"),
 * //   EdgeDeploymentPending: Number("int"),
 * //   EdgeDeploymentFailed: Number("int"),
 * //   Stages: [ // DeploymentStageStatusSummaries // required
 * //     { // DeploymentStageStatusSummary
 * //       StageName: "STRING_VALUE", // required
 * //       DeviceSelectionConfig: { // DeviceSelectionConfig
 * //         DeviceSubsetType: "PERCENTAGE" || "SELECTION" || "NAMECONTAINS", // required
 * //         Percentage: Number("int"),
 * //         DeviceNames: [ // DeviceNames
 * //           "STRING_VALUE",
 * //         ],
 * //         DeviceNameContains: "STRING_VALUE",
 * //       },
 * //       DeploymentConfig: { // EdgeDeploymentConfig
 * //         FailureHandlingPolicy: "ROLLBACK_ON_FAILURE" || "DO_NOTHING", // required
 * //       },
 * //       DeploymentStatus: { // EdgeDeploymentStatus
 * //         StageStatus: "CREATING" || "READYTODEPLOY" || "STARTING" || "INPROGRESS" || "DEPLOYED" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //         EdgeDeploymentSuccessInStage: Number("int"), // required
 * //         EdgeDeploymentPendingInStage: Number("int"), // required
 * //         EdgeDeploymentFailedInStage: Number("int"), // required
 * //         EdgeDeploymentStatusMessage: "STRING_VALUE",
 * //         EdgeDeploymentStageStartTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEdgeDeploymentPlanCommandInput - {@link DescribeEdgeDeploymentPlanCommandInput}
 * @returns {@link DescribeEdgeDeploymentPlanCommandOutput}
 * @see {@link DescribeEdgeDeploymentPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeEdgeDeploymentPlanCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeEdgeDeploymentPlanCommand extends $Command<
  DescribeEdgeDeploymentPlanCommandInput,
  DescribeEdgeDeploymentPlanCommandOutput,
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
  constructor(readonly input: DescribeEdgeDeploymentPlanCommandInput) {
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
  ): Handler<DescribeEdgeDeploymentPlanCommandInput, DescribeEdgeDeploymentPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEdgeDeploymentPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeEdgeDeploymentPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeEdgeDeploymentPlan",
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
  private serialize(input: DescribeEdgeDeploymentPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEdgeDeploymentPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEdgeDeploymentPlanCommandOutput> {
    return de_DescribeEdgeDeploymentPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
