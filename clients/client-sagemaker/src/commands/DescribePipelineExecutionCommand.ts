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

import { DescribePipelineExecutionRequest, DescribePipelineExecutionResponse } from "../models/models_2";
import { de_DescribePipelineExecutionCommand, se_DescribePipelineExecutionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePipelineExecutionCommand}.
 */
export interface DescribePipelineExecutionCommandInput extends DescribePipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePipelineExecutionCommand}.
 */
export interface DescribePipelineExecutionCommandOutput extends DescribePipelineExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the details of a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribePipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribePipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribePipelineExecutionRequest
 *   PipelineExecutionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePipelineExecutionResponse
 * //   PipelineArn: "STRING_VALUE",
 * //   PipelineExecutionArn: "STRING_VALUE",
 * //   PipelineExecutionDisplayName: "STRING_VALUE",
 * //   PipelineExecutionStatus: "Executing" || "Stopping" || "Stopped" || "Failed" || "Succeeded",
 * //   PipelineExecutionDescription: "STRING_VALUE",
 * //   PipelineExperimentConfig: { // PipelineExperimentConfig
 * //     ExperimentName: "STRING_VALUE",
 * //     TrialName: "STRING_VALUE",
 * //   },
 * //   FailureReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   CreatedBy: { // UserContext
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: { // IamIdentity
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   LastModifiedBy: {
 * //     UserProfileArn: "STRING_VALUE",
 * //     UserProfileName: "STRING_VALUE",
 * //     DomainId: "STRING_VALUE",
 * //     IamIdentity: {
 * //       Arn: "STRING_VALUE",
 * //       PrincipalId: "STRING_VALUE",
 * //       SourceIdentity: "STRING_VALUE",
 * //     },
 * //   },
 * //   ParallelismConfiguration: { // ParallelismConfiguration
 * //     MaxParallelExecutionSteps: Number("int"), // required
 * //   },
 * //   SelectiveExecutionConfig: { // SelectiveExecutionConfig
 * //     SourcePipelineExecutionArn: "STRING_VALUE",
 * //     SelectedSteps: [ // SelectedStepList // required
 * //       { // SelectedStep
 * //         StepName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePipelineExecutionCommandInput - {@link DescribePipelineExecutionCommandInput}
 * @returns {@link DescribePipelineExecutionCommandOutput}
 * @see {@link DescribePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribePipelineExecutionCommand extends $Command<
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
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
  constructor(readonly input: DescribePipelineExecutionCommandInput) {
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
  ): Handler<DescribePipelineExecutionCommandInput, DescribePipelineExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePipelineExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribePipelineExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribePipelineExecution",
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
  private serialize(input: DescribePipelineExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePipelineExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePipelineExecutionCommandOutput> {
    return de_DescribePipelineExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
