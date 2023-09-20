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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CreateUpdatedImageRequest, CreateUpdatedImageResult } from "../models/models_0";
import { de_CreateUpdatedImageCommand, se_CreateUpdatedImageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateUpdatedImageCommand}.
 */
export interface CreateUpdatedImageCommandInput extends CreateUpdatedImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateUpdatedImageCommand}.
 */
export interface CreateUpdatedImageCommandOutput extends CreateUpdatedImageResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new image with the latest Windows operating system updates, driver updates, and AppStream 2.0 agent software.</p>
 *          <p>For more information, see the "Update an Image by Using
 *             Managed AppStream 2.0 Image Updates" section in <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/administer-images.html">Administer Your AppStream 2.0 Images</a>, in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateUpdatedImageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateUpdatedImageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // CreateUpdatedImageRequest
 *   existingImageName: "STRING_VALUE", // required
 *   newImageName: "STRING_VALUE", // required
 *   newImageDescription: "STRING_VALUE",
 *   newImageDisplayName: "STRING_VALUE",
 *   newImageTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   dryRun: true || false,
 * };
 * const command = new CreateUpdatedImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateUpdatedImageResult
 * //   image: { // Image
 * //     Name: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE",
 * //     BaseImageArn: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "FAILED" || "COPYING" || "DELETING" || "CREATING" || "IMPORTING",
 * //     Visibility: "PUBLIC" || "PRIVATE" || "SHARED",
 * //     ImageBuilderSupported: true || false,
 * //     ImageBuilderName: "STRING_VALUE",
 * //     Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "AMAZON_LINUX2",
 * //     Description: "STRING_VALUE",
 * //     StateChangeReason: { // ImageStateChangeReason
 * //       Code: "INTERNAL_ERROR" || "IMAGE_BUILDER_NOT_AVAILABLE" || "IMAGE_COPY_FAILURE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Applications: [ // Applications
 * //       { // Application
 * //         Name: "STRING_VALUE",
 * //         DisplayName: "STRING_VALUE",
 * //         IconURL: "STRING_VALUE",
 * //         LaunchPath: "STRING_VALUE",
 * //         LaunchParameters: "STRING_VALUE",
 * //         Enabled: true || false,
 * //         Metadata: { // Metadata
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         WorkingDirectory: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         AppBlockArn: "STRING_VALUE",
 * //         IconS3Location: { // S3Location
 * //           S3Bucket: "STRING_VALUE", // required
 * //           S3Key: "STRING_VALUE",
 * //         },
 * //         Platforms: [ // Platforms
 * //           "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "AMAZON_LINUX2",
 * //         ],
 * //         InstanceFamilies: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         CreatedTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     PublicBaseImageReleasedDate: new Date("TIMESTAMP"),
 * //     AppstreamAgentVersion: "STRING_VALUE",
 * //     ImagePermissions: { // ImagePermissions
 * //       allowFleet: true || false,
 * //       allowImageBuilder: true || false,
 * //     },
 * //     ImageErrors: [ // ResourceErrors
 * //       { // ResourceError
 * //         ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //         ErrorTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * //   canUpdateImage: true || false,
 * // };
 *
 * ```
 *
 * @param CreateUpdatedImageCommandInput - {@link CreateUpdatedImageCommandInput}
 * @returns {@link CreateUpdatedImageCommandOutput}
 * @see {@link CreateUpdatedImageCommandInput} for command's `input` shape.
 * @see {@link CreateUpdatedImageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class CreateUpdatedImageCommand extends $Command<
  CreateUpdatedImageCommandInput,
  CreateUpdatedImageCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: CreateUpdatedImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUpdatedImageCommandInput, CreateUpdatedImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateUpdatedImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "CreateUpdatedImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "CreateUpdatedImage",
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
  private serialize(input: CreateUpdatedImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateUpdatedImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUpdatedImageCommandOutput> {
    return de_CreateUpdatedImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
