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

import { DescribeInferenceComponentInput, DescribeInferenceComponentOutput } from "../models/models_2";
import { de_DescribeInferenceComponentCommand, se_DescribeInferenceComponentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInferenceComponentCommand}.
 */
export interface DescribeInferenceComponentCommandInput extends DescribeInferenceComponentInput {}
/**
 * @public
 *
 * The output of {@link DescribeInferenceComponentCommand}.
 */
export interface DescribeInferenceComponentCommandOutput extends DescribeInferenceComponentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an inference component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeInferenceComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeInferenceComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeInferenceComponentInput
 *   InferenceComponentName: "STRING_VALUE", // required
 * };
 * const command = new DescribeInferenceComponentCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInferenceComponentOutput
 * //   InferenceComponentName: "STRING_VALUE", // required
 * //   InferenceComponentArn: "STRING_VALUE", // required
 * //   EndpointName: "STRING_VALUE", // required
 * //   EndpointArn: "STRING_VALUE", // required
 * //   VariantName: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * //   Specification: { // InferenceComponentSpecificationSummary
 * //     ModelName: "STRING_VALUE",
 * //     Container: { // InferenceComponentContainerSpecificationSummary
 * //       DeployedImage: { // DeployedImage
 * //         SpecifiedImage: "STRING_VALUE",
 * //         ResolvedImage: "STRING_VALUE",
 * //         ResolutionTime: new Date("TIMESTAMP"),
 * //       },
 * //       ArtifactUrl: "STRING_VALUE",
 * //       Environment: { // EnvironmentMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     StartupParameters: { // InferenceComponentStartupParameters
 * //       ModelDataDownloadTimeoutInSeconds: Number("int"),
 * //       ContainerStartupHealthCheckTimeoutInSeconds: Number("int"),
 * //     },
 * //     ComputeResourceRequirements: { // InferenceComponentComputeResourceRequirements
 * //       NumberOfCpuCoresRequired: Number("float"),
 * //       NumberOfAcceleratorDevicesRequired: Number("float"),
 * //       MinMemoryRequiredInMb: Number("int"), // required
 * //       MaxMemoryRequiredInMb: Number("int"),
 * //     },
 * //   },
 * //   RuntimeConfig: { // InferenceComponentRuntimeConfigSummary
 * //     DesiredCopyCount: Number("int"),
 * //     CurrentCopyCount: Number("int"),
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   InferenceComponentStatus: "InService" || "Creating" || "Updating" || "Failed" || "Deleting",
 * // };
 *
 * ```
 *
 * @param DescribeInferenceComponentCommandInput - {@link DescribeInferenceComponentCommandInput}
 * @returns {@link DescribeInferenceComponentCommandOutput}
 * @see {@link DescribeInferenceComponentCommandInput} for command's `input` shape.
 * @see {@link DescribeInferenceComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeInferenceComponentCommand extends $Command<
  DescribeInferenceComponentCommandInput,
  DescribeInferenceComponentCommandOutput,
  SageMakerClientResolvedConfig
> {
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
  constructor(readonly input: DescribeInferenceComponentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInferenceComponentCommandInput, DescribeInferenceComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInferenceComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeInferenceComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeInferenceComponent",
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
  private serialize(input: DescribeInferenceComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInferenceComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInferenceComponentCommandOutput> {
    return de_DescribeInferenceComponentCommand(output, context);
  }
}
