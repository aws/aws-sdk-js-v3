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
import { DescribeImagesRequest, DescribeImagesResult } from "../models/models_0";
import { de_DescribeImagesCommand, se_DescribeImagesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandInput extends DescribeImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImagesCommand}.
 */
export interface DescribeImagesCommandOutput extends DescribeImagesResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes one or more specified images, if the image names or image ARNs are provided. Otherwise, all images in the account are described.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeImagesCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeImagesCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeImagesRequest
 *   Names: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   Arns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   Type: "PUBLIC" || "PRIVATE" || "SHARED",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImagesResult
 * //   Images: [ // ImageList
 * //     { // Image
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE",
 * //       BaseImageArn: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       State: "PENDING" || "AVAILABLE" || "FAILED" || "COPYING" || "DELETING" || "CREATING" || "IMPORTING",
 * //       Visibility: "PUBLIC" || "PRIVATE" || "SHARED",
 * //       ImageBuilderSupported: true || false,
 * //       ImageBuilderName: "STRING_VALUE",
 * //       Platform: "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "AMAZON_LINUX2",
 * //       Description: "STRING_VALUE",
 * //       StateChangeReason: { // ImageStateChangeReason
 * //         Code: "INTERNAL_ERROR" || "IMAGE_BUILDER_NOT_AVAILABLE" || "IMAGE_COPY_FAILURE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Applications: [ // Applications
 * //         { // Application
 * //           Name: "STRING_VALUE",
 * //           DisplayName: "STRING_VALUE",
 * //           IconURL: "STRING_VALUE",
 * //           LaunchPath: "STRING_VALUE",
 * //           LaunchParameters: "STRING_VALUE",
 * //           Enabled: true || false,
 * //           Metadata: { // Metadata
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           WorkingDirectory: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           AppBlockArn: "STRING_VALUE",
 * //           IconS3Location: { // S3Location
 * //             S3Bucket: "STRING_VALUE", // required
 * //             S3Key: "STRING_VALUE",
 * //           },
 * //           Platforms: [ // Platforms
 * //             "WINDOWS" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "AMAZON_LINUX2",
 * //           ],
 * //           InstanceFamilies: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           CreatedTime: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       PublicBaseImageReleasedDate: new Date("TIMESTAMP"),
 * //       AppstreamAgentVersion: "STRING_VALUE",
 * //       ImagePermissions: { // ImagePermissions
 * //         allowFleet: true || false,
 * //         allowImageBuilder: true || false,
 * //       },
 * //       ImageErrors: [ // ResourceErrors
 * //         { // ResourceError
 * //           ErrorCode: "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION" || "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION" || "NETWORK_INTERFACE_LIMIT_EXCEEDED" || "INTERNAL_SERVICE_ERROR" || "IAM_SERVICE_ROLE_IS_MISSING" || "MACHINE_ROLE_IS_MISSING" || "STS_DISABLED_IN_REGION" || "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION" || "SUBNET_NOT_FOUND" || "IMAGE_NOT_FOUND" || "INVALID_SUBNET_CONFIGURATION" || "SECURITY_GROUPS_NOT_FOUND" || "IGW_NOT_ATTACHED" || "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION" || "FLEET_STOPPED" || "FLEET_INSTANCE_PROVISIONING_FAILURE" || "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND" || "DOMAIN_JOIN_ERROR_ACCESS_DENIED" || "DOMAIN_JOIN_ERROR_LOGON_FAILURE" || "DOMAIN_JOIN_ERROR_INVALID_PARAMETER" || "DOMAIN_JOIN_ERROR_MORE_DATA" || "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN" || "DOMAIN_JOIN_ERROR_NOT_SUPPORTED" || "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME" || "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED" || "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED" || "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED" || "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
 * //           ErrorMessage: "STRING_VALUE",
 * //           ErrorTimestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImagesCommandInput - {@link DescribeImagesCommandInput}
 * @returns {@link DescribeImagesCommandOutput}
 * @see {@link DescribeImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeImagesCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class DescribeImagesCommand extends $Command<
  DescribeImagesCommandInput,
  DescribeImagesCommandOutput,
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
  constructor(readonly input: DescribeImagesCommandInput) {
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
  ): Handler<DescribeImagesCommandInput, DescribeImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "DescribeImages",
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
  private serialize(input: DescribeImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeImagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeImagesCommandOutput> {
    return de_DescribeImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
