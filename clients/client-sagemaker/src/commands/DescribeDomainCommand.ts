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

import { DescribeDomainRequest, DescribeDomainResponse } from "../models/models_2";
import { de_DescribeDomainCommand, se_DescribeDomainCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainCommand}.
 */
export interface DescribeDomainCommandInput extends DescribeDomainRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainCommand}.
 */
export interface DescribeDomainCommandOutput extends DescribeDomainResponse, __MetadataBearer {}

/**
 * @public
 * <p>The description of the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeDomainCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeDomainCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeDomainRequest
 *   DomainId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDomainCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainResponse
 * //   DomainArn: "STRING_VALUE",
 * //   DomainId: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   HomeEfsFileSystemId: "STRING_VALUE",
 * //   SingleSignOnManagedApplicationInstanceId: "STRING_VALUE",
 * //   Status: "Deleting" || "Failed" || "InService" || "Pending" || "Updating" || "Update_Failed" || "Delete_Failed",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   FailureReason: "STRING_VALUE",
 * //   AuthMode: "SSO" || "IAM",
 * //   DefaultUserSettings: { // UserSettings
 * //     ExecutionRole: "STRING_VALUE",
 * //     SecurityGroups: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     SharingSettings: { // SharingSettings
 * //       NotebookOutputOption: "Allowed" || "Disabled",
 * //       S3OutputPath: "STRING_VALUE",
 * //       S3KmsKeyId: "STRING_VALUE",
 * //     },
 * //     JupyterServerAppSettings: { // JupyterServerAppSettings
 * //       DefaultResourceSpec: { // ResourceSpec
 * //         SageMakerImageArn: "STRING_VALUE",
 * //         SageMakerImageVersionArn: "STRING_VALUE",
 * //         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 * //         LifecycleConfigArn: "STRING_VALUE",
 * //       },
 * //       LifecycleConfigArns: [ // LifecycleConfigArns
 * //         "STRING_VALUE",
 * //       ],
 * //       CodeRepositories: [ // CodeRepositories
 * //         { // CodeRepository
 * //           RepositoryUrl: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     KernelGatewayAppSettings: { // KernelGatewayAppSettings
 * //       DefaultResourceSpec: {
 * //         SageMakerImageArn: "STRING_VALUE",
 * //         SageMakerImageVersionArn: "STRING_VALUE",
 * //         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 * //         LifecycleConfigArn: "STRING_VALUE",
 * //       },
 * //       CustomImages: [ // CustomImages
 * //         { // CustomImage
 * //           ImageName: "STRING_VALUE", // required
 * //           ImageVersionNumber: Number("int"),
 * //           AppImageConfigName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       LifecycleConfigArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     TensorBoardAppSettings: { // TensorBoardAppSettings
 * //       DefaultResourceSpec: {
 * //         SageMakerImageArn: "STRING_VALUE",
 * //         SageMakerImageVersionArn: "STRING_VALUE",
 * //         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 * //         LifecycleConfigArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     RStudioServerProAppSettings: { // RStudioServerProAppSettings
 * //       AccessStatus: "ENABLED" || "DISABLED",
 * //       UserGroup: "R_STUDIO_ADMIN" || "R_STUDIO_USER",
 * //     },
 * //     RSessionAppSettings: { // RSessionAppSettings
 * //       DefaultResourceSpec: {
 * //         SageMakerImageArn: "STRING_VALUE",
 * //         SageMakerImageVersionArn: "STRING_VALUE",
 * //         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 * //         LifecycleConfigArn: "STRING_VALUE",
 * //       },
 * //       CustomImages: [
 * //         {
 * //           ImageName: "STRING_VALUE", // required
 * //           ImageVersionNumber: Number("int"),
 * //           AppImageConfigName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     CanvasAppSettings: { // CanvasAppSettings
 * //       TimeSeriesForecastingSettings: { // TimeSeriesForecastingSettings
 * //         Status: "ENABLED" || "DISABLED",
 * //         AmazonForecastRoleArn: "STRING_VALUE",
 * //       },
 * //       ModelRegisterSettings: { // ModelRegisterSettings
 * //         Status: "ENABLED" || "DISABLED",
 * //         CrossAccountModelRegisterRoleArn: "STRING_VALUE",
 * //       },
 * //       WorkspaceSettings: { // WorkspaceSettings
 * //         S3ArtifactPath: "STRING_VALUE",
 * //         S3KmsKeyId: "STRING_VALUE",
 * //       },
 * //       IdentityProviderOAuthSettings: [ // IdentityProviderOAuthSettings
 * //         { // IdentityProviderOAuthSetting
 * //           DataSourceName: "SalesforceGenie" || "Snowflake",
 * //           Status: "ENABLED" || "DISABLED",
 * //           SecretArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       KendraSettings: { // KendraSettings
 * //         Status: "ENABLED" || "DISABLED",
 * //       },
 * //       DirectDeploySettings: { // DirectDeploySettings
 * //         Status: "ENABLED" || "DISABLED",
 * //       },
 * //     },
 * //   },
 * //   AppNetworkAccessType: "PublicInternetOnly" || "VpcOnly",
 * //   HomeEfsFileSystemKmsKeyId: "STRING_VALUE",
 * //   SubnetIds: [ // Subnets
 * //     "STRING_VALUE",
 * //   ],
 * //   Url: "STRING_VALUE",
 * //   VpcId: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   DomainSettings: { // DomainSettings
 * //     SecurityGroupIds: [ // DomainSecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     RStudioServerProDomainSettings: { // RStudioServerProDomainSettings
 * //       DomainExecutionRoleArn: "STRING_VALUE", // required
 * //       RStudioConnectUrl: "STRING_VALUE",
 * //       RStudioPackageManagerUrl: "STRING_VALUE",
 * //       DefaultResourceSpec: {
 * //         SageMakerImageArn: "STRING_VALUE",
 * //         SageMakerImageVersionArn: "STRING_VALUE",
 * //         InstanceType: "system" || "ml.t3.micro" || "ml.t3.small" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.8xlarge" || "ml.m5.12xlarge" || "ml.m5.16xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.12xlarge" || "ml.c5.18xlarge" || "ml.c5.24xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.geospatial.interactive" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge",
 * //         LifecycleConfigArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     ExecutionRoleIdentityConfig: "USER_PROFILE_NAME" || "DISABLED",
 * //   },
 * //   AppSecurityGroupManagement: "Service" || "Customer",
 * //   SecurityGroupIdForDomainBoundary: "STRING_VALUE",
 * //   DefaultSpaceSettings: { // DefaultSpaceSettings
 * //     ExecutionRole: "STRING_VALUE",
 * //     SecurityGroups: [
 * //       "STRING_VALUE",
 * //     ],
 * //     JupyterServerAppSettings: {
 * //       DefaultResourceSpec: "<ResourceSpec>",
 * //       LifecycleConfigArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       CodeRepositories: [
 * //         {
 * //           RepositoryUrl: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     KernelGatewayAppSettings: {
 * //       DefaultResourceSpec: "<ResourceSpec>",
 * //       CustomImages: [
 * //         {
 * //           ImageName: "STRING_VALUE", // required
 * //           ImageVersionNumber: Number("int"),
 * //           AppImageConfigName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       LifecycleConfigArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDomainCommandInput - {@link DescribeDomainCommandInput}
 * @returns {@link DescribeDomainCommandOutput}
 * @see {@link DescribeDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeDomainCommand extends $Command<
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
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
  constructor(readonly input: DescribeDomainCommandInput) {
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
  ): Handler<DescribeDomainCommandInput, DescribeDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeDomain",
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
  private serialize(input: DescribeDomainCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDomainCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainCommandOutput> {
    return de_DescribeDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
