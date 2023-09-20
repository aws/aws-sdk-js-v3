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

import {
  ListLaunchProfilesRequest,
  ListLaunchProfilesResponse,
  ListLaunchProfilesResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import { de_ListLaunchProfilesCommand, se_ListLaunchProfilesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLaunchProfilesCommand}.
 */
export interface ListLaunchProfilesCommandInput extends ListLaunchProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListLaunchProfilesCommand}.
 */
export interface ListLaunchProfilesCommandOutput extends ListLaunchProfilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>List all the launch profiles a studio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, ListLaunchProfilesCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, ListLaunchProfilesCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const input = { // ListLaunchProfilesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   principalId: "STRING_VALUE",
 *   states: [ // LaunchProfileStateList
 *     "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 *   ],
 *   studioId: "STRING_VALUE", // required
 * };
 * const command = new ListLaunchProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListLaunchProfilesResponse
 * //   launchProfiles: [ // LaunchProfileList
 * //     { // LaunchProfile
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       ec2SubnetIds: [ // EC2SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       launchProfileId: "STRING_VALUE",
 * //       launchProfileProtocolVersions: [ // LaunchProfileProtocolVersionList
 * //         "STRING_VALUE",
 * //       ],
 * //       name: "STRING_VALUE",
 * //       state: "CREATE_IN_PROGRESS" || "READY" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "DELETED" || "DELETE_FAILED" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //       statusCode: "LAUNCH_PROFILE_CREATED" || "LAUNCH_PROFILE_UPDATED" || "LAUNCH_PROFILE_DELETED" || "LAUNCH_PROFILE_CREATE_IN_PROGRESS" || "LAUNCH_PROFILE_UPDATE_IN_PROGRESS" || "LAUNCH_PROFILE_DELETE_IN_PROGRESS" || "INTERNAL_ERROR" || "STREAMING_IMAGE_NOT_FOUND" || "STREAMING_IMAGE_NOT_READY" || "LAUNCH_PROFILE_WITH_STREAM_SESSIONS_NOT_DELETED" || "ENCRYPTION_KEY_ACCESS_DENIED" || "ENCRYPTION_KEY_NOT_FOUND" || "INVALID_SUBNETS_PROVIDED" || "INVALID_INSTANCE_TYPES_PROVIDED" || "INVALID_SUBNETS_COMBINATION",
 * //       statusMessage: "STRING_VALUE",
 * //       streamConfiguration: { // StreamConfiguration
 * //         clipboardMode: "ENABLED" || "DISABLED", // required
 * //         ec2InstanceTypes: [ // StreamingInstanceTypeList // required
 * //           "g4dn.xlarge" || "g4dn.2xlarge" || "g4dn.4xlarge" || "g4dn.8xlarge" || "g4dn.12xlarge" || "g4dn.16xlarge" || "g3.4xlarge" || "g3s.xlarge" || "g5.xlarge" || "g5.2xlarge" || "g5.4xlarge" || "g5.8xlarge" || "g5.16xlarge",
 * //         ],
 * //         maxSessionLengthInMinutes: Number("int"),
 * //         streamingImageIds: [ // StreamingImageIdList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         maxStoppedSessionLengthInMinutes: Number("int"),
 * //         sessionStorage: { // StreamConfigurationSessionStorage
 * //           root: { // StreamingSessionStorageRoot
 * //             linux: "STRING_VALUE",
 * //             windows: "STRING_VALUE",
 * //           },
 * //           mode: [ // StreamingSessionStorageModeList // required
 * //             "UPLOAD",
 * //           ],
 * //         },
 * //         sessionBackup: { // StreamConfigurationSessionBackup
 * //           mode: "AUTOMATIC" || "DEACTIVATED",
 * //           maxBackupsToRetain: Number("int"),
 * //         },
 * //         sessionPersistenceMode: "DEACTIVATED" || "ACTIVATED",
 * //         volumeConfiguration: { // VolumeConfiguration
 * //           size: Number("int"),
 * //           throughput: Number("int"),
 * //           iops: Number("int"),
 * //         },
 * //         automaticTerminationMode: "DEACTIVATED" || "ACTIVATED",
 * //       },
 * //       studioComponentIds: [ // LaunchProfileStudioComponentIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       validationResults: [ // ValidationResults
 * //         { // ValidationResult
 * //           type: "VALIDATE_ACTIVE_DIRECTORY_STUDIO_COMPONENT" || "VALIDATE_SUBNET_ASSOCIATION" || "VALIDATE_NETWORK_ACL_ASSOCIATION" || "VALIDATE_SECURITY_GROUP_ASSOCIATION", // required
 * //           state: "VALIDATION_NOT_STARTED" || "VALIDATION_IN_PROGRESS" || "VALIDATION_SUCCESS" || "VALIDATION_FAILED" || "VALIDATION_FAILED_INTERNAL_SERVER_ERROR", // required
 * //           statusCode: "VALIDATION_NOT_STARTED" || "VALIDATION_IN_PROGRESS" || "VALIDATION_SUCCESS" || "VALIDATION_FAILED_INVALID_SUBNET_ROUTE_TABLE_ASSOCIATION" || "VALIDATION_FAILED_SUBNET_NOT_FOUND" || "VALIDATION_FAILED_INVALID_SECURITY_GROUP_ASSOCIATION" || "VALIDATION_FAILED_INVALID_ACTIVE_DIRECTORY" || "VALIDATION_FAILED_UNAUTHORIZED" || "VALIDATION_FAILED_INTERNAL_SERVER_ERROR", // required
 * //           statusMessage: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLaunchProfilesCommandInput - {@link ListLaunchProfilesCommandInput}
 * @returns {@link ListLaunchProfilesCommandOutput}
 * @see {@link ListLaunchProfilesCommandInput} for command's `input` shape.
 * @see {@link ListLaunchProfilesCommandOutput} for command's `response` shape.
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
export class ListLaunchProfilesCommand extends $Command<
  ListLaunchProfilesCommandInput,
  ListLaunchProfilesCommandOutput,
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
  constructor(readonly input: ListLaunchProfilesCommandInput) {
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
  ): Handler<ListLaunchProfilesCommandInput, ListLaunchProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLaunchProfilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "ListLaunchProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListLaunchProfilesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "nimble",
        operation: "ListLaunchProfiles",
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
  private serialize(input: ListLaunchProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLaunchProfilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLaunchProfilesCommandOutput> {
    return de_ListLaunchProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
