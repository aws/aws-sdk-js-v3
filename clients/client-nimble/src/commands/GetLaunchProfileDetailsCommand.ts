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

import {
  GetLaunchProfileDetailsRequest,
  GetLaunchProfileDetailsResponse,
  GetLaunchProfileDetailsResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_GetLaunchProfileDetailsCommand, se_GetLaunchProfileDetailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLaunchProfileDetailsCommand}.
 */
export interface GetLaunchProfileDetailsCommandInput extends GetLaunchProfileDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetLaunchProfileDetailsCommand}.
 */
export interface GetLaunchProfileDetailsCommandOutput extends GetLaunchProfileDetailsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Launch profile details include the launch profile resource and summary information of
 *             resources that are used by, or available to, the launch profile. This includes the name
 *             and description of all studio components used by the launch profiles, and the name and
 *             description of streaming images that can be used with this launch profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, GetLaunchProfileDetailsCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, GetLaunchProfileDetailsCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // GetLaunchProfileDetailsRequest
 *   launchProfileId: "STRING_VALUE", // required
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new GetLaunchProfileDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetLaunchProfileDetailsResponse
 * //   launchProfile: { // LaunchProfile
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     ec2SubnetIds: [ // EC2SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     launchProfileId: "STRING_VALUE",
 * //     launchProfileProtocolVersions: [ // LaunchProfileProtocolVersionList
 * //       "STRING_VALUE",
 * //     ],
 * //     name: "STRING_VALUE",
 * //     state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //     statusCode: "LAUNCH_PROFILE_CREATED" || "LAUNCH_PROFILE_UPDATED" || "LAUNCH_PROFILE_DELETED" || "LAUNCH_PROFILE_CREATE_IN_PROGRESS" || "LAUNCH_PROFILE_UPDATE_IN_PROGRESS" || "LAUNCH_PROFILE_DELETE_IN_PROGRESS" || "INTERNAL_ERROR" || "STREAMING_IMAGE_NOT_FOUND" || "STREAMING_IMAGE_NOT_READY" || "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED" || "ENCRYPTION_KEY_ACCESS_DENIED" || "ENCRYPTION_KEY_NOT_FOUND" || "INVALID_SUBNETS_PROVIDED" || "INVALID_INSTANCE_TYPES_PROVIDED" || "INVALID_SUBNETS_COMBINATION",
 * //     statusMessage: "STRING_VALUE",
 * //     streamConfiguration: { // StreamConfiguration
 * //       clipboardMode: "ENABLED" || "DISABLED", // required
 * //       ec2InstanceTypes: [ // StreamingInstanceTypeList // required
 * //         "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g3.4xlarge" || "g3s.xlarge" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.16xlarge",
 * //       ],
 * //       maxSessionLengthInMinutes: Number("int"),
 * //       streamingImageIds: [ // StreamingImageIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       maxStoppedSessionLengthInMinutes: Number("int"),
 * //       sessionStorage: { // StreamConfigurationSessionStorage
 * //         root: { // StreamingSessionStorageRoot
 * //           linux: "STRING_VALUE",
 * //           windows: "STRING_VALUE",
 * //         },
 * //         mode: [ // StreamingSessionStorageModeList // required
 * //           "UPLOAD",
 * //         ],
 * //       },
 * //       sessionBackup: { // StreamConfigurationSessionBackup
 * //         mode: "AUTOMATIC" || "DEACTIVATED",
 * //         maxBackupsToRetain: Number("int"),
 * //       },
 * //       sessionPersistenceMode: "DEACTIVATED" || "ACTIVATED",
 * //       volumeConfiguration: { // VolumeConfiguration
 * //         size: Number("int"),
 * //         throughput: Number("int"),
 * //         iops: Number("int"),
 * //       },
 * //       automaticTerminationMode: "DEACTIVATED" || "ACTIVATED",
 * //     },
 * //     studioComponentIds: [ // LaunchProfileStudioComponentIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     updatedBy: "STRING_VALUE",
 * //     validationResults: [ // ValidationResults
 * //       { // ValidationResult
 * //         type: "VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT" || "VALIDATE_SUBNET_ASSOCIATION" || "VALIDATE_NETWORK_ACL_ASSOCIATION" || "VALIDATE_SECURITY_GROUP_ASSOCIATION", // required
 * //         state: "VALIDATION_NOT_STARTED" || "VALIDATION_IN_PROGRESS" || "VALIDATION_SUCCESS" || "VALIDATION_FAILED" || "VALIDATION_FAILED_INTERNAL_SERVER_ERROR", // required
 * //         statusCode: "VALIDATION_NOT_STARTED" || "VALIDATION_IN_PROGRESS" || "VALIDATION_SUCCESS" || "VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION" || "VALIDATION_FAILED_SUBNET_NOT_FOUND" || "VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION" || "VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY" || "VALIDATION_FAILED_UNAUTHORIZED" || "VALIDATION_FAILED_INTERNAL_SERVER_ERROR", // required
 * //         statusMessage: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   streamingImages: [ // StreamingImageList
 * //     { // StreamingImage
 * //       arn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       ec2ImageId: "STRING_VALUE",
 * //       encryptionConfiguration: { // StreamingImageEncryptionConfiguration
 * //         keyArn: "STRING_VALUE",
 * //         keyType: "CUSTOMER_MANAGED_KEY", // required
 * //       },
 * //       eulaIds: [ // EulaIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       name: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       platform: "STRING_VALUE",
 * //       state: "CREATE_IN_PROGRESS" || "READY" || "DELETE_IN_PROGRESS" || "DELETED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "CREATE_FAILED" || "DELETE_FAILED",
 * //       statusCode: "STREAMING_IMAGE_CREATE_IN_PROGRESS" || "STREAMING_IMAGE_READY" || "STREAMING_IMAGE_DELETE_IN_PROGRESS" || "STREAMING_IMAGE_DELETED" || "STREAMING_IMAGE_UPDATE_IN_PROGRESS" || "INTERNAL_ERROR" || "ACCESS_DENIED",
 * //       statusMessage: "STRING_VALUE",
 * //       streamingImageId: "STRING_VALUE",
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   studioComponentSummaries: [ // StudioComponentSummaryList
 * //     { // StudioComponentSummary
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       studioComponentId: "STRING_VALUE",
 * //       subtype: "AWS_MANAGED_MICROSOFT_AD" || "AMAZON_FSX_FOR_WINDOWS" || "AMAZON_FSX_FOR_LUSTRE" || "CUSTOM",
 * //       type: "ACTIVE_DIRECTORY" || "SHARED_FILE_SYSTEM" || "COMPUTE_FARM" || "LICENSE_SERVICE" || "CUSTOM",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLaunchProfileDetailsCommandInput - {@link GetLaunchProfileDetailsCommandInput}
 * @returns {@link GetLaunchProfileDetailsCommandOutput}
 * @see {@link GetLaunchProfileDetailsCommandInput} for command's `input` shape.
 * @see {@link GetLaunchProfileDetailsCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation. Check your IAM
 *             policies, and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another operation is in progress. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current quota does not allow you to perform the request action. You can request
 *             increases for some quotas, and other quotas cannot be increased.</p>
 *         <p>Please use Amazon Web Services Service Quotas to request an increase. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link NimbleServiceException}
 * <p>Base exception class for all service exceptions from Nimble service.</p>
 *
 */
export class GetLaunchProfileDetailsCommand extends $Command<
  GetLaunchProfileDetailsCommandInput,
  GetLaunchProfileDetailsCommandOutput,
  NimbleClientResolvedConfig
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
  constructor(readonly input: GetLaunchProfileDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLaunchProfileDetailsCommandInput, GetLaunchProfileDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLaunchProfileDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "GetLaunchProfileDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetLaunchProfileDetailsResponseFilterSensitiveLog,
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
  private serialize(input: GetLaunchProfileDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLaunchProfileDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLaunchProfileDetailsCommandOutput> {
    return de_GetLaunchProfileDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
