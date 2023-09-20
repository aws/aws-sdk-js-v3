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

import { CreateNotebookInstanceInput, CreateNotebookInstanceOutput } from "../models/models_1";
import { de_CreateNotebookInstanceCommand, se_CreateNotebookInstanceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNotebookInstanceCommand}.
 */
export interface CreateNotebookInstanceCommandInput extends CreateNotebookInstanceInput {}
/**
 * @public
 *
 * The output of {@link CreateNotebookInstanceCommand}.
 */
export interface CreateNotebookInstanceCommandOutput extends CreateNotebookInstanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an SageMaker notebook instance. A notebook instance is a machine learning (ML)
 *             compute instance running on a Jupyter notebook. </p>
 *          <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute
 *             instance that you want to run. SageMaker launches the instance, installs common libraries
 *             that you can use to explore datasets for model training, and attaches an ML storage
 *             volume to the notebook instance. </p>
 *          <p>SageMaker also provides a set of example notebooks. Each notebook demonstrates how to
 *             use SageMaker with a specific algorithm or with a machine learning framework. </p>
 *          <p>After receiving the request, SageMaker does the following:</p>
 *          <ol>
 *             <li>
 *                <p>Creates a network interface in the SageMaker VPC.</p>
 *             </li>
 *             <li>
 *                <p>(Option) If you specified <code>SubnetId</code>, SageMaker creates a network
 *                     interface in your own VPC, which is inferred from the subnet ID that you provide
 *                     in the input. When creating this network interface, SageMaker attaches the security
 *                     group that you specified in the request to the network interface that it creates
 *                     in your VPC.</p>
 *             </li>
 *             <li>
 *                <p>Launches an EC2 instance of the type specified in the request in the SageMaker
 *                     VPC. If you specified <code>SubnetId</code> of your VPC, SageMaker specifies both
 *                     network interfaces when launching this instance. This enables inbound traffic
 *                     from your own VPC to the notebook instance, assuming that the security groups
 *                     allow it.</p>
 *             </li>
 *          </ol>
 *          <p>After creating the notebook instance, SageMaker returns its Amazon Resource Name (ARN).
 *             You can't change the name of a notebook instance after you create it.</p>
 *          <p>After SageMaker creates the notebook instance, you can connect to the Jupyter server and
 *             work in Jupyter notebooks. For example, you can write code to explore a dataset that you
 *             can use for model training, train a model, host models by creating SageMaker endpoints, and
 *             validate hosted models. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateNotebookInstanceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateNotebookInstanceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateNotebookInstanceInput
 *   NotebookInstanceName: "STRING_VALUE", // required
 *   InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge", // required
 *   SubnetId: "STRING_VALUE",
 *   SecurityGroupIds: [ // SecurityGroupIds
 *     "STRING_VALUE",
 *   ],
 *   RoleArn: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   LifecycleConfigName: "STRING_VALUE",
 *   DirectInternetAccess: "Enabled" || "Disabled",
 *   VolumeSizeInGB: Number("int"),
 *   AcceleratorTypes: [ // NotebookInstanceAcceleratorTypes
 *     "ml.eia1.medium" || "ml.eia1.large" || "ml.eia1.xlarge" || "ml.eia2.medium" || "ml.eia2.large" || "ml.eia2.xlarge",
 *   ],
 *   DefaultCodeRepository: "STRING_VALUE",
 *   AdditionalCodeRepositories: [ // AdditionalCodeRepositoryNamesOrUrls
 *     "STRING_VALUE",
 *   ],
 *   RootAccess: "Enabled" || "Disabled",
 *   PlatformIdentifier: "STRING_VALUE",
 *   InstanceMetadataServiceConfiguration: { // InstanceMetadataServiceConfiguration
 *     MinimumInstanceMetadataServiceVersion: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateNotebookInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotebookInstanceOutput
 * //   NotebookInstanceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNotebookInstanceCommandInput - {@link CreateNotebookInstanceCommandInput}
 * @returns {@link CreateNotebookInstanceCommandOutput}
 * @see {@link CreateNotebookInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateNotebookInstanceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateNotebookInstanceCommand extends $Command<
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput,
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
  constructor(readonly input: CreateNotebookInstanceCommandInput) {
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
  ): Handler<CreateNotebookInstanceCommandInput, CreateNotebookInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNotebookInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateNotebookInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateNotebookInstance",
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
  private serialize(input: CreateNotebookInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNotebookInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNotebookInstanceCommandOutput> {
    return de_CreateNotebookInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
