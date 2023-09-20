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

import { DescribeEdgePackagingJobRequest, DescribeEdgePackagingJobResponse } from "../models/models_2";
import { de_DescribeEdgePackagingJobCommand, se_DescribeEdgePackagingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEdgePackagingJobCommand}.
 */
export interface DescribeEdgePackagingJobCommandInput extends DescribeEdgePackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEdgePackagingJobCommand}.
 */
export interface DescribeEdgePackagingJobCommandOutput extends DescribeEdgePackagingJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>A description of edge packaging jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeEdgePackagingJobRequest
 *   EdgePackagingJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEdgePackagingJobResponse
 * //   EdgePackagingJobArn: "STRING_VALUE", // required
 * //   EdgePackagingJobName: "STRING_VALUE", // required
 * //   CompilationJobName: "STRING_VALUE",
 * //   ModelName: "STRING_VALUE",
 * //   ModelVersion: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   OutputConfig: { // EdgeOutputConfig
 * //     S3OutputLocation: "STRING_VALUE", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //     PresetDeploymentType: "GreengrassV2Component",
 * //     PresetDeploymentConfig: "STRING_VALUE",
 * //   },
 * //   ResourceKey: "STRING_VALUE",
 * //   EdgePackagingJobStatus: "STARTING" || "INPROGRESS" || "COMPLETED" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //   EdgePackagingJobStatusMessage: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   ModelArtifact: "STRING_VALUE",
 * //   ModelSignature: "STRING_VALUE",
 * //   PresetDeploymentOutput: { // EdgePresetDeploymentOutput
 * //     Type: "GreengrassV2Component", // required
 * //     Artifact: "STRING_VALUE",
 * //     Status: "COMPLETED" || "FAILED",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEdgePackagingJobCommandInput - {@link DescribeEdgePackagingJobCommandInput}
 * @returns {@link DescribeEdgePackagingJobCommandOutput}
 * @see {@link DescribeEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeEdgePackagingJobCommand extends $Command<
  DescribeEdgePackagingJobCommandInput,
  DescribeEdgePackagingJobCommandOutput,
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
  constructor(readonly input: DescribeEdgePackagingJobCommandInput) {
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
  ): Handler<DescribeEdgePackagingJobCommandInput, DescribeEdgePackagingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEdgePackagingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeEdgePackagingJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeEdgePackagingJob",
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
  private serialize(input: DescribeEdgePackagingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEdgePackagingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEdgePackagingJobCommandOutput> {
    return de_DescribeEdgePackagingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
