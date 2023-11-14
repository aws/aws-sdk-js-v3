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

import { DescribeEndpointConfigInput, DescribeEndpointConfigOutput } from "../models/models_2";
import { de_DescribeEndpointConfigCommand, se_DescribeEndpointConfigCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointConfigCommand}.
 */
export interface DescribeEndpointConfigCommandInput extends DescribeEndpointConfigInput {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointConfigCommand}.
 */
export interface DescribeEndpointConfigCommandOutput extends DescribeEndpointConfigOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the description of an endpoint configuration created using the
 *                 <code>CreateEndpointConfig</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeEndpointConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeEndpointConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeEndpointConfigInput
 *   EndpointConfigName: "STRING_VALUE", // required
 * };
 * const command = new DescribeEndpointConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointConfigOutput
 * //   EndpointConfigName: "STRING_VALUE", // required
 * //   EndpointConfigArn: "STRING_VALUE", // required
 * //   ProductionVariants: [ // ProductionVariantList // required
 * //     { // ProductionVariant
 * //       VariantName: "STRING_VALUE", // required
 * //       ModelName: "STRING_VALUE", // required
 * //       InitialInstanceCount: Number("int"),
 * //       InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.p5.48xlarge",
 * //       InitialVariantWeight: Number("float"),
 * //       AcceleratorType: "ml.eia1.medium" || "ml.eia1.large" || "ml.eia1.xlarge" || "ml.eia2.medium" || "ml.eia2.large" || "ml.eia2.xlarge",
 * //       CoreDumpConfig: { // ProductionVariantCoreDumpConfig
 * //         DestinationS3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       ServerlessConfig: { // ProductionVariantServerlessConfig
 * //         MemorySizeInMB: Number("int"), // required
 * //         MaxConcurrency: Number("int"), // required
 * //         ProvisionedConcurrency: Number("int"),
 * //       },
 * //       VolumeSizeInGB: Number("int"),
 * //       ModelDataDownloadTimeoutInSeconds: Number("int"),
 * //       ContainerStartupHealthCheckTimeoutInSeconds: Number("int"),
 * //       EnableSSMAccess: true || false,
 * //     },
 * //   ],
 * //   DataCaptureConfig: { // DataCaptureConfig
 * //     EnableCapture: true || false,
 * //     InitialSamplingPercentage: Number("int"), // required
 * //     DestinationS3Uri: "STRING_VALUE", // required
 * //     KmsKeyId: "STRING_VALUE",
 * //     CaptureOptions: [ // CaptureOptionList // required
 * //       { // CaptureOption
 * //         CaptureMode: "Input" || "Output", // required
 * //       },
 * //     ],
 * //     CaptureContentTypeHeader: { // CaptureContentTypeHeader
 * //       CsvContentTypes: [ // CsvContentTypes
 * //         "STRING_VALUE",
 * //       ],
 * //       JsonContentTypes: [ // JsonContentTypes
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   KmsKeyId: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   AsyncInferenceConfig: { // AsyncInferenceConfig
 * //     ClientConfig: { // AsyncInferenceClientConfig
 * //       MaxConcurrentInvocationsPerInstance: Number("int"),
 * //     },
 * //     OutputConfig: { // AsyncInferenceOutputConfig
 * //       KmsKeyId: "STRING_VALUE",
 * //       S3OutputPath: "STRING_VALUE",
 * //       NotificationConfig: { // AsyncInferenceNotificationConfig
 * //         SuccessTopic: "STRING_VALUE",
 * //         ErrorTopic: "STRING_VALUE",
 * //         IncludeInferenceResponseIn: [ // AsyncNotificationTopicTypeList
 * //           "SUCCESS_NOTIFICATION_TOPIC" || "ERROR_NOTIFICATION_TOPIC",
 * //         ],
 * //       },
 * //       S3FailurePath: "STRING_VALUE",
 * //     },
 * //   },
 * //   ExplainerConfig: { // ExplainerConfig
 * //     ClarifyExplainerConfig: { // ClarifyExplainerConfig
 * //       EnableExplanations: "STRING_VALUE",
 * //       InferenceConfig: { // ClarifyInferenceConfig
 * //         FeaturesAttribute: "STRING_VALUE",
 * //         ContentTemplate: "STRING_VALUE",
 * //         MaxRecordCount: Number("int"),
 * //         MaxPayloadInMB: Number("int"),
 * //         ProbabilityIndex: Number("int"),
 * //         LabelIndex: Number("int"),
 * //         ProbabilityAttribute: "STRING_VALUE",
 * //         LabelAttribute: "STRING_VALUE",
 * //         LabelHeaders: [ // ClarifyLabelHeaders
 * //           "STRING_VALUE",
 * //         ],
 * //         FeatureHeaders: [ // ClarifyFeatureHeaders
 * //           "STRING_VALUE",
 * //         ],
 * //         FeatureTypes: [ // ClarifyFeatureTypes
 * //           "numerical" || "categorical" || "text",
 * //         ],
 * //       },
 * //       ShapConfig: { // ClarifyShapConfig
 * //         ShapBaselineConfig: { // ClarifyShapBaselineConfig
 * //           MimeType: "STRING_VALUE",
 * //           ShapBaseline: "STRING_VALUE",
 * //           ShapBaselineUri: "STRING_VALUE",
 * //         },
 * //         NumberOfSamples: Number("int"),
 * //         UseLogit: true || false,
 * //         Seed: Number("int"),
 * //         TextConfig: { // ClarifyTextConfig
 * //           Language: "af" || "sq" || "ar" || "hy" || "eu" || "bn" || "bg" || "ca" || "zh" || "hr" || "cs" || "da" || "nl" || "en" || "et" || "fi" || "fr" || "de" || "el" || "gu" || "he" || "hi" || "hu" || "is" || "id" || "ga" || "it" || "kn" || "ky" || "lv" || "lt" || "lb" || "mk" || "ml" || "mr" || "ne" || "nb" || "fa" || "pl" || "pt" || "ro" || "ru" || "sa" || "sr" || "tn" || "si" || "sk" || "sl" || "es" || "sv" || "tl" || "ta" || "tt" || "te" || "tr" || "uk" || "ur" || "yo" || "lij" || "xx", // required
 * //           Granularity: "token" || "sentence" || "paragraph", // required
 * //         },
 * //       },
 * //     },
 * //   },
 * //   ShadowProductionVariants: [
 * //     {
 * //       VariantName: "STRING_VALUE", // required
 * //       ModelName: "STRING_VALUE", // required
 * //       InitialInstanceCount: Number("int"),
 * //       InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge" || "ml.p5.48xlarge",
 * //       InitialVariantWeight: Number("float"),
 * //       AcceleratorType: "ml.eia1.medium" || "ml.eia1.large" || "ml.eia1.xlarge" || "ml.eia2.medium" || "ml.eia2.large" || "ml.eia2.xlarge",
 * //       CoreDumpConfig: {
 * //         DestinationS3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       ServerlessConfig: {
 * //         MemorySizeInMB: Number("int"), // required
 * //         MaxConcurrency: Number("int"), // required
 * //         ProvisionedConcurrency: Number("int"),
 * //       },
 * //       VolumeSizeInGB: Number("int"),
 * //       ModelDataDownloadTimeoutInSeconds: Number("int"),
 * //       ContainerStartupHealthCheckTimeoutInSeconds: Number("int"),
 * //       EnableSSMAccess: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEndpointConfigCommandInput - {@link DescribeEndpointConfigCommandInput}
 * @returns {@link DescribeEndpointConfigCommandOutput}
 * @see {@link DescribeEndpointConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeEndpointConfigCommand extends $Command<
  DescribeEndpointConfigCommandInput,
  DescribeEndpointConfigCommandOutput,
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
  constructor(readonly input: DescribeEndpointConfigCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEndpointConfigCommandInput, DescribeEndpointConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEndpointConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeEndpointConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeEndpointConfig",
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
  private serialize(input: DescribeEndpointConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEndpointConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEndpointConfigCommandOutput> {
    return de_DescribeEndpointConfigCommand(output, context);
  }
}
