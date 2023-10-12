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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  CreateFunctionRequest,
  CreateFunctionRequestFilterSensitiveLog,
  FunctionConfiguration,
  FunctionConfigurationFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateFunctionCommand, se_CreateFunctionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandInput extends CreateFunctionRequest {}
/**
 * @public
 *
 * The output of {@link CreateFunctionCommand}.
 */
export interface CreateFunctionCommandOutput extends FunctionConfiguration, __MetadataBearer {}

/**
 * @public
 * <p>Creates a Lambda function. To create a function, you need a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html">deployment package</a> and an <a href="https://docs.aws.amazon.com/lambda/latest/dg/intro-permission-model.html#lambda-intro-execution-role">execution role</a>. The
 *       deployment package is a .zip file archive or container image that contains your function code. The execution role
 *       grants the function permission to use Amazon Web Services, such as Amazon CloudWatch Logs for log
 *       streaming and X-Ray for request tracing.</p>
 *          <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container
 *         image</a>, then you set the package type to <code>Image</code>. For a container image, the code property
 *       must include the URI of a container image in the Amazon ECR registry. You do not need to specify the
 *       handler and runtime properties.</p>
 *          <p>If the deployment package is a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>, then
 *       you set the package type to <code>Zip</code>. For a .zip file archive, the code property specifies the location of
 *       the .zip file. You must also specify the handler and runtime properties. The code in the deployment package must
 *       be compatible with the target instruction set architecture of the function (<code>x86-64</code> or
 *         <code>arm64</code>). If you do not specify the architecture, then the default value is
 *       <code>x86-64</code>.</p>
 *          <p>When you create a function, Lambda provisions an instance of the function and its supporting
 *       resources. If your function connects to a VPC, this process can take a minute or so. During this time, you can't
 *       invoke or modify the function. The <code>State</code>, <code>StateReason</code>, and <code>StateReasonCode</code>
 *       fields in the response from <a>GetFunctionConfiguration</a> indicate when the function is ready to
 *       invoke. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/functions-states.html">Lambda function states</a>.</p>
 *          <p>A function has an unpublished version, and can have published versions and aliases. The unpublished version
 *       changes when you update your function's code and configuration. A published version is a snapshot of your function
 *       code and configuration that can't be changed. An alias is a named resource that maps to a version, and can be
 *       changed to map to a different version. Use the <code>Publish</code> parameter to create version <code>1</code> of
 *       your function from its initial configuration.</p>
 *          <p>The other parameters let you configure version-specific and function-level settings. You can modify
 *       version-specific settings later with <a>UpdateFunctionConfiguration</a>. Function-level settings apply
 *       to both the unpublished and published versions of the function, and include tags (<a>TagResource</a>)
 *       and per-function concurrency limits (<a>PutFunctionConcurrency</a>).</p>
 *          <p>You can use code signing if your deployment package is a .zip file archive. To enable code signing for this
 *       function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with
 *         <a>UpdateFunctionCode</a>, Lambda checks that the code package has a valid signature from
 *       a trusted publisher. The code-signing configuration includes set of signing profiles, which define the trusted
 *       publishers for this function.</p>
 *          <p>If another Amazon Web Services account or an Amazon Web Service invokes your function, use <a>AddPermission</a> to grant permission by creating a resource-based Identity and Access Management (IAM) policy. You can grant permissions at the function level, on a version, or on an alias.</p>
 *          <p>To invoke your function directly, use <a>Invoke</a>. To invoke your function in response to events
 *       in other Amazon Web Services, create an event source mapping (<a>CreateEventSourceMapping</a>),
 *       or configure a function trigger in the other service. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html">Invoking Lambda
 *       functions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // CreateFunctionRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Runtime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "python3.11",
 *   Role: "STRING_VALUE", // required
 *   Handler: "STRING_VALUE",
 *   Code: { // FunctionCode
 *     ZipFile: "BLOB_VALUE",
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3ObjectVersion: "STRING_VALUE",
 *     ImageUri: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   Timeout: Number("int"),
 *   MemorySize: Number("int"),
 *   Publish: true || false,
 *   VpcConfig: { // VpcConfig
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     Ipv6AllowedForDualStack: true || false,
 *   },
 *   PackageType: "Zip" || "Image",
 *   DeadLetterConfig: { // DeadLetterConfig
 *     TargetArn: "STRING_VALUE",
 *   },
 *   Environment: { // Environment
 *     Variables: { // EnvironmentVariables
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   KMSKeyArn: "STRING_VALUE",
 *   TracingConfig: { // TracingConfig
 *     Mode: "Active" || "PassThrough",
 *   },
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Layers: [ // LayerList
 *     "STRING_VALUE",
 *   ],
 *   FileSystemConfigs: [ // FileSystemConfigList
 *     { // FileSystemConfig
 *       Arn: "STRING_VALUE", // required
 *       LocalMountPath: "STRING_VALUE", // required
 *     },
 *   ],
 *   ImageConfig: { // ImageConfig
 *     EntryPoint: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     Command: [
 *       "STRING_VALUE",
 *     ],
 *     WorkingDirectory: "STRING_VALUE",
 *   },
 *   CodeSigningConfigArn: "STRING_VALUE",
 *   Architectures: [ // ArchitecturesList
 *     "x86_64" || "arm64",
 *   ],
 *   EphemeralStorage: { // EphemeralStorage
 *     Size: Number("int"), // required
 *   },
 *   SnapStart: { // SnapStart
 *     ApplyOn: "PublishedVersions" || "None",
 *   },
 * };
 * const command = new CreateFunctionCommand(input);
 * const response = await client.send(command);
 * // { // FunctionConfiguration
 * //   FunctionName: "STRING_VALUE",
 * //   FunctionArn: "STRING_VALUE",
 * //   Runtime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "python3.11",
 * //   Role: "STRING_VALUE",
 * //   Handler: "STRING_VALUE",
 * //   CodeSize: Number("long"),
 * //   Description: "STRING_VALUE",
 * //   Timeout: Number("int"),
 * //   MemorySize: Number("int"),
 * //   LastModified: "STRING_VALUE",
 * //   CodeSha256: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * //   VpcConfig: { // VpcConfigResponse
 * //     SubnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     Ipv6AllowedForDualStack: true || false,
 * //   },
 * //   DeadLetterConfig: { // DeadLetterConfig
 * //     TargetArn: "STRING_VALUE",
 * //   },
 * //   Environment: { // EnvironmentResponse
 * //     Variables: { // EnvironmentVariables
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Error: { // EnvironmentError
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   KMSKeyArn: "STRING_VALUE",
 * //   TracingConfig: { // TracingConfigResponse
 * //     Mode: "Active" || "PassThrough",
 * //   },
 * //   MasterArn: "STRING_VALUE",
 * //   RevisionId: "STRING_VALUE",
 * //   Layers: [ // LayersReferenceList
 * //     { // Layer
 * //       Arn: "STRING_VALUE",
 * //       CodeSize: Number("long"),
 * //       SigningProfileVersionArn: "STRING_VALUE",
 * //       SigningJobArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   State: "Pending" || "Active" || "Inactive" || "Failed",
 * //   StateReason: "STRING_VALUE",
 * //   StateReasonCode: "Idle" || "Creating" || "Restoring" || "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError",
 * //   LastUpdateStatus: "Successful" || "Failed" || "InProgress",
 * //   LastUpdateStatusReason: "STRING_VALUE",
 * //   LastUpdateStatusReasonCode: "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError",
 * //   FileSystemConfigs: [ // FileSystemConfigList
 * //     { // FileSystemConfig
 * //       Arn: "STRING_VALUE", // required
 * //       LocalMountPath: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   PackageType: "Zip" || "Image",
 * //   ImageConfigResponse: { // ImageConfigResponse
 * //     ImageConfig: { // ImageConfig
 * //       EntryPoint: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Command: [
 * //         "STRING_VALUE",
 * //       ],
 * //       WorkingDirectory: "STRING_VALUE",
 * //     },
 * //     Error: { // ImageConfigError
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   SigningProfileVersionArn: "STRING_VALUE",
 * //   SigningJobArn: "STRING_VALUE",
 * //   Architectures: [ // ArchitecturesList
 * //     "x86_64" || "arm64",
 * //   ],
 * //   EphemeralStorage: { // EphemeralStorage
 * //     Size: Number("int"), // required
 * //   },
 * //   SnapStart: { // SnapStartResponse
 * //     ApplyOn: "PublishedVersions" || "None",
 * //     OptimizationStatus: "On" || "Off",
 * //   },
 * //   RuntimeVersionConfig: { // RuntimeVersionConfig
 * //     RuntimeVersionArn: "STRING_VALUE",
 * //     Error: { // RuntimeVersionError
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFunctionCommandInput - {@link CreateFunctionCommandInput}
 * @returns {@link CreateFunctionCommandOutput}
 * @see {@link CreateFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CodeSigningConfigNotFoundException} (client fault)
 *  <p>The specified code signing configuration does not exist.</p>
 *
 * @throws {@link CodeStorageExceededException} (client fault)
 *  <p>Your Amazon Web Services account has exceeded its maximum total code size. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 *
 * @throws {@link CodeVerificationFailedException} (client fault)
 *  <p>The code signature failed one or more of the validation checks for signature mismatch or expiry, and the code
 *       signing policy is set to ENFORCE. Lambda blocks the deployment.</p>
 *
 * @throws {@link InvalidCodeSignatureException} (client fault)
 *  <p>The code signature failed the integrity check. If the integrity check fails, then Lambda blocks
 *       deployment, even if the code signing policy is set to WARN.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export class CreateFunctionCommand extends $Command<
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
  LambdaClientResolvedConfig
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
  constructor(readonly input: CreateFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFunctionCommandInput, CreateFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "CreateFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGirApiService",
        operation: "CreateFunction",
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
  private serialize(input: CreateFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFunctionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFunctionCommandOutput> {
    return de_CreateFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
