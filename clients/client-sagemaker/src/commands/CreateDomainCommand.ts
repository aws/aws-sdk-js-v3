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

import { CreateDomainRequest, CreateDomainResponse } from "../models/models_1";
import { de_CreateDomainCommand, se_CreateDomainCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDomainCommand}.
 */
export interface CreateDomainCommandInput extends CreateDomainRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainCommand}.
 */
export interface CreateDomainCommandOutput extends CreateDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated
 *     Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application,
 *     policy, and Amazon Virtual Private Cloud (VPC) configurations.
 *     Users within a domain can share notebook files and other artifacts with each other.</p>
 *          <p>
 *             <b>EFS storage</b>
 *          </p>
 *          <p>When a domain is created, an EFS volume is created for use by all of the users within the
 *     domain. Each user receives a private home directory within the EFS volume for notebooks,
 *     Git repositories, and data files.</p>
 *          <p>SageMaker uses the Amazon Web Services Key Management Service (Amazon Web Services KMS) to encrypt the EFS volume attached to the domain with
 *      an Amazon Web Services managed key by default. For more control, you can specify a
 *      customer managed key. For more information, see
 *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at
 *       Rest Using Encryption</a>.</p>
 *          <p>
 *             <b>VPC configuration</b>
 *          </p>
 *          <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified
 *     VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code>
 *     parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you
 *     choose when you onboard to Studio. The following options are available:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by
 *         Amazon SageMaker, which allows internet access. This is the default value.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets.
 *         Internet access is disabled by default. To allow internet access, you must specify a
 *         NAT gateway.</p>
 *                <p>When internet access is disabled, you won't be able to run a Studio notebook or to
 *         train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime
 *         or a NAT gateway and your security groups allow outbound connections.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules
 *       in order to launch a SageMaker Studio app successfully.</p>
 *          </important>
 *          <p>For more information, see
 *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect
 *        SageMaker Studio Notebooks to Resources in a VPC</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateDomainCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateDomainCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   AuthMode: "SSO" || "IAM", // required
 *   DefaultUserSettings: { // UserSettings
 *     ExecutionRole: "STRING_VALUE",
 *     SecurityGroups: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     SharingSettings: { // SharingSettings
 *       NotebookOutputOption: "Allowed" || "Disabled",
 *       S3OutputPath: "STRING_VALUE",
 *       S3KmsKeyId: "STRING_VALUE",
 *     },
 *     JupyterServerAppSettings: { // JupyterServerAppSettings
 *       DefaultResourceSpec: { // ResourceSpec
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *       LifecycleConfigArns: [ // LifecycleConfigArns
 *         "STRING_VALUE",
 *       ],
 *       CodeRepositories: [ // CodeRepositories
 *         { // CodeRepository
 *           RepositoryUrl: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     KernelGatewayAppSettings: { // KernelGatewayAppSettings
 *       DefaultResourceSpec: {
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *       CustomImages: [ // CustomImages
 *         { // CustomImage
 *           ImageName: "STRING_VALUE", // required
 *           ImageVersionNumber: Number("int"),
 *           AppImageConfigName: "STRING_VALUE", // required
 *         },
 *       ],
 *       LifecycleConfigArns: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     TensorBoardAppSettings: { // TensorBoardAppSettings
 *       DefaultResourceSpec: {
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *     },
 *     RStudioServerProAppSettings: { // RStudioServerProAppSettings
 *       AccessStatus: "ENABLED" || "DISABLED",
 *       UserGroup: "R_STUDIO_ADMIN" || "R_STUDIO_USER",
 *     },
 *     RSessionAppSettings: { // RSessionAppSettings
 *       DefaultResourceSpec: {
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *       CustomImages: [
 *         {
 *           ImageName: "STRING_VALUE", // required
 *           ImageVersionNumber: Number("int"),
 *           AppImageConfigName: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     CanvasAppSettings: { // CanvasAppSettings
 *       TimeSeriesForecastingSettings: { // TimeSeriesForecastingSettings
 *         Status: "ENABLED" || "DISABLED",
 *         AmazonForecastRoleArn: "STRING_VALUE",
 *       },
 *       ModelRegisterSettings: { // ModelRegisterSettings
 *         Status: "ENABLED" || "DISABLED",
 *         CrossAccountModelRegisterRoleArn: "STRING_VALUE",
 *       },
 *       WorkspaceSettings: { // WorkspaceSettings
 *         S3ArtifactPath: "STRING_VALUE",
 *         S3KmsKeyId: "STRING_VALUE",
 *       },
 *       IdentityProviderOAuthSettings: [ // IdentityProviderOAuthSettings
 *         { // IdentityProviderOAuthSetting
 *           DataSourceName: "SalesforceGenie" || "Snowflake",
 *           Status: "ENABLED" || "DISABLED",
 *           SecretArn: "STRING_VALUE",
 *         },
 *       ],
 *       KendraSettings: { // KendraSettings
 *         Status: "ENABLED" || "DISABLED",
 *       },
 *       DirectDeploySettings: { // DirectDeploySettings
 *         Status: "ENABLED" || "DISABLED",
 *       },
 *     },
 *   },
 *   SubnetIds: [ // Subnets // required
 *     "STRING_VALUE",
 *   ],
 *   VpcId: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AppNetworkAccessType: "PublicInternetOnly" || "VpcOnly",
 *   HomeEfsFileSystemKmsKeyId: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   AppSecurityGroupManagement: "Service" || "Customer",
 *   DomainSettings: { // DomainSettings
 *     SecurityGroupIds: [ // DomainSecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     RStudioServerProDomainSettings: { // RStudioServerProDomainSettings
 *       DomainExecutionRoleArn: "STRING_VALUE", // required
 *       RStudioConnectUrl: "STRING_VALUE",
 *       RStudioPackageManagerUrl: "STRING_VALUE",
 *       DefaultResourceSpec: {
 *         SageMakerImageArn: "STRING_VALUE",
 *         SageMakerImageVersionArn: "STRING_VALUE",
 *         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 *         LifecycleConfigArn: "STRING_VALUE",
 *       },
 *     },
 *     ExecutionRoleIdentityConfig: "USER_PROFILE_NAME" || "DISABLED",
 *   },
 *   DefaultSpaceSettings: { // DefaultSpaceSettings
 *     ExecutionRole: "STRING_VALUE",
 *     SecurityGroups: [
 *       "STRING_VALUE",
 *     ],
 *     JupyterServerAppSettings: {
 *       DefaultResourceSpec: "<ResourceSpec>",
 *       LifecycleConfigArns: [
 *         "STRING_VALUE",
 *       ],
 *       CodeRepositories: [
 *         {
 *           RepositoryUrl: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     KernelGatewayAppSettings: {
 *       DefaultResourceSpec: "<ResourceSpec>",
 *       CustomImages: [
 *         {
 *           ImageName: "STRING_VALUE", // required
 *           ImageVersionNumber: Number("int"),
 *           AppImageConfigName: "STRING_VALUE", // required
 *         },
 *       ],
 *       LifecycleConfigArns: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateDomainCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainResponse
 * //   DomainArn: "STRING_VALUE",
 * //   Url: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDomainCommandInput - {@link CreateDomainCommandInput}
 * @returns {@link CreateDomainCommandOutput}
 * @see {@link CreateDomainCommandInput} for command's `input` shape.
 * @see {@link CreateDomainCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateDomainCommand extends $Command<
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
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
  constructor(readonly input: CreateDomainCommandInput) {
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
  ): Handler<CreateDomainCommandInput, CreateDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateDomainCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateDomain",
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
  private serialize(input: CreateDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDomainCommandOutput> {
    return de_CreateDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
